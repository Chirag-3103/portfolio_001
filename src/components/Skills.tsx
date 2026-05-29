import { motion } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";

const skills = [
  { n: "01", name: "FULL STACK WEB DEV", group: "BUILD" },
  { n: "02", name: "REACT", group: "FRONTEND" },
  { n: "03", name: "JAVASCRIPT", group: "LANGUAGE" },
  { n: "04", name: "HTML & CSS", group: "FOUNDATION" },
  { n: "05", name: "PYTHON", group: "LANGUAGE" },
  { n: "06", name: "JAVA", group: "LANGUAGE" },
  { n: "07", name: "C++", group: "LANGUAGE" },
  { n: "08", name: "C", group: "LANGUAGE" },
  { n: "09", name: "MYSQL", group: "DATABASE" },
];

export function Skills() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="relative px-6 md:px-12 lg:px-20 py-32 md:py-44 border-t border-white/5">
      <div ref={ref} className="reveal max-w-[1500px] mx-auto">
        <div className="mb-20 flex items-baseline justify-between gap-6">
          <p className="text-[10px] tracking-[0.5em] text-[#3B82F6]">— SKILLS</p>
          <p className="hidden md:block text-[10px] tracking-[0.4em] text-neutral-500">STACK / TOOLKIT</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-16 lg:gap-24 items-start">
          <h2 className="font-display font-semibold tracking-[-0.04em] leading-[0.95] text-[14vw] md:text-[8vw] lg:text-[7rem] text-white">
            CODE<br />
            <span className="text-[#3B82F6]" style={{ textShadow: "0 0 30px rgba(59,130,246,0.4)" }}>
              STACK.
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="group min-h-36 bg-black/80 p-6 md:p-8 relative overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at top left, rgba(59,130,246,0.18), transparent 65%)" }}
                />
                <div className="relative flex h-full flex-col justify-between gap-10">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] tracking-[0.3em] text-neutral-600">{skill.n}</span>
                    <span className="text-[10px] tracking-[0.3em] text-[#3B82F6]">{skill.group}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-neutral-200 group-hover:text-white transition-colors duration-500">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
