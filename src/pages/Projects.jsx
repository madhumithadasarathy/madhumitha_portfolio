import React, { useState } from 'react';
import { allProjects } from '../data/projectsData';
import DashboardCard from '../components/DashboardCard';
import HeroSection from '../components/HeroSection';

const categories = ["All", "Frontend", "Full Stack", "AI / ML", "Gen AI", "Computer Vision"];
const sections = ["Frontend", "Full Stack", "AI / ML", "Gen AI", "Computer Vision"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen bg-[#020202] text-white font-poppins relative overflow-hidden flex flex-col">
      <div className="flex-1 opacity-100 transition-all duration-500">
        {/* Full-Screen Bento Command Dashboard */}
        <HeroSection 
          categories={categories} 
          activeCategory={activeCategory} 
          onFilterChange={setActiveCategory} 
        />

        {/* Project List */}
        <div className="pb-32 px-6 relative h-full bg-black">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col gap-24">
              {sections.map(section => {
                if (activeCategory !== "All" && activeCategory !== section) return null;
                
                const categoryProjects = allProjects.filter(p => p.category === section);
                
                return (
                  <section key={section} className="relative pt-24 border-t border-white/5">
                    {/* Section Header */}
                    <div className="flex items-center gap-6 mb-12">
                      <div className="w-3 h-3 bg-[#A3FF12] rounded-full animate-pulse shadow-[0_0_10px_rgba(163,255,18,0.5)]" />
                      <h2 className="text-3xl font-black uppercase tracking-[0.2em] text-white">
                        {section}
                      </h2>
                      <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                      <div className="px-3 py-1 border border-white/10 bg-white/5 font-mono text-[10px] text-white/40 uppercase tracking-widest">
                        {categoryProjects.length} NODE_SYSTEMS
                      </div>
                    </div>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </div>
  );
}
