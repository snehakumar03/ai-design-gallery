export default function CategoryFilter({ categories, active, onSelect }) {
  return (
    <div className="flex items-center justify-center gap-3 flex-wrap px-6">
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`
              px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${isActive
                ? "bg-terracotta text-white shadow-md shadow-terracotta/15"
                : "bg-white text-deep-blue/70 border border-cream-dark hover:border-terracotta/30 hover:text-terracotta"
              }
            `}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
