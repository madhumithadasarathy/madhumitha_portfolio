import React from 'react';

const HeroSection = ({ categories, activeCategory, onFilterChange }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center px-12 md:px-24 overflow-hidden bg-[#A3FF12]">
      
      {/* Deep Cinematic Vignette (Intense circular spotlight) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,0.38)_100%)] z-10 pointer-events-none" />

      {/* Subtle Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay z-10" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Background Ambience (Darker Green Glow) */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-black/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Left Column: Compact Typography with White Subtitle */}
      <div className="flex-1 py-20 z-20 flex items-center">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-black/20" />
            <span className="text-[10px] text-black/50 font-black tracking-[0.8em] uppercase italic">System_Core_v5.4</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-[0.8] uppercase select-none">
            I Build <br />
            <span className="text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)] italic">Intelligent</span> <br />
            Systems
          </h1>

          <p className="mt-8 text-base md:text-lg text-white font-medium tracking-tight max-w-xl leading-relaxed drop-shadow-md">
            30+ projects spanning frontend, full stack, AI/ML, generative AI and computer vision — designed with a systems-first approach.
          </p>

          {/* Minimalist Filter Pills */}
          <div className="mt-12 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onFilterChange(category)}
                className={`
                  px-8 py-3 rounded-full text-[9px] font-black uppercase tracking-[0.4em] transition-all duration-500
                  ${activeCategory === category 
                    ? 'bg-black text-white scale-105 shadow-[0_15px_40px_rgba(0,0,0,0.2)] z-10' 
                    : 'bg-black/5 border border-black/10 text-black/50 hover:text-black hover:border-black/40'}
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Centered Larger Static Hero Image */}
      <div className="flex-1 w-full h-[500px] md:h-screen flex items-center justify-center relative z-20">
        <div className="relative w-full h-full flex items-center justify-center p-12">
          <img 
            src="/projects_hero.png" 
            alt="Systems Architecture Hero" 
            className="w-full h-auto max-w-lg object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
          />
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
