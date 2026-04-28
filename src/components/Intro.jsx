import React, { useEffect, useState } from 'react';

const radius = 140; // Safe for mobile, big enough for desktop

const modules = [
  { name: 'FRONTEND', angle: -90, Shape: FrontendShape },
  { name: 'FULL STACK', angle: -18, Shape: FullStackShape },
  { name: 'AI / ML', angle: 54, Shape: AIShape },
  { name: 'COMPUTER VISION', angle: 126, Shape: CVShape },
  { name: 'GEN AI', angle: 198, Shape: GenAIShape },
];

export default function Intro({ onComplete }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Timeline of Cinematic Intro
    const t1 = setTimeout(() => setPhase(1), 200);   // 0.2s: Start Drawing SVG Modules
    const t2 = setTimeout(() => setPhase(2), 1600);  // 1.6s: Draw connection lines to center
    const t3 = setTimeout(() => setPhase(3), 2100);  // 2.1s: Move modules to center
    const t4 = setTimeout(() => setPhase(4), 2400);  // 2.4s: Modules collide, Title Reveals
    const t5 = setTimeout(() => onComplete(), 3600); // 3.6s: Complete and Fade out to Dashboard
    
    return () => { 
      clearTimeout(t1); 
      clearTimeout(t2); 
      clearTimeout(t3); 
      clearTimeout(t4); 
      clearTimeout(t5); 
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-[#020202] flex items-center justify-center overflow-hidden transition-opacity duration-1000 ease-in-out ${phase >= 4 && phase < 5 ? 'opacity-100' : phase >= 5 ? 'opacity-0' : 'opacity-100'}`}>
       
       {/* Background Grid & Vignette */}
       <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgba(163,255,18,1) 1px, transparent 1px), linear-gradient(90deg, rgba(163,255,18,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#020202_90%)]" />

       {/* Moving Signal Lines */}
       <div className="absolute inset-0 pointer-events-none opacity-30">
         <div className="absolute top-[20%] left-0 w-full h-px bg-[#A3FF12] shadow-[0_0_10px_#A3FF12] animate-[scanH_4s_linear_infinite]" />
         <div className="absolute top-[80%] left-0 w-full h-px bg-[#A3FF12] shadow-[0_0_10px_#A3FF12] animate-[scanH_3.5s_linear_infinite_reverse]" />
         <div className="absolute left-[30%] top-0 w-px h-full bg-[#A3FF12] shadow-[0_0_10px_#A3FF12] animate-[scanV_3s_linear_infinite]" />
         <div className="absolute left-[70%] top-0 w-px h-full bg-[#A3FF12] shadow-[0_0_10px_#A3FF12] animate-[scanV_2.5s_linear_infinite_reverse]" />
       </div>

       {/* Connection Lines from Center */}
       <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {modules.map((m, i) => {
            const rad = (m.angle * Math.PI) / 180;
            return (
              <line 
                key={`line-${i}`}
                x1="50%" y1="50%" 
                x2={`calc(50% + ${Math.cos(rad) * radius}px)`} 
                y2={`calc(50% + ${Math.sin(rad) * radius}px)`} 
                className={`draw-line ${phase >= 2 ? 'draw-line-active' : ''}`}
              />
            );
          })}
       </svg>

       {/* Modules Constructed */}
       {modules.map((m, i) => {
         const rad = (m.angle * Math.PI) / 180;
         const tx = Math.cos(rad) * radius;
         const ty = Math.sin(rad) * radius;
         
         return (
           <div 
             key={m.name} 
             className={`absolute flex flex-col items-center justify-center transition-all duration-[400ms] cubic-bezier(0.4, 0, 0.2, 1) z-10 
               ${phase >= 3 ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
             style={{
               transform: phase >= 3 ? `translate(0px, 0px)` : `translate(${tx}px, ${ty}px)`
             }}
           >
              <div className="w-16 h-16 bg-[#050505]/80 border border-white/10 backdrop-blur-md rounded-lg flex items-center justify-center relative shadow-[0_0_15px_rgba(163,255,18,0.05)]">
                 <m.Shape active={phase >= 1} />
              </div>
              <span className={`absolute -bottom-6 whitespace-nowrap text-[8px] md:text-[10px] font-mono tracking-widest uppercase transition-opacity duration-300 ${phase >= 1 ? 'opacity-100 text-[#A3FF12] drop-shadow-[0_0_5px_#A3FF12]' : 'opacity-0'}`}>
                {m.name}
              </span>
           </div>
         );
       })}

       {/* Final Title Reveal */}
       <div className={`absolute z-20 flex flex-col items-center justify-center transition-all duration-700 ease-out ${phase >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <div className="w-24 md:w-48 h-px bg-gradient-to-r from-transparent via-[#A3FF12] to-transparent mb-6 animate-pulse" />
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-[0.3em] text-white flex flex-col items-center gap-2">
            <span>SYSTEM</span>
            <span className="text-[#A3FF12] drop-shadow-[0_0_20px_rgba(163,255,18,0.6)]">DASHBOARD</span>
          </h1>
          <div className="w-24 md:w-48 h-px bg-gradient-to-r from-transparent via-[#A3FF12] to-transparent mt-6 animate-pulse" />
       </div>

       <style>{`
          .draw-line {
            stroke: rgba(163,255,18,0.3);
            stroke-width: 1px;
            stroke-dasharray: 500;
            stroke-dashoffset: 500;
            transition: stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .draw-line-active {
            stroke-dashoffset: 0;
          }

          .draw-path {
            fill: transparent;
            stroke: #A3FF12;
            stroke-width: 2.5;
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
            stroke-linecap: round;
            stroke-linejoin: round;
            transition: stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1), fill 0.3s ease 0.8s, filter 0.3s ease 0.8s;
          }
          .draw-path-active {
            stroke-dashoffset: 0;
            fill: rgba(163,255,18,0.15);
            filter: drop-shadow(0 0 4px rgba(163,255,18,0.5));
          }
          
          .draw-path-delay-1 { transition-delay: 0.2s, 1s, 1s; }
          .draw-path-delay-2 { transition-delay: 0.4s, 1.2s, 1.2s; }
          .draw-path-delay-3 { transition-delay: 0.6s, 1.4s, 1.4s; }

          @keyframes scanH {
            0% { transform: translateY(-100vh); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
          @keyframes scanV {
            0% { transform: translateX(-100vw); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(100vw); opacity: 0; }
          }
       `}</style>
    </div>
  );
}

// ----------------------------------------------------
// Animated SVG Sub-Components
// ----------------------------------------------------

function FrontendShape({ active }) {
  const cls = `draw-path ${active ? 'draw-path-active' : ''}`;
  return (
    <svg viewBox="0 0 100 100" className="w-10 h-10">
      <rect x="15" y="15" width="70" height="70" rx="4" className={cls} />
      <rect x="25" y="25" width="15" height="50" rx="2" className={`${cls} draw-path-delay-1`} />
      <rect x="45" y="25" width="30" height="20" rx="2" className={`${cls} draw-path-delay-2`} />
      <rect x="45" y="50" width="30" height="25" rx="2" className={`${cls} draw-path-delay-3`} />
    </svg>
  );
}

function FullStackShape({ active }) {
  const cls = `draw-path ${active ? 'draw-path-active' : ''}`;
  return (
    <svg viewBox="0 0 100 100" className="w-10 h-10">
      <circle cx="20" cy="50" r="10" className={cls} />
      <line x1="30" y1="50" x2="45" y2="50" className={`${cls} draw-path-delay-1`} />
      <rect x="45" y="40" width="20" height="20" rx="3" className={`${cls} draw-path-delay-2`} />
      <line x1="65" y1="50" x2="80" y2="50" className={`${cls} draw-path-delay-3`} />
      <path d="M 80 42 Q 90 42 90 50 Q 90 58 80 58 Z" className={`${cls} draw-path-delay-3`} />
    </svg>
  );
}

function AIShape({ active }) {
  const cls = `draw-path ${active ? 'draw-path-active' : ''}`;
  return (
    <svg viewBox="0 0 100 100" className="w-10 h-10">
      <circle cx="25" cy="30" r="5" className={cls} />
      <circle cx="25" cy="70" r="5" className={cls} />
      <circle cx="50" cy="50" r="7" className={`${cls} draw-path-delay-1`} />
      <circle cx="75" cy="30" r="5" className={`${cls} draw-path-delay-2`} />
      <circle cx="75" cy="70" r="5" className={`${cls} draw-path-delay-2`} />
      
      <line x1="29" y1="33" x2="45" y2="46" className={`${cls} draw-path-delay-3`} />
      <line x1="29" y1="67" x2="45" y2="54" className={`${cls} draw-path-delay-3`} />
      <line x1="55" y1="46" x2="71" y2="33" className={`${cls} draw-path-delay-3`} />
      <line x1="55" y1="54" x2="71" y2="67" className={`${cls} draw-path-delay-3`} />
    </svg>
  );
}

function CVShape({ active }) {
  const cls = `draw-path ${active ? 'draw-path-active' : ''}`;
  return (
    <svg viewBox="0 0 100 100" className="w-10 h-10">
      <rect x="15" y="15" width="70" height="70" rx="4" className={cls} />
      <rect x="35" y="35" width="30" height="30" className={`${cls} draw-path-delay-1`} />
      <path d="M 35 25 L 35 20 L 40 20 M 60 20 L 65 20 L 65 25 M 65 75 L 65 80 L 60 80 M 40 80 L 35 80 L 35 75" className={`${cls} draw-path-delay-2`} />
      <line x1="15" y1="50" x2="85" y2="50" className={`${cls} draw-path-delay-3`} />
    </svg>
  );
}

function GenAIShape({ active }) {
  const cls = `draw-path ${active ? 'draw-path-active' : ''}`;
  return (
    <svg viewBox="0 0 100 100" className="w-10 h-10">
      <path d="M 15 50 Q 30 20 45 50 T 85 50" className={cls} />
      <rect x="35" y="38" width="30" height="24" rx="4" className={`${cls} draw-path-delay-1`} />
      <circle cx="85" cy="50" r="7" className={`${cls} draw-path-delay-2`} />
      {/* Animated dots flowing along the path can be complex, using simple pulse */}
    </svg>
  );
}
