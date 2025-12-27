"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"
import { Loader2, Send, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

export function ContactDemo() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(data: FormData) {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Form Data:", data)
    setIsSubmitting(false)
    setIsSuccess(true)
    reset()
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-zinc-950 rounded-2xl border shadow-xl overflow-hidden">
      <div className="p-6 border-b">
        <h3 className="text-xl font-semibold mb-1">Get in Touch</h3>
        <p className="text-sm text-muted-foreground">Type-safe forms with Zod validation.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Name</label>
          <input
            {...register("name")}
            className={cn(
              "w-full px-4 py-2 rounded-xl border bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm",
              errors.name && "border-rose-500 focus:ring-rose-500"
            )}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name.message}</p>}
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</label>
          <input
            {...register("email")}
            className={cn(
              "w-full px-4 py-2 rounded-xl border bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm",
              errors.email && "border-rose-500 focus:ring-rose-500"
            )}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email.message}</p>}
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</label>
          <textarea
            {...register("message")}
            rows={3}
            className={cn(
              "w-full px-4 py-2 rounded-xl border bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none",
              errors.message && "border-rose-500 focus:ring-rose-500"
            )}
            placeholder="How can we help?"
          />
          {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all",
            isSuccess 
              ? "bg-emerald-500 text-white" 
              : "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:opacity-90"
          )}
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : isSuccess ? (
            <>
              <CheckCircle className="w-5 h-5" />
              Sent Successfully!
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  )
}
