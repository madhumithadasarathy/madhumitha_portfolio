import React, { useState, useEffect } from 'react';

const modules = [
  "FRONTEND",
  "FULL STACK",
  "AI / ML",
  "GEN AI",
  "COMPUTER VISION"
];

const Intro = ({ onComplete }) => {
  const [step, setStep] = useState('IDLE'); // IDLE, ACTIVATING, CONNECTING, READY, EXITING
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (step === 'ACTIVATING') {
      let current = 0;
      const interval = setInterval(() => {
        if (current < modules.length) {
          setActiveIndex(current);
          current++;
        } else {
          clearInterval(interval);
          setStep('CONNECTING');
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, [step]);

  useEffect(() => {
    if (step === 'CONNECTING') {
      const timer = setTimeout(() => setStep('READY'), 400);
      return () => clearTimeout(timer);
    }
    if (step === 'READY') {
      const timer = setTimeout(() => {
        setStep('EXITING');
        setTimeout(() => onComplete(), 500);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [step, onComplete]);

  const handleStart = () => {
    if (step === 'IDLE') setStep('ACTIVATING');
  };

  return (
    <div className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-opacity duration-500 ${step === 'EXITING' ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* Container */}
      <div className="flex flex-col gap-4 relative w-full max-w-sm">
        {modules.map((mod, i) => {
          const isActive = i <= activeIndex;
          const isActivating = step === 'ACTIVATING' && i === activeIndex + 1;
          
          return (
            <div 
              key={mod} 
              className={`flex items-center justify-between px-6 py-4 border transition-all duration-300 relative z-10
                ${isActive 
                  ? 'border-[#A3FF12] bg-[#A3FF12]/5 shadow-[0_0_15px_rgba(163,255,18,0.15)]' 
                  : 'border-white/10 bg-[#050505]'
                }`}
            >
               <span className={`text-xs font-mono uppercase tracking-widest ${isActive ? 'text-white' : 'text-white/30'}`}>
                 [ {mod} ]
               </span>
               <span className={`text-[10px] font-mono uppercase tracking-widest ${isActive ? 'text-[#A3FF12]' : isActivating ? 'text-white/80 animate-pulse' : 'text-white/20'}`}>
                 {isActive ? '✓ ACTIVE' : isActivating ? 'ACTIVATING...' : 'OFF'}
               </span>
            </div>
          );
        })}

        {/* Connecting Lines */}
        {(step === 'CONNECTING' || step === 'READY') && (
           <>
             <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#A3FF12]/50 animate-[drawVertical_0.4s_ease-out_forwards] z-0" />
           </>
        )}
      </div>

      <div className="mt-16 h-12 flex items-center justify-center">
        {step === 'IDLE' && (
          <button 
            onClick={handleStart}
            className="px-8 py-3 bg-transparent border border-[#A3FF12] text-[#A3FF12] text-xs font-bold font-mono uppercase tracking-widest hover:bg-[#A3FF12] hover:text-black hover:shadow-[0_0_20px_rgba(163,255,18,0.4)] transition-all"
          >
            INITIALIZE SYSTEM
          </button>
        )}
        {step === 'READY' && (
          <div className="text-[#A3FF12] text-xl font-black font-mono tracking-[0.5em] animate-[pulse_1s_infinite]">
            SYSTEM READY
          </div>
        )}
      </div>

      <style>{`
        @keyframes drawVertical {
          from { transform: translateX(-50%) scaleY(0); transform-origin: top; }
          to { transform: translateX(-50%) scaleY(1); transform-origin: top; }
        }
      `}</style>
    </div>
  );
};

export default Intro;
