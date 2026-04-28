import React from 'react';

// 1. Robotics: Joints and angled lines
export const RoboticsViz = () => (
  <div className="relative w-full h-full bg-black/40 overflow-hidden flex items-center justify-center">
    <div className="absolute w-32 h-32 border border-neon/10 rounded-full animate-pulse" />
    <div className="relative w-40 h-2 bg-neon/20 -rotate-45 origin-left">
      <div className="absolute -right-2 -top-1 w-3 h-3 bg-neon rounded-full shadow-[0_0_10px_#A3FF12]" />
    </div>
    <div className="relative w-32 h-2 bg-neon/40 rotate-12 origin-left -ml-2">
      <div className="absolute -right-2 -top-1 w-3 h-3 bg-neon rounded-full shadow-[0_0_10px_#A3FF12]" />
    </div>
    <div className="absolute top-4 left-4 text-[8px] text-neon/40 font-mono">JOINT_STATE_01</div>
  </div>
);

// 2. AI/ML: Pipeline with moving data flow
export const AIMLViz = () => (
  <div className="relative w-full h-full bg-black/40 overflow-hidden flex items-center justify-center gap-4">
    <div className="w-12 h-12 border border-neon/30 flex items-center justify-center text-[8px] text-neon/60">IN</div>
    <div className="relative flex-1 h-px bg-neon/20">
      <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-neon rounded-full animate-[moveRight_2s_linear_infinite]" />
    </div>
    <div className="w-16 h-16 border-2 border-neon flex items-center justify-center bg-neon/5 shadow-[inset_0_0_15px_rgba(163,255,18,0.2)]">
      <div className="w-8 h-8 border border-neon/40 rotate-45 animate-spin-slow" />
    </div>
    <div className="relative flex-1 h-px bg-neon/20">
       <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-neon rounded-full animate-[moveRight_2s_linear_infinite_0.5s]" />
    </div>
    <div className="w-12 h-12 border border-neon/30 flex items-center justify-center text-[8px] text-neon/60">OUT</div>
  </div>
);

// 3. Gen AI: Layered processing
export const GenAIViz = () => (
  <div className="relative w-full h-full bg-black/40 overflow-hidden flex flex-col items-center justify-center gap-2 p-4">
    {['PROMPT', 'EMBED', 'TRANSFORM', 'GEN'].map((layer, i) => (
      <div key={layer} 
           className="w-full h-6 border border-neon/20 bg-neon/5 flex items-center justify-center text-[8px] text-neon/60 relative overflow-hidden"
           style={{ width: `${80 + i * 5}%` }}>
        {layer}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon/10 to-transparent animate-[shimmer_3s_infinite]" />
      </div>
    ))}
  </div>
);

// 4. Computer Vision: Grid + Scanning line + Bounding Boxes
export const CVViz = () => (
  <div className="relative w-full h-full bg-black/40 overflow-hidden">
    <div className="absolute inset-0 opacity-10" 
         style={{ backgroundImage: 'linear-gradient(#A3FF12 1px, transparent 1px), linear-gradient(90deg, #A3FF12 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-neon/60">
        <div className="absolute -top-4 -left-4 text-[8px] text-neon">OBJ_DET_01: 98%</div>
        <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-neon" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-neon" />
    </div>
    <div className="absolute top-0 left-0 w-full h-px bg-neon shadow-[0_0_10px_#A3FF12] animate-[scan_4s_linear_infinite]" />
  </div>
);

// 5. Full Stack: Client -> API -> DB
export const FullStackViz = () => (
  <div className="relative w-full h-full bg-black/40 overflow-hidden flex items-center justify-center gap-6">
    <div className="w-14 h-20 border border-neon/40 rounded-sm flex flex-col p-1 gap-1">
        <div className="w-full h-2 bg-neon/20 rounded-full" />
        <div className="w-full h-10 border border-neon/20 rounded-sm" />
    </div>
    <div className="flex flex-col items-center gap-1">
        <div className="w-8 h-8 rounded-full border border-neon bg-neon/5 flex items-center justify-center text-[8px] text-neon animate-pulse">API</div>
        <div className="w-px h-10 bg-neon/20 relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-1 bg-neon rounded-full animate-[moveDown_1.5s_linear_infinite]" />
        </div>
    </div>
    <div className="w-14 h-16 border-2 border-neon/40 rounded-lg relative flex flex-col justify-center items-center gap-1">
        <div className="w-10 h-1 bg-neon/30 rounded-full" />
        <div className="w-10 h-1 bg-neon/30 rounded-full" />
        <div className="w-10 h-1 bg-neon/30 rounded-full" />
        <div className="absolute -top-2 text-[6px] text-neon/40">DB_STORAGE</div>
    </div>
  </div>
);

// 6. Frontend: UI Layout blocks
export const FrontendViz = () => (
  <div className="relative w-full h-full bg-black/40 overflow-hidden p-4 flex flex-col gap-2">
    <div className="w-full h-4 border border-neon/40 bg-neon/5" />
    <div className="flex-1 flex gap-2">
        <div className="w-1/4 h-full border border-neon/20 bg-neon/5" />
        <div className="flex-1 h-full border border-neon/20 bg-neon/5 flex flex-wrap p-1 gap-1">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="w-[30%] h-6 border border-neon/10 bg-neon/5" />
            ))}
        </div>
    </div>
    <div className="absolute inset-0 pointer-events-none border border-neon/20 m-2 border-dashed" />
  </div>
);
