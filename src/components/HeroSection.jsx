import React, { useEffect, useState } from 'react';
import anime from 'animejs';

const Tile = ({ children, title, className = "", noPadding = false }) => (
  <div className={`
    relative border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-xl overflow-hidden group
    hover:border-[#A3FF12]/30 transition-all duration-500
    ${noPadding ? '' : 'p-6'}
    ${className}
  `}>
    {title && (
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 bg-[#A3FF12] rounded-full group-hover:animate-ping shadow-[0_0_8px_#A3FF12]" />
        <span className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-black">{title}</span>
      </div>
    )}
    {children}
    {/* Animated Corner Bracket */}
    <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/10 group-hover:border-[#A3FF12]/40 transition-all" />
    <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/10 group-hover:border-[#A3FF12]/40 transition-all" />
  </div>
);

const HeroSection = ({ categories, activeCategory, onFilterChange }) => {
  const [telemetry, setTelemetry] = useState({ cpu: 45, gpu: 72, net: 14 });

  useEffect(() => {
    // Telemetry Jitter Animation
    const interval = setInterval(() => {
      setTelemetry({
        cpu: Math.floor(40 + Math.random() * 15),
        gpu: Math.floor(65 + Math.random() * 20),
        net: Math.floor(10 + Math.random() * 10)
      });
    }, 2000);

    // Count-up animation for metrics
    anime({
      targets: '.metric-val',
      innerHTML: [0, (el) => el.getAttribute('data-val')],
      round: 1,
      easing: 'easeOutExpo',
      duration: 2500,
      delay: 500
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden border-b border-white/5">
      {/* Background HUD Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" 
           style={{ backgroundImage: 'linear-gradient(rgba(163,255,18,1) 1px, transparent 1px), linear-gradient(90deg, rgba(163,255,18,1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* BENTO GRID ARCHITECTURE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          
          {/* 1. HERO TILE (2x1) */}
          <Tile className="md:col-span-2 flex flex-col justify-center min-h-[320px]">
            <div className="inline-block px-4 py-1.5 bg-[#A3FF12]/10 border border-[#A3FF12]/30 text-[9px] text-[#A3FF12] font-black tracking-[0.5em] uppercase mb-8 w-fit">
              Authenticated_System_v4.2
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] select-none">
              <span className="text-white">System</span><br/>
              <span className="relative text-[#A3FF12] drop-shadow-[0_0_30px_rgba(163,255,18,0.4)]">
                Dashboard
                {/* Shimmer Sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_5s_infinite] pointer-events-none" />
              </span>
            </h1>
          </Tile>

          {/* 2. RADAR TILE (1x1) */}
          <Tile title="NAV_SCAN_ORBIT" className="flex items-center justify-center min-h-[320px]">
            <div className="relative w-44 h-44 border border-[#A3FF12]/20 rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full animate-[spin_6s_linear_infinite]" 
                   style={{ background: 'conic-gradient(from 0deg, transparent 0%, rgba(163,255,18,0.2) 50%, transparent 100%)' }} />
              <div className="absolute inset-6 border border-white/10 rounded-full" />
              <div className="absolute inset-12 border border-white/5 rounded-full" />
              <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#A3FF12] rounded-full animate-pulse shadow-[0_0_12px_#A3FF12]" />
              <div className="absolute bottom-1/2 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8px] text-white/20 font-black tracking-[0.6em] uppercase">Scan</div>
            </div>
          </Tile>

          {/* 3. STATUS TILE (1x1) */}
          <Tile title="SYSTEM_INTEGRITY">
            <div className="flex flex-col gap-6 mt-4">
              {[
                { label: 'AI_ENGINE', status: 'ONLINE' },
                { label: 'CV_MODULE', status: 'ACTIVE' },
                { label: 'STACK_CORE', status: 'READY' }
              ].map(s => (
                <div key={s.label} className="flex items-center justify-between font-mono">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-white/40 tracking-[0.2em] font-bold">{s.label}</span>
                    <span className="text-[8px] text-[#A3FF12]/40 tracking-[0.1em] mt-0.5">V4_STABLE</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/[0.03] px-3 py-1 border border-white/5">
                    <span className="text-[10px] text-white font-bold">{s.status}</span>
                    <div className="w-2 h-2 bg-[#A3FF12] rounded-full animate-pulse shadow-[0_0_8px_#A3FF12]" />
                  </div>
                </div>
              ))}
            </div>
          </Tile>

          {/* 4. TELEMETRY TILE (1x1) */}
          <Tile title="HARDWARE_METRICS">
             <div className="flex flex-col gap-6 mt-4 font-mono">
               {[
                 { label: 'CPU_CLOCK', val: telemetry.cpu, unit: '%' },
                 { label: 'GPU_PROC', val: telemetry.gpu, unit: '%' },
                 { label: 'NET_LAT', val: telemetry.net, unit: 'ms' }
               ].map(stat => (
                 <div key={stat.label}>
                   <div className="flex justify-between text-[9px] text-white/30 mb-2 uppercase font-bold">
                     <span>{stat.label}</span>
                     <span className="text-[#A3FF12]">{stat.val}{stat.unit}</span>
                   </div>
                   <div className="h-[3px] bg-white/5 w-full relative">
                     <div className="h-full bg-[#A3FF12] transition-all duration-1000 shadow-[0_0_10px_rgba(163,255,18,0.5)]" style={{ width: `${stat.unit === '%' ? stat.val : (stat.val / 50) * 100}%` }} />
                   </div>
                 </div>
               ))}
             </div>
          </Tile>

          {/* 5. METRICS TILE (1x1) */}
          <Tile title="ENGINEERED_NODES" className="flex flex-col justify-center">
             <div className="flex flex-col gap-6">
                <div className="flex flex-col">
                  <span className="metric-val text-4xl font-black text-white leading-none" data-val="30">0</span>
                  <span className="text-[9px] text-[#A3FF12] uppercase tracking-[0.4em] font-black mt-2">Projects_Active</span>
                </div>
                <div className="h-px w-full bg-white/5" />
                <div className="flex flex-col">
                  <span className="metric-val text-4xl font-black text-white leading-none" data-val="5">0</span>
                  <span className="text-[9px] text-[#A3FF12] uppercase tracking-[0.4em] font-black mt-2">Domain_Sectors</span>
                </div>
             </div>
          </Tile>

          {/* 6. DATA STREAM TILE (3x1) */}
          <Tile title="TRANS_MISSION_BUFFER" className="md:col-span-3 h-28 flex items-center bg-[#A3FF12]/[0.01]">
             <div className="w-full flex flex-col gap-4 opacity-40">
               {[...Array(3)].map((_, i) => (
                 <div key={i} className="h-px bg-white/10 w-full relative overflow-hidden">
                   <div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#A3FF12] rounded-full animate-[stream_5s_linear_infinite] shadow-[0_0_10px_#A3FF12]" 
                        style={{ animationDelay: `${i * 1.5}s` }} />
                   <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full animate-[stream_7s_linear_infinite]" 
                        style={{ animationDelay: `${i * 2}s`, opacity: 0.5 }} />
                 </div>
               ))}
             </div>
          </Tile>

          {/* 7. CONTROL PANEL TILE (3x1) */}
          <Tile noPadding className="md:col-span-3 border-[#A3FF12]/20">
             <div className="flex flex-wrap">
               {categories.map((category) => (
                 <button
                   key={category}
                   onClick={() => onFilterChange(category)}
                   className={`
                     flex-1 min-w-[150px] py-8 text-[11px] font-black uppercase tracking-[0.5em] transition-all duration-500
                     ${activeCategory === category 
                       ? 'bg-[#A3FF12] text-black shadow-[0_0_40px_rgba(163,255,18,0.5)] z-10' 
                       : 'text-white/30 hover:text-white hover:bg-white/5'}
                     border-r border-white/5 last:border-0
                   `}
                 >
                   {category}
                 </button>
               ))}
             </div>
          </Tile>

        </div>

      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-20deg); }
          20% { transform: translateX(200%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }
        @keyframes stream {
          from { left: -5%; }
          to { left: 105%; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
