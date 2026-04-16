import { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import GalleryGrid from "./components/GalleryGrid";
import PosterDetail from "./components/PosterDetail";
import IdeaGenerator from "./components/IdeaGenerator";
import BeforeAfter from "./components/BeforeAfter";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { posters, categories } from "./data/posters";

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPoster, setSelectedPoster] = useState(null);

  const filteredPosters = useMemo(() => {
    if (activeCategory === "All") return posters;
    return posters.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      <Hero />

      <section id="gallery" className="pt-10 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-deep-blue">
              Design Gallery
            </h2>
            <p className="mt-2 text-deep-blue/60">
              Browse our curated collection of AI-crafted visuals
            </p>
          </div>
          <CategoryFilter
            categories={categories}
            active={activeCategory}
            onSelect={setActiveCategory}
          />
          <div className="mt-10">
            <GalleryGrid posters={filteredPosters} onSelect={setSelectedPoster} />
          </div>
        </div>
      </section>

      <IdeaGenerator />
      <BeforeAfter />
      <Services />
      <Testimonials />
      <Contact />

      <footer className="py-8 px-6 border-t border-cream-dark">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-deep-blue/50">
          <p>&copy; {new Date().getFullYear()} ArtifyAI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#gallery" className="hover:text-terracotta transition-colors">Gallery</a>
            <a href="#services" className="hover:text-terracotta transition-colors">Services</a>
            <a href="#contact" className="hover:text-terracotta transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {selectedPoster && (
        <PosterDetail poster={selectedPoster} onClose={() => setSelectedPoster(null)} />
      )}
    </div>
  );
}

export default App;
