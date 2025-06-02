'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl font-bold mb-6">About Our Platform</h2>
            <p className="text-muted-foreground mb-6">
              Founded in 2023, our platform represents the culmination of years of research 
              and development in creating immersive digital experiences. We believe in 
              pushing the boundaries of what's possible in the digital realm.
            </p>
            <p className="text-muted-foreground mb-6">
              Our team of experts is dedicated to crafting solutions that not only meet 
              but exceed expectations, delivering value that transforms businesses and 
              delights users.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button>Learn More</Button>
              <Button variant="outline">Contact Us</Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}