import React from 'react';
import VisualRenderer from './VisualRenderer';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      onClick={() => onClick(project)}
      className="group bg-[#050505] border border-white/5 hover:border-neon/40 transition-all duration-300 cursor-pointer flex flex-col h-full rounded-sm overflow-hidden hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(163,255,18,0.1)]"
    >
      {/* Category Label Overlay */}
      <div className="absolute top-3 left-3 z-10">
        <span className="text-[8px] font-mono font-bold text-neon uppercase tracking-widest bg-black/80 px-2 py-0.5 rounded-sm">
          {project.category}
        </span>
      </div>

      {/* Visual Strip */}
      <div className="h-32 w-full border-b border-white/5 relative">
        <VisualRenderer category={project.category} />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-2">
        <h3 className="text-lg font-bold text-white group-hover:text-neon transition-colors">
          {project.name}
        </h3>
        <p className="text-xs text-[#a1a1a1] leading-relaxed line-clamp-1">
          {project.description}
        </p>

        <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech, i) => (
            <span 
              key={i} 
              className="text-[9px] font-bold text-neon px-2 py-0.5 border border-neon/30 rounded-full uppercase tracking-tighter"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
