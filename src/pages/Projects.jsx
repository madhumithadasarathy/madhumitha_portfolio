import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "AI Personal Assistant",
        description: "A state-of-the-art AI assistant built with LLMs and voice recognition, featuring a sleek dashboard and real-time interaction.",
        category: "AI",
        tags: ["React", "Python", "OpenAI"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Crypto Nexus",
        description: "A decentralized finance platform for tracking real-time crypto markets with interactive charts and automated portfolio management.",
        category: "Web",
        tags: ["Next.js", "Solidity", "Tailwind"],
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "ZenFlow Mobile",
        description: "A mindfulness and meditation app with personalized wellness tracking and high-quality audio streaming.",
        category: "Mobile",
        tags: ["React Native", "Firebase", "Expo"],
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
        link: "#",
        github: "#"
    },
    {
        id: 4,
        title: "Nebula Dashboard",
        description: "An enterprise-grade SaaS analytics dashboard with complex data visualization and multi-tenant support.",
        category: "Web",
        tags: ["TypeScript", "D3.js", "Node.js"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        link: "#",
        github: "#"
    }
];

const categories = ["All", "AI", "Web", "Mobile"];

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All" 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen bg-checkerboard">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-compagnon">
                        <span className="text-white">Selected</span>{" "}
                        <span className="text-neon italic underline decoration-neon/30">Works</span>
                    </h1>
                    <p className="text-dark-text text-lg max-w-2xl mx-auto">
                        A showcase of my recent projects, focusing on high-performance applications 
                        and intuitive user experiences.
                    </p>
                </motion.div>

                {/* Filter Bar */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm font-medium
                                ${filter === cat 
                                    ? "bg-neon text-dark border-neon shadow-[0_0_20px_rgba(163,230,53,0.3)]" 
                                    : "border-dark-border text-dark-text hover:border-neon/50 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative bg-dark-card border border-dark-border rounded-3xl overflow-hidden hover:border-neon/30 transition-colors"
                            >
                                {/* Project Image Wrapper */}
                                <div className="aspect-video overflow-hidden relative">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                        <a 
                                            href={project.link}
                                            className="px-4 py-2 bg-white text-dark rounded-full font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                        >
                                            View Project
                                        </a>
                                        <a 
                                            href={project.github}
                                            className="px-4 py-2 bg-dark-card border border-dark-border text-white rounded-full font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-neon transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className="text-xs font-mono px-2 py-1 bg-dark-border text-dark-text rounded border border-dark-border">
                                            {project.category}
                                        </span>
                                    </div>
                                    <p className="text-dark-text mb-6 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span 
                                                key={tag}
                                                className="text-[10px] uppercase tracking-wider font-bold text-white/50 px-2 py-1 rounded bg-white/5 border border-white/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* CTA Section */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center p-12 rounded-3xl border border-dashed border-dark-border bg-dark-card/30"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Interested in collaborating?</h2>
                    <p className="text-dark-text mb-8">I'm always open to discussing new projects and creative opportunities.</p>
                    <button className="px-8 py-3 bg-neon text-dark font-bold rounded-full hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] transition-all">
                        Get In Touch
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
