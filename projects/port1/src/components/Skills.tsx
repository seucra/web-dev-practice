import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LANGUAGES = [
  { name: 'Python',     level: 90, color: '#00ff88' },
  { name: 'C/C++',      level: 80, color: '#00cfff' },
  { name: 'JavaScript', level: 72, color: '#fbbf24' },
  { name: 'SQL',        level: 78, color: '#00ff88' },
  { name: 'Rust',       level: 40, color: '#ff6b35' },
  { name: 'Java',       level: 55, color: '#00cfff' },
  { name: 'HTML/CSS',   level: 80, color: '#fbbf24' },
  { name: 'Bash',       level: 70, color: '#00ff88' },
];

const TECH_AREAS = [
  {
    title: 'Backend & APIs',
    color: '#00ff88',
    items: ['Python (FastAPI, Flask)', 'REST APIs', 'SQLite · PostgreSQL · NoSQL', 'Encryption & Auth'],
  },
  {
    title: 'Security & CTF',
    color: '#00cfff',
    items: ['CTF Competitions', 'HackTheBox', 'Web Vulns', 'Cryptography basics'],
  },
  {
    title: 'Systems & OS',
    color: '#fbbf24',
    items: ['Linux (Arch, Mint, Kali)', 'Heavy ricing & dotfiles', 'Memory management', 'Process scheduling'],
  },
  {
    title: 'Frontend',
    color: '#a855f7',
    items: ['React · TypeScript', 'Vite · Tailwind CSS v4', 'GSAP · Three.js', 'HTML/CSS/JS'],
  },
  {
    title: 'Databases',
    color: '#00ff88',
    items: ['SQL · PostgreSQL', 'SQLite · NoSQL', 'DBMS concepts', 'Query optimization'],
  },
  {
    title: 'Tools & Others',
    color: '#00cfff',
    items: ['Git · GitHub', 'LeetCode (DSA)', 'Design & Creativity', 'Open Source'],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const barsRef    = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger in cards
      gsap.fromTo(
        cardsRef.current?.querySelectorAll('[data-card]') ?? [],
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );

      // Animate language bars
      const bars = barsRef.current?.querySelectorAll('[data-bar]');
      bars?.forEach((bar) => {
        const target = (bar as HTMLElement).dataset.bar ?? '0';
        gsap.fromTo(bar,
          { width: '0%' },
          {
            width: `${target}%`, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
          }
        );
      });

      gsap.fromTo(
        barsRef.current?.querySelectorAll('[data-lang]') ?? [],
        { opacity: 0, x: -20 },
        {
          opacity: 1, x: 0, stagger: 0.06, duration: 0.4, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-28">
      <div className="mb-14">
        <span className="section-label">// 02. skills</span>
        <h2
          className="font-display font-bold mt-2"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#e2e8f0' }}
        >
          What I <span style={{ color: '#00ff88' }}>Know</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* ─── Languages ──────────────────────────────────────────────────── */}
        <div>
          <p className="section-label mb-6">languages</p>
          <div ref={barsRef} className="flex flex-col gap-5">
            {LANGUAGES.map((lang) => (
              <div key={lang.name} data-lang="" className="opacity-0">
                <div className="flex justify-between mb-1.5">
                  <span className="font-mono text-sm text-[#e2e8f0]">{lang.name}</span>
                  <span className="font-mono text-xs text-[#475569]">{lang.level}%</span>
                </div>
                <div
                  className="w-full h-1.5 rounded-full"
                  style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                >
                  <div
                    data-bar={lang.level}
                    className="h-1.5 rounded-full"
                    style={{
                      width: 0,
                      backgroundColor: lang.color,
                      boxShadow: `0 0 8px ${lang.color}80`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Tech Areas ─────────────────────────────────────────────────── */}
        <div>
          <p className="section-label mb-6">tech areas</p>
          <div ref={cardsRef} className="grid grid-cols-2 gap-4">
            {TECH_AREAS.map((area) => (
              <div
                key={area.title}
                data-card=""
                className="terminal-window p-4 opacity-0 hover:scale-[1.02] transition-transform duration-200"
                style={{
                  borderColor: `${area.color}25`,
                }}
              >
                <p
                  className="font-mono text-xs font-bold mb-3 tracking-wide"
                  style={{ color: area.color }}
                >
                  {area.title}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {area.items.map((item) => (
                    <li
                      key={item}
                      className="text-[#94a3b8] text-xs flex items-center gap-2"
                    >
                      <span style={{ color: area.color, fontSize: '0.5rem' }}>◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
