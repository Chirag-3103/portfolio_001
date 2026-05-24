import { motion } from "framer-motion";

const projects = [
  { n: "01", title: "PORTFOLIO", desc: "A cinematic personal brand experience.", href: "https://github.com/Chirag-3103" },
  { n: "02", title: "AI CHATBOT", desc: "Conversational interface powered by LLMs.", href: "https://github.com/Chirag-3103" },
  { n: "03", title: "NIKE CLONE", desc: "Pixel-precise frontend study.", href: "https://github.com/Chirag-3103/nike_lookalike" },
  { n: "04", title: "COMPONENT LAB", desc: "A living design system.", href: "https://github.com/Chirag-3103" },
];

export function Projects() {
  return (
    <section id="work" className="relative px-6 md:px-12 lg:px-20 py-40 md:py-56 border-t border-white/5">
      <div className="max-w-[1500px] mx-auto mb-24 flex items-baseline justify-between">
        <p className="text-[10px] tracking-[0.5em] text-[#3B82F6]">— SELECTED WORK</p>
        <p className="text-[10px] tracking-[0.4em] text-neutral-500">2024 / 2025</p>
      </div>

      <div className="border-t border-white/5">
        {projects.map((p, i) => (
          <motion.a
            key={p.n}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ x: 20 }}
            className="group block border-b border-white/5 py-10 md:py-14 px-6 md:px-12 lg:px-20 relative overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at left, rgba(59,130,246,0.18), transparent 60%)" }}
            />
            <div className="max-w-[1500px] mx-auto relative flex items-baseline justify-between gap-6">
              <div className="flex items-baseline gap-8 md:gap-16 min-w-0">
                <span className="text-[10px] tracking-[0.3em] text-neutral-600">{p.n}</span>
                <h3
                  className="font-display font-semibold tracking-[-0.04em] leading-none text-[10vw] md:text-[7vw] lg:text-[6rem] text-neutral-400 group-hover:text-white transition-all duration-500 truncate"
                  style={{}}
                >
                  <span className="group-hover:[text-shadow:0_0_30px_rgba(59,130,246,0.5)] transition-all duration-500 inline-block group-hover:scale-[1.02] origin-left">
                    {p.title}
                  </span>
                </h3>
              </div>
              <div className="hidden md:flex items-center gap-6 shrink-0">
                <p className="text-sm tracking-[0.2em] text-neutral-500 max-w-xs text-right">{p.desc}</p>
                <span className="text-[#3B82F6] text-2xl transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-1">↗</span>
              </div>
            </div>
            <p className="md:hidden text-xs tracking-[0.2em] text-neutral-500 mt-4 pl-12">{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
