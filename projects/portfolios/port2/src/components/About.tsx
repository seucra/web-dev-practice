import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MapPin, GraduationCap, Code2, Shield } from 'lucide-react';

const TERMINAL_LINES = [
  { prompt: '❯', cmd: 'whoami', delay: 0 },
  { output: 'shams_tabrez_ahmed', color: '#00ff88', delay: 0.3 },
  { prompt: '❯', cmd: 'cat interests.txt', delay: 0.7 },
  { output: 'open_source  |  cybersec  |  backend', color: '#00cfff', delay: 1.0 },
  { prompt: '❯', cmd: 'uname -a', delay: 1.4 },
  { output: 'Linux archlinux 6.x | dual-booted  heavily-riced', color: '#94a3b8', delay: 1.7 },
  { prompt: '❯', cmd: 'cat hobbies.log', delay: 2.1 },
  { output: 'gaming++ | music | novels | anime | series', color: '#94a3b8', delay: 2.4 },
  { prompt: '❯', cmd: '_', delay: 2.8, isCursor: true },
];

const FACTS = [
  { icon: <MapPin size={14} />,        text: 'VIT Wadala, Mumbai' },
  { icon: <GraduationCap size={14} />, text: 'BTech Computer Engineering, Sem 4' },
  { icon: <Code2 size={14} />,         text: 'GDG Core – Open Source Branch' },
  { icon: <Shield size={14} />,        text: 'CTF • HackTheBox • LeetCode' },
];

export default function About() {
  const sectionRef  = useRef<HTMLElement>(null);
  const leftRef     = useRef<HTMLDivElement>(null);
  const rightRef    = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );

      // Animate terminal lines
      const lines = terminalRef.current?.querySelectorAll('[data-line]');
      lines?.forEach((line, i) => {
        gsap.fromTo(line,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.3,
            delay: TERMINAL_LINES[i]?.delay ?? i * 0.3,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-28">
      {/* Section header */}
      <div className="mb-14">
        <span className="section-label">// 01. about</span>
        <h2
          className="font-display font-bold mt-2"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#e2e8f0' }}
        >
          About <span style={{ color: '#00ff88' }}>Me</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-14 items-start">
        {/* ─── LEFT: Text ──────────────────────────────────────────────────── */}
        <div ref={leftRef} className="flex flex-col gap-6 opacity-0">
          <p className="text-[#94a3b8] leading-relaxed">
            I'm <span style={{ color: '#00ff88' }}>Shams Tabrez Ahmed</span> — a
            second-year Computer Engineering student at VIT Wadala, Mumbai. I'm driven
            by a genuine curiosity for how systems work under the hood, whether that's
            writing clean backend APIs, exploring vulnerabilities in CTFs, or ricing
            a Linux setup at 2am.
          </p>
          <p className="text-[#94a3b8] leading-relaxed">
            I've attended <span style={{ color: '#00cfff' }}>3 hackathons</span>, contributed
            to building the GDG VITM platform, and regularly practice on LeetCode and
            HackTheBox. I'm part of the <span style={{ color: '#00cfff' }}>GDG Open Source core team</span>,
            focused on shipping actual useful stuff rather than slides.
          </p>
          <p className="text-[#94a3b8] leading-relaxed">
            When I'm not coding, I'm deep in a game, reading a novel, or watching something
            good. I'm also that person who spent way too long setting up their terminal to
            look exactly right.
          </p>

          {/* Fact chips */}
          <div className="flex flex-col gap-3 mt-2">
            {FACTS.map((fact, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-[#94a3b8]">
                <span style={{ color: '#00ff88' }}>{fact.icon}</span>
                <span>{fact.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── RIGHT: Terminal ─────────────────────────────────────────────── */}
        <div ref={rightRef} className="terminal-window opacity-0">
          <div className="terminal-topbar">
            <span className="terminal-dot" style={{ backgroundColor: '#ff5f57' }} />
            <span className="terminal-dot" style={{ backgroundColor: '#febc2e' }} />
            <span className="terminal-dot" style={{ backgroundColor: '#28c840' }} />
            <span className="font-mono text-xs text-[#475569] ml-3">bash ~ shams@vitw</span>
          </div>
          <div ref={terminalRef} className="p-5 font-mono text-sm flex flex-col gap-1.5 min-h-[260px]">
            {TERMINAL_LINES.map((line, i) => (
              <div key={i} data-line="" className="opacity-0">
                {'prompt' in line ? (
                  <div className="flex gap-2">
                    <span style={{ color: '#00ff88' }}>{line.prompt}</span>
                    <span className="text-[#e2e8f0]">{line.cmd}</span>
                    {'isCursor' in line && (
                      <span className="animate-[blink_1s_step-end_infinite]" style={{ color: '#00ff88' }}>▊</span>
                    )}
                  </div>
                ) : (
                  <div className="ml-4" style={{ color: line.color }}>{line.output}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
