import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

const Intro = ({ onComplete }) => {
  const [isInitiated, setIsInitiated] = useState(false);
  const cockpitRef = useRef(null);
  const containerRef = useRef(null);

  const modules = [
    { id: 'ai', label: 'AI ENGINE' },
    { id: 'cv', label: 'CV MODULE' },
    { id: 'stack', label: 'FULL STACK' },
    { id: 'ui', label: 'UI INTERFACE' },
    { id: 'gen', label: 'GEN AI' }
  ];

  const handleInitiate = () => {
    if (isInitiated) return;
    setIsInitiated(true);
    startTakeoffSequence();
  };

  const startTakeoffSequence = () => {
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      complete: () => {
        setTimeout(onComplete, 500);
      }
    });

    // 1. Switches Toggling ON & Indicators
    timeline.add({
      targets: '.status-led',
      backgroundColor: ['#333', '#A3FF12'],
      boxShadow: ['0 0 0px #A3FF12', '0 0 15px #A3FF12'],
      duration: 400,
      delay: anime.stagger(150)
    })
    // 2. Progress Bars Filling
    .add({
      targets: '.module-progress',
      width: ['0%', '100%'],
      duration: 1200,
      easing: 'easeInOutQuad',
      delay: anime.stagger(200)
    }, '-=400')
    // 3. Thrust Build
    .add({
      targets: '.thrust-bar',
      height: ['0%', '100%'],
      duration: 1800,
      easing: 'easeInQuad',
      begin: () => {
        // Subtle Screen Shake
        anime({
          targets: cockpitRef.current,
          translateX: [-1.5, 1.5],
          translateY: [-1.5, 1.5],
          duration: 80,
          direction: 'alternate',
          loop: true,
          easing: 'linear'
        });
      }
    }, '-=600')
    // 4. Takeoff Text & Impact
    .add({
      targets: '.takeoff-text',
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 800,
      easing: 'easeOutBack'
    }, '-=200')
    // 5. Final Velocity Transition
    .add({
      targets: cockpitRef.current,
      scale: 1.5,
      filter: ['blur(0px)', 'blur(30px)'],
      opacity: 0,
      duration: 1200,
      easing: 'easeInExpo'
    }, '+=100');
  };

  return (
    <div ref={containerRef} className="intro-container fixed inset-0 z-[100] bg-black flex items-center justify-center font-mono overflow-hidden">
      
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      {/* Skip Option */}
      <button 
        onClick={onComplete}
        className="absolute top-10 right-10 z-[110] text-[10px] text-white/20 hover:text-[#A3FF12] tracking-[0.4em] uppercase transition-all border border-transparent hover:border-[#A3FF12]/30 px-3 py-1"
      >
        SKIP_LAUNCH
      </button>

      <div ref={cockpitRef} className="relative w-full max-w-6xl px-8 md:px-20 flex flex-col items-center">
        
        {!isInitiated ? (
          /* SCENE 2: INIT BUTTON */
          <div className="flex flex-col items-center">
            <div className="mb-12 text-center">
              <h1 className="text-white/20 text-[10px] tracking-[1em] uppercase mb-4">Launch_Protocol_V4</h1>
              <div className="h-px w-32 bg-white/10 mx-auto" />
            </div>
            
            <button 
              onClick={handleInitiate}
              className="group relative px-16 py-8 border border-[#A3FF12]/40 text-[#A3FF12] tracking-[0.6em] uppercase font-black text-2xl hover:bg-[#A3FF12] hover:text-black transition-all duration-700 hover:shadow-[0_0_60px_rgba(163,255,18,0.3)] bg-black"
            >
              INITIATE TAKEOFF
              {/* Animated Corner Brackets */}
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#A3FF12] transition-all group-hover:-translate-x-2 group-hover:-translate-y-2" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#A3FF12] transition-all group-hover:translate-x-2 group-hover:translate-y-2" />
            </button>
            
            <div className="mt-12 flex gap-4 text-[9px] text-white/30 tracking-widest uppercase">
              <span>[ OS_READY ]</span>
              <span className="animate-pulse text-[#A3FF12]">[ WAITING_FOR_INPUT ]</span>
              <span>[ SYNC_OK ]</span>
            </div>
          </div>
        ) : (
          /* SCENE 1, 3, 4: COCKPIT PANEL */
          <div className="w-full grid grid-cols-12 gap-16 items-center">
            
            {/* LEFT WING: Systems 1-3 */}
            <div className="col-span-4 flex flex-col gap-10">
              {modules.slice(0, 3).map(m => (
                <div key={m.id} className="border border-white/5 p-5 bg-white/[0.01] relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#A3FF12]/10" />
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] text-white/40 tracking-[0.2em]">{m.label}</span>
                    <div className="status-led w-1.5 h-1.5 rounded-full bg-[#222]" />
                  </div>
                  <div className="h-0.5 bg-white/5 w-full relative">
                    <div className="module-progress h-full bg-[#A3FF12] w-0" />
                  </div>
                </div>
              ))}
            </div>

            {/* CORE: Thrust & Velocity */}
            <div className="col-span-4 flex flex-col items-center justify-center h-96 relative">
               <div className="takeoff-text opacity-0 absolute z-30 text-center pointer-events-none">
                  <h2 className="text-4xl font-black text-white tracking-tighter uppercase mb-3 drop-shadow-[0_0_20px_rgba(163,255,18,0.5)]">
                    TAKEOFF <span className="text-[#A3FF12]">INITIATED</span>
                  </h2>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-1 h-1 bg-[#A3FF12] rounded-full animate-ping" />
                    <div className="text-[9px] text-[#A3FF12] tracking-[0.4em] uppercase font-bold">Vector_Sync_Complete</div>
                  </div>
               </div>
               
               {/* Thrust Instrument */}
               <div className="w-20 h-full border border-white/10 bg-white/[0.01] relative flex flex-col justify-end p-1.5 backdrop-blur-sm">
                  <div className="thrust-bar w-full bg-gradient-to-t from-[#A3FF12] via-[#A3FF12] to-white shadow-[0_0_30px_rgba(163,255,18,0.4)] h-0 relative">
                     <div className="absolute -top-1 left-0 w-full h-[2px] bg-white shadow-[0_0_10px_#fff]" />
                  </div>
                  
                  {/* Markings */}
                  <div className="absolute -left-14 top-0 h-full flex flex-col justify-between py-4 text-[7px] text-white/20 font-mono text-right w-10">
                    {['MAX', '80', '60', '40', '20', 'MIN'].map(mark => (
                      <span key={mark}>{mark}</span>
                    ))}
                  </div>
                  <div className="absolute -right-24 top-1/2 -translate-y-1/2 text-[9px] text-white/20 font-black tracking-[0.5em] -rotate-90 whitespace-nowrap">
                    VELOCITY_INDEX
                  </div>
                  
                  {/* Decorative Scanline */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#A3FF12]/5 to-transparent h-20 w-full animate-[scan_3s_linear_infinite]" />
               </div>
            </div>

            {/* RIGHT WING: Systems 4-5 & Analytics */}
            <div className="col-span-4 flex flex-col gap-10">
              {modules.slice(3).map(m => (
                <div key={m.id} className="border border-white/5 p-5 bg-white/[0.01] relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-1 h-full bg-[#A3FF12]/10" />
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] text-white/40 tracking-[0.2em]">{m.label}</span>
                    <div className="status-led w-1.5 h-1.5 rounded-full bg-[#222]" />
                  </div>
                  <div className="h-0.5 bg-white/5 w-full relative">
                    <div className="module-progress h-full bg-[#A3FF12] w-0" />
                  </div>
                </div>
              ))}
              
              {/* Visual Data Stream */}
              <div className="border border-white/5 p-6 bg-white/[0.01] mt-2 relative">
                <div className="flex justify-between items-end h-16 gap-1">
                   {[...Array(15)].map((_, i) => (
                     <div 
                      key={i} 
                      className="flex-1 bg-[#A3FF12]/20" 
                      style={{ 
                        height: `${20 + Math.random() * 80}%`,
                        animation: `pulse ${1 + Math.random()}s infinite ease-in-out`
                      }} 
                    />
                   ))}
                </div>
                <div className="mt-3 text-[7px] text-white/20 flex justify-between uppercase font-mono">
                  <span>data_sync</span>
                  <span>99.9%_ok</span>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>

      {/* Decorative Branding */}
      <div className="absolute bottom-12 left-12 flex items-center gap-4 opacity-30">
        <div className="w-10 h-px bg-white/40" />
        <div className="text-[9px] text-white/40 tracking-[0.6em] uppercase">SYSTEM_LAUNCH_PROTOCOL</div>
      </div>

      <style>{`
        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(500%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
      `}</style>
      
    </div>
  );
};

export default Intro;
