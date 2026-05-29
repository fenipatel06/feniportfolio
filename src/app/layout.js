import React from 'react';
import Link from 'next/link';
import "./globals.css";

export const metadata = {
  title: "Feni Y. Patel | Executive Portfolio",
  description: "Co-Founder, WebSankul Civil Engineering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F8FAFC] min-h-screen flex flex-col justify-between font-sans antialiased">
        
        {/* APPLE-STYLE BLURRED NAVIGATION */}
        <nav className="sticky top-0 w-full z-50 bg-[#0F1E36]/90 backdrop-blur-md border-b border-white/10 text-white">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-black text-lg tracking-wider text-[#D49E2D]">
              FENI Y. PATEL
            </Link>
            <div className="flex items-center space-x-8 text-sm font-medium tracking-wide">
              <Link href="/" className="hover:text-[#D49E2D] transition-colors">About</Link>
              <Link href="/projects" className="hover:text-[#D49E2D] transition-colors">Projects</Link>
              <Link href="/books" className="hover:text-[#D49E2D] transition-colors">Books</Link>
              <Link href="/contact" className="hover:text-[#D49E2D] transition-colors">Contact</Link>
            </div>
          </div>
        </nav>

        {/* PAGE INJECTION PANEL */}
        <main className="flex-grow">
          {children}
        </main>

        {/* SYSTEM FOOTER */}
        <footer className="bg-[#0F1E36] border-t border-white/5 text-slate-400 py-12 px-6 text-center text-xs tracking-wider">
          <div className="max-w-6xl mx-auto space-y-4">
            <p className="font-bold text-[#D49E2D]">FENI Y. PATEL &copy; {new Date().getFullYear()}</p>
            <p className="max-w-md mx-auto text-slate-500 leading-relaxed">
              Civil Infrastructure System Optimization, Institutional Scale Management & Academic Curriculums.
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}