import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EntryScreen } from "@/components/EntryScreen";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/Background";
import { Cursor } from "@/components/Cursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chirag Kumar — About me" },
      { name: "description", content: "Cinematic portfolio of Chirag Kumar — frontend developer crafting bold, minimal, purposeful experiences." },
      { property: "og:title", content: "Chirag Kumar — Frontend Developer" },
      { property: "og:description", content: "Craft over hype. Build with purpose. Code like a weapon." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  const [entered, setEntered] = useState(false);
  return (
    <>
      <Background />
      <Cursor />
      <EntryScreen onEnter={() => setEntered(true)} />
      <AnimatePresence>
        {entered && (
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
