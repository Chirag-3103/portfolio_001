import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Greet } from "./Greet";

const icons = [
  { Icon: Instagram, href: "https://instagram.com/i_am_ciraq_", label: "Instagram" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/chirag-kumar-5b832a409", label: "LinkedIn" },
  { Icon: Github, href: "https://github.com/Chirag-3103", label: "GitHub" },
  { Icon: Mail, href: "mailto:kumarchirag3103@gmail.com", label: "Email" },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-12 lg:px-20 py-40 md:py-56 border-t border-white/5 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center bottom, rgba(30,58,138,0.35), transparent 60%)" }}
      />
      <div className="relative max-w-[1500px] mx-auto text-center">
        <p className="text-[10px] tracking-[0.5em] text-[#3B82F6] mb-12">— LET'S CONNECT</p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-semibold tracking-[-0.04em] leading-[0.95] text-[14vw] md:text-[9vw] lg:text-[9rem] text-white"
        >
          GET<br />
          <span className="text-[#3B82F6]" style={{ textShadow: "0 0 40px rgba(59,130,246,0.5)" }}>IN TOUCH.</span>
        </motion.h2>

        <a
          href="mailto:kumarchirag3103@gmail.com"
          className="inline-block mt-16 text-sm md:text-base tracking-[0.3em] text-neutral-300 hover:text-white border-b border-[#1E3A8A] pb-1 transition-colors"
        >
          KUMARCHIRAG3103@GMAIL.COM
        </a>

        <div className="mt-8">
          <Greet />
        </div>

        <div className="mt-20 flex items-center justify-center gap-8 md:gap-12">
          {icons.map(({ Icon, href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ scale: 1.15, y: -4 }}
              className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-neutral-300 hover:text-white hover:border-[#3B82F6] transition-colors"
              style={{}}
            >
              <span
                aria-hidden
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: "0 0 30px rgba(59,130,246,0.5)" }}
              />
              <Icon className="relative h-5 w-5" strokeWidth={1.4} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
