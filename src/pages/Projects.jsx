import React, { useState, useMemo } from 'react';
import { allProjects } from '../data/projectsData';
import FilterBar from '../components/FilterBar';
import Workbench from '../components/Workbench';
import ProjectPanel from '../components/ProjectPanel';

const categories = ["All", "Frontend", "Full Stack", "AI / ML", "Gen AI", "Computer Vision"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return activeCategory === "All" 
      ? allProjects 
      : allProjects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 font-poppins relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase">
            30 PROJECTS. 5 DOMAINS. <span className="text-[#A3FF12]">BUILT ON THE WORKBENCH.</span>
          </h1>
          <p className="text-[#a1a1a1] text-sm uppercase tracking-[0.2em] font-mono mt-4">
            Explore systems across AI, robotics, and full-stack engineering.
          </p>
        </header>

        <FilterBar 
          categories={categories} 
          activeCategory={activeCategory} 
          onFilterChange={setActiveCategory} 
        />

        <Workbench 
          projects={filteredProjects} 
          onProjectClick={setSelectedProject} 
        />

      </div>

      <ProjectPanel 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
