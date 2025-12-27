"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, Shield, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute top-0 -z-10 h-full w-full bg-white dark:bg-black">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(37,99,235,0.15)] opacity-50 blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-muted/50 text-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="font-medium">Next.js 15 & React 19 Ready</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Build the Future with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Speed & Elegance</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
          >
            A high-performance demo showcase built with the latest technologies. 
            Experience seamless transitions, modern UI patterns, and blazing fast performance.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25">
              Explore Demo <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 bg-white dark:bg-zinc-900 border px-8 py-4 rounded-xl font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all">
              Read Documentation
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
