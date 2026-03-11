import { motion } from 'framer-motion';
import { Target, Binary, CodeSquare, ShieldAlert } from 'lucide-react';
export default function Experience() {
  return (
    <section id="experience" className="relative pb-24 w-full min-h-screen">
      
      <div className="container mx-auto px-6 relative z-10 max-w-[1200px] mt-12">
        <div className="mb-12 text-right flex flex-col items-end">
          <motion.div
            initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="flex items-center gap-4 flex-row-reverse"
          >
            <Target className="text-neon-green w-8 h-8 animate-[spin_10s_linear_infinite]" />
            <h2 className="text-3xl font-[Orbitron] font-bold text-white uppercase tracking-wider">
              Field <span className="text-neon-green">Operations</span>
            </h2>
          </motion.div>
          <div className="w-32 h-px mt-4 bg-gradient-to-l from-neon-green to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Main GDG Block - De-boxed */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full relative group"
          >
            {/* Outer Glow Wrapper */}
            <div className="absolute inset-0 bg-[#0a0f16] border border-white/5 rounded-3xl transition-colors duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:bg-[#121922] group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]" />

            {/* Inner Content Block */}
            <div className="relative z-10 p-8 md:p-12 flex flex-col border-l-2 border-neon-green/30 hover:border-neon-green transition-colors rounded-3xl">
                 
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/10 blur-[50px] pointer-events-none rounded-full"></div>
              
              <div className="terminal-topbar flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="font-mono text-xs text-gray-500 ml-4">~/operations/gdg_club</span>
              </div>
              
              <div className="flex-grow mt-4"> 
                <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between mb-6 gap-4 border-b border-white/5 pb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-[Orbitron] font-bold text-white tracking-widest text-shadow-glow flex flex-col xl:flex-row xl:items-center gap-3">
                      GDG Core Member
                    </h3>
                    <p className="text-gray-400 font-mono text-sm mt-2 flex items-center gap-2">
                      <Binary className="w-4 h-4 text-neon-green" />
                      Open Source Division
                    </p>
                  </div>
                  <div className="text-left xl:text-right mt-2 xl:mt-0">
                    <span className="text-neon-green font-mono text-sm border border-neon-green/30 px-3 py-1 bg-neon-green/5 rounded-full inline-block glitch-text" data-text="STATUS: ACTIVE">STATUS: ACTIVE</span>
                  </div>
                </div>

                <div className="font-mono text-sm text-gray-300 space-y-4">
                  <p className="leading-relaxed relative pl-4 border-l border-neon-green/30">
                    <span className="text-neon-green mr-2">&gt;</span>
                    Active core member of the Google Developer Groups (GDG) college chapter, operating within the Open Source division.
                  </p>
                  <p className="leading-relaxed relative pl-4 border-l border-neon-green/30">
                    <span className="text-neon-green mr-2">&gt;</span>
                    Contributed to the management, architecture, and deployment of the platform site for a recent technical competition/event.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hackathons & Security */}
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="bg-[#0a0f16] border border-white/5 rounded-2xl border-l-4 border-l-neon-cyan p-6 hover:bg-[#070e17] transition-all duration-300 hover:translate-x-2 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <CodeSquare className="text-neon-cyan w-6 h-6" />
                <h3 className="text-xl font-bold font-[Orbitron] text-white">Event Deployments</h3>
              </div>
              <p className="text-gray-400 font-mono text-sm leading-relaxed mb-4">
                Systematically engaged in <span className="text-white font-bold">3 major hackathons</span> including Women's Centric Hackathon. Managed team allocations, timeline enforcement, and conflict resolution under high-pressure scenarios.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
              className="bg-[#0a0f16] border border-white/5 rounded-2xl border-l-4 border-l-red-500 p-6 hover:bg-[#170a0a] transition-all duration-300 hover:translate-x-2 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <ShieldAlert className="text-red-500 w-6 h-6" />
                <h3 className="text-xl font-bold font-[Orbitron] text-white">Pen-testing & Security</h3>
              </div>
              <p className="text-gray-400 font-mono text-sm mb-4">
                Continuously exploiting logic flaws and practicing offensive security methods to harden system understanding.
              </p>
              <div className="flex flex-wrap gap-3 font-mono text-xs mt-6">
                <span className="px-3 py-1.5 border border-white/10 text-gray-300 bg-white/5 rounded">LeetCode</span>
                <span className="px-3 py-1.5 border border-red-500/50 text-red-500 bg-red-900/10 rounded">Capture The Flag</span>
                <span className="px-3 py-1.5 border border-green-500/50 text-green-500 bg-green-900/10 rounded">Hack The Box</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
