import React, { useEffect, useState } from 'react';
import anime from 'animejs';

const SystemFeed = () => (
  <div className="flex flex-col gap-6 font-mono opacity-20 select-none pointer-events-none">
    {[
      { label: 'AI_ENGINE', status: 'ONLINE' },
      { label: 'CV_MODULE', status: 'SYNCED' },
      { label: 'STACK_CORE', status: 'ACTIVE' }
    ].map((item, i) => (
      <div key={i} className="flex items-center gap-4 animate-[flicker_5s_infinite]" style={{ animationDelay: `${i * 0.8}s` }}>
        <div className="w-1.5 h-1.5 bg-[#A3FF12] rounded-full animate-pulse shadow-[0_0_8px_rgba(163,255,18,0.5)]" />
        <div className="text-[10px] tracking-[0.4em] text-white">
          {item.label} <span className="text-[#A3FF12]/40 mx-2">→</span> <span className="text-[#A3FF12]">{item.status}</span>
        </div>
      </div>
    ))}
    <div className="h-px w-24 bg-gradient-to-r from-white/20 to-transparent mt-4" />
    <div className="text-[8px] text-white/10 tracking-[0.2em] leading-relaxed">
      AUTO_SYNC: OK <br/>
      LATENCY: 12ms
    </div>
  </div>
);

const MinimalRadar = () => (
  <div className="relative w-48 h-48 opacity-[0.15] pointer-events-none">
    <div className="absolute inset-0 border border-white/20 rounded-full" />
    <div className="absolute inset-8 border border-white/10 rounded-full" />
    <div className="absolute inset-16 border border-white/5 rounded-full" />
    
    {/* Sweep Animation */}
    <div className="absolute inset-0 rounded-full animate-[spin_8s_linear_infinite]" 
         style={{ background: 'conic-gradient(from 0deg, transparent 0%, rgba(163,255,18,0.2) 50%, transparent 100%)' }} />
    
    {/* Pulsing points */}
    <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-[#A3FF12] rounded-full animate-pulse shadow-[0_0_10px_#A3FF12]" />
    <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_10px_#fff]" style={{ animationDelay: '2s' }} />
    
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8px] text-white/20 font-bold tracking-[0.5em] uppercase">
      Scan
    </div>
  </div>
);

const HeroSection = ({ categories, activeCategory, onFilterChange }) => {
  useEffect(() => {
    // Count-up animation with completion pulse
    const metrics = document.querySelectorAll('.metric-count');
    metrics.forEach(m => {
      const val = m.getAttribute('data-val');
      if (val) {
        anime({
          targets: m,
          innerHTML: [0, val],
          round: 1,
          easing: 'easeOutExpo',
          duration: 2500,
          delay: 700,
          complete: () => {
            // Pulse the parent capsule
            anime({
              targets: m.closest('.metric-capsule'),
              borderColor: ['rgba(255,255,255,0.1)', '#A3FF12', 'rgba(255,255,255,0.1)'],
              boxShadow: ['0 0 0px rgba(163,255,18,0)', '0 0 20px rgba(163,255,18,0.2)', '0 0 0px rgba(163,255,18,0)'],
              duration: 1000,
              easing: 'easeInOutQuad'
            });
          }
        });
      }
    });
  }, []);

  return (
    <section className="relative pt-48 pb-28 px-6 overflow-hidden border-b border-white/5">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      
      {/* Diagonal Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-10 animate-[scanlines_40s_linear_infinite]"
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 120px, rgba(163,255,18,0.05) 120px, rgba(163,255,18,0.05) 121px)' }} />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* PERIPHERAL LAYOUT (SIT AT THE EDGES) */}
        <div className="absolute top-0 left-0 hidden 2xl:block">
          <SystemFeed />
        </div>
        <div className="absolute top-0 right-0 hidden 2xl:block">
          <MinimalRadar />
        </div>

        {/* PRIMARY FOCUS: CENTER TITLE */}
        <div className="text-center mb-16 animate-[breathe_10s_easeInOutSine_infinite]">
          <div className="inline-block mb-6 px-4 py-1.5 border border-white/10 bg-white/[0.02] text-[10px] text-white/30 tracking-[0.6em] uppercase font-bold backdrop-blur-sm">
            Authenticated_System_Access
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tight uppercase leading-none select-none">
            <span className="text-white">System</span><br/>
            <span className="relative text-[#A3FF12] drop-shadow-[0_0_30px_rgba(163,255,18,0.3)] overflow-hidden inline-block py-2 px-4">
              Dashboard
              {/* Subtle Shimmer Sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_6s_infinite] pointer-events-none" />
            </span>
          </h1>
        </div>

        {/* METRICS STRIP (SLEEK CAPSULE BLOCKS) */}
        <div className="flex flex-wrap justify-center gap-6 mb-24">
          {[
            { label: 'Projects', val: 30 },
            { label: 'Domains', val: 5 },
            { label: 'System', val: 'Active' }
          ].map((m, i) => (
            <div key={i} className="metric-capsule group px-8 py-3 border border-white/10 bg-white/[0.01] backdrop-blur-md transition-all duration-700 hover:border-white/20">
               <div className="flex items-center gap-4 font-mono">
                  {typeof m.val === 'number' ? (
                    <span className="metric-count text-white text-2xl font-black group-hover:text-[#A3FF12] transition-colors" data-val={m.val}>0</span>
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#A3FF12] rounded-full animate-pulse shadow-[0_0_10px_#A3FF12]" />
                      <span className="text-[#A3FF12] text-xl font-black tracking-widest">{m.val}</span>
                    </div>
                  )}
                  <div className="w-px h-4 bg-white/10" />
                  <span className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-bold group-hover:text-white/50 transition-colors">{m.label}</span>
               </div>
            </div>
          ))}
        </div>

        {/* TACTILE SYSTEM TOGGLES */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onFilterChange(category)}
              className={`
                group relative px-8 py-4 text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-500
                active:scale-95
                ${activeCategory === category 
                  ? 'text-[#A3FF12] border-[#A3FF12] bg-[#A3FF12]/10 shadow-[0_15px_30px_-10px_rgba(163,255,18,0.4)] -translate-y-2' 
                  : 'text-white/20 border-white/5 hover:border-white/20 hover:text-white/60 hover:-translate-y-1'}
                border backdrop-blur-xl
              `}
            >
              <span className="relative z-10">{category}</span>
              {/* Selection Accent */}
              {activeCategory === category && (
                 <div className="absolute top-0 left-0 w-full h-[2px] bg-[#A3FF12] shadow-[0_0_10px_#A3FF12]" />
              )}
              {/* Corner Indicators */}
              <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          15% { transform: translateX(200%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.01); }
        }
        @keyframes scanlines {
          from { background-position: 0 0; }
          to { background-position: 1000px 1000px; }
        }
        @keyframes flicker {
          0%, 18%, 22%, 25%, 53%, 57%, 100% { opacity: 1; }
          20%, 24%, 55% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
