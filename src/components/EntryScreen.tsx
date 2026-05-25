import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function EntryScreen({ onEnter }: { onEnter: () => void }) {
  const [open, setOpen] = React.useState(true);
  const [ready, setReady] = React.useState(false);
  const [prankActive, setPrankActive] = React.useState(false);
  const [prankProgress, setPrankProgress] = React.useState("Accessing system-00121...");
  const [prankComplete, setPrankComplete] = React.useState(false);
  const prankTimers = React.useRef<number[]>([]);

  React.useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 1400);
    return () => window.clearTimeout(t);
  }, []);

  React.useEffect(() => {
    return () => {
      prankTimers.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const enter = () => {
    if (!ready || prankActive) return;
    setOpen(false);
    window.setTimeout(onEnter, 800);
  };

  const startPrank = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (prankActive) return;
    setPrankActive(true);
    setPrankComplete(false);
    setPrankProgress("Accessing system-00121...");

    const t1 = window.setTimeout(() => setPrankProgress("Loading rogue compiler module..."), 1200);
    const t2 = window.setTimeout(() => setPrankProgress("Injecting playful payload..."), 2400);
    const t3 = window.setTimeout(() => {
      setPrankActive(false);
      setPrankComplete(true);
    }, 3600);

    prankTimers.current = [t1, t2, t3];
  };

  React.useEffect(() => {
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
          className={`fixed inset-0 z-200 flex items-center justify-center bg-black select-none ${ready ? "cursor-pointer" : ""}`}
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

          <button
            type="button"
            onClick={startPrank}
            className="absolute right-6 top-6 z-10 overflow-hidden rounded-3xl border border-red-400/40 bg-gradient-to-br from-red-600 via-red-700 to-red-800 px-4 py-3 shadow-[0_0_40px_rgba(239,68,68,0.35)] transition duration-300 hover:scale-105 hover:shadow-[0_0_55px_rgba(239,68,68,0.5)] focus:outline-none focus:ring-2 focus:ring-red-500/70 animate-pulse"
            aria-label="Start prank"
          >
            <div className="relative flex h-14 w-14 items-center justify-center">
              <span className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_55%)]" />
              <div className="relative text-center">
                <div className="text-[9px] uppercase tracking-[0.4em] text-red-200">Click</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-white">Here</div>
              </div>
            </div>
          </button>

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

          <AnimatePresence>
            {prankActive && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
                className="pointer-events-none absolute right-6 top-20 z-20 w-65 rounded-3xl border border-[#3B82F6]/20 bg-[#02050b]/95 p-4 text-left text-sm text-[#9ae6b4] shadow-2xl backdrop-blur-xl"
              >
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#3B82F6]">Gaining System Access..</p>
                <p className="mt-3 font-mono text-[11px] leading-6 text-[#a7f3d0]">{prankProgress}</p>
                <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-[#3B82F6]"
                    animate={{ width: ["15%", "60%", "100%"] }}
                    transition={{ duration: 3.6, ease: "easeInOut" }}
                  />
                </div>
                <div className="mt-4 border-t border-white/10 pt-3 text-[10px] text-[#cbd5e1]">
                  <p className="font-mono">&gt; ssh root@system-00121</p>
                  <p className="font-mono mt-1">&gt; sudo init_prank --deploy</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {prankComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 z-210 flex items-center justify-center bg-black/70 px-6"
              >
                <motion.div className="w-full max-w-sm rounded-3xl border border-white/10 bg-[#0B1120]/95 p-6 text-center text-white shadow-2xl backdrop-blur-xl">
                  <div className="mb-4 text-[2rem]">😎</div>
                  <h2 className="text-2xl font-semibold tracking-tight text-white">You have been pranked</h2>
                  <p className="mt-3 text-sm text-neutral-300">
                    Nice try! The system spoof was only for fun — hit the button below to return.
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPrankComplete(false);
                    }}
                    className="mt-6 inline-flex rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/20"
                  >
                    Close
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
