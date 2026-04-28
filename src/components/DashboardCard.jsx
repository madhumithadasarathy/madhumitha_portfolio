import React, { useState } from 'react';

const DashboardCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { category, name, description, techStack } = project;

  const renderVisual = () => {
    switch (category) {
      case "Frontend":
        return (
          <div className="flex w-full h-32 border border-white/10 bg-white/[0.02] rounded p-3 gap-3">
            <div className="w-1/4 h-full border border-white/10 bg-white/5 rounded-sm" />
            <div className="flex-1 flex flex-col gap-2">
              <div className="h-4 bg-[#A3FF12]/20 border border-[#A3FF12]/30 rounded-sm w-1/2" />
              <div className="flex-1 border border-white/10 bg-white/5 rounded-sm" />
            </div>
          </div>
        );
      case "Full Stack":
        return (
          <div className="flex items-center justify-between w-full h-32 border border-white/10 bg-white/[0.02] rounded px-6">
            <div className="w-10 h-10 rounded-sm border border-white/30 flex items-center justify-center text-[9px] font-mono text-white/50 bg-white/5">CLI</div>
            <div className="flex-1 flex items-center justify-center relative">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#A3FF12]/50 to-transparent" />
              <div className="absolute w-2 h-2 rounded-full bg-[#A3FF12] animate-pulse" />
            </div>
            <div className="w-14 h-14 rounded-sm border border-[#A3FF12] flex items-center justify-center text-[10px] font-bold font-mono text-[#A3FF12] bg-[#A3FF12]/10 z-10">API</div>
            <div className="flex-1 flex items-center justify-center relative">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
            <div className="w-10 h-12 rounded-sm border border-white/30 flex items-center justify-center text-[9px] font-mono text-white/50 bg-white/5">DB</div>
          </div>
        );
      case "AI / ML":
        return (
          <div className="relative w-full h-32 border border-white/10 bg-white/[0.02] rounded flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #A3FF12 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
            <div className="flex gap-8 items-center z-10 relative">
               <div className="flex flex-col gap-3">
                 <div className="w-3 h-3 rounded-full border border-white/50 bg-white/10" />
                 <div className="w-3 h-3 rounded-full border border-white/50 bg-white/10" />
                 <div className="w-3 h-3 rounded-full border border-white/50 bg-white/10" />
               </div>
               <svg className="absolute left-3 w-10 h-full pointer-events-none" style={{ top: 0, bottom: 0 }}>
                  <line x1="0" y1="20" x2="40" y2="40" stroke="rgba(163,255,18,0.3)" strokeWidth="1" />
                  <line x1="0" y1="50" x2="40" y2="40" stroke="rgba(163,255,18,0.3)" strokeWidth="1" />
                  <line x1="0" y1="80" x2="40" y2="40" stroke="rgba(163,255,18,0.3)" strokeWidth="1" />
                  <line x1="0" y1="20" x2="40" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <line x1="0" y1="50" x2="40" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <line x1="0" y1="80" x2="40" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
               </svg>
               <div className="flex flex-col gap-6">
                 <div className="w-5 h-5 rounded-full border border-[#A3FF12] bg-[#A3FF12]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#A3FF12]" />
                 </div>
                 <div className="w-4 h-4 rounded-full border border-white/50 bg-white/10" />
               </div>
               <svg className="absolute left-16 w-10 h-full pointer-events-none" style={{ top: 0, bottom: 0 }}>
                  <line x1="0" y1="40" x2="40" y2="60" stroke="rgba(163,255,18,0.5)" strokeWidth="1" />
                  <line x1="0" y1="80" x2="40" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
               </svg>
               <div className="w-6 h-6 rounded-sm border border-[#A3FF12] bg-[#A3FF12]/10 rotate-45 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#A3FF12]" />
               </div>
            </div>
          </div>
        );
      case "Gen AI":
        return (
          <div className="flex flex-col items-center justify-center w-full h-32 border border-white/10 bg-white/[0.02] rounded px-4 gap-2">
            <div className="w-full max-w-[200px] h-6 border border-white/20 rounded-sm flex items-center px-2 text-[9px] font-mono text-white/40 bg-black/50">
              <span className="text-[#A3FF12] mr-2">{'>'}</span> generate_system()
            </div>
            <div className="w-px h-3 bg-gradient-to-b from-white/30 to-[#A3FF12]" />
            <div className="w-16 h-7 border border-[#A3FF12] rounded-sm bg-[#A3FF12]/10 flex items-center justify-center text-[10px] font-bold text-[#A3FF12] shadow-[0_0_10px_rgba(163,255,18,0.2)]">
              LLM
            </div>
            <div className="w-px h-3 bg-gradient-to-b from-[#A3FF12] to-white/30" />
            <div className="w-full max-w-[200px] flex-1 border border-white/10 rounded-sm bg-white/5 p-2 flex flex-col gap-1">
              <div className="w-3/4 h-1.5 bg-white/20 rounded-sm" />
              <div className="w-1/2 h-1.5 bg-white/20 rounded-sm" />
              <div className="w-full h-1.5 bg-white/10 rounded-sm" />
            </div>
          </div>
        );
      case "Computer Vision":
        return (
          <div className="relative w-full h-32 border border-white/10 bg-white/[0.02] rounded flex items-center justify-center overflow-hidden">
             {/* Grid */}
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
             
             {/* Main Bounding Box */}
             <div className="absolute top-4 left-1/4 w-20 h-20 border border-[#A3FF12] bg-[#A3FF12]/5">
               <div className="absolute -top-3 left-0 bg-[#A3FF12] text-black text-[7px] px-1 font-bold tracking-widest uppercase">
                 Target: 99%
               </div>
               <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#A3FF12]" />
               <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#A3FF12]" />
               <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#A3FF12]" />
               <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#A3FF12]" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#A3FF12] rounded-full" />
             </div>

             {/* Secondary Bounding Box */}
             <div className="absolute bottom-4 right-6 w-12 h-10 border border-white/30 bg-white/5">
               <div className="absolute -top-3 left-0 bg-white/30 text-white text-[6px] px-1 font-bold tracking-widest uppercase">
                 Obj: 82%
               </div>
             </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-32 border border-white/10 bg-white/[0.02] rounded" />
        );
    }
  };

  return (
    <div 
      className="flex flex-col bg-[#080808] border border-white/10 rounded-lg p-5 cursor-pointer hover:-translate-y-[2px] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:border-[#A3FF12]/30 group"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Visual Area */}
      <div className="mb-5 transition-transform duration-300 group-hover:scale-[1.02]">
        {renderVisual()}
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-[#A3FF12] transition-colors">
          {name}
        </h3>
        
        <p className="text-[#888888] text-sm leading-relaxed font-mono line-clamp-2 mb-6">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-auto pt-4 border-t border-white/5">
          <div className="flex flex-wrap gap-2">
            {techStack.map(tech => (
              <span 
                key={tech} 
                className="px-2 py-1 text-[10px] font-mono text-[#A3FF12] border border-[#A3FF12]/30 bg-[#A3FF12]/5 rounded-sm uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-white/10 animate-[fadeIn_0.3s_ease-out]">
            <p className="text-sm text-[#a1a1a1] font-mono mb-6">
              This system implements high-performance architectural patterns and scalable infrastructure. 
              Engineered with precision for complex computational requirements.
            </p>
            <div className="flex gap-3">
               <button className="flex-1 py-3 bg-[#A3FF12]/10 border border-[#A3FF12] text-[#A3FF12] font-bold uppercase tracking-widest text-[10px] hover:bg-[#A3FF12] hover:text-black transition-all rounded-sm">
                 Live Demo
               </button>
               <button className="flex-1 py-3 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all rounded-sm">
                 Source Code
               </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default DashboardCard;
