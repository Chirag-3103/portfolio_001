import { motion } from "framer-motion";
import chirag from "@/assets/chirag.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-32 pb-20">
      <div className="max-w-[1500px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[10px] md:text-xs tracking-[0.5em] text-[#3B82F6] mb-10"
          >
            — CHIRAG KUMAR / PORTFOLIO 2025
          </motion.p>
          <h1 className="font-display font-semibold tracking-[-0.05em] leading-[0.92] text-[12vw] md:text-[8.5vw] lg:text-[7.5rem] text-white">
            {["CRAFT OVER HYPE.", "BUILD WITH PURPOSE.", "CODE LIKE A WEAPON."].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                {i === 2 ? <span className="text-[#3B82F6]" style={{ textShadow: "0 0 30px rgba(59,130,246,0.4)" }}>{line}</span> : line}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 relative flex justify-center"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-10 rounded-full blur-3xl opacity-70"
              style={{ background: "radial-gradient(circle, rgba(59,130,246,0.45), transparent 65%)" }}
            />
            <div
              aria-hidden
              className="absolute -inset-2 rounded-full opacity-60"
              style={{ background: "conic-gradient(from 0deg, #1E3A8A, #3B82F6, #0B1A2A, #1E3A8A)", filter: "blur(8px)" }}
            />
            <motion.img
              src={chirag}
              alt="Chirag Kumar"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-72 w-72 md:h-80 md:w-80 object-cover rounded-full border border-white/10"
              style={{ boxShadow: "0 0 60px rgba(59,130,246,0.35), inset 0 0 40px rgba(0,0,0,0.4)" }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-0 right-0 flex justify-between px-6 md:px-12 lg:px-20 text-[10px] tracking-[0.4em] text-neutral-500"
      >
        <span>BASED IN INDIA</span>
        <span className="hidden md:inline">SCROLL TO EXPLORE ↓</span>
        <span>AVAILABLE FOR WORK</span>
      </motion.div>
    </section>
  );
}
