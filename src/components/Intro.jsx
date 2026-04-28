import React, { useEffect, useState, useRef } from 'react';

const HolographicIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef(null);

  useEffect(() => {
    // Cinematic Timeline
    const timers = [
      setTimeout(() => setPhase(1), 100),   // Start sweep
      setTimeout(() => setPhase(2), 1000),  // Build layers
      setTimeout(() => setPhase(3), 2000),  // Title reveal
      setTimeout(() => setPhase(4), 3200),  // Ready
      setTimeout(() => onComplete(), 3800)
    ];

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth) - 0.5,
        y: (e.clientY / innerHeight) - 0.5
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      timers.forEach(t => clearTimeout(t));
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [onComplete]);

  // Parallax multipliers for each layer
  const calculateParallax = (factor) => ({
    transform: `translate(${mousePos.x * factor}px, ${mousePos.y * factor}px)`,
    transition: 'transform 0.2s ease-out'
  });

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 z-[100] bg-black overflow-hidden flex items-center justify-center transition-opacity duration-700 ${phase >= 4 ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Base Layer: Vignette and Blur */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] z-10 pointer-events-none" />
      
      {/* Layer 1: Background Grid & Nodes (Deepest) */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          ...calculateParallax(20),
          backgroundImage: 'linear-gradient(rgba(163,255,18,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(163,255,18,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Light Sweep Animation */}
      <div className={`absolute top-0 bottom-0 w-2 bg-gradient-to-r from-transparent via-[#A3FF12] to-transparent z-40 opacity-50 shadow-[0_0_20px_#A3FF12] pointer-events-none transition-all duration-[2000ms] ease-in-out ${phase >= 1 ? 'left-full' : '-left-10'}`} />

      {/* Layer 2: Dashboard Containers (Middle) */}
      <div 
        className={`max-w-7xl w-full px-12 relative z-20 flex flex-col gap-10 transition-all duration-1000 ${phase >= 2 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'}`}
        style={calculateParallax(40)}
      >
        {/* Header Glass Container */}
        <div className="h-24 border border-white/10 bg-white/[0.03] backdrop-blur-md rounded-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A3FF12]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <div className="p-8">
            <div className="h-6 w-48 bg-white/5 rounded-sm" />
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-center gap-4">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-8 w-24 border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-sm" />
          ))}
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-64 border border-white/5 bg-white/[0.02] backdrop-blur-md rounded-sm relative">
              <div className="absolute top-4 left-4 right-4 h-32 bg-white/5 border border-white/5" />
              <div className="absolute bottom-6 left-4 w-2/3 h-4 bg-white/10" />
              <div className="absolute bottom-12 left-4 w-1/3 h-3 bg-white/5" />
            </div>
          ))}
        </div>
      </div>

      {/* Layer 3: Title & Floating Elements (Foremost) */}
      <div 
        className={`absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none transition-all duration-1000 ${phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        style={calculateParallax(60)}
      >
        <div className="text-center relative">
          {/* Subtle Glow Behind Title */}
          <div className="absolute inset-0 blur-3xl bg-[#A3FF12]/10 scale-150 animate-pulse" />
          
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white relative">
            SYSTEM <span className="text-[#A3FF12] shimmer-text">DASHBOARD</span>
          </h1>
          
          <div className="mt-4 flex items-center justify-center gap-3">
             <div className="w-12 h-px bg-white/20" />
             <span className="text-[10px] font-mono text-white/40 tracking-[0.4em] uppercase">Holographic Sync Active</span>
             <div className="w-12 h-px bg-white/20" />
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        .shimmer-text {
          background: linear-gradient(90deg, #A3FF12 0%, #fff 50%, #A3FF12 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
          to { background-position: 200% center; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default HolographicIntro;
