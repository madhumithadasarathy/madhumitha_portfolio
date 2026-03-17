import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        id: 'web',
        sysId: '01 // WEB_INTERFACE',
        title: 'Web & UI Dev',
        skills: ['React', 'Tailwind', 'Three.js'],
        description: 'Crafting pixel-perfect, highly interactive user experiences. Designing terminal-like interfaces and modern glassmorphism layouts that prioritize seamless human-computer interaction.',
        color: '#06b6d4', // cyan
        bgPattern: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
    },
    {
        id: 'fullstack',
        sysId: '02 // CORE_SYSTEMS',
        title: 'Full Stack Dev',
        skills: ['Python', 'Java', 'APIs'],
        description: 'Architecting robust, scalable backends that meet dynamic frontends. Building secure, high-throughput architectures capable of processing massive data loads.',
        color: '#d946ef', // fuchsia
        bgPattern: 'radial-gradient(circle at 50% 50%, rgba(217, 70, 239, 0.1) 0%, transparent 70%)',
    },
    {
        id: 'app',
        sysId: '03 // MOBILE_UPLINK',
        title: 'App Dev',
        skills: ['Cross-platform', 'UI/UX', 'Performance'],
        description: 'Deploying high-performance, cross-platform mobile experiences. Optimized for low latency and maximum user engagement across diverse device ecosystems.',
        color: '#f97316', // orange
        bgPattern: 'radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 70%)',
    },
    {
        id: 'ai',
        sysId: '04 // NEURAL_NETS',
        title: 'AI & ML',
        skills: ['TensorFlow', 'Data Science', 'Predictive'],
        description: 'Training deep neural networks and machine learning models to extract actionable intelligence. Implementing predictive algorithms to solve complex real-world variables.',
        color: '#00e639', // neon green
        bgPattern: 'radial-gradient(circle at 50% 50%, rgba(0, 230, 57, 0.1) 0%, transparent 70%)',
    },
    {
        id: 'genai',
        sysId: '05 // GEN_SYNTHESIS',
        title: 'Generative AI',
        skills: ['LLMs', 'Transformers', 'Automation'],
        description: 'Harnessing the power of large language models and generative structures to automate creativity, synthesize data, and build autonomous agents.',
        color: '#facc15', // yellow
        bgPattern: 'radial-gradient(circle at 50% 50%, rgba(250, 204, 21, 0.1) 0%, transparent 70%)',
    },
    {
        id: 'iot',
        sysId: '06 // HARDWARE_LINK',
        title: 'Embedded/IoT',
        skills: ['Microcontrollers', 'Sensors', 'C++'],
        description: 'Bridging the digital and physical divide. Programming microcontrollers and sensor arrays to construct intelligent, interconnected hardware ecosystems.',
        color: '#10b981', // emerald
        bgPattern: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
    },
];

export default function WhatIDo() {
    // Default to the first item being active on large screens
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="services" className="relative py-24 bg-[#050505] overflow-hidden min-h-[90vh] flex flex-col justify-center">
            {/* Ambient background noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
            
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full relative z-10 flex flex-col items-center">
                
                {/* Sci-Fi Header */}
                <div className="w-full text-left mb-12 border-b border-dark-border/50 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className="h-[2px] w-16 bg-neon mb-4 origin-left"
                        />
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mix-blend-difference">
                            SYSTEM <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #fff, #555)' }}>MODULES</span>
                        </h2>
                    </div>
                    <div className="flex gap-4 text-xs font-mono text-dark-text uppercase tracking-widest hidden md:flex">
                        <span>STATUS: <span className="text-neon">ONLINE</span></span>
                        <span>//</span>
                        <span>CAPACITIES: <span className="text-white">OPTIMIZED</span></span>
                    </div>
                </div>

                {/* Expanding Accordion Container */}
                <div className="flex flex-col lg:flex-row h-[70vh] lg:h-[650px] w-full gap-2 lg:gap-4 transition-all duration-500">
                    
                    {services.map((service, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={service.id}
                                onClick={() => setActiveIndex(index)}
                                onMouseEnter={() => setActiveIndex(index)}
                                className={`relative overflow-hidden rounded-2xl cursor-pointer group transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-end border ${
                                    isActive ? `border-[${service.color}]/40` : 'border-white/5'
                                }`}
                                style={{
                                    flex: isActive ? '5 1 0%' : '1 1 0%',
                                    minHeight: isActive ? '300px' : '60px', // for mobile vertical stacking
                                    background: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 100%), ${service.bgPattern}, #0a0a0a`
                                }}
                            >
                                {/* Sci-Fi Overlay Grid & Scanline */}
                                {isActive && (
                                    <>
                                        <div className="absolute inset-0 opacity-20 pointer-events-none" 
                                             style={{
                                                 backgroundImage: `linear-gradient(${service.color} 1px, transparent 1px), linear-gradient(90deg, ${service.color} 1px, transparent 1px)`,
                                                 backgroundSize: '30px 30px',
                                             }}
                                        />
                                        <motion.div 
                                            className="absolute top-0 left-0 w-full h-[2px] opacity-50 blur-[1px] pointer-events-none"
                                            style={{ backgroundColor: service.color, boxShadow: `0 0 20px 2px ${service.color}` }}
                                            animate={{ top: ['0%', '100%'] }}
                                            transition={{ duration: 3, ease: 'linear', repeat: Infinity }}
                                        />
                                    </>
                                )}

                                {/* Collapsed State: Vertical Text (Desktop) / Horizontal Text (Mobile) */}
                                <div className={`absolute top-0 left-0 w-full h-full p-4 md:p-6 flex flex-row lg:flex-col lg:items-center lg:justify-start justify-between transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                                    <span className="font-mono text-sm tracking-widest text-white/50 lg:rotate-90 lg:mt-8">{service.title}</span>
                                    <span className="font-mono text-xs text-white/20 lg:mb-4 lg:hidden">{`0${index + 1}`}</span>
                                </div>

                                {/* Expanded State Content */}
                                <div className={`relative z-10 p-6 md:p-10 flex flex-col justify-end h-full transition-opacity duration-700 delay-100 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                    
                                    {/* Top-right System ID */}
                                    <div className="absolute top-6 right-6 font-mono text-xs tracking-widest opacity-60 hidden md:block" style={{ color: service.color }}>
                                        {service.sysId}
                                    </div>

                                    {/* Expanding Divider Line */}
                                    <motion.div 
                                        className="h-[1px] bg-white/20 mb-6 hidden md:block"
                                        initial={{ width: 0 }}
                                        animate={{ width: isActive ? '100%' : '0%' }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                    />

                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-2xl">
                                            {service.title}
                                        </h3>
                                        
                                        <p className="text-dark-text text-sm md:text-base lg:text-lg mb-6 max-w-2xl leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Tech Tags */}
                                        <div className="flex flex-wrap gap-3">
                                            {service.skills.map((skill, i) => (
                                                <span 
                                                    key={i} 
                                                    className="px-3 py-1 font-mono text-[10px] md:text-xs tracking-wider border border-white/10 rounded-full backdrop-blur-md"
                                                    style={{ color: service.color, backgroundColor: `${service.color}10` }}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Edge Glow for active item */}
                                {isActive && (
                                    <div 
                                        className="absolute bottom-0 left-0 w-full h-[2px] transition-all duration-700 shadow-2xl" 
                                        style={{ backgroundColor: service.color, boxShadow: `0 -10px 40px ${service.color}` }}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
