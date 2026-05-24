import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };
    const glow = { x: pos.x, y: pos.y };

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const isInteractive = !!t.closest("a, button, [data-magnetic], input, textarea, [role='button']");
      setHovering(isInteractive);
    };

    let raf = 0;
    const tick = () => {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      glow.x += (pos.x - glow.x) * 0.08;
      glow.y += (pos.y - glow.y) * 0.08;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      if (glowRef.current) glowRef.current.style.transform = `translate3d(${glow.x}px, ${glow.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.classList.add("cursor-none-all");

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("cursor-none-all");
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-[300] h-[320px] w-[320px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(120,180,255,0.10), transparent 60%)",
          filter: "blur(10px)",
        }}
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[301] rounded-full border border-white/40 transition-[width,height,opacity,background-color] duration-300 ease-out ${
          hovering ? "h-12 w-12 bg-white/5" : "h-8 w-8"
        }`}
      />
      <div
        ref={dotRef}
        className={`pointer-events-none fixed left-0 top-0 z-[302] rounded-full bg-white transition-[width,height] duration-200 ${
          hovering ? "h-1 w-1 opacity-60" : "h-1.5 w-1.5"
        }`}
      />
    </>
  );
}
