import Link from 'next/link'
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-bold text-xl mb-4 block">
              <span className="text-primary">Orb</span>
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Sphere</span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-4">
              Transforming digital experiences through beautiful animations and
              cutting-edge technology. Join us on our mission to redefine what's possible online.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">Features</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">Pricing</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">Documentation</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">Releases</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">About Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">Careers</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">Contact</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">Blog</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} OrbSphere, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}