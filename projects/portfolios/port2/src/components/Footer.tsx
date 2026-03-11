import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{ borderColor: 'rgba(0,255,136,0.1)', backgroundColor: '#070a0e' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span
            className="font-mono text-sm font-bold"
            style={{ color: '#00ff88' }}
          >
            &lt;<span className="text-[#e2e8f0]">seucra</span> /&gt;
          </span>
          <span className="font-mono text-xs text-[#475569]">
            © {year} Shams Tabrez Ahmed
          </span>
        </div>

        {/* Center */}
        <span className="font-mono text-xs text-[#2d3748] hidden sm:block">
          Built with React · TypeScript · Three.js · GSAP
        </span>

        {/* Right: Socials */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/seucra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#475569] hover:text-[#00ff88] transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/s-t-ahmed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#475569] hover:text-[#00cfff] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:tabrezahmed.sta33@gmail.com"
            className="text-[#475569] hover:text-[#fbbf24] transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
