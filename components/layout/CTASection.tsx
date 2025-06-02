'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* Background decorative elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Digital Experience?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join thousands of satisfied users who have already elevated their online presence.
              Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}