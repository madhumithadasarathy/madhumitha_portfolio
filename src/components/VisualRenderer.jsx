import React from 'react';

const VisualRenderer = ({ category }) => {
  switch (category) {
    case 'Frontend':
      return (
        <div className="relative w-full h-full flex flex-col gap-1 p-2 bg-black/40">
          <div className="w-full h-3 border border-neon/30 bg-neon/5" />
          <div className="flex gap-1 h-full">
            <div className="w-1/3 h-full border border-neon/20 bg-neon/5" />
            <div className="flex-1 border border-neon/20 bg-neon/5 grid grid-cols-2 gap-1 p-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="border border-neon/10 bg-neon/5" />
              ))}
            </div>
          </div>
        </div>
      );
    case 'Full Stack':
      return (
        <div className="relative w-full h-full flex items-center justify-center gap-2 p-2 bg-black/40">
          <div className="w-8 h-8 border border-neon/40 flex items-center justify-center text-[6px] text-neon/60">CLIENT</div>
          <div className="w-4 h-px bg-neon/40 relative">
            <div className="absolute top-1/2 -translate-y-1/2 w-1 h-1 bg-neon rounded-full animate-pulse" />
          </div>
          <div className="w-10 h-10 rounded-full border border-neon/60 flex items-center justify-center text-[6px] text-neon/80">API</div>
          <div className="w-4 h-px bg-neon/40" />
          <div className="w-8 h-8 border-2 border-neon/40 rounded-sm flex flex-col gap-0.5 p-1">
            <div className="w-full h-px bg-neon/30" />
            <div className="w-full h-px bg-neon/30" />
            <div className="w-full h-px bg-neon/30" />
          </div>
        </div>
      );
    case 'AI / ML':
      return (
        <div className="relative w-full h-full flex items-center justify-between px-4 bg-black/40">
          <div className="w-2 h-2 bg-neon/40 rounded-full" />
          <div className="flex-1 h-px bg-neon/20 mx-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-neon animate-[moveRight_2s_linear_infinite]" />
          </div>
          <div className="w-12 h-12 rotate-45 border border-neon/60 flex items-center justify-center">
            <div className="w-6 h-6 border border-neon/20 -rotate-45" />
          </div>
          <div className="flex-1 h-px bg-neon/20 mx-2" />
          <div className="w-2 h-2 bg-neon/80 rounded-full" />
        </div>
      );
    case 'Gen AI':
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-1.5 p-2 bg-black/40">
          <div className="w-4/5 h-2 border border-neon/20 rounded-full flex items-center px-2">
             <div className="w-2/3 h-0.5 bg-neon/40" />
          </div>
          <div className="w-full h-6 border border-neon flex items-center justify-center text-[6px] text-neon font-mono bg-neon/5">
            L_LAYER_PROCESSOR
          </div>
          <div className="w-3/4 h-3 border border-neon/20 border-t-0 flex gap-1 px-2">
            <div className="w-1 h-full bg-neon/40 animate-pulse" />
            <div className="w-1 h-full bg-neon/20" />
            <div className="w-1 h-full bg-neon/60 animate-pulse" />
          </div>
        </div>
      );
    case 'Computer Vision':
      return (
        <div className="relative w-full h-full overflow-hidden bg-black/40">
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'linear-gradient(#A3FF12 1px, transparent 1px), linear-gradient(90deg, #A3FF12 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
          <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-neon/60">
            <div className="absolute -top-3 left-0 text-[6px] text-neon">DETECTED_OBJ</div>
          </div>
          <div className="absolute top-1/3 left-2/3 w-8 h-8 border border-neon/40" />
          <div className="absolute top-0 left-0 w-full h-[1px] bg-neon shadow-[0_0_8px_#A3FF12] animate-[scan_3s_linear_infinite]" />
        </div>
      );
    default:
      return null;
  }
};

export default VisualRenderer;
