import React from 'react';

const ProjectPanel = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end pointer-events-none">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto transition-opacity"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className="relative w-full max-w-md h-full bg-[#050505] border-l border-[#A3FF12]/30 p-10 pointer-events-auto shadow-[-20px_0_50px_rgba(0,0,0,0.8)] animate-[slideIn_0.3s_ease-out]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-white/30 hover:text-[#A3FF12] transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mt-12 flex flex-col h-full overflow-y-auto pr-4 scrollbar-hide">
          <div className="mb-8">
             <span className="text-[10px] font-mono font-bold text-[#050505] bg-[#A3FF12] px-2 py-1 uppercase tracking-widest">
               {project.category}
             </span>
          </div>
          
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">
            {project.name}
          </h2>
          
          <p className="text-[#a1a1a1] text-sm leading-relaxed mb-10 font-mono">
            {project.description}
          </p>

          <div className="mb-auto">
            <h4 className="text-[10px] text-white/40 uppercase tracking-widest font-mono mb-4">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(tech => (
                <span 
                  key={tech} 
                  className="px-3 py-1 text-[11px] font-mono text-[#A3FF12] border border-[#A3FF12]/50 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 pb-8">
             <button className="w-full py-4 bg-transparent border border-[#A3FF12] text-[#A3FF12] font-bold uppercase tracking-widest text-xs hover:bg-[#A3FF12] hover:text-black transition-all">
               View Demo
             </button>
             <button className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
               GitHub Source
             </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ProjectPanel;
