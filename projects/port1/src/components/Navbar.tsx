import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const NAV_LINKS = [
  { label: 'about',      href: '#about' },
  { label: 'skills',     href: '#skills' },
  { label: 'projects',   href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'contact',    href: '#contact' },
];

export default function Navbar() {
  const navRef      = useRef<HTMLElement>(null);
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );

    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(7,10,14,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,255,136,0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNav(e, '#hero')}
          className="font-mono text-sm font-bold tracking-widest"
          style={{ color: '#00ff88' }}
        >
          &lt;<span className="text-[#e2e8f0]">seucra</span> /&gt;
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="font-mono text-xs tracking-widest uppercase text-[#94a3b8] hover:text-[#00ff88] transition-colors duration-200"
            >
              ./{link.label}
            </a>
          ))}
          <a
            href="https://github.com/seucra"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 hover:text-[#070a0e] hover:bg-[#00ff88]"
            style={{
              borderColor: 'rgba(0,255,136,0.5)',
              color: '#00ff88',
            }}
          >
            github
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ cursor: 'none' }}
        >
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              backgroundColor: '#00ff88',
              transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              backgroundColor: '#00ff88',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              backgroundColor: '#00ff88',
              transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-5"
          style={{
            background: 'rgba(7,10,14,0.97)',
            borderBottom: '1px solid rgba(0,255,136,0.1)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="font-mono text-sm tracking-widest uppercase text-[#94a3b8] hover:text-[#00ff88] transition-colors duration-200"
            >
              ./{link.label}
            </a>
          ))}
          <a
            href="https://github.com/seucra"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm tracking-widest uppercase text-[#00ff88] border border-[rgba(0,255,136,0.4)] px-4 py-2 w-fit"
          >
            github
          </a>
        </div>
      )}
    </nav>
  );
}
