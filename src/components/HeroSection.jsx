import React, { useState, useEffect } from 'react';
import anime from 'animejs';

const RadarScanner = () => (
  <div className="relative w-32 h-32 md:w-48 md:h-48 border border-[#A3FF12]/20 rounded-full flex items-center justify-center">
    <div className="absolute inset-0 border border-[#A3FF12]/10 rounded-full scale-75" />
    <div className="absolute inset-0 border border-[#A3FF12]/10 rounded-full scale-50" />
    {/* Sweep Animation */}
    <div className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite]" 
         style={{ background: 'conic-gradient(from 0deg, transparent 0%, rgba(163,255,18,0.2) 50%, transparent 100%)' }} />
    {/* Pulsing Nodes */}
    <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-[#A3FF12] rounded-full animate-pulse shadow-[0_0_8px_#A3FF12]" />
    <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-[#A3FF12] rounded-full animate-pulse shadow-[0_0_8px_#A3FF12]" style={{ animationDelay: '1s' }} />
    <div className="text-[8px] text-[#A3FF12]/40 font-mono tracking-widest absolute bottom-2">SCAN_ACTIVE</div>
  </div>
);

const StatsPanel = () => {
  const [stats, setStats] = useState({ cpu: 42, ai: 88, cv: 65 });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        cpu: Math.floor(35 + Math.random() * 15),
        ai: Math.floor(82 + Math.random() * 10),
        cv: Math.floor(55 + Math.random() * 20)
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-6 w-full max-w-[200px] font-mono">
      {[
        { label: 'CPU_LOAD', val: stats.cpu },
        { label: 'AI_ENGINE', val: stats.ai },
        { label: 'CV_MODULE', val: stats.cv }
      ].map(stat => (
        <div key={stat.label} className="group">
          <div className="flex justify-between text-[10px] text-white/40 group-hover:text-[#A3FF12]/80 mb-2 tracking-tighter transition-colors">
            <span>{stat.label}</span>
            <span className="text-[#A3FF12]">{stat.val}%</span>
          </div>
          <div className="h-1 bg-white/5 w-full relative">
            <div className="h-full bg-[#A3FF12] transition-all duration-1000 ease-in-out shadow-[0_0_8px_rgba(163,255,18,0.3)]" style={{ width: `${stat.val}%` }} />
            <div className="absolute -right-1 top-0 h-full w-[2px] bg-white animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
};

const HeroSection = ({ categories, activeCategory, onFilterChange }) => {
  useEffect(() => {
    // Count-up animation for metrics
    const metrics = document.querySelectorAll('.metric-val');
    metrics.forEach(m => {
      const val = m.getAttribute('data-val');
      if (val) {
        anime({
          targets: m,
          innerHTML: [0, val],
          round: 1,
          easing: 'easeOutExpo',
          duration: 2500,
          delay: 800
        });
      }
    });
  }, []);

  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden border-b border-white/5">
      {/* Background HUD Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" 
           style={{ backgroundImage: 'linear-gradient(rgba(163,255,18,1) 1px, transparent 1px), linear-gradient(90deg, rgba(163,255,18,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      {/* Horizontal Signal Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#A3FF12]/10 to-transparent animate-[pulse_4s_infinite]" />
        <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[pulse_6s_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP HUD BAR */}
        <div className="flex justify-between items-center mb-16 border-b border-white/10 pb-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#A3FF12] rounded-full animate-ping shadow-[0_0_10px_#A3FF12]" />
              <span className="text-[11px] text-[#A3FF12] font-black tracking-[0.3em] uppercase">SYSTEM_ONLINE</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-[10px] font-medium tracking-[0.4em] text-white/30 uppercase hidden sm:block">PROJECT_ANALYTICS_V4.2.0</span>
          </div>
          <div className="flex items-center gap-4 text-[9px] text-white/20 font-mono tracking-widest">
            <span className="hidden md:block">LOC: 12.9716° N, 77.5946° E</span>
            <span className="w-px h-3 bg-white/10 hidden md:block" />
            <span>SESSION_0xFA23</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT PANEL: Live Stats */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="border-l-2 border-[#A3FF12]/30 pl-6 py-2">
              <StatsPanel />
              <div className="mt-8 text-[8px] text-white/20 uppercase tracking-[0.3em] leading-relaxed font-mono">
                Real-time telemetry <br/> processing active
              </div>
            </div>
          </div>

          {/* CENTER PANEL: Title & Metrics */}
          <div className="col-span-1 lg:col-span-6 text-center">
            <div className="inline-block mb-4 px-3 py-1 border border-[#A3FF12]/20 bg-[#A3FF12]/5 text-[9px] text-[#A3FF12] tracking-[0.5em] uppercase font-bold">
              Engineering Hub
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-tight">
              <span className="text-white">System</span> <br/>
              <span className="text-[#A3FF12] drop-shadow-[0_0_30px_rgba(163,255,18,0.5)]">Dashboard</span>
            </h1>
            
            <div className="flex justify-center items-center gap-10 md:gap-16 text-[11px] md:text-sm font-mono tracking-[0.3em] text-white/50">
              <div className="flex flex-col items-center group">
                <span className="metric-val text-white text-2xl md:text-4xl font-black mb-2 group-hover:text-[#A3FF12] transition-colors" data-val="30">0</span>
                <span className="uppercase text-[8px] md:text-[9px] font-bold tracking-[0.4em] opacity-40">Nodes_Built</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col items-center group">
                <span className="metric-val text-white text-2xl md:text-4xl font-black mb-2 group-hover:text-[#A3FF12] transition-colors" data-val="5">0</span>
                <span className="uppercase text-[8px] md:text-[9px] font-bold tracking-[0.4em] opacity-40">Domains_Sync</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-[#A3FF12] rounded-full animate-pulse" />
                  <span className="text-white text-xl md:text-2xl font-black">ACTIVE</span>
                </div>
                <span className="uppercase text-[8px] md:text-[9px] font-bold tracking-[0.4em] opacity-40">Core_State</span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Radar */}
          <div className="hidden lg:flex lg:col-span-3 justify-end items-center">
            <div className="relative p-6 border-r-2 border-[#A3FF12]/30 pr-10">
              <RadarScanner />
              <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#A3FF12]/40 to-transparent" />
            </div>
          </div>

        </div>

        {/* SYSTEM TOGGLES (Filter Nav) */}
        <div className="mt-24 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onFilterChange(category)}
              className={`
                group relative px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500
                ${activeCategory === category 
                  ? 'text-[#A3FF12] bg-[#A3FF12]/5' 
                  : 'text-white/30 hover:text-white bg-white/[0.02]'}
              `}
            >
              {/* Button Border/Accents */}
              <div className={`absolute inset-0 border transition-all duration-500 ${activeCategory === category ? 'border-[#A3FF12] shadow-[0_0_20px_rgba(163,255,18,0.2)]' : 'border-white/5 group-hover:border-white/20'}`} />
              
              {activeCategory === category && (
                <>
                  <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#A3FF12]" />
                  <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#A3FF12]" />
                </>
              )}
              
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

      </div>
      
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
