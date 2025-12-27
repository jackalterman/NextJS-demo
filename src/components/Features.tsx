"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Server, Layout, MousePointer2, Smartphone } from "lucide-react"

const features = [
  {
    title: "Server Components",
    description: "Render components on the server for faster initial page loads and better SEO.",
    icon: Server,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Fluid Animations",
    description: "Powered by Framer Motion for smooth, hardware-accelerated UI interactions.",
    icon: Zap,
    color: "bg-amber-500/10 text-amber-500"
  },
  {
    title: "Responsive First",
    description: "Tailwind CSS ensures your application looks stunning on every device size.",
    icon: Smartphone,
    color: "bg-emerald-500/10 text-emerald-500"
  },
  {
    title: "Next.js App Router",
    description: "Simplified routing and layouts with advanced data fetching capabilities.",
    icon: Layout,
    color: "bg-indigo-500/10 text-indigo-500"
  },
  {
    title: "Type Safety",
    description: "Built with TypeScript for a robust developer experience and fewer bugs.",
    icon: Shield,
    color: "bg-rose-500/10 text-rose-500"
  },
  {
    title: "Interactive UI",
    description: "Rich interactive elements that provide instant feedback to users.",
    icon: MousePointer2,
    color: "bg-cyan-500/10 text-cyan-500"
  }
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-zinc-50 dark:bg-zinc-900/50 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Capabilities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leveraging the full power of the React ecosystem to deliver exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl border bg-white dark:bg-zinc-950 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
