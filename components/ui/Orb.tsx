'use client';

import { useEffect, useRef } from 'react';

export default function Orb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  let animationFrameId: number;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const maybeCtx = canvas.getContext('2d');
    if (!maybeCtx) return;
    const ctx = maybeCtx as CanvasRenderingContext2D;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Initialize audio context and analyzer
    const initAudio = async () => {
      try {
        audioContextRef.current = new AudioContext();
        analyserRef.current = audioContextRef.current.createAnalyser();
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const source = audioContextRef.current.createMediaStreamSource(stream);
        source.connect(analyserRef.current);
        analyserRef.current.fftSize = 256;
        dataArrayRef.current = new Uint8Array(analyserRef.current.frequencyBinCount);
      } catch (err) {
        console.log('Audio permission denied or error occurred');
      }
    };

    initAudio();

    // Animation parameters
    let particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: { x: number; y: number };
    }> = [];
    
    const particleCount = 50;
    let hue = 200; // Start with blue
    let orbScale = 1;
    let targetOrbScale = 1;

    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = Math.random() * 2 + 1;
      const distance = 150 + Math.random() * 50;
      
      particles.push({
        x: width / 2 + Math.cos(angle) * distance,
        y: height / 2 + Math.sin(angle) * distance,
        radius,
        color: `hsla(${hue}, 80%, 50%, 0.8)`,
        velocity: {
          x: Math.cos(angle) * 0.5,
          y: Math.sin(angle) * 0.5
        }
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      
      // Update audio data if available
      if (analyserRef.current && dataArrayRef.current) {
        analyserRef.current.getByteFrequencyData(dataArrayRef.current);
        const audioLevel = Array.from(dataArrayRef.current).reduce((a, b) => a + b, 0) / dataArrayRef.current.length;
        targetOrbScale = 1 + (audioLevel / 128) * 0.5;
      }

      // Smooth scale transition
      orbScale += (targetOrbScale - orbScale) * 0.1;

      // Draw connections
      ctx.beginPath();
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(other => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `hsla(${hue}, 80%, 50%, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      // Update and draw particles
      particles.forEach(particle => {
        // Update position with scaled velocity
        particle.x += particle.velocity.x * orbScale;
        particle.y += particle.velocity.y * orbScale;

        // Keep particles within bounds
        const centerX = width / 2;
        const centerY = height / 2;
        const dx = particle.x - centerX;
        const dy = particle.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 200) {
          const angle = Math.atan2(dy, dx);
          particle.x = centerX + Math.cos(angle) * 200;
          particle.y = centerY + Math.sin(angle) * 200;
          particle.velocity.x = -particle.velocity.x;
          particle.velocity.y = -particle.velocity.y;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * orbScale, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      // Gradient overlay
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, 200 * orbScale
      );
      gradient.addColorStop(0, `hsla(${hue}, 80%, 50%, 0.1)`);
      gradient.addColorStop(0.5, `hsla(${hue + 30}, 80%, 50%, 0.05)`);
      gradient.addColorStop(1, 'hsla(0, 0%, 0%, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Subtle hue shift
      hue = (hue + 0.1) % 360;

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
    />
  );
}