import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Soft background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-muted-green/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cream-dark/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl font-medium text-deep-blue leading-tight tracking-tight"
        >
          AI Poster Design Gallery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-deep-blue/70 max-w-2xl mx-auto font-sans font-light"
        >
          Creative visuals crafted using AI for modern brands
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#gallery"
            className="px-8 py-3.5 rounded-full bg-terracotta text-white font-medium hover:bg-terracotta/90 transition-all shadow-lg shadow-terracotta/20"
          >
            Explore Designs
          </a>
          <a
            href="#generator"
            className="px-8 py-3.5 rounded-full border border-deep-blue/20 text-deep-blue font-medium hover:bg-deep-blue/5 transition-all"
          >
            Generate Idea
          </a>
        </motion.div>
      </div>
    </section>
  );
}
