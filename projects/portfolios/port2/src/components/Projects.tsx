import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Github } from 'lucide-react';

const PROJECTS = [
  {
    title: 'LectureGist',
    description: 'Intelligent academic assistant that processes lecture content and generates structured notes, summaries, and Q&A using AI.',
    tags: ['Python', 'AI/NLP', 'Backend', 'API'],
    color: '#00ff88',
    repo: 'https://github.com/seucra/lecturegist',
  },
  {
    title: 'Code Doctor',
    description: 'High-value debugging and code review tool for students. Analyzes code, explains errors, and suggests fixes with educational context.',
    tags: ['Python', 'AI', 'Education', 'CLI'],
    color: '#00cfff',
    repo: 'https://github.com/seucra/code-doctor',
  },
  {
    title: 'CipherLink',
    description: 'Secure messaging software prototype implementing end-to-end encryption. Built to explore applied cryptography and secure comms.',
    tags: ['Python', 'Cryptography', 'Security', 'Networking'],
    color: '#fbbf24',
    repo: 'https://github.com/Seucra/CipherLink',
  },
  {
    title: 'PSTS',
    description: 'High-fidelity Process State Transition Simulation implementing OS scheduling concepts — Ready, Running, Waiting, Terminated states.',
    tags: ['C', 'OS', 'Simulation', 'Algorithms'],
    color: '#a855f7',
    repo: 'https://github.com/seucra/PSTS',
  },
  {
    title: 'SIH 2025',
    description: 'Smart India Hackathon 2025 team project. Developed an innovative solution for a real-world government problem statement.',
    tags: ['Hackathon', 'Team', 'Full-Stack', 'SIH'],
    color: '#00ff88',
    repo: 'https://github.com/seucra/SIH2025',
  },
  {
    title: 'MatrixMind',
    description: 'A matrices utility library and visualizer that makes linear algebra operations simpler and more intuitive for students.',
    tags: ['Python', 'Math', 'Library', 'Visualization'],
    color: '#00cfff',
    repo: 'https://github.com/seucra/matrixmind',
  },
  {
    title: 'Budget Allocation (Subset Sum)',
    description: 'System to optimize project selection within a budget constraint using dynamic programming and subset sum algorithms.',
    tags: ['Python', 'DSA', 'Optimization', 'DP'],
    color: '#fbbf24',
    repo: 'https://github.com/seucra/budget-allocation-subset-sum',
  },
  {
    title: 'MathC',
    description: 'Engineering Mathematics tool covering calculus, linear algebra, and differential equations — a personal academic utility.',
    tags: ['Python', 'Mathematics', 'Engineering', 'Personal'],
    color: '#a855f7',
    repo: 'https://github.com/seucra/MathC',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current?.querySelectorAll('[data-card]') ?? [],
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-28">
      <div className="mb-14">
        <span className="section-label">// 03. projects</span>
        <h2
          className="font-display font-bold mt-2"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#e2e8f0' }}
        >
          Things I've <span style={{ color: '#00ff88' }}>Built</span>
        </h2>
        <p className="text-[#475569] font-mono text-xs mt-3">
          featured projects — <a
            href="https://github.com/seucra"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ff88] transition-colors duration-200"
            style={{ color: '#00cfff' }}
          >
            view all on github ↗
          </a>
        </p>
      </div>

      <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            data-card=""
            className="terminal-window p-5 flex flex-col gap-4 group opacity-0
                       hover:scale-[1.02] transition-all duration-250"
            style={{
              borderColor: `${project.color}20`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = `${project.color}60`;
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${project.color}18`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = `${project.color}20`;
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <h3
                className="font-display font-semibold text-sm leading-snug"
                style={{ color: project.color }}
              >
                {project.title}
              </h3>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#475569] hover:text-[#e2e8f0] transition-colors duration-150 shrink-0"
              >
                <Github size={14} />
              </a>
            </div>

            {/* Description */}
            <p className="text-[#94a3b8] text-xs leading-relaxed flex-1">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] px-2 py-0.5 rounded-sm"
                  style={{
                    color: project.color,
                    backgroundColor: `${project.color}12`,
                    border: `1px solid ${project.color}25`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
