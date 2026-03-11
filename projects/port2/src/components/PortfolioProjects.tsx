import { motion } from 'framer-motion';
import { Terminal, Database, Shield, Hexagon, Server, Activity, Disc, Cpu } from 'lucide-react';

const projects = [
  {
    name: "PSTS_Core",
    icon: <Cpu className="w-6 h-6 text-neon-green group-hover:text-black transition-colors" />,
    desc: "Process State Transition Simulation. High-fidelity OS visualization focusing on scheduling.",
    tags: ["C/C++", "OS", "Sim"],
    link: "seucra/PSTS",
    status: "Stable"
  },
  {
    name: "CipherLink",
    icon: <Shield className="w-6 h-6 text-red-500 group-hover:text-black transition-colors" />,
    desc: "A Secure Messaging Prototype utilizing advanced encryption for data transit.",
    tags: ["Security", "Python"],
    link: "Seucra/CipherLink",
    status: "Encrypted"
  },
  {
    name: "The_Code_Doctor",
    icon: <Terminal className="w-6 h-6 text-neon-cyan group-hover:text-black transition-colors" />,
    desc: "Systematic debugging assistance and code analysis tool aimed at high-value error detection.",
    tags: ["Tools", "Python"],
    link: "seucra/code-doctor",
    status: "Active"
  },
  {
    name: "Budget_Alloc_v1",
    icon: <Activity className="w-6 h-6 text-yellow-500 group-hover:text-black transition-colors" />,
    desc: "Project selection optimizer enforcing strict financial constraints using Subset Sum mechanics.",
    tags: ["Algo", "C++"],
    link: "seucra/budget-allocation-subset-sum",
    status: "Stable"
  },
  {
    name: "LectureGist",
    icon: <Server className="w-6 h-6 text-purple-400 group-hover:text-black transition-colors" />,
    desc: "Intelligent Academic Assistant serving API pipelines for study data summarization.",
    tags: ["Backend", "Python"],
    link: "seucra/lecturegist",
    status: "Active"
  },
  {
    name: "Matrixmind",
    icon: <Database className="w-6 h-6 text-blue-400 group-hover:text-black transition-colors" />,
    desc: "Engineering Math tools simplifying complex multidimensional array and matrix operations.",
    tags: ["Math", "C"],
    link: "seucra/matrixmind",
    status: "Stable"
  },
  {
    name: "SIH2025_Branch",
    icon: <Hexagon className="w-6 h-6 text-neon-green group-hover:text-black transition-colors" />,
    desc: "Pressure-tested hackathon deployment focusing on collaborative sprint architectures.",
    tags: ["Hackathon", "Fullstack"],
    link: "seucra/SIH2025",
    status: "Deployed"
  },
  {
    name: "SnakeGodot",
    icon: <Disc className="w-6 h-6 text-green-400 group-hover:text-black transition-colors" />,
    desc: "Classic iterative snake simulation mapped out for fundamental engine logic testing.",
    tags: ["Godot", "Logic"],
    link: "seucra/SnakeGameGodot",
    status: "Stable"
  }
];

// Reusing the GDG site's Pixel grid logic but styled for Cyberpunk, now with pure CSS hover support
const PixelGrid = () => {
    const GRID = 5;
    return (
        <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 z-0 pointer-events-none group-hover:opacity-0 group-hover:scale-95 transition-all duration-700">
            {Array.from({ length: GRID * GRID }).map((_, idx) => (
                <div
                    key={idx}
                    className="bg-[#05080c] border-[1px] border-neon-cyan/5 transition-opacity"
                    style={{ transitionDelay: `${(Math.floor(idx / GRID) + (idx % GRID)) * 0.02}s` }}
                />
            ))}
        </div>
    );
};

// Fluid overlapping project cards
function FluidProjectCard({ proj, i }: { proj: any, i: number }) {

    // Helper to determine glow classes purely from CSS
    const getGlowClasses = () => {
        if (proj.status === 'Encrypted') return 'group-hover:shadow-[0_20px_40px_-10px_rgba(239,68,68,0.4)]'; 
        if (proj.status === 'Active' || proj.status === 'Stable' || proj.status === 'Deployed') return 'group-hover:shadow-[0_20px_40px_-10px_rgba(0,255,136,0.4)]';
        return 'group-hover:shadow-[0_20px_40px_-10px_rgba(0,207,255,0.4)]'; 
    };

    return (
        <motion.a
            href={`https://github.com/${proj.link}`}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: (i % 4) * 0.1, duration: 0.5, type: "spring" }}
            className="group relative flex flex-col w-full min-h-[300px] mt-12"
        >
            {/* The Main Card Container with Fluid Rounded Corners and Glow */}
            <div 
                className={`absolute inset-0 bg-[#0a0f16] border border-white/5 rounded-3xl transition-all duration-300 group-hover:bg-[#121922] group-hover:border-white/20 group-hover:-translate-y-2 translate-y-0 ${getGlowClasses()}`}
            >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 rounded-3xl mix-blend-overlay pointer-events-none"></div>
                
                {/* Pixel Evaporation Overlay */}
                <div className="absolute inset-4 overflow-hidden rounded-2xl pointer-events-none z-0 mix-blend-color-burn">
                     <PixelGrid />
                </div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 p-8 flex flex-col h-full">
                
                {/* Header: Offset Icon */}
                <div className="flex justify-between items-start mb-6 -mt-16">
                    {/* Floating Offset Icon */}
                    <div className="w-20 h-20 rounded-full bg-[#05080c] border-[3px] border-neon-cyan flex items-center justify-center shadow-[0_0_20px_rgba(0,207,255,0.3)] group-hover:scale-110 transition-transform duration-300">
                        {proj.icon}
                    </div>
                </div>

                {/* Body Content */}
                <div className="flex-grow flex flex-col justify-center transition-all duration-300">
                    <h3 className="text-2xl font-bold font-[Orbitron] text-white overflow-hidden text-ellipsis drop-shadow-md group-hover:text-neon-cyan transition-colors text-center group-hover:text-left">
                        {proj.name}
                    </h3>
                    
                    {/* Expandable Reveal Section */}
                    <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 ease-in-out">
                         
                        <div className="mb-4">
                            <span className={`text-[10px] uppercase font-bold font-mono px-3 py-1 rounded-full shadow-lg inline-block
                                ${proj.status === 'Active' || proj.status === 'Deployed' || proj.status === 'Stable' ? 'text-neon-green bg-green-900/30 border border-neon-green/50' : 
                                proj.status === 'Encrypted' ? 'text-red-500 bg-red-900/30 border border-red-500/50' : 
                                'text-neon-cyan bg-cyan-900/30 border border-neon-cyan/50'}
                            `}>
                                <span className="glitch-text" data-text={proj.status}>{proj.status}</span>
                            </span>
                        </div>

                        <p className="text-sm text-gray-400 font-mono leading-relaxed line-clamp-3">
                            <span className="text-neon-cyan mr-2">&gt;</span>
                            {proj.desc}
                        </p>

                        {/* Footer Tags */}
                        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/5">
                            {proj.tags.map((tag: string, tIdx: number) => (
                                <span key={tIdx} className="px-2 py-1 bg-black/40 text-[10px] font-mono text-gray-500 rounded border border-white/5 border-neon-cyan/20 text-gray-300 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.a>
    );
}

export default function PortfolioProjects() {
  return (
    <section id="projects" className="relative w-full py-24 bg-bg-primary flex flex-col justify-center min-h-[80vh]">
      
      {/* Background Matrix Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(90deg, #00ff88 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 relative z-10 max-w-[1440px]">
        <div className="text-center mb-24">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="inline-flex items-center gap-3 border border-neon-cyan/50 px-6 py-2 rounded-full bg-neon-cyan/10 box-glow-cyan"
            >
                <Terminal className="text-neon-cyan w-5 h-5 animate-pulse" />
                <span className="text-neon-cyan font-mono text-sm tracking-widest uppercase">System Repositories</span>
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-[Orbitron] font-black text-white mt-8 tracking-tighter uppercase"
            >
                Codebase <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-500">Modules</span>
            </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {projects.map((proj, idx) => (
                <FluidProjectCard key={idx} proj={proj} i={idx} />
            ))}
        </div>
      </div>
    </section>
  );
}
