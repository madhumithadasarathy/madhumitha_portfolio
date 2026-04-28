import React from 'react';

const FilterBar = ({ categories, activeCategory, onFilterChange }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mb-12 relative z-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onFilterChange(cat)}
          className={`px-6 py-2 text-xs font-bold uppercase tracking-widest border transition-all duration-300 rounded-none
            ${activeCategory === cat 
              ? "bg-[#A3FF12]/10 text-[#A3FF12] border-[#A3FF12] shadow-[0_0_15px_rgba(163,255,18,0.3)]" 
              : "border-white/10 text-white/40 hover:border-[#A3FF12]/40 hover:text-white"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
