import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

const Intro = ({ onComplete }) => {
  const containerRef = useRef(null);
  const dotsRef = useRef([]);
  const linesRef = useRef([]);
  const modulesRef = useRef([]);
  const categoriesRef = useRef([]);
  const titleRef = useRef(null);

  const categories = [
    "FRONTEND", "FULL STACK", "AI / ML", "GEN AI", "COMPUTER VISION"
  ];

  useEffect(() => {
    // 1. Scene setup: Create dots at random positions
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000,
      complete: () => {
        // Handle auto-transition if needed, or wait for user skip
        setTimeout(onComplete, 500);
      }
    });

    // Scene 1: SIGNAL IGNITION
    timeline.add({
      targets: '.signal-dot',
      opacity: [0, 1],
      scale: [0, 1],
      delay: anime.stagger(50),
      duration: 800
    });

    // Scene 2: CONNECTION LINES
    timeline.add({
      targets: '.signal-line',
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [0, 0.4],
      duration: 1000,
      easing: 'easeInOutSine'
    }, '-=400');

    // Scene 3: PATH FLOW (Moving dots)
    timeline.add({
      targets: '.path-dot',
      translateX: [0, 200],
      opacity: [0, 1, 0],
      duration: 1500,
      loop: 2,
      easing: 'linear'
    }, '-=800');

    // Scene 4: MODULE SNAP-IN
    timeline.add({
      targets: '.module-box',
      translateY: [500, 0],
      translateX: (el, i) => [(i % 2 === 0 ? -200 : 200), 0],
      opacity: [0, 1],
      scale: [0.5, 1],
      rotate: [15, 0],
      delay: anime.stagger(100),
      duration: 1200,
      easing: 'easeOutExpo'
    }, '-=1000');

    // Scene 5: CATEGORY TEXT
    timeline.add({
      targets: '.category-text',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(150),
      duration: 800,
      easing: 'easeOutQuad'
    }, '-=600');

    // Scene 6: TITLE REVEAL
    timeline.add({
      targets: '.title-container',
      scale: [0.9, 1],
      opacity: [0, 1],
      duration: 1200,
      easing: 'easeOutElastic(1, .8)'
    }, '-=400');

    // Extra pulse for title
    timeline.add({
      targets: '.title-glow',
      opacity: [0, 0.5, 0],
      scale: [1, 1.2],
      duration: 2000,
      loop: true
    }, '-=200');

    return () => timeline.pause();
  }, [onComplete]);

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-black overflow-hidden flex flex-col items-center justify-center cursor-pointer"
      onClick={handleSkip}
    >
      {/* Scene 1, 2, 3: Signal Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#A3FF12" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {/* Random Lines and Dots would go here - simplified for performance */}
        <line x1="20%" y1="30%" x2="80%" y2="70%" stroke="#A3FF12" strokeWidth="1" className="signal-line" strokeDasharray="1000" />
        <line x1="10%" y1="80%" x2="90%" y2="20%" stroke="#A3FF12" strokeWidth="1" className="signal-line" strokeDasharray="1000" />
        <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="#A3FF12" strokeWidth="1" className="signal-line" strokeDasharray="1000" />
      </svg>

      {/* Signal Dots */}
      {[...Array(12)].map((_, i) => (
        <div 
          key={i}
          className="signal-dot absolute w-1 h-1 bg-[#A3FF12] rounded-full shadow-[0_0_8px_#A3FF12]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Scene 4: Module Layer */}
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl px-12 z-10">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="module-box w-24 h-32 border border-[#A3FF12]/20 bg-white/[0.02] rounded-sm relative"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-[#A3FF12]/5 to-transparent" />
          </div>
        ))}
      </div>

      {/* Scene 5: Category Layer */}
      <div className="mt-12 flex flex-wrap justify-center gap-8 z-20">
        {categories.map((cat, i) => (
          <span 
            key={cat}
            className="category-text text-[10px] font-mono font-bold tracking-[0.3em] text-[#A3FF12]/60 uppercase"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Scene 6: Title Layer */}
      <div className="title-container absolute text-center z-30 pointer-events-none">
        <div className="title-glow absolute inset-0 bg-[#A3FF12] blur-3xl opacity-0" />
        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white relative">
          SYSTEM <span className="text-[#A3FF12] drop-shadow-[0_0_20px_rgba(163,255,18,0.6)]">DASHBOARD</span>
        </h1>
        <p className="text-white/30 font-mono text-[9px] uppercase tracking-[0.5em] mt-4">
          Click to skip sequence
        </p>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(163,255,18,1) 1px, transparent 1px), linear-gradient(90deg, rgba(163,255,18,1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
    </div>
  );
};

export default Intro;
