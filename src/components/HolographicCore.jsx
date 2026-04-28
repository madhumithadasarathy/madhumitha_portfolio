import React, { useEffect, useState } from 'react';

const HolographicCore = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 50;
      const moveY = (clientY - window.innerHeight / 2) / 50;
      setMousePos({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
      {/* Central Atmospheric Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#A3FF12]/5 blur-[120px] rounded-full animate-pulse" />

      <div 
        className="relative transition-transform duration-500 ease-out flex items-center justify-center"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      >
        <svg viewBox="0 0 200 200" className="w-[85%] h-[85%] drop-shadow-[0_0_40px_rgba(163,255,18,0.3)]">
          <defs>
            <filter id="hologramGlow">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#A3FF12" stopOpacity="1" />
              <stop offset="100%" stopColor="#A3FF12" stopOpacity="0.1" />
            </radialGradient>
          </defs>

          {/* OUTER RING (Clockwise) */}
          <circle
            cx="100" cy="100" r="90"
            fill="none" stroke="#A3FF12" strokeWidth="0.5"
            strokeDasharray="50 20"
            className="opacity-10 animate-[spin_25s_linear_infinite]"
          />

          {/* MIDDLE RING (Counter-Clockwise) */}
          <circle
            cx="100" cy="100" r="70"
            fill="none" stroke="#A3FF12" strokeWidth="1.2"
            strokeDasharray="15 10"
            className="opacity-30 animate-[spin_18s_linear_reverse_infinite]"
          />

          {/* ORBITAL NODES (Holographic Points) */}
          {[...Array(8)].map((_, i) => (
            <g key={i} className="animate-[spin_12s_linear_infinite]" style={{ animationDelay: `${i * -1.5}s`, transformOrigin: '100px 100px' }}>
              <circle
                cx={100 + 80} cy="100" r="2"
                fill="#A3FF12"
                className="shadow-[0_0_12px_#A3FF12]"
              />
              <line x1="100" y1="100" x2="180" y2="100" stroke="#A3FF12" strokeWidth="0.1" className="opacity-10" />
            </g>
          ))}

          {/* INNER CORE (Holographic Engine) */}
          <g className="animate-pulse">
            <circle
              cx="100" cy="100" r="5"
              fill="url(#coreGradient)"
              filter="url(#hologramGlow)"
            />
            <circle
              cx="100" cy="100" r="18"
              fill="none" stroke="#A3FF12" strokeWidth="0.3"
              className="opacity-15"
            />
            <circle
              cx="100" cy="100" r="25"
              fill="none" stroke="#A3FF12" strokeWidth="0.1"
              strokeDasharray="2 4"
              className="opacity-10 animate-[spin_8s_linear_infinite]"
            />
          </g>

          {/* Crosshair Indicators */}
          <line x1="100" y1="80" x2="100" y2="70" stroke="#A3FF12" strokeWidth="0.5" className="opacity-40" />
          <line x1="100" y1="120" x2="100" y2="130" stroke="#A3FF12" strokeWidth="0.5" className="opacity-40" />
          <line x1="80" y1="100" x2="70" y2="100" stroke="#A3FF12" strokeWidth="0.5" className="opacity-40" />
          <line x1="120" y1="100" x2="130" y2="100" stroke="#A3FF12" strokeWidth="0.5" className="opacity-40" />

        </svg>

        {/* External Glass Brackets */}
        <div className="absolute inset-0 border-[1px] border-white/10 rounded-full rotate-12 scale-110 opacity-20" />
        <div className="absolute inset-0 border-[1px] border-[#A3FF12]/10 rounded-full -rotate-45 scale-125 opacity-10" />
      </div>
    </div>
  );
};

export default HolographicCore;
