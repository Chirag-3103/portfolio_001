import * as React from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

const projects = [
  { n: "01", title: "PORTFOLIO", desc: "A cinematic personal brand experience.", href: "https://github.com/Chirag-3103/portfolio_001" },
  { n: "02", title: "AI CHATBOT", desc: "Conversational interface powered by LLMs.", href: "https://github.com/Chirag-3103", comingSoon: true },
  { n: "03", title: "NIKE CLONE", desc: "Pixel-precise frontend study.", href: "https://github.com/Chirag-3103/nike_lookalike" },
  { n: "04", title: "FULL STACK WEB DEVELOPMENT", desc: "A living design system.", href: "https://github.com/Chirag-3103/Web_Dev" },
];

export function Projects() {
  const [open, setOpen] = React.useState(false);

  return (
    <section id="work" className="relative px-6 md:px-12 lg:px-20 py-40 md:py-56 border-t border-white/5">
      <div className="max-w-[1500px] mx-auto mb-24 flex flex-wrap items-baseline justify-between gap-6">
        <p className="text-[10px] tracking-[0.5em] text-[#d3e505]">- PROJECTS DONE OR ONGOING</p>
        <p className="text-[10px] tracking-[0.4em] text-neutral-500">2024 / 2025</p>
      </div>

      <div className="border-t border-white/5">
        {projects.map((p, i) => {
          const card = (
            <>
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at left, rgba(59,130,246,0.18), transparent 60%)" }}
              />
              <div className="max-w-[1500px] mx-auto relative grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(14rem,22rem)] gap-8 md:gap-12 items-start">
                <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] md:grid-cols-[4rem_minmax(0,1fr)] gap-4 md:gap-8 min-w-0">
                  <span className="pt-3 md:pt-5 text-[10px] tracking-[0.3em] text-neutral-600">{p.n}</span>
                  <h3 className="font-display font-semibold tracking-normal leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-neutral-400 group-hover:text-white transition-all duration-500 break-words">
                    <span className="group-hover:[text-shadow:0_0_30px_rgba(59,130,246,0.5)] transition-all duration-500 inline-block group-hover:scale-[1.01] origin-left">
                      {p.title}
                    </span>
                  </h3>
                </div>
                <div className="hidden md:flex items-start justify-end gap-6 pt-5">
                  <p className="text-sm leading-6 tracking-[0.16em] text-neutral-500 max-w-xs text-right">{p.desc}</p>
                  <span className="text-[#3B82F6] text-2xl leading-none transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-1">-&gt;</span>
                </div>
              </div>
              <p className="md:hidden text-xs leading-6 tracking-[0.16em] text-neutral-500 mt-6 pl-14">{p.desc}</p>
            </>
          );

          if (p.comingSoon) {
            return (
              <Dialog key={p.n} open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <motion.button
                    type="button"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ x: 12 }}
                    className="group block border-b border-white/5 py-12 md:py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden text-left w-full"
                  >
                    {card}
                  </motion.button>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{p.title} is coming soon</DialogTitle>
                    <DialogDescription>
                      This project is not yet available on GitHub. It is still under construction and will be uploaded soon.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-neutral-200">
                    Stay tuned - a polished conversational experience is on the way. For now, feel free to explore the other projects.
                  </div>
                  <DialogFooter>
                    <DialogClose className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
                      Go back
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            );
          }

          return (
            <motion.a
              key={p.n}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 12 }}
              className="group block border-b border-white/5 py-12 md:py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden"
            >
              {card}
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
