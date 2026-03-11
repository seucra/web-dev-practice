import { motion, useMotionValue, useAnimationFrame, animate } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Terminal, Database, Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: "Core Languages",
    icon: Code2,
    color: "text-neon-cyan",
    glow: "box-glow-cyan",
    border: "border-neon-cyan/50",
    skills: ["Python", "C/C++", "Java", "Rust", "JavaScript", "HTML/CSS"]
  },
  {
    title: "Backend & Systems",
    icon: Terminal,
    color: "text-neon-green",
    glow: "box-glow-green",
    border: "border-neon-green/50",
    skills: ["API Design", "Encryption", "Memory Management", "Algorithms", "Structres", "Networking"]
  },
  {
    title: "Data Architecture",
    icon: Database,
    color: "text-purple-400",
    glow: "shadow-[0_0_15px_rgba(168,85,247,0.15)]",
    border: "border-purple-500/50",
    skills: ["SQL", "PostgreSQL", "SQLite", "NoSQL", "Database Design"]
  },
  {
    title: "OS & Infrastructure",
    icon: Cpu,
    color: "text-neon-red",
    glow: "shadow-[0_0_15px_rgba(255,42,42,0.15)]",
    border: "border-neon-red/50",
    skills: ["Linux", "Dualbooting", "Ricing/Customization", "VMs", "Scheduling"]
  }
];

export default function Skills() {
  const rotateX = useMotionValue(-15); // Start vertically angled
  const rotateY = useMotionValue(-15); // Start horizontally angled
  const isDragging = useRef(false);

  // Continuous auto-rotation
  useAnimationFrame((_, delta) => {
    if (!isDragging.current) {
        // Rotate ~20 degrees per second when not dragging
        rotateY.set(rotateY.get() + (delta * 0.02));
    }
  });

  return (
    <div className="w-full relative py-24 flex items-center z-20" id="skills">
      
      {/* SVG Filter for Corrupted Glitch */}
      <svg style={{ width: 0, height: 0, position: 'absolute' }}>
        <filter id="displacementFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.05 0.95" numOctaves="1" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="mb-20 text-center flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="inline-flex items-center gap-3 border border-neon-magenta/50 px-6 py-2 rounded-full bg-gray-900/50"
            >
                <div className="w-2 h-2 rounded-full bg-neon-magenta animate-pulse indicator-dot" />
                <span className="font-mono text-sm tracking-widest uppercase glitch-cb text-neon-magenta glow-magenta" data-text="Technical Competencies">Technical Competencies</span>
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-[Orbitron] font-black text-white mt-8 tracking-wider uppercase"
            >
                System <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan">Architecture</span>
            </motion.h2>
        </div>

        {/* 3D Cube Layout with Floating Animation */}
        <motion.div 
            animate={{ y: [0, -15, 10, -5, 0], x: [0, 5, -10, 5, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="cube-container mt-12 md:mt-24 mb-48 md:mb-64 cursor-grab active:cursor-grabbing"
        >
            <motion.div 
              className="cube"
              style={{ rotateY, rotateX }}
              onPanStart={() => { isDragging.current = true; }}
              onPan={(_, info) => {
                  rotateY.set(rotateY.get() + info.delta.x * 0.5);
                  // Invert Y delta logic so dragging "up" rotates the cube "up" to see the bottom
                  rotateX.set(rotateX.get() - info.delta.y * 0.5);
              }}
              onPanEnd={() => { 
                isDragging.current = false; 
                // Snap the vertical rotation back to the resting perspective gracefully
                animate(rotateX, -15, { type: "spring", stiffness: 100, damping: 20 });
              }}
            >
                {/* 4 Sides corresponding to skill categories */}
                {skillCategories.map((cat, idx) => {
                    const faceClass = ["cube-face-front", "cube-face-right", "cube-face-back", "cube-face-left"][idx];
                    return (
                        <div key={idx} className={`cube-face ${faceClass} p-6 md:p-8 flex flex-col justify-between`}>
                            {/* Background Overlay */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

                            <div className="flex flex-col items-center justify-center text-center gap-4 mb-4 relative z-10 flex-grow">
                                <div className={`p-4 bg-[#05080c] rounded-2xl border border-white/10 ${cat.color} ${cat.glow}`}>
                                    <cat.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-[Orbitron] font-bold text-white tracking-wide">{cat.title}</h3>
                            </div>

                            <div className="flex flex-wrap justify-center gap-2 relative z-10">
                                {cat.skills.map((skill, sIdx) => (
                                    <span 
                                        key={sIdx}
                                        className={`px-3 py-1.5 font-mono text-xs md:text-sm bg-black/60 border border-gray-700 text-gray-300 rounded-lg hover:text-white hover:border-white/20 transition-colors shadow-sm whitespace-normal`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}

                {/* Top Face - Corrupted Data */}
                <div className="cube-face cube-face-top p-8 flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center h-full w-full border border-neon-red/30 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,42,42,0.05)_10px,rgba(255,42,42,0.05)_20px)]">
                        <span className="font-mono text-neon-red font-bold tracking-widest text-center uppercase glitch-3">
                            <span className="block text-2xl mb-2">Corrupted</span>
                            <span className="block text-sm opacity-50">sys.hash:0x4F92A</span>
                        </span>
                    </div>
                </div>

                {/* Bottom Face - Corrupted Data */}
                <div className="cube-face cube-face-bottom p-8 flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center h-full w-full border border-neon-red/30 bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,rgba(255,42,42,0.05)_10px,rgba(255,42,42,0.05)_20px)]">
                        <span className="font-mono text-neon-red font-bold tracking-widest text-center uppercase glitch-3">
                            <span className="block text-2xl mb-2">Data_err</span>
                            <span className="block text-sm opacity-50">mem_leak:0x11B3</span>
                        </span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
