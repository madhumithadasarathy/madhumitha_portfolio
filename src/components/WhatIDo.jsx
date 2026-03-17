import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {
        id: 'web',
        title: 'Web & UI',
        description: 'Pixel-perfect, interactive user interfaces.',
        color: '#06b6d4', // cyan
        glowProps: { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', rotate: 0 }
    },
    {
        id: 'fullstack',
        title: 'Full Stack',
        description: 'Robust backends meeting dynamic frontends.',
        color: '#d946ef', // fuchsia
        glowProps: { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', rotate: 45 }
    },
    {
        id: 'app',
        title: 'App Dev',
        description: 'High-performance cross-platform mobile experiences.',
        color: '#f97316', // orange
        glowProps: { borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', rotate: 90 }
    },
    {
        id: 'ai',
        title: 'AI & ML',
        description: 'Data-driven algorithms and predictive models.',
        color: '#00e639', // neon green
        glowProps: { borderRadius: '50% 50% 20% 80% / 25% 80% 20% 75%', rotate: 135 }
    },
    {
        id: 'genai',
        title: 'Generative AI',
        description: 'Automating creativity with cutting-edge models.',
        color: '#facc15', // yellow
        glowProps: { borderRadius: '70% 30% 50% 50% / 30% 30% 70% 70%', rotate: 180 }
    },
    {
        id: 'iot',
        title: 'Embedded/IoT',
        description: 'Bridging software with smart physical systems.',
        color: '#10b981', // emerald
        glowProps: { borderRadius: '30% 70% 50% 50% / 50% 50% 50% 50%', rotate: 225 }
    },
];

export default function WhatIDo() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="services" className="relative py-32 bg-dark overflow-hidden min-h-screen flex items-center">
            {/* Background noise/grid */}
            <div className="absolute inset-0 bg-checkerboard opacity-[0.03] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full relative z-10">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                    
                    {/* LEFT SIDE: Giant Typography List */}
                    <div className="flex flex-col gap-4 lg:gap-6">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <span className="text-neon text-sm font-mono tracking-[0.2em] uppercase block mb-2">Capabilities</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white">
                                What I <span className="text-dark-card bg-neon px-2 rounded-lg inline-block transform -rotate-2">Do</span>
                            </h2>
                        </motion.div>

                        <div className="flex flex-col relative" onMouseLeave={() => setActiveIndex(0)}>
                            {services.map((service, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <div 
                                        key={service.id}
                                        onMouseEnter={() => setActiveIndex(index)}
                                        onClick={() => setActiveIndex(index)}
                                        className="py-3 md:py-4 cursor-pointer group flex items-center"
                                    >
                                        <div className="overflow-hidden flex items-center">
                                            <motion.span 
                                                className="text-white font-black text-3xl md:text-5xl lg:text-6xl uppercase tracking-tighter transition-all duration-500 ease-out"
                                                animate={{
                                                    color: isActive ? '#fff' : '#ffffff20',
                                                    x: isActive ? 20 : 0,
                                                }}
                                                style={{ 
                                                    WebkitTextStroke: isActive ? 'none' : '1px rgba(255,255,255,0.1)',
                                                }}
                                            >
                                                {service.title}
                                            </motion.span>
                                            
                                            {/* Small dot indicator that appears next to active item */}
                                            <motion.div 
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ 
                                                    scale: isActive ? 1 : 0,
                                                    opacity: isActive ? 1 : 0
                                                }}
                                                className="ml-6 w-3 h-3 rounded-full"
                                                style={{ backgroundColor: service.color, boxShadow: `0 0 15px ${service.color}` }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT SIDE: Interactive Morphing Orb & Description */}
                    <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                            >
                                {/* Morphing Background Orb */}
                                <motion.div 
                                    className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] blur-[60px] opacity-40 mix-blend-screen"
                                    animate={{ 
                                        backgroundColor: services[activeIndex].color,
                                        ...services[activeIndex].glowProps
                                    }}
                                    transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
                                />
                                
                                {/* Sharp glowing border ring */}
                                <motion.div 
                                    className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-white/10"
                                    animate={{ 
                                        borderColor: `${services[activeIndex].color}40`,
                                        ...services[activeIndex].glowProps,
                                        rotate: services[activeIndex].glowProps.rotate + 180
                                    }}
                                    transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                                />

                                <div className="relative z-20 max-w-sm glassmorphism p-8 border border-white/5 rounded-2xl">
                                    <h3 
                                        className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent"
                                        style={{ backgroundImage: `linear-gradient(to right, #fff, ${services[activeIndex].color})` }}
                                    >
                                        {services[activeIndex].title}
                                    </h3>
                                    <p className="text-dark-text text-lg">
                                        {services[activeIndex].description}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
