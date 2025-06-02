'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeCheck, Code, Globe, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience unparalleled performance with our optimized architecture."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with users around the world with our distributed network."
  },
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    description: "Enjoy top-tier quality in every aspect of our platform."
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Built with the latest technologies for seamless integration."
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground">
            Our platform provides everything you need to succeed in today's digital landscape
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard 
                Icon={feature.icon} 
                title={feature.title} 
                description={feature.description}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ Icon, title, description, index }: FeatureCardProps) {
  const colorClasses = [
    "bg-blue-500/10 text-blue-500",
    "bg-purple-500/10 text-purple-500",
    "bg-pink-500/10 text-pink-500",
    "bg-teal-500/10 text-teal-500",
  ]
  
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
      <CardHeader>
        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", colorClasses[index % colorClasses.length])}>
          <Icon className="w-6 h-6" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}