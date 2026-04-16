import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wand2, Lightbulb } from "lucide-react";

const suggestionBank = [
  {
    prompt: "Minimal travel poster, dusty rose and cream palette, abstract landscape shapes, elegant serif type, soft grain texture, wanderlust mood",
    direction: "Go for an editorial travel magazine look with generous whitespace and earthy tones."
  },
  {
    prompt: "Sustainable fashion social post, muted green and off-white, organic linen textures, delicate botanical accents, modern sans-serif headline",
    direction: "Emphasize natural materials and a slow-living aesthetic. Keep typography light and airy."
  },
  {
    prompt: "Jazz concert poster, deep blue background, terracotta accents, vintage instrument silhouette, bold retro typography, moody atmosphere",
    direction: "Lean into contrast and nostalgia. Use a strong focal point with warm accent colors."
  },
  {
    prompt: "Artisan bakery branding, warm beige and terracotta, hand-drawn bread illustrations, friendly rounded typography, rustic charm",
    direction: "Create a cozy, approachable feel with tactile textures and homemade character."
  }
];

export default function IdeaGenerator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      const pick = suggestionBank[Math.floor(Math.random() * suggestionBank.length)];
      setResult(pick);
      setLoading(false);
    }, 900);
  };

  return (
    <section id="generator" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-terracotta/10 text-terracotta text-sm font-medium">
            <Wand2 size={16} />
            <span>AI-Powered</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl text-deep-blue">
            Mini Idea Generator
          </h2>
          <p className="mt-2 text-deep-blue/60">
            Describe your design idea and get a creative direction instantly.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleGenerate}
          className="mt-8"
        >
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe your design idea…"
              rows={4}
              className="w-full p-5 rounded-2xl bg-white border border-cream-dark text-deep-blue placeholder:text-deep-blue/40 focus:outline-none focus:ring-2 focus:ring-terracotta/20 resize-none"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="absolute bottom-4 right-4 px-5 py-2 rounded-full bg-terracotta text-white text-sm font-medium hover:bg-terracotta/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Thinking…" : "Generate"}
            </button>
          </div>
        </motion.form>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="mt-6 p-6 rounded-2xl bg-white border border-cream-dark shadow-sm"
            >
              <div className="flex items-center gap-2 text-muted-green">
                <Lightbulb size={18} />
                <span className="text-sm font-semibold">Suggested Prompt</span>
              </div>
              <p className="mt-2 text-deep-blue/80 italic">
                &ldquo;{result.prompt}&rdquo;
              </p>

              <div className="mt-4 pt-4 border-t border-cream-dark">
                <span className="text-sm font-semibold text-deep-blue">Creative Direction</span>
                <p className="mt-1 text-sm text-deep-blue/70">{result.direction}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
