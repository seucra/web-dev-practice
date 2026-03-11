import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin, Mail, Send, Terminal } from 'lucide-react';

const CONTACT_LINKS = [
  {
    icon: <Mail size={18} />,
    label: 'email',
    value: 'tabrezahmed.sta33@gmail.com',
    href: 'mailto:tabrezahmed.sta33@gmail.com',
    color: '#fbbf24',
  },
  {
    icon: <Github size={18} />,
    label: 'github',
    value: 'github.com/seucra',
    href: 'https://github.com/seucra',
    color: '#00ff88',
  },
  {
    icon: <Linkedin size={18} />,
    label: 'linkedin',
    value: 'linkedin.com/in/s-t-ahmed',
    href: 'https://www.linkedin.com/in/s-t-ahmed',
    color: '#00cfff',
  },
];

export default function Contact() {
  const sectionRef  = useRef<HTMLElement>(null);
  const leftRef     = useRef<HTMLDivElement>(null);
  const rightRef    = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted]   = useState(false);
  const [formData,  setFormData]    = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      );
      gsap.fromTo(rightRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      );
    });
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body    = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.open(`mailto:tabrezahmed.sta33@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section ref={sectionRef} className="py-28 pb-40">
      <div className="mb-14">
        <span className="section-label">// 05. contact</span>
        <h2
          className="font-display font-bold mt-2"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#e2e8f0' }}
        >
          Get In <span style={{ color: '#00ff88' }}>Touch</span>
        </h2>
        <p className="text-[#94a3b8] text-sm mt-3 max-w-lg">
          Open to interesting projects, internships, and collaborations. Drop a message.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* ─── LEFT: Links ────────────────────────────────────────────────── */}
        <div ref={leftRef} className="flex flex-col gap-5 opacity-0">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="terminal-window p-5 flex items-center gap-4 group
                         hover:scale-[1.02] transition-all duration-200"
              style={{ borderColor: `${link.color}20` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${link.color}50`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${link.color}20`;
              }}
            >
              <span
                className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${link.color}12`, color: link.color }}
              >
                {link.icon}
              </span>
              <div>
                <p className="font-mono text-xs text-[#475569] tracking-widest uppercase">
                  {link.label}
                </p>
                <p
                  className="font-mono text-sm mt-0.5 group-hover:underline"
                  style={{ color: link.color }}
                >
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* ─── RIGHT: Form ────────────────────────────────────────────────── */}
        <div ref={rightRef} className="terminal-window opacity-0">
          <div className="terminal-topbar">
            <span className="terminal-dot" style={{ backgroundColor: '#ff5f57' }} />
            <span className="terminal-dot" style={{ backgroundColor: '#febc2e' }} />
            <span className="terminal-dot" style={{ backgroundColor: '#28c840' }} />
            <span className="font-mono text-xs text-[#475569] ml-3">
              <Terminal size={10} className="inline mr-1.5" />
              send_message.sh
            </span>
          </div>

          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
            {[
              { id: 'name',    label: '> name:',    type: 'text',  placeholder: 'your_name' },
              { id: 'email',   label: '> email:',   type: 'email', placeholder: 'your@email.com' },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="font-mono text-xs text-[#475569] mb-1.5 block">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  required
                  value={formData[field.id as keyof typeof formData]}
                  onChange={(e) => setFormData(p => ({ ...p, [field.id]: e.target.value }))}
                  placeholder={field.placeholder}
                  className="w-full font-mono text-sm bg-transparent px-3 py-2.5 outline-none
                             text-[#e2e8f0] placeholder:text-[#2d3748] transition-colors duration-200"
                  style={{
                    border: '1px solid rgba(0,255,136,0.15)',
                    borderRadius: 4,
                  }}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(0,255,136,0.5)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(0,255,136,0.15)'; }}
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="font-mono text-xs text-[#475569] mb-1.5 block">
                {'> message:'}
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                placeholder="your_message_here..."
                className="w-full font-mono text-sm bg-transparent px-3 py-2.5 outline-none
                           text-[#e2e8f0] placeholder:text-[#2d3748] resize-none transition-colors duration-200"
                style={{
                  border: '1px solid rgba(0,255,136,0.15)',
                  borderRadius: 4,
                }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(0,255,136,0.5)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(0,255,136,0.15)'; }}
              />
            </div>

            <button
              type="submit"
              className="font-mono text-sm font-bold tracking-widest uppercase
                         flex items-center justify-center gap-2 py-3
                         transition-all duration-200 hover:scale-[1.02]"
              style={{
                backgroundColor: submitted ? '#00cfff' : '#00ff88',
                color: '#070a0e',
              }}
            >
              <Send size={14} />
              {submitted ? 'sent!' : 'send_message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
