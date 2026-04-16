import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

const steps = ["type", "click", "process", "result"];
const stepDurations = [2200, 600, 1600, 2800];

export default function IdeaGeneratorDemo() {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const currentDuration = stepDurations[stepIndex];
    const timer = setTimeout(() => {
      setStepIndex((prev) => (prev + 1) % steps.length);
    }, currentDuration);
    return () => clearTimeout(timer);
  }, [stepIndex]);

  const step = steps[stepIndex];
  const promptText = "A retro travel poster for Kyoto…";

  return (
    <div className="mx-auto mt-8 max-w-sm">
      <div className="relative overflow-hidden rounded-2xl border border-cream-dark bg-white p-4 shadow-sm">
        {/* Mock textarea */}
        <div className="relative min-h-[5.5rem] rounded-xl border border-cream-dark bg-cream p-3">
          <div className="text-sm text-deep-blue/80">
            {step === "type" ? (
              <TypingText text={promptText} duration={1.8} />
            ) : (
              <span>{promptText}</span>
            )}
          </div>

          {/* Mock Generate button */}
          <motion.button
            animate={
              step === "click"
                ? { scale: [1, 0.92, 1] }
                : { scale: 1 }
            }
            transition={{ duration: 0.3 }}
            className={`absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-white transition-colors ${
              step === "click" || step === "process"
                ? "bg-terracotta"
                : "bg-terracotta/90"
            }`}
          >
            <Sparkles size={12} />
            Generate
          </motion.button>

          {/* Processing overlay inside textarea */}
          <AnimatePresence>
            {step === "process" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center rounded-xl bg-cream/80 backdrop-blur-[1px]"
              >
                <div className="flex items-center gap-2 text-sm font-medium text-deep-blue/70">
                  <span className="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-deep-blue/20 border-t-terracotta" />
                  Thinking
                  <ThinkingDots />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Generated result card */}
        <AnimatePresence mode="wait">
          {step === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mt-3"
            >
              <div className="overflow-hidden rounded-xl border border-cream-dark bg-white shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <img
                    src="/icons.svg"
                    alt="Generated preview"
                    className="h-full w-full object-cover"
                  />
                  {/* Decorative gradient overlay so icons.svg looks like art */}
                  <div className="absolute inset-0 bg-gradient-to-br from-terracotta/30 via-deep-blue/20 to-muted-green/30" />
                </div>
                <div className="px-3 py-2">
                  <p className="text-xs font-medium text-deep-blue">
                    Kyoto Wanderlust
                  </p>
                  <p className="text-[10px] text-deep-blue/60">
                    Retro palette • bold typography • dreamy mood
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Step indicators */}
      <div className="mt-3 flex items-center justify-center gap-1.5">
        {steps.map((s, i) => (
          <motion.div
            key={s}
            animate={{
              backgroundColor: i === stepIndex ? "#E07A5F" : "#EFEBE6",
              scale: i === stepIndex ? 1.1 : 1,
            }}
            className="h-1.5 w-1.5 rounded-full"
            transition={{ duration: 0.25 }}
          />
        ))}
      </div>
    </div>
  );
}

function TypingText({ text, duration }) {
  return (
    <motion.span
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: (i / text.length) * duration,
            duration: 0.05,
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="ml-0.5 inline-block h-3.5 w-0.5 align-middle bg-terracotta"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
      />
    </motion.span>
  );
}

function ThinkingDots() {
  return (
    <span className="inline-flex w-4">
      <motion.span
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
      >
        .
      </motion.span>
      <motion.span
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
          delay: 0.2,
        }}
      >
        .
      </motion.span>
      <motion.span
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
          delay: 0.4,
        }}
      >
        .
      </motion.span>
    </span>
  );
}
