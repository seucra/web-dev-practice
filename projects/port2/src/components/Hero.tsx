import { motion } from 'framer-motion';
import Typewriter from './Typewriter';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-bg-primary overflow-hidden pt-20">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[#05080c]">
         <div className="absolute inset-0 opacity-20"
              style={{ backgroundImage: 'linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(90deg, #00ff88 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
         <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-transparent to-bg-primary"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between mt-12 md:mt-0 gap-12">
        
        {/* Left Side: Typography and Info */}
        <div className="w-full md:w-3/5 text-left pt-12 md:pt-0">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-neon-green/10 border border-neon-green/30 text-neon-green font-mono text-sm mb-6 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
            <span className="glitch-blocky font-bold" data-text="SYSTEM.STATUS // ONLINE">SYSTEM.STATUS // ONLINE</span>
          </motion.div>
          
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 mb-4">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black font-[Orbitron] text-white tracking-widest uppercase leading-tight flex flex-row items-baseline gap-4 md:gap-8"
            >
              <span>Shams</span>
              <span className="glitch-tesla layers text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan drop-shadow-[0_0_15px_rgba(0,255,136,0.3)]" data-text="Tabrez"><span>Tabrez</span></span>
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black font-[Orbitron] text-white tracking-widest uppercase leading-tight"
            >
              Ahmed
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="h-16 mt-4"
          >
            <Typewriter 
              roles={[
                "Architecting digital ecosystems",
                "Specializing in full-stack engineering and deployments.",
                "Hardening System Architectures",
                "Offensive Security & Defensive Implementations.",
                "Developing high-performance mechanics",
                "C/C++, Rust, and Advanced Systems.",
                "Pushing the boundaries of User Interfaces",
                "Cyberpunk Fluid UI / UX."
              ]} 
              delay={800} 
              speed={40} 
            />
          </motion.div>
        </div>

        {/* Right Side: Identity Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full md:w-2/5 flex justify-center md:justify-end mt-12 md:mt-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            {/* Cyberpunk Frame */}
            <div className="absolute inset-0 border-2 border-neon-green/30 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:border-neon-cyan/50 transition-all duration-300 z-0"></div>
            <div className="absolute inset-0 border-2 border-neon-cyan/30 -translate-x-4 -translate-y-4 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:border-neon-green/50 transition-all duration-300 z-0"></div>
            
            {/* Image Container */}
            <div className="absolute inset-0 bg-[#0a0f16] border border-white/10 z-10 flex flex-col items-center justify-center overflow-hidden">
                {/* Diagonal Stripe Pattern Overlay */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.02)_10px,rgba(255,255,255,0.02)_20px)]"></div>
                
                {/* Placeholder Text */}
                <span className="font-mono text-gray-500 text-sm tracking-widest animate-pulse z-20">USER_IMG_DATA</span>
                <span className="font-mono text-neon-green text-xs mt-2 z-20">PENDING_UPLOAD</span>
            </div>

            {/* Corner Decorative Elements */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-white z-20"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-white z-20"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
