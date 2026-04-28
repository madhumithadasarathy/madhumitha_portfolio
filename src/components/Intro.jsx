import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Intro = ({ onComplete }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create the master timeline
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      complete: () => {
        setTimeout(onComplete, 500);
      }
    });

    // STEP 1: BACKGROUND & DATA STREAMS
    timeline.add({
      targets: '.grid-line',
      opacity: [0, 0.1],
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 1000,
      delay: anime.stagger(50)
    })
    .add({
      targets: '.data-stream',
      translateX: ['-100%', '200%'],
      opacity: [0, 0.4, 0],
      duration: 2500,
      loop: true,
      easing: 'linear',
      delay: anime.stagger(300)
    }, 0);

    // STEP 2: SYSTEM MODULES APPEARANCE (PARALLEL)
    timeline.add({
      targets: '.system-module',
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 800,
      delay: anime.stagger(150, { start: 500 })
    }, 500);

    // AI MODULE INTERNAL: Node Graph Animation
    anime({
      targets: '.ai-node',
      r: [2, 4, 2],
      fill: ['#A3FF12', '#FFFFFF', '#A3FF12'],
      duration: 1500,
      loop: true,
      delay: anime.stagger(200)
    });

    anime({
      targets: '.ai-connection',
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [0.2, 0.8, 0.2],
      duration: 2000,
      loop: true,
      easing: 'easeInOutSine',
      delay: anime.stagger(150)
    });

    // CV MODULE INTERNAL: Bounding Boxes & Scanning
    anime({
      targets: '.cv-box',
      opacity: [0.3, 1, 0.3],
      strokeDasharray: '4 4',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 1200,
      loop: true,
      easing: 'steps(5)',
      delay: anime.stagger(300)
    });

    anime({
      targets: '.cv-scanner',
      translateY: ['0%', '100%'],
      duration: 2000,
      loop: true,
      easing: 'linear'
    });

    // FULL STACK INTERNAL: Connection Pulse
    anime({
      targets: '.fs-link-overlay',
      width: ['0%', '100%'],
      opacity: [0, 1, 0],
      duration: 1500,
      loop: true,
      easing: 'easeInOutQuad',
      delay: anime.stagger(500)
    });

    // GEN AI INTERNAL: Pipeline Flow
    anime({
      targets: '.gen-token',
      translateX: [0, 180],
      opacity: [0, 1, 0],
      duration: 1800,
      loop: true,
      easing: 'easeInQuad',
      delay: anime.stagger(400)
    });

    // FRONTEND INTERNAL: Block Cascade
    anime({
      targets: '.fe-block',
      opacity: [0.1, 0.6, 0.1],
      backgroundColor: ['#111', '#A3FF12', '#111'],
      duration: 1200,
      loop: true,
      delay: anime.stagger(100, { grid: [4, 4], from: 'center' })
    });

    // STEP 4: ORCHESTRATION (SYNCHRONIZATION)
    timeline.add({
      targets: '.system-module',
      translateX: (el) => {
        const zone = el.getAttribute('data-zone');
        if (zone.includes('left')) return 100;
        if (zone.includes('right')) return -100;
        return 0;
      },
      translateY: (el) => {
        const zone = el.getAttribute('data-zone');
        if (zone.includes('top')) return 100;
        if (zone.includes('bottom')) return -100;
        return 0;
      },
      scale: 0.8,
      filter: 'blur(8px)',
      opacity: 0,
      duration: 1200,
      easing: 'easeInOutQuart'
    }, 2800);

    // STEP 5: TITLE IMPACT
    timeline.add({
      targets: '.title-impact',
      opacity: [0, 1],
      scale: [2, 1],
      letterSpacing: ['30px', '8px'],
      duration: 1200,
      easing: 'easeOutExpo'
    }, 3200)
    .add({
      targets: '.title-impact',
      textShadow: ['0 0 0px #A3FF12', '0 0 40px #A3FF12'],
      duration: 600
    }, 3600)
    .add({
      targets: '.intro-container',
      opacity: 0,
      duration: 1000,
      easing: 'linear'
    }, 4500);

  }, [onComplete]);

  return (
    <div ref={containerRef} className="intro-container fixed inset-0 z-[100] bg-black overflow-hidden flex items-center justify-center font-mono">
      {/* Background Noise & Grid */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern id="intro-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(163, 255, 18, 0.2)" strokeWidth="0.5" className="grid-line" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#intro-grid)" />
      </svg>

      {/* Data Streams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="data-stream absolute h-[1px] bg-gradient-to-r from-transparent via-[#A3FF12] to-transparent w-[300px] opacity-0" 
               style={{ top: `${8 + i * 8}%`, left: '-20%' }} />
        ))}
      </div>

      {/* TOP LEFT: FRONTEND MODULE */}
      <div data-zone="top-left" className="system-module absolute top-12 left-12 w-56 h-56 border border-white/5 p-4 bg-white/[0.01] backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 bg-[#A3FF12] rounded-full animate-pulse" />
          <div className="text-[9px] text-[#A3FF12] uppercase tracking-[0.2em]">Frontend_Subsystem</div>
        </div>
        <div className="grid grid-cols-4 gap-2 h-40">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="fe-block border border-white/10 rounded-sm" />
          ))}
        </div>
      </div>

      {/* TOP RIGHT: FULL STACK MODULE */}
      <div data-zone="top-right" className="system-module absolute top-12 right-12 w-56 h-56 border border-white/5 p-4 bg-white/[0.01] backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-3 justify-end text-right">
          <div className="text-[9px] text-[#A3FF12] uppercase tracking-[0.2em]">Orchestration_Core</div>
          <div className="w-1.5 h-1.5 bg-[#A3FF12] rounded-full animate-pulse" />
        </div>
        <div className="flex flex-col gap-5 mt-6">
          {['CLIENT', 'API_LAYER', 'PERSISTENCE'].map((label, i) => (
            <div key={label} className="h-8 border border-white/10 bg-white/[0.02] relative overflow-hidden flex items-center justify-center">
              <div className="fs-link-overlay absolute left-0 h-full bg-[#A3FF12]/10" />
              <span className="relative z-10 text-[8px] font-bold tracking-[0.2em]">{label}</span>
              <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-[#A3FF12]" />
              <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-[#A3FF12]" />
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM LEFT: AI MODULE */}
      <div data-zone="bottom-left" className="system-module absolute bottom-12 left-12 w-56 h-56 border border-white/5 p-4 bg-white/[0.01] backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 bg-[#A3FF12] rounded-full animate-pulse" />
          <div className="text-[9px] text-[#A3FF12] uppercase tracking-[0.2em]">Neural_Weights</div>
        </div>
        <svg className="w-full h-40 mt-2">
          {/* Layer 1 */}
          <circle cx="20" cy="30" r="3" fill="#A3FF12" className="ai-node" />
          <circle cx="20" cy="70" r="3" fill="#A3FF12" className="ai-node" />
          <circle cx="20" cy="110" r="3" fill="#A3FF12" className="ai-node" />
          {/* Layer 2 */}
          <circle cx="80" cy="50" r="3" fill="#A3FF12" className="ai-node" />
          <circle cx="80" cy="90" r="3" fill="#A3FF12" className="ai-node" />
          {/* Layer 3 */}
          <circle cx="140" cy="70" r="3" fill="#A3FF12" className="ai-node" />
          
          <g className="opacity-20">
            <path d="M 20 30 L 80 50 M 20 70 L 80 50 M 20 110 L 80 50" stroke="white" strokeWidth="0.5" fill="none" className="ai-connection" />
            <path d="M 20 30 L 80 90 M 20 70 L 80 90 M 20 110 L 80 90" stroke="white" strokeWidth="0.5" fill="none" className="ai-connection" />
            <path d="M 80 50 L 140 70 M 80 90 L 140 70" stroke="white" strokeWidth="0.5" fill="none" className="ai-connection" />
          </g>
        </svg>
      </div>

      {/* BOTTOM RIGHT: CV MODULE */}
      <div data-zone="bottom-right" className="system-module absolute bottom-12 right-12 w-56 h-56 border border-white/5 p-4 bg-white/[0.01] backdrop-blur-sm overflow-hidden">
        <div className="flex items-center gap-2 mb-3 justify-end text-right">
          <div className="text-[9px] text-[#A3FF12] uppercase tracking-[0.2em]">Computer_Vision_01</div>
          <div className="w-1.5 h-1.5 bg-[#A3FF12] rounded-full animate-pulse" />
        </div>
        <div className="relative h-40 border border-white/5 bg-black/40">
          <div className="cv-scanner absolute top-0 left-0 w-full h-[1px] bg-[#A3FF12] shadow-[0_0_15px_#A3FF12] z-10" />
          <div className="cv-box absolute top-6 left-6 w-16 h-16 border border-[#A3FF12]" />
          <div className="cv-box absolute bottom-8 right-10 w-20 h-12 border border-white/30" />
          <div className="absolute top-1 left-1 text-[6px] text-[#A3FF12] font-mono">FRAME_BUFFER: 60FPS</div>
          <div className="absolute bottom-1 right-1 text-[6px] text-white/40 font-mono">X: 1024 Y: 768</div>
        </div>
      </div>

      {/* CENTER: GEN AI MODULE */}
      <div data-zone="center" className="system-module absolute w-80 h-40 border border-[#A3FF12]/20 p-6 bg-[#A3FF12]/[0.02] backdrop-blur-md z-20">
        <div className="text-[10px] text-[#A3FF12] text-center mb-6 uppercase tracking-[0.4em] font-black">GenAI_Processor</div>
        <div className="flex items-center justify-between px-2">
          <div className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-[7px] text-white/50">PROMPT</div>
          <div className="flex-1 h-[2px] bg-white/5 relative mx-3">
            <div className="gen-token absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-[#A3FF12] rounded-full shadow-[0_0_8px_#A3FF12]" />
            <div className="gen-token absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-[#A3FF12] rounded-full shadow-[0_0_8px_#A3FF12]" style={{ animationDelay: '0.6s' }} />
          </div>
          <div className="w-16 h-16 border-2 border-[#A3FF12] rounded-sm flex items-center justify-center text-[12px] font-black text-[#A3FF12] bg-[#A3FF12]/10 animate-pulse">
            LLM
          </div>
          <div className="flex-1 h-[2px] bg-white/5 relative mx-3">
            <div className="gen-token absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
          </div>
          <div className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-[7px] text-white/50">OUTPUT</div>
        </div>
      </div>

      {/* TITLE IMPACT */}
      <div className="title-impact opacity-0 flex flex-col items-center pointer-events-none">
        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-widest text-center leading-none">
          System <span className="text-[#A3FF12]">Dashboard</span>
        </h1>
        <div className="mt-8 h-[2px] w-80 bg-gradient-to-r from-transparent via-[#A3FF12] to-transparent" />
        <div className="mt-6 flex gap-12 text-[10px] text-white/40 tracking-[0.5em] uppercase font-mono">
           <span>Engine_Status: Nominal</span>
           <span>Sync_Complete</span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
