"use client"

import { useState, useTransition } from "react"
import { addTask, deleteTask, toggleTask } from "@/lib/actions"
import { Trash2, Plus, CheckCircle2, Circle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface Task {
  id: number
  title: string
  completed: boolean
}

export function TaskList({ initialTasks }: { initialTasks: Task[] }) {
  const [isPending, startTransition] = useTransition()
  const [inputValue, setInputValue] = useState("")

  // Optimistic updates would be cool, but let's keep it simple first
  // to show the raw power of Server Actions + Transitions

  async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!inputValue.trim()) return

    const formData = new FormData()
    formData.append("title", inputValue)
    
    setInputValue("")
    startTransition(async () => {
      await addTask(formData)
    })
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-zinc-950 rounded-2xl border shadow-xl overflow-hidden">
      <div className="p-6 border-b">
        <h3 className="text-xl font-semibold mb-1">Live Tasks</h3>
        <p className="text-sm text-muted-foreground">Server Actions in action.</p>
      </div>

      <div className="p-6 space-y-4">
        <form onSubmit={handleAdd} className="flex gap-2">
          <input
            type="text"
            name="title"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 rounded-xl border bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button
            type="submit"
            disabled={isPending}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-xl disabled:opacity-50 transition-colors"
          >
            {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Plus className="w-5 h-5" />}
          </button>
        </form>

        <div className="space-y-2 min-h-[200px]">
          {initialTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-3 rounded-xl border bg-zinc-50/50 dark:bg-zinc-900/50 group hover:border-blue-500/50 transition-all"
            >
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => startTransition(() => toggleTask(task.id))}
                  className="text-muted-foreground hover:text-blue-500 transition-colors"
                >
                  {task.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <Circle className="w-5 h-5" />
                  )}
                </button>
                <span className={cn(
                  "text-sm font-medium transition-all",
                  task.completed && "line-through text-muted-foreground"
                )}>
                  {task.title}
                </span>
              </div>
              <button
                onClick={() => startTransition(() => deleteTask(task.id))}
                className="opacity-0 group-hover:opacity-100 p-2 hover:bg-rose-500/10 hover:text-rose-500 rounded-lg transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
          {initialTasks.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
              <p className="text-sm">No tasks yet. Add one above!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
