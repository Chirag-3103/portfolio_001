import { motion } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";

const facts = [
  "FRONTEND DEVELOPER",
  "NCC AIR WING CADET",
  "AIVSC 2025 PARTICIPANT",
  "EXPA LEADERSHIP CAMP 2024",
];

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative px-6 md:px-12 lg:px-20 py-40 md:py-56 border-t border-white/5">
      <div ref={ref} className="reveal max-w-[1500px] mx-auto">
        <p className="text-[10px] tracking-[0.5em] text-[#3B82F6] mb-16">— ABOUT</p>
        <h2 className="font-display font-semibold tracking-[-0.04em] leading-[0.95] text-[10vw] md:text-[6vw] lg:text-[6rem] text-white max-w-5xl">
          I DON'T BUILD<br />
          WEBSITES.<br />
          <span className="text-[#3B82F6]" style={{ textShadow: "0 0 30px rgba(59,130,246,0.4)" }}>
            I BUILD EXPERIENCES.
          </span>
        </h2>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-3xl">
          {facts.map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex items-center gap-4 border-l border-[#1E3A8A] pl-5 py-2"
            >
              <span className="text-[10px] tracking-[0.3em] text-neutral-500">0{i + 1}</span>
              <span className="text-sm md:text-base tracking-[0.2em] text-neutral-200">{f}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
