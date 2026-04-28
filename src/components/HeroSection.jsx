import React, { useEffect, useState } from 'react';
import anime from 'animejs';

const Telemetry = () => {
  const [data, setData] = useState({ cpu: 45, gpu: 72, latency: 14 });

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        cpu: Math.floor(40 + Math.random() * 15),
        gpu: Math.floor(65 + Math.random() * 20),
        latency: Math.floor(10 + Math.random() * 8)
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-6 font-mono border-l border-[#A3FF12]/20 pl-6 py-4 bg-[#A3FF12]/[0.01]">
      <div className="text-[9px] text-[#A3FF12] tracking-[0.4em] mb-2 font-bold uppercase">Hardware_Telemetry</div>
      {[
        { label: 'CPU_LOAD', val: data.cpu, unit: '%' },
        { label: 'GPU_PROC', val: data.gpu, unit: '%' },
        { label: 'NET_LATENCY', val: data.latency, unit: 'ms' }
      ].map(stat => (
        <div key={stat.label}>
          <div className="flex justify-between text-[8px] text-white/40 mb-1.5 uppercase">
            <span>{stat.label}</span>
            <span className="text-[#A3FF12]">{stat.val}{stat.unit}</span>
          </div>
          <div className="h-[2px] bg-white/5 w-full relative">
            <div className="h-full bg-[#A3FF12] transition-all duration-1000 shadow-[0_0_8px_#A3FF12]" style={{ width: `${stat.unit === '%' ? stat.val : (stat.val / 50) * 100}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
};

const DataStreams = () => (
  <div className="flex flex-col gap-4 w-full opacity-30">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="h-px bg-white/10 w-full relative overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#A3FF12] rounded-full animate-[stream_3s_linear_infinite]" 
             style={{ animationDelay: `${i * 0.5}s` }} />
        <div className="absolute top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full animate-[stream_4s_linear_infinite]" 
             style={{ animationDelay: `${i * 0.7}s`, opacity: 0.5 }} />
      </div>
    ))}
  </div>
);

const Radar = () => (
  <div className="relative w-32 h-32 border border-[#A3FF12]/20 rounded-full flex items-center justify-center bg-[#A3FF12]/[0.02]">
    <div className="absolute inset-0 rounded-full animate-[spin_5s_linear_infinite]" 
         style={{ background: 'conic-gradient(from 0deg, transparent 0%, rgba(163,255,18,0.1) 50%, transparent 100%)' }} />
    <div className="absolute inset-4 border border-white/5 rounded-full" />
    <div className="absolute top-1/4 left-1/2 w-1 h-1 bg-[#A3FF12] rounded-full animate-pulse shadow-[0_0_10px_#A3FF12]" />
    <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" />
  </div>
);

const HeroSection = ({ categories, activeCategory, onFilterChange }) => {
  useEffect(() => {
    anime({
      targets: '.metric-val',
      innerHTML: [0, (el) => el.getAttribute('data-val')],
      round: 1,
      easing: 'easeOutExpo',
      duration: 2000,
      delay: 500
    });
  }, []);

  return (
    <section className="relative pt-40 pb-20 px-8 overflow-hidden border-b border-white/5">
      {/* Background Grids */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" 
           style={{ backgroundImage: 'linear-gradient(rgba(163,255,18,1) 1px, transparent 1px), linear-gradient(90deg, rgba(163,255,18,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* TOP ZONE: STATUS & RADAR */}
        <div className="flex justify-between items-start mb-12">
          <div className="flex flex-col gap-3 font-mono">
            {[
              { label: 'AI_ENGINE', status: 'ONLINE' },
              { label: 'CV_MODULE', status: 'ACTIVE' },
              { label: 'STACK_CORE', status: 'READY' }
            ].map(s => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#A3FF12] rounded-full animate-pulse" />
                <span className="text-[10px] text-white/40 tracking-[0.3em] uppercase">
                  {s.label} <span className="text-[#A3FF12]/60 mx-1">::</span> <span className="text-white/80">{s.status}</span>
                </span>
              </div>
            ))}
          </div>
          <Radar />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* LEFT SIDE: TELEMETRY */}
          <div className="hidden lg:block lg:col-span-3">
            <Telemetry />
          </div>

          {/* CENTER: CORE PANEL */}
          <div className="col-span-1 lg:col-span-6 text-center">
            <div className="inline-block px-4 py-1.5 bg-[#A3FF12]/10 border border-[#A3FF12]/30 text-[9px] text-[#A3FF12] font-black tracking-[0.5em] uppercase mb-8">
              System_Orchestrator_V4
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight uppercase leading-none select-none mb-10">
              <span className="text-white">System</span><br/>
              <span className="relative text-[#A3FF12] drop-shadow-[0_0_20px_rgba(163,255,18,0.4)]">
                Dashboard
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_5s_infinite] pointer-events-none" />
              </span>
            </h1>
            
            {/* METRICS STRIP */}
            <div className="flex justify-center gap-4">
              {[
                { label: 'Nodes', val: 30 },
                { label: 'Domains', val: 5 },
                { label: 'Status', val: 'Active' }
              ].map((m, i) => (
                <div key={i} className="flex flex-col items-center px-6 py-2 border border-white/10 bg-white/[0.02]">
                  {typeof m.val === 'number' ? (
                    <span className="metric-val text-xl font-black text-white" data-val={m.val}>0</span>
                  ) : (
                    <span className="text-xl font-black text-[#A3FF12] animate-pulse">{m.val}</span>
                  )}
                  <span className="text-[8px] text-white/30 uppercase tracking-[0.4em] font-bold mt-1">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: DATA STREAMS */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="border-r border-[#A3FF12]/20 pr-6 py-4">
              <div className="text-[9px] text-[#A3FF12] tracking-[0.4em] mb-4 font-bold uppercase text-right">Data_Sync_Streams</div>
              <DataStreams />
              <div className="mt-4 text-[8px] text-white/20 uppercase tracking-[0.2em] font-mono text-right">
                Sync_Phase: 0x98FF <br/>
                Buffer_State: Nominal
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM: CONTROL PANEL (FILTERS) */}
        <div className="flex flex-wrap justify-center gap-px bg-white/5 border border-white/10 p-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onFilterChange(category)}
              className={`
                px-8 py-4 text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-300
                ${activeCategory === category 
                  ? 'bg-[#A3FF12] text-black shadow-[0_0_20px_rgba(163,255,18,0.4)]' 
                  : 'text-white/40 hover:text-white hover:bg-white/5'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          20% { transform: translateX(200%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        @keyframes stream {
          from { left: -10%; }
          to { left: 110%; }
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
