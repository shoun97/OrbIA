import Orb from '@/components/ui/Orb';
import { Navbar } from '@/components/layout/Navbar';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <Orb />
      <div className="relative z-10">
        <Navbar />
      </div>
    </main>
  );
}