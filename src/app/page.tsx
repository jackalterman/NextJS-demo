import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { DashboardDemo } from "@/components/DashboardDemo";
import { TaskList } from "@/components/TaskList";
import { ContactDemo } from "@/components/ContactDemo";
import { Footer } from "@/components/Footer";
import { getTasks } from "@/lib/actions";

export default async function Home() {
  const initialTasks = await getTasks();

  return (
    <main className="relative flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <Features />
        <DashboardDemo />
        
        {/* New Showcase Section */}
        <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Performance</h2>
              <p className="text-muted-foreground text-lg text-pretty">
                Go beyond static landing pages. Next.js allows you to build complex, 
                interactive applications with minimal client-side JavaScript.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-bold uppercase tracking-wider">
                  Server Actions
                </div>
                <h3 className="text-2xl font-bold">State Management Simplified</h3>
                <p className="text-muted-foreground">
                  No more complex Redux boilerplate. Handle form submissions, database updates, 
                  and cache revalidation directly within your components.
                </p>
                <TaskList initialTasks={initialTasks} />
              </div>

              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 text-xs font-bold uppercase tracking-wider">
                  Type Safety
                </div>
                <h3 className="text-2xl font-bold">Robust Form Validation</h3>
                <p className="text-muted-foreground">
                  Combining Zod with React Hook Form gives you end-to-end type safety 
                  and a superior developer experience with instant feedback.
                </p>
                <ContactDemo />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
