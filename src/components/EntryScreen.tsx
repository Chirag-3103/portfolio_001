import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function EntryScreen({ onEnter }: { onEnter: () => void }) {
  const [open, setOpen] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1400);
    return () => clearTimeout(t);
  }, []);

  const enter = () => {
    if (!ready) return;
    setOpen(false);
    setTimeout(onEnter, 800);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") enter();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="entry"
          onClick={enter}
          className={`fixed inset-0 z-[200] flex items-center justify-center bg-black select-none ${ready ? "cursor-pointer" : ""}`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(59,130,246,0.18), transparent 55%)",
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center justify-center text-center px-6"
          >
            <motion.h1
              animate={{
                textShadow: [
                  "0 0 20px rgba(59,130,246,0.25)",
                  "0 0 45px rgba(59,130,246,0.55)",
                  "0 0 20px rgba(59,130,246,0.25)",
                ],
              }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="font-display font-semibold tracking-[-0.04em] leading-none text-[12vw] md:text-[6rem] text-white"
            >
              CHIRAG KUMAR
            </motion.h1>

            <div className="mt-6 h-4 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {!ready ? (
                  <motion.p
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.35, 1, 0.35] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    className="text-[10px] md:text-xs tracking-[0.5em] text-[#3B82F6]"
                  >
                    Click anywhere to start😊...
                  </motion.p>
                ) : (
                  <motion.p
                    key="tap"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[10px] md:text-xs tracking-[0.5em] text-[#3B82F6]"
                    style={{ textShadow: "0 0 12px rgba(59,130,246,0.6)" }}
                  >
                    <motion.span
                      animate={{ opacity: [0.45, 1, 0.45] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      CLICK TO START
                    </motion.span>
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
