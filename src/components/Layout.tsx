import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, ChevronDown, Share2, MessageSquare } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const isLanding = location.pathname === '/';

  const navLinks = [
    { name: 'Join Us', href: '/join' },
    { name: 'Projects', href: '/dev-hub' },
    { name: 'Features', href: '/#features' },
    { name: 'Events', href: '/onboarding' },
    { name: 'Resources', href: '/dashboard' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      isLanding 
        ? "bg-transparent py-2 lg:py-4" 
        : "border-b border-white/5 backdrop-blur-xl bg-black/40 py-0"
    )}>
      <div className={cn(
        "mx-auto flex justify-between items-center transition-all duration-500",
        isLanding ? "px-6 lg:px-[120px]" : "max-w-7xl px-6 md:px-12 py-5"
      )}>
        <div className="flex items-center gap-12">
          <Link to="/" className="text-xl font-bold tracking-tighter text-white font-headline flex items-center gap-2 group">
            <div className="w-6 h-6 bg-white rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500" />
            <span className="glow-text">NEURAL COLLECTIVE</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "font-headline uppercase tracking-[0.2em] text-[10px] transition-all duration-300 flex items-center gap-1.5 py-1",
                  location.pathname === link.href 
                    ? "text-white border-b border-white/40" 
                    : "text-white/40 hover:text-white"
                )}
              >
                {link.name}
                {link.name === 'Features' && <ChevronDown className="w-3 h-3 opacity-30" />}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <Link 
            to="/join"
            className={cn(
              "hidden md:block rounded-full font-headline uppercase tracking-[0.15em] text-[10px] font-bold hover:scale-[0.98] active:scale-95 transition-all duration-300",
              isLanding 
                ? "border-[0.6px] border-white px-8 py-2.5 text-white hover:bg-white hover:text-black"
                : "bg-white text-black px-8 py-2.5 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            )}
          >
            Apply Now
          </Link>
          <button 
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 p-8 space-y-6 overflow-hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block text-white/50 hover:text-white font-headline uppercase tracking-[0.2em] text-xs transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
            <Link 
              to="/join"
              className="block bg-white text-black px-6 py-4 rounded-full font-headline uppercase tracking-[0.15em] text-xs font-bold text-center hover:bg-white/90 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </Link>
        </motion.div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="w-full py-20 border-t border-white/5 bg-black mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white font-headline flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded-sm rotate-45" />
              <span>NEURAL COLLECTIVE</span>
            </Link>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              Building the next generation of AI student architects. Join the collective and shape the future of intelligence.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-white font-bold">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/join" className="text-xs text-white/40 hover:text-white transition-colors">Join Us</Link></li>
              <li><Link to="/dev-hub" className="text-xs text-white/40 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/onboarding" className="text-xs text-white/40 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/dashboard" className="text-xs text-white/40 hover:text-white transition-colors">Resources</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-white font-bold">Connect</h4>
            <div className="flex gap-3">
              {[Share2, MessageSquare].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-all group">
                  <Icon className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            © 2026 NEURAL COLLECTIVE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-white/20 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-white/20 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
