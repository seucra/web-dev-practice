import { motion } from 'framer-motion';
import { School, Cpu, TerminalSquare } from 'lucide-react';

export default function Academic() {
  return (
    <section id="academic" className="w-full relative py-24 bg-bg-primary">
      {/* Background Decorator */}
      <div className="absolute inset-0 z-0 bg-dots opacity-50 mix-blend-screen pointer-events-none"></div>
      <div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-neon-magenta opacity-10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="flex items-center gap-4"
          >
            <TerminalSquare className="text-neon-cyan w-8 h-8 animate-pulse" />
            <h2 className="text-3xl font-[Orbitron] font-bold text-white uppercase tracking-wider">
              Educational <span className="text-neon-cyan glow-cyan">Metrics</span>
            </h2>
          </motion.div>
          <div className="w-32 h-px mt-4 bg-gradient-to-r from-neon-cyan to-transparent"></div>
        </div>

        <div className="relative border-l border-neon-cyan/30 ml-4 md:ml-8 space-y-12 pb-8">
          
          {/* VIT Metric */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative pl-8 md:pl-12 group"
          >
            {/* Nav Node */}
            <div className="absolute w-4 h-4 rounded-full bg-neon-green -left-[8.5px] top-6 box-glow-green group-hover:scale-150 transition-transform duration-300"></div>
            <div className="absolute w-8 h-px bg-neon-green/50 -left-[8px] top-8 group-hover:bg-neon-green transition-colors"></div>
            
            <div className="terminal-window p-6 md:p-8 border-neon-green/20 hover:border-neon-green/80 hover:bg-bg-secondary transition-all duration-500 shadow-[0_0_15px_rgba(0,255,136,0.05)] hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4 border-b border-border pb-4">
                <div>
                  <h3 className="text-2xl font-bold font-[Orbitron] text-gray-100 flex items-center gap-3">
                    <Cpu className="text-neon-green w-6 h-6" />
                    BTech. Computer Engineering
                  </h3>
                  <p className="text-gray-400 font-mono text-sm flex items-center gap-2 mt-2">
                    <School className="w-4 h-4" /> Vidyalankar Institute of Technology (VIT), Mumbai
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2">
                  <span className="text-bg-primary font-bold font-mono text-xs bg-cyber-yellow px-3 py-1 uppercase tracking-wider glitch-blocky" data-text="Status: Active">
                    Status: Active
                  </span>
                  <span className="text-neon-cyan font-mono text-sm">
                    Level: 2nd Year (Sem 4)
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-400 font-mono leading-relaxed">
                <span className="text-neon-green">&gt;</span> Currently pursuing deep technical knowledge in core engineering concepts. <br/>
                <span className="text-neon-green">&gt;</span> Analyzing algorithms, system structures, and optimizing programmatic efficiency.
              </p>
            </div>
          </motion.div>

          {/* KVVSN Metric */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-grow terminal-window flex flex-col justify-center p-12 bg-bg-card border-l-4 border-l-neon-magenta relative overflow-hidden group hover:shadow-[0_0_30px_rgba(255,0,255,0.15)] transition-shadow"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-magenta opacity-5 blur-[50px] group-hover:opacity-20 transition-opacity"></div>
            
            <div className="terminal-window p-6 md:p-8 border-border/50 hover:border-neon-cyan/50 hover:bg-bg-secondary transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,207,255,0.1)]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4 border-b border-border pb-4">
                <div>
                  <h3 className="text-xl font-bold font-[Orbitron] text-gray-300">
                    Foundational Schooling
                  </h3>
                  <p className="text-gray-500 font-mono text-sm flex items-center gap-2 mt-2">
                    <School className="w-4 h-4" /> Kendriya Vidyalaya Vayusena Nagar (KVVSN), Nagpur
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2">
                  <span className="text-bg-primary font-bold font-mono text-xs bg-neon-green px-3 py-1 uppercase tracking-wider glitch-blocky inline-block" data-text="Status: Completed">
                    Status: Completed
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-500 font-mono leading-relaxed">
                <span className="text-gray-600">&gt;</span> Foundational education shaping analytical thinking and strict logic discipline.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
