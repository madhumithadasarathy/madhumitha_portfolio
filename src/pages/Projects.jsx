import React, { useState, useMemo } from 'react';
import { allProjects } from '../data/projectsData';
import FilterBar from '../components/FilterBar';
import DashboardCard from '../components/DashboardCard';

const categories = ["All", "Frontend", "Full Stack", "AI / ML", "Gen AI", "Computer Vision"];
const sections = ["Frontend", "Full Stack", "AI / ML", "Gen AI", "Computer Vision"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen bg-[#020202] text-white pt-32 pb-20 px-6 font-poppins relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16 border-b border-white/10 pb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase text-white">
            System <span className="text-[#A3FF12]">Dashboard</span>
          </h1>
          <p className="text-[#888] text-sm uppercase tracking-[0.2em] font-mono">
            Structured analysis of 30 engineered projects across 5 domains.
          </p>
        </header>

        <FilterBar 
          categories={categories} 
          activeCategory={activeCategory} 
          onFilterChange={setActiveCategory} 
        />

        <div className="mt-16 flex flex-col gap-24">
          {sections.map(section => {
            if (activeCategory !== "All" && activeCategory !== section) return null;
            
            const categoryProjects = allProjects.filter(p => p.category === section);
            
            return (
              <section key={section} className="relative">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-2 h-2 bg-[#A3FF12] rounded-full animate-pulse" />
                  <h2 className="text-2xl font-black uppercase tracking-widest text-white">
                    {section}
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                  <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                    {categoryProjects.length} Nodes
                  </span>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryProjects.map((project) => (
                    <DashboardCard 
                      key={project.id} 
                      project={project} 
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

      </div>
    </div>
  );
}
