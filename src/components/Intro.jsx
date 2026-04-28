import React, { useEffect, useState } from 'react';

const PrecisionIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 1: Grid Calibration (0s - 0.8s)
    // Phase 2: Frame Build (0.8s - 1.8s)
    // Phase 3: Content Fade (1.8s - 2.5s)
    // Phase 4: Ready (2.5s - 3s)
    
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 1900),
      setTimeout(() => setPhase(4), 2600),
      setTimeout(() => onComplete(), 3200)
    ];

    return () => timers.forEach(t => clearTimeout(t));
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden transition-opacity duration-700 ${phase >= 4 ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* Step 1 & 2: Grid Calibration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Faint Base Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(163,255,18,1) 1px, transparent 1px), linear-gradient(90deg, rgba(163,255,18,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Calibrating Lines */}
        <div className={`absolute top-1/4 left-0 w-full h-[1px] bg-[#A3FF12]/20 transition-all duration-1000 ease-in-out ${phase >= 1 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`} />
        <div className={`absolute top-3/4 left-0 w-full h-[1px] bg-[#A3FF12]/20 transition-all duration-1000 ease-in-out delay-100 ${phase >= 1 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`} />
        <div className={`absolute left-1/4 top-0 w-[1px] h-full bg-[#A3FF12]/20 transition-all duration-1000 ease-in-out delay-200 ${phase >= 1 ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} />
        <div className={`absolute left-3/4 top-0 w-[1px] h-full bg-[#A3FF12]/20 transition-all duration-1000 ease-in-out delay-300 ${phase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`} />
        
        {/* Glow Intersections */}
        {phase >= 1 && (
          <>
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#A3FF12] rounded-full shadow-[0_0_10px_#A3FF12] animate-pulse" />
            <div className="absolute top-1/4 left-3/4 w-1 h-1 bg-[#A3FF12] rounded-full shadow-[0_0_10px_#A3FF12] animate-pulse" />
            <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-[#A3FF12] rounded-full shadow-[0_0_10px_#A3FF12] animate-pulse" />
            <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-[#A3FF12] rounded-full shadow-[0_0_10px_#A3FF12] animate-pulse" />
          </>
        )}
      </div>

      {/* Step 3: UI Frame Build */}
      <div className="max-w-7xl w-full px-6 relative z-10 flex flex-col gap-12">
        {/* Header Outline */}
        <div className={`relative h-24 border border-[#A3FF12]/20 overflow-hidden transition-all duration-1000 ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
           <div className={`absolute inset-0 bg-white/[0.02] transition-opacity duration-1000 delay-500 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`} />
           <div className="absolute top-0 left-0 w-full h-full p-8 flex flex-col justify-center">
              <div className={`h-8 w-64 bg-white/[0.05] transition-all duration-700 delay-1000 ${phase >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
           </div>
           <div className={`absolute top-0 right-0 h-full w-1 bg-[#A3FF12]/50 transition-all duration-700 ${phase >= 2 ? 'scale-y-100' : 'scale-y-0'}`} />
        </div>

        {/* Filter Bar Outline */}
        <div className={`flex justify-center gap-4 transition-all duration-1000 delay-200 ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-8 w-24 border border-white/10 bg-white/[0.01]" />
          ))}
        </div>

        {/* Card Outlines */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-400 ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 border border-white/5 bg-white/[0.01] relative">
               <div className="absolute top-4 left-4 right-4 h-32 border border-white/10" />
               <div className="absolute bottom-4 left-4 w-3/4 h-4 bg-white/5" />
               <div className="absolute bottom-10 left-4 w-1/2 h-4 bg-white/5" />
            </div>
          ))}
        </div>
      </div>

      {/* Step 4: Content Fade-in */}
      <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none transition-all duration-1000 ${phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
         <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-2">
              SYSTEM <span className="text-[#A3FF12] drop-shadow-[0_0_15px_rgba(163,255,18,0.5)]">DASHBOARD</span>
            </h1>
            <p className="text-[#888] font-mono text-[10px] uppercase tracking-[0.3em]">
              Precision Calibration Complete
            </p>
         </div>
      </div>

      {/* Micro Interaction Pulse */}
      {phase >= 3 && (
        <div className="absolute inset-0 animate-[pulse_4s_infinite] pointer-events-none bg-[#A3FF12]/[0.02]" />
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default PrecisionIntro;
