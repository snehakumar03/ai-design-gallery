import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Organic Skincare Launch",
    brief:
      "We need a calming, premium poster for our new rosehip serum. The mood should be natural, soft, and trustworthy. Think morning light, dewy petals, and clean minimal typography.",
    bullets: [
      "Target audience: women 25–40 who value clean beauty",
      "Tone: calm, luxurious, approachable",
      "Key visual: rose petals in soft daylight",
    ],
    overlayImage:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
    bgImages: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&q=80",
    ],
  },
  {
    id: 2,
    title: "Artisan Coffee Rebrand",
    brief:
      "A local roastery wants a warmer, more premium identity. The new look should feel handcrafted and inviting, with earthy tones and bold yet friendly typography.",
    bullets: [
      "Target audience: urban professionals and coffee enthusiasts",
      "Tone: warm, grounded, authentic",
      "Key visual: ceramic cup on textured wood",
    ],
    overlayImage:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
    bgImages: [
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
    ],
  },
  {
    id: 3,
    title: "Wellness Retreat Poster",
    brief:
      "Design a serene poster for a weekend mindfulness retreat. The visual should evoke stillness, nature, and inner balance through soft colors and airy composition.",
    bullets: [
      "Target audience: wellness seekers and burnt-out creatives",
      "Tone: peaceful, restorative, gentle",
      "Key visual: open air yoga space surrounded by greenery",
    ],
    overlayImage:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    bgImages: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80",
    ],
  },
];

export default function BeforeAfter() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  const slide = slides[index];

  return (
    <section className="py-24 px-6 bg-cream-dark/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-deep-blue">
            From Idea to Final Art
          </h2>
          <p className="mt-2 text-deep-blue/60">
            See how a simple brief transforms into a polished design.
          </p>
        </motion.div>

        <div
          className="grid md:grid-cols-2 gap-8 items-stretch"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left: Brief */}
          <div className="relative overflow-hidden rounded-3xl bg-white border border-cream-dark min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col justify-center p-8 md:p-12 h-full"
              >
                <span className="text-xs font-bold text-terracotta uppercase tracking-widest">
                  The Brief
                </span>
                <h3 className="mt-4 font-serif text-2xl text-deep-blue">
                  {slide.title}
                </h3>
                <p className="mt-4 text-deep-blue/70 leading-relaxed">
                  {slide.brief}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-deep-blue/70">
                  {slide.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-green mt-2" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Layered images */}
          <div className="relative overflow-hidden rounded-3xl bg-white border border-cream-dark shadow-lg min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                {/* Background image 1 */}
                <div className="absolute bottom-6 left-6 w-40 h-52 md:w-48 md:h-64 rounded-2xl overflow-hidden shadow-md rotate-[-6deg] border-4 border-white">
                  <img
                    src={slide.bgImages[0]}
                    alt="Mood reference 1"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Background image 2 */}
                <div className="absolute bottom-6 right-6 w-40 h-52 md:w-48 md:h-64 rounded-2xl overflow-hidden shadow-md rotate-[6deg] border-4 border-white">
                  <img
                    src={slide.bgImages[1]}
                    alt="Mood reference 2"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlay image - semi-transparent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10">
                  <img
                    src={slide.overlayImage}
                    alt="Final design"
                    className="w-full h-full object-cover opacity-85"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white border border-cream-dark flex items-center justify-center text-deep-blue hover:bg-cream-dark transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
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
    </section>
  );
}
