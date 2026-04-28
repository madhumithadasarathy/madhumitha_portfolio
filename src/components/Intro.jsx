import React, { useEffect, useState } from 'react';

const MaterialReveal = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Reveal Sequence:
    // 0s: Base glass surface
    // 0.5s: First light sweep & mask start
    // 2.0s: Second fast sweep & lock-in
    // 2.8s: Complete

    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 500),
      setTimeout(() => setPhase(3), 2000),
      setTimeout(() => setPhase(4), 2800),
      setTimeout(() => onComplete(), 3500)
    ];

    return () => timers.forEach(t => clearTimeout(t));
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-700 ${phase >= 4 ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* Step 1: Base Surface (The "Glass" layer) */}
      <div className={`absolute inset-0 z-20 bg-black/40 backdrop-blur-2xl transition-opacity duration-1000 ${phase >= 2 ? 'opacity-0' : 'opacity-100'}`}>
         {/* Subtle Reflection Line */}
         <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent rotate-45 transform-gpu pointer-events-none" />
      </div>

      {/* Step 2: Light Sweep Layer */}
      <div 
        className={`absolute inset-0 z-30 pointer-events-none transition-transform duration-[2000ms] ease-in-out ${phase >= 1 ? 'translate-x-full' : '-translate-x-full'}`}
        style={{
          background: 'linear-gradient(110deg, transparent 40%, rgba(163,255,18,0.1) 45%, rgba(163,255,18,0.2) 50%, rgba(163,255,18,0.1) 55%, transparent 60%)',
        }}
      />

      {/* Step 3: Masked UI Reveal */}
      <div 
        className="max-w-7xl w-full px-12 relative z-10 flex flex-col gap-10"
        style={{
          maskImage: phase >= 2 ? 'linear-gradient(to right, black 100%, transparent 100%)' : 'linear-gradient(to right, transparent 0%, transparent 0%)',
          WebkitMaskImage: phase >= 2 ? 'linear-gradient(to right, black 100%, transparent 100%)' : 'linear-gradient(to right, transparent 0%, transparent 0%)',
          maskSize: '200% 100%',
          WebkitMaskSize: '200% 100%',
          maskPosition: phase >= 2 ? '0 0' : '100% 0',
          WebkitMaskPosition: phase >= 2 ? '0 0' : '100% 0',
          transition: 'mask-position 1.5s ease-out, -webkit-mask-position 1.5s ease-out'
        }}
      >
        {/* Header Mock */}
        <div className="h-24 border border-white/10 bg-white/[0.02] rounded-sm relative overflow-hidden">
           <div className="absolute top-8 left-8 h-8 w-64 bg-white/5" />
           <div className={`absolute inset-0 bg-[#A3FF12]/[0.02] transition-opacity duration-700 ${phase >= 3 ? 'opacity-100' : 'opacity-0'}`} />
        </div>

        {/* Filter Mock */}
        <div className="flex justify-center gap-4">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-8 w-28 border border-white/10 bg-white/[0.01]" />
          ))}
        </div>

        {/* Cards Mock */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-64 border border-white/5 bg-white/[0.01] flex flex-col p-6 gap-4">
               <div className="flex-1 border border-white/10 bg-white/[0.02]" />
               <div className="h-4 w-2/3 bg-white/5" />
               <div className="h-3 w-1/3 bg-white/5" />
            </div>
          ))}
        </div>
      </div>

      {/* Step 5: Final Lock-in Glow */}
      <div className={`absolute inset-0 z-40 pointer-events-none flex flex-col items-center justify-center transition-all duration-1000 ${phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
         <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">
              SYSTEM <span className="text-[#A3FF12] drop-shadow-[0_0_20px_rgba(163,255,18,0.4)]">DASHBOARD</span>
            </h1>
            <div className={`mt-6 h-[1px] bg-gradient-to-r from-transparent via-[#A3FF12] to-transparent transition-all duration-1000 ${phase >= 3 ? 'w-64 opacity-100' : 'w-0 opacity-0'}`} />
         </div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(163,255,18,1) 1px, transparent 1px), linear-gradient(90deg, rgba(163,255,18,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <style>{`
        @keyframes sweep {
          from { transform: translateX(-100%) rotate(45deg); }
          to { transform: translateX(200%) rotate(45deg); }
        }
      `}</style>
    </div>
  );
};

export default MaterialReveal;
