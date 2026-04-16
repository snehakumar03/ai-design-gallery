import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Briefcase, ArrowRight } from "lucide-react";

export default function PosterDetail({ poster, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {poster && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] bg-deep-blue/40 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-cream rounded-3xl shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-deep-blue transition-colors"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-cream-dark/30 p-6 md:p-10 flex items-center justify-center">
                <img
                  src={poster.imageUrl}
                  alt={poster.title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-2xl shadow-lg"
                />
              </div>

              <div className="p-6 md:p-10 flex flex-col">
                <span className="text-xs font-semibold text-terracotta uppercase tracking-wider">
                  {poster.category}
                </span>
                <h2 className="mt-3 font-serif text-3xl md:text-4xl text-deep-blue">
                  {poster.title}
                </h2>
                <p className="mt-4 text-deep-blue/70 leading-relaxed">
                  {poster.description}
                </p>

                <div className="mt-6 p-5 rounded-2xl bg-white border border-cream-dark">
                  <div className="flex items-center gap-2 text-muted-green">
                    <Sparkles size={18} />
                    <span className="text-sm font-semibold uppercase tracking-wide">
                      Prompt Used
                    </span>
                  </div>
                  <p className="mt-2 text-deep-blue/80 italic text-sm leading-relaxed">
                    &ldquo;{poster.prompt}&rdquo;
                  </p>
                </div>

                <div className="mt-5 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-terracotta/10 flex items-center justify-center text-terracotta shrink-0">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-deep-blue">Use Case</span>
                    <p className="text-sm text-deep-blue/70">{poster.useCase}</p>
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-terracotta text-white font-medium hover:bg-terracotta/90 transition-colors"
                  >
                    Request Similar Design
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
