import { Greet } from "./Greet";

export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-10 border-t border-white/5">
      <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10px] tracking-[0.4em] uppercase text-neutral-600">
        <p>© {new Date().getFullYear()} CHIRAG KUMAR</p>
        <p className="text-[#3B82F6]/70">CRAFTED WITH PURPOSE</p>
        <div className="flex items-center gap-4">
          <p>INDIA / IST</p>
          <Greet />
        </div>
      </div>
    </footer>
  );
}
