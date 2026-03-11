import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin, Mail, Terminal, ArrowDown } from 'lucide-react';
import { Suspense, lazy } from 'react';

const Terminal3D = lazy(() => import('./Terminal3D'));

const ROLES = [
  'Open Source Enthusiast',
  'Backend Developer',
  'CyberSec Explorer',
  'CTF Player',
  'Linux Power User',
  'Problem Solver',
];

function TypewriterRole() {
  const [idx,    setIdx]    = useState(0);
  const [text,   setText]   = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const speedRef = useRef(70);

  useEffect(() => {
    const current = ROLES[idx];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          speedRef.current = 2000;
          setIsDeleting(true);
        } else {
          speedRef.current = 70;
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setIdx((i) => (i + 1) % ROLES.length);
          speedRef.current = 300;
        } else {
          speedRef.current = 40;
        }
      }
    }, speedRef.current);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, idx]);

  return (
    <span className="inline-block" style={{ color: '#00cfff', fontFamily: 'var(--font-mono)', minWidth: 280 }}>
      {text}<span className="animate-[blink_1s_step-end_infinite]" style={{ color: '#00ff88' }}>_</span>
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef     = useRef<HTMLSpanElement>(null);
  const nameRef      = useRef<HTMLHeadingElement>(null);
  const roleRef      = useRef<HTMLDivElement>(null);
  const taglineRef   = useRef<HTMLParagraphElement>(null);
  const ctaRef       = useRef<HTMLDivElement>(null);
  const socialRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 });
    tl.fromTo(labelRef.current,   { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 })
      .fromTo(nameRef.current,    { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.2')
      .fromTo(roleRef.current,    { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
      .fromTo(taglineRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.1')
      .fromTo(ctaRef.current,     { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.1')
      .fromTo(socialRef.current,  { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.1');
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex items-center min-h-screen pt-16"
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10 blur-[100px]"
          style={{ backgroundColor: '#00ff88' }}
        />
        <div
          className="absolute top-1/2 -right-48 w-80 h-80 rounded-full opacity-8 blur-[100px]"
          style={{ backgroundColor: '#00cfff' }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center py-20 md:py-32">
        {/* ─── LEFT: Text ─────────────────────────────────────────────────────── */}
        <div className="flex flex-col gap-7">
          {/* Label */}
          <span
            ref={labelRef}
            className="section-label flex items-center gap-2 opacity-0"
          >
            <Terminal size={12} />
            // hello world
          </span>

          {/* Name */}
          <h1
            ref={nameRef}
            className="opacity-0 font-display font-bold leading-tight"
            style={{
              fontSize: 'clamp(2.6rem, 5.5vw, 4rem)',
              color: '#e2e8f0',
              letterSpacing: '-0.02em',
            }}
          >
            Shams{' '}
            <span
              className="glow-green"
              style={{ color: '#00ff88' }}
            >
              Tabrez
            </span>
            <br />Ahmed
          </h1>

          {/* Role typewriter */}
          <div ref={roleRef} className="font-mono text-base opacity-0 text-[#00cfff]" style={{ minHeight: 32 }}>
            &gt;&nbsp;<TypewriterRole />
          </div>

          {/* Tagline */}
          <p
            ref={taglineRef}
            className="opacity-0 text-[#94a3b8] text-base leading-relaxed max-w-lg"
          >
            BTech Computer Engineering @ VIT Mumbai · 2nd Year<br />
            Passionate about Open Source, Security, and Building Solutions.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap gap-5 opacity-0 pt-2">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-mono text-sm tracking-widest uppercase px-7 py-3 rounded transition-all duration-200 hover:scale-105 inline-block"
              style={{
                backgroundColor: '#00ff88',
                color: '#070a0e',
                fontWeight: 700,
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-mono text-sm tracking-widest uppercase px-7 py-3 rounded border transition-all duration-200 hover:bg-[#00cfff] hover:border-[#00cfff] hover:text-[#070a0e] inline-block"
              style={{
                borderColor: 'rgba(0,207,255,0.6)',
                color: '#00cfff',
              }}
            >
              Contact Me
            </a>
          </div>

          {/* Socials */}
          <div ref={socialRef} className="flex items-center gap-6 opacity-0 pt-4">
            <a
              href="https://github.com/seucra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#475569] hover:text-[#00ff88] transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/s-t-ahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#475569] hover:text-[#00cfff] transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:tabrezahmed.sta33@gmail.com"
              className="text-[#475569] hover:text-[#fbbf24] transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
            <span className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: 'rgba(0,255,136,0.2)' }} />
          </div>
        </div>

        {/* ─── RIGHT: 3D Scene ─────────────────────────────────────────────── */}
        <div
          className="relative w-full"
          style={{ height: 'clamp(320px, 45vw, 520px)' }}
        >
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-mono text-[#00ff88] text-sm animate-pulse">
                  initializing_render...
                </span>
              </div>
            }
          >
            <Terminal3D />
          </Suspense>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="section-label text-[10px]">scroll</span>
        <ArrowDown size={14} style={{ color: '#00ff88' }} />
      </div>
    </section>
  );
}
