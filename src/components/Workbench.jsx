import React from 'react';
import WorkbenchItem from './WorkbenchItem';

const Workbench = ({ projects, onProjectClick }) => {
  return (
    <div className="relative w-full min-h-[70vh] bg-[#050505] rounded-xl overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,1)] border border-white/5">
      {/* Texture & Vignette */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #A3FF12 1px, transparent 1px),
            linear-gradient(to bottom, #A3FF12 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000_100%)] pointer-events-none z-0" />
      
      {/* Workbench Content */}
      <div className="relative z-10 p-12 md:p-20">
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24">
          {projects.map((project) => (
            <WorkbenchItem 
              key={project.id} 
              project={project} 
              onClick={onProjectClick} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workbench;
