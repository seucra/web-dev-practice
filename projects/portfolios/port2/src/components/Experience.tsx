import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Trophy, Users, Code2, Shield } from 'lucide-react';

const TIMELINE = [
  {
    year: '2024–25',
    title: 'GDG Core Member — Open Source',
    org: 'Google Developer Groups, VIT Wadala',
    description:
      'Part of the Open Source branch under GDG Core. Contributed to and co-developed the GDG VITM community platform. Involved in event management and the women-centric tech contest platform.',
    tags: ['Open Source', 'React', 'TypeScript', 'Community'],
    icon: <Users size={16} />,
    color: '#00ff88',
  },
  {
    year: '2025',
    title: 'Smart India Hackathon 2025',
    org: 'SIH 2025',
    description:
      'Participated as a team with innovative solution for a real-world government problem statement. Full-stack development under hackathon pressure.',
    tags: ['Hackathon', 'Full-Stack', 'Team', '24hr'],
    icon: <Trophy size={16} />,
    color: '#fbbf24',
  },
  {
    year: '2024–25',
    title: 'Hackathon Participant (×3)',
    org: 'Various',
    description:
      'Attended 3 hackathons across the academic year, building complete projects under tight deadlines. Built practical problem-solving skills.',
    tags: ['Hackathons', 'Problem Solving', 'Rapid Development'],
    icon: <Trophy size={16} />,
    color: '#00cfff',
  },
  {
    year: 'Ongoing',
    title: 'CTF & Security Practice',
    org: 'HackTheBox · CTF Competitions',
    description:
      'Actively practicing CTF challenges on HackTheBox, covering web exploitation, cryptography, and reverse engineering. Building practical CyberSec skills.',
    tags: ['CTF', 'HackTheBox', 'Web Exploitation', 'Crypto'],
    icon: <Shield size={16} />,
    color: '#a855f7',
  },
  {
    year: 'Ongoing',
    title: 'LeetCode & DSA Practice',
    org: 'LeetCode',
    description:
      'Regularly solving data structures and algorithms problems. Focus on dynamic programming, graph algorithms, and systems-level thinking.',
    tags: ['LeetCode', 'DSA', 'Algorithms', 'Problem Solving'],
    icon: <Code2 size={16} />,
    color: '#00ff88',
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        timelineRef.current?.querySelectorAll('[data-item]') ?? [],
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, stagger: 0.12, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-28">
      <div className="mb-14">
        <span className="section-label">// 04. experience</span>
        <h2
          className="font-display font-bold mt-2"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#e2e8f0' }}
        >
          Where I've <span style={{ color: '#00ff88' }}>Been</span>
        </h2>
      </div>

      <div ref={timelineRef} className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
          style={{ backgroundColor: 'rgba(0,255,136,0.12)' }}
        />

        <div className="flex flex-col gap-8">
          {TIMELINE.map((item, i) => (
            <div
              key={i}
              data-item=""
              className="relative flex gap-8 opacity-0"
            >
              {/* Dot */}
              <div
                className="hidden md:flex shrink-0 w-10 h-10 rounded-full items-center justify-center z-10"
                style={{
                  backgroundColor: `${item.color}15`,
                  border: `1px solid ${item.color}40`,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>

              {/* Card */}
              <div
                className="terminal-window p-5 flex-1 hover:scale-[1.01] transition-transform duration-200"
                style={{ borderColor: `${item.color}20` }}
              >
                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-semibold text-sm" style={{ color: item.color }}>
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs text-[#475569] mt-0.5">{item.org}</p>
                  </div>
                  <span
                    className="font-mono text-xs px-2.5 py-1 rounded-sm shrink-0"
                    style={{
                      color: item.color,
                      backgroundColor: `${item.color}12`,
                      border: `1px solid ${item.color}25`,
                    }}
                  >
                    {item.year}
                  </span>
                </div>

                <p className="text-[#94a3b8] text-xs leading-relaxed mb-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-0.5"
                      style={{ color: '#475569', backgroundColor: 'rgba(255,255,255,0.03)' }}
                    >
                      #{tag.toLowerCase().replace(/ /g, '_')}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
