import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquareDot } from 'lucide-react';
import MatrixRain from './MatrixRain';

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-[500px] py-24 bg-bg-secondary overflow-hidden border-t border-white/5">
      
      {/* Background Matrix Pattern - Both Static grid and Falling Canvas */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(90deg, #00ff88 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <MatrixRain />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16 relative"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
             <MessageSquareDot className="w-8 h-8 text-neon-magenta animate-pulse" />
             <h2 className="text-3xl md:text-4xl font-[Orbitron] font-black uppercase tracking-widest text-white bg-black/50 px-4 py-2 border border-neon-magenta/30 glitch-1" data-text="Establish Connection">
               Establish Connection
             </h2>
          </div>
          <p className="text-gray-400 font-mono text-sm max-w-lg mx-auto bg-black/30 p-2 backdrop-blur-sm border-l-2 border-neon-cyan">
             Open for collaborations, security discussions, and engineering challenges.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center gap-8 w-full max-w-4xl mx-auto">
          {/* MAIL (Always First/Top) */}
          <motion.a 
            href="mailto:tabrezahmed.sta33@gmail.com"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex-1 order-1 group relative flex items-center justify-between p-6 bg-[#0a0f14]/80 backdrop-blur-sm border border-white/10 hover:border-neon-magenta/80 hover:shadow-[0_0_20px_rgba(255,0,255,0.2)] transition-all duration-300"
          >
            <div className="flex items-center gap-4">
                <Mail className="text-neon-magenta w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-gray-300 group-hover:text-white font-bold tracking-wider glitch-hover">Direct Comm</span>
            </div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neon-magenta/50 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          {/* GITHUB (Middle on wide screens, Bottom on small screens) */}
          <motion.a 
            href="https://github.com/seucra"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex-1 order-3 lg:order-2 group relative flex items-center justify-between p-6 bg-[#0a0f14]/80 backdrop-blur-sm border border-white/10 hover:border-neon-cyan/80 hover:shadow-[0_0_20px_rgba(0,207,255,0.2)] transition-all duration-300"
          >
             <div className="flex items-center gap-4">
                <Github className="text-neon-cyan w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-gray-300 group-hover:text-white font-bold tracking-wider glitch-hover">GitHub Intel</span>
            </div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neon-cyan/50 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          {/* LINKEDIN (Right on wide screens, Middle on small screens) */}
          <motion.a 
            href="https://www.linkedin.com/in/s-t-ahmed"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 order-2 lg:order-3 group relative flex items-center justify-between p-6 bg-[#0a0f14]/80 backdrop-blur-sm border border-white/10 hover:border-neon-green/80 hover:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all duration-300"
          >
             <div className="flex items-center gap-4">
                <Linkedin className="text-neon-green w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-gray-300 group-hover:text-white font-bold tracking-wider glitch-hover">Professional</span>
            </div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neon-green/50 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
