"use server"

import { revalidatePath } from "next/cache"

// Mock database
let tasks = [
  { id: 1, title: "Explore Next.js 15 features", completed: true },
  { id: 2, title: "Implement Server Actions", completed: false },
  { id: 3, title: "Master Framer Motion", completed: false },
]

export async function getTasks() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return tasks
}

export async function addTask(formData: FormData) {
  const title = formData.get("title") as string
  
  if (!title) return
  
  const newTask = {
    id: Math.max(0, ...tasks.map(t => t.id)) + 1,
    title,
    completed: false
  }
  
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800))
  tasks = [newTask, ...tasks]
  
  revalidatePath("/")
}

export async function toggleTask(id: number) {
  tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
  revalidatePath("/")
}

export async function deleteTask(id: number) {
  tasks = tasks.filter(t => t.id !== id)
  revalidatePath("/")
}
