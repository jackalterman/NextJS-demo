import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { DashboardDemo } from "@/components/DashboardDemo";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <Features />
        <DashboardDemo />
      </div>
      <Footer />
    </main>
  );
}
