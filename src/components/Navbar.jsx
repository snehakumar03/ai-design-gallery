import { motion } from "framer-motion";
import { Palette } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-cream-dark"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-terracotta flex items-center justify-center text-white">
            <Palette size={16} />
          </div>
          <span className="font-serif text-lg font-medium text-deep-blue">
            ArtifyAI
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-deep-blue/80">
          <a href="#gallery" className="hover:text-terracotta transition-colors">Gallery</a>
          <a href="#generator" className="hover:text-terracotta transition-colors">Generator</a>
          <a href="#services" className="hover:text-terracotta transition-colors">Services</a>
          <a href="#contact" className="hover:text-terracotta transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex px-4 py-2 rounded-full bg-deep-blue text-white text-sm font-medium hover:bg-deep-blue/90 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </motion.nav>
  );
}
