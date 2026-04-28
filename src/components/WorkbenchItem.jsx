import React from 'react';

const WorkbenchItem = ({ project, onClick }) => {
  const { category, name } = project;

  // "Structured randomness" - we can use a hash of the project ID to generate slight offsets
  const pseudoRandom = Math.sin(project.id * 100) * 10; 
  const rotateStr = `rotate(${Math.sin(project.id) * 2}deg)`;
  
  const getShape = () => {
    switch(category) {
      case "Frontend":
        return (
          <div className="w-20 h-16 border border-[#A3FF12]/40 bg-[#050505] rounded-sm flex flex-col p-1 relative shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
            <div className="flex gap-1 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#A3FF12]/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>
            <div className="grid grid-cols-3 gap-1 flex-1">
              <div className="bg-white/5 col-span-1 rounded-sm" />
              <div className="bg-white/5 col-span-2 rounded-sm" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-[#A3FF12]/20" />
          </div>
        );
      case "Full Stack":
        return (
          <div className="w-16 h-20 flex flex-col gap-1 relative shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
            <div className="flex-1 bg-[#050505] border border-[#A3FF12]/40 rounded-sm" />
            <div className="flex-1 bg-[#050505] border border-white/20 rounded-sm" />
            <div className="flex-1 bg-[#050505] border border-white/20 rounded-sm" />
          </div>
        );
      case "AI / ML":
        return (
          <div className="w-16 h-16 bg-[#050505] border border-[#A3FF12]/40 rounded-md relative shadow-[0_4px_10px_rgba(0,0,0,0.5)] flex items-center justify-center p-2">
             <div className="w-full h-full border border-white/10 grid grid-cols-2 gap-1 p-1">
               <div className="bg-[#A3FF12]/20 rounded-full" />
               <div className="bg-white/10 rounded-full" />
               <div className="bg-white/10 rounded-full" />
               <div className="bg-[#A3FF12]/20 rounded-full" />
             </div>
             <div className="absolute -top-1 left-2 w-1 h-3 bg-[#A3FF12]/40" />
             <div className="absolute -top-1 right-2 w-1 h-3 bg-[#A3FF12]/40" />
             <div className="absolute -bottom-1 left-2 w-1 h-3 bg-[#A3FF12]/40" />
             <div className="absolute -bottom-1 right-2 w-1 h-3 bg-[#A3FF12]/40" />
          </div>
        );
      case "Gen AI":
        return (
          <div className="w-16 h-20 relative shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-[#050505] border border-white/10 translate-x-2 -translate-y-2 rounded-sm" />
            <div className="absolute inset-0 bg-[#050505] border border-white/20 translate-x-1 -translate-y-1 rounded-sm" />
            <div className="absolute inset-0 bg-[#050505] border border-[#A3FF12]/40 rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 border border-[#A3FF12]/60 rotate-45" />
            </div>
          </div>
        );
      case "Computer Vision":
        return (
          <div className="w-20 h-16 bg-[#050505] border-2 border-dashed border-[#A3FF12]/30 relative shadow-[0_4px_10px_rgba(0,0,0,0.5)] p-2">
            <div className="w-full h-full border border-[#A3FF12]/60 flex items-center justify-center relative">
               <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#A3FF12]" />
               <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#A3FF12]" />
               <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#A3FF12]" />
               <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#A3FF12]" />
               <div className="w-4 h-4 bg-[#A3FF12]/20 rounded-full" />
            </div>
          </div>
        );
      default:
        return (
          <div className="w-16 h-16 border border-[#A3FF12]/40 bg-[#050505]" />
        );
    }
  };

  return (
    <div 
      className="flex flex-col items-center gap-4 cursor-pointer group transition-all duration-300 transform"
      style={{ 
        transform: `translateY(${pseudoRandom}px) ${rotateStr}`,
      }}
      onClick={() => onClick(project)}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#A3FF12]/0 group-hover:bg-[#A3FF12]/10 blur-xl transition-all duration-300 rounded-full" />
        <div className="relative transform group-hover:-translate-y-[5px] group-active:scale-95 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.6)] group-hover:shadow-[0_15px_30px_rgba(163,255,18,0.2)]">
          {getShape()}
        </div>
      </div>
      <span className="text-[10px] font-mono text-white/50 group-hover:text-[#A3FF12] tracking-wider uppercase max-w-[100px] text-center leading-tight transition-colors">
        {name}
      </span>
    </div>
  );
};

export default WorkbenchItem;
