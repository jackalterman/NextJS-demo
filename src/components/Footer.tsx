export function Footer() {
  return (
    <footer className="border-t py-12 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left">
            <h3 className="text-xl font-bold tracking-tight mb-2">
              NEXT<span className="text-blue-600">DEMO</span>
            </h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Built with Next.js 15, React 19, Tailwind CSS, and Framer Motion. 
              A showcase of modern web engineering.
            </p>
          </div>
          
          <div className="flex gap-12">
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Features</li>
                <li>Live Demo</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>About</li>
                <li>Blog</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 NextDemo Project. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="#" className="hover:text-foreground transition-colors">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
