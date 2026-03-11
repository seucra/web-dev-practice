import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'MISSION_LOG', href: '#experience' },
  { label: 'ROOT_ACCESS', href: '#projects' },
  { label: 'SYSTEMS_INTEL', href: '#skills' },
  { label: 'DATABANKS', href: '#academic' },
  { label: 'COMM_LINK', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-primary/95 backdrop-blur-md border-b border-neon-green/20 py-4 shadow-[0_4px_30px_rgba(0,255,136,0.1)]' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-[Orbitron] font-black tracking-widest text-[#ff2a2a]"
            style={{ color: '#ff2a2a' }}
          >
            <span className="glitch-cb" data-text="STAR">
                <span className="glitch-blocky" data-text="STAR">STAR</span>
            </span>
          </motion.a>

          {/* Toggle Menu - Visible on all screens per request */}
          <button 
            className="relative z-50 p-2 text-neon-green"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
             <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Sliding Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setIsOpen(false)}
               className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
            />
            {/* Sliding Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 w-3/4 md:w-1/3 max-w-sm bg-bg-secondary border-l border-neon-green/20 z-[100] flex flex-col pt-24 px-8 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 left-6 p-2 text-gray-400 hover:text-neon-red transition-colors"
              >
                <X size={28} />
              </button>
              
              <div className="flex flex-col gap-8 mt-10">
                {NAV_ITEMS.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    onClick={() => setIsOpen(false)}
                    className="font-[Orbitron] text-lg tracking-widest text-gray-300 hover:text-neon-cyan border-b border-white/5 pb-4"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            
              <div className="absolute bottom-10 font-mono text-xs text-neon-red glow-red animate-pulse">
                [SYSTEM.NAV_MATRIX_ONLINE]
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
