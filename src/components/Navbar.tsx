"use client"

import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"
import { motion } from "framer-motion"

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold tracking-tight">
            NEXT<span className="text-blue-600">DEMO</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">Features</Link>
          <Link href="#demo" className="text-sm font-medium hover:text-blue-600 transition-colors">Live Demo</Link>
          <Link href="https://github.com" target="_blank" className="text-sm font-medium hover:text-blue-600 transition-colors">GitHub</Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </motion.header>
  )
}
