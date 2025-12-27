"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Users, DollarSign, Activity, ChevronRight, Search } from "lucide-react"

const stats = [
  { label: "Active Users", value: "2,543", icon: Users, trend: "+12%" },
  { label: "Revenue", value: "$12,450", icon: DollarSign, trend: "+8%" },
  { label: "Conversion", value: "3.2%", icon: Activity, trend: "-2%" }
]

export function DashboardDemo() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <section id="demo" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3 text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Interactive Dashboard</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Experience the fluidity of modern React state management and motion. 
              Our components are designed for high-density data and intuitive user flow.
            </p>
            
            {/* Functional Tabs */}
            <div className="flex bg-zinc-100 dark:bg-zinc-800 p-1 rounded-xl mb-8 w-fit">
              {["overview", "analytics"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                    activeTab === tab 
                      ? "bg-white dark:bg-zinc-950 shadow-sm text-blue-600" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <ul className="space-y-4">
              {["Real-time Updates", "Responsive Data Grids", "Dynamic Filtering"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <ChevronRight className="w-3 h-3 text-blue-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-2/3 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-zinc-100 dark:bg-zinc-900 p-1 md:p-6 rounded-3xl border shadow-2xl overflow-hidden"
            >
              <div className="bg-white dark:bg-zinc-950 rounded-2xl border shadow-sm overflow-hidden min-h-[400px]">
                {/* Header Mockup */}
                <div className="border-b p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600" />
                    <div className="relative hidden sm:block">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input className="pl-9 pr-4 py-1.5 rounded-lg border bg-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-48" placeholder="Search..." readOnly />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-muted animate-pulse" />
                    <div className="w-8 h-8 rounded-lg bg-muted animate-pulse" />
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {stats.map((stat, i) => (
                      <div key={i} className="p-4 rounded-xl border bg-zinc-50 dark:bg-zinc-900">
                        <div className="flex items-center justify-between mb-2">
                          <stat.icon className="w-5 h-5 text-muted-foreground" />
                          <span className={`text-xs font-bold ${stat.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                            {stat.trend}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="h-48 w-full bg-zinc-50 dark:bg-zinc-900 rounded-xl border flex items-end justify-between p-6 gap-2">
                    {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: activeTab === "overview" ? `${h}%` : `${100 - h}%` }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className="flex-1 bg-blue-600/20 hover:bg-blue-600/40 rounded-t-sm relative group cursor-pointer"
                      >
                        <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-sm" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
