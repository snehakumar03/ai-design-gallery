import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../data/posters";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="py-24 px-6 bg-cream-dark/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-deep-blue">What Clients Say</h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-white border border-cream-dark p-8 md:p-12 min-h-[260px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="text-center max-w-2xl"
              >
                <Quote size={32} className="mx-auto text-terracotta/40" />
                <p className="mt-4 text-lg md:text-xl text-deep-blue/80 leading-relaxed font-light">
                  &ldquo;{testimonials[index].text}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="font-serif text-lg text-deep-blue">
                    {testimonials[index].name}
                  </p>
                  <p className="text-sm text-deep-blue/50">
                    {testimonials[index].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-cream-dark flex items-center justify-center text-deep-blue hover:bg-cream-dark transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === index ? "bg-terracotta w-5" : "bg-deep-blue/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-cream-dark flex items-center justify-center text-deep-blue hover:bg-cream-dark transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
