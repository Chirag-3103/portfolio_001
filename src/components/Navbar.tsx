import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? "py-4 backdrop-blur-md bg-black/40" : "py-6"
      }`}
    >
      <nav className="mx-auto max-w-[1500px] px-6 md:px-12 lg:px-20 flex items-center justify-between">
        <a href="#top" className="text-[11px] tracking-[0.4em] font-medium text-white">
          CHIRAG<span className="text-[#3B82F6]">..</span>
        </a>
        <ul className="flex items-center gap-5 md:gap-8 text-[10px] md:text-xs tracking-[0.3em] text-neutral-400">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition-colors">
                {l.label.toUpperCase()}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/chirag_resume.pdf"
              download="Chirag_Kumar_Resume.pdf"
              className="hover:text-[#3B82F6] transition-colors"
            >
              RESUME
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
