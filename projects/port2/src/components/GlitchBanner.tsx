export default function GlitchBanner({ text }: { text: string }) {
  return (
    <div className="relative font-mono text-5xl md:text-7xl lg:text-[100px] font-black tracking-tighter text-gray-200">
      <div
        className="relative inline-block before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-transparent before:-left-[6px] before:text-shadow-[2px_0_red] before:animate-[glitch-anim-1_2.5s_infinite_linear_alternate-reverse] after:content-[attr(data-text)] after:absolute after:top-0 after:-left-[2px] after:h-full after:w-full after:bg-transparent after:-left-[2px] after:text-shadow-[-2px_0_cyan] after:animate-[glitch-anim-2_3s_infinite_linear_alternate-reverse]"
        data-text={text}
      >
        {text}
      </div>
    </div>
  );
}
