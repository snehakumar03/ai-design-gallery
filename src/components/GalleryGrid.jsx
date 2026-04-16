import { motion } from "framer-motion";

export default function GalleryGrid({ posters, onSelect }) {
  return (
    <div className="masonry px-6">
      {posters.map((poster, index) => (
        <motion.div
          key={poster.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          onClick={() => onSelect(poster)}
          className="masonry-item group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="overflow-hidden">
            <img
              src={poster.imageUrl}
              alt={poster.title}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <div className="absolute inset-0 bg-deep-blue/0 group-hover:bg-deep-blue/30 transition-colors duration-300 flex items-center justify-center">
            <span className="px-5 py-2 rounded-full bg-white/90 text-deep-blue text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              View Details
            </span>
          </div>

          <div className="p-4">
            <span className="text-xs font-medium text-terracotta uppercase tracking-wide">
              {poster.category}
            </span>
            <h3 className="mt-1 font-serif text-lg text-deep-blue">
              {poster.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
