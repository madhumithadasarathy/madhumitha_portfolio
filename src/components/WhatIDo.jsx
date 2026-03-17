import { motion } from 'framer-motion';

const services = [
    {
        title: 'Web & UI Development',
        description: 'Crafting responsive, pixel-perfect, and highly interactive user interfaces with modern web technologies that prioritize user experience.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        color: 'from-blue-500/20 to-cyan-500/20',
        borderColor: 'border-cyan-500/30 hover:border-cyan-500/60',
        glow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]',
    },
    {
        title: 'Full Stack Development',
        description: 'Building robust, scalable backends and APIs using Python and Java, seamlessly integrated with dynamic frontends for complete solutions.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        ),
        color: 'from-purple-500/20 to-fuchsia-500/20',
        borderColor: 'border-fuchsia-500/30 hover:border-fuchsia-500/60',
        glow: 'group-hover:shadow-[0_0_30px_rgba(217,70,239,0.3)]',
    },
    {
        title: 'App Development',
        description: 'Designing and developing intuitive, high-performance cross-platform mobile applications tailored for optimal user engagement.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
        ),
        color: 'from-orange-500/20 to-rose-500/20',
        borderColor: 'border-orange-500/30 hover:border-orange-500/60',
        glow: 'group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]',
    },
    {
        title: 'AI & Machine Learning',
        description: 'Developing predictive models, deep learning architectures, and data-driven algorithms to extract actionable insights from complex datasets.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
        ),
        color: 'from-[#a3e635]/20 to-green-500/20',
        borderColor: 'border-[#a3e635]/30 hover:border-[#a3e635]/60',
        glow: 'group-hover:shadow-[0_0_30px_rgba(163,230,53,0.3)]',
    },
    {
        title: 'Generative AI',
        description: 'Exploring and implementing cutting-edge generative models to automate creative processes, text generation, and intelligent interactions.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a2.25 2.25 0 00-1.506-1.506L15.25 7l.985-.259a2.25 2.25 0 001.506-1.506L18 4.25l.259 1.035a2.25 2.25 0 001.506 1.506L20.75 7l-.985.259a2.25 2.25 0 00-1.506 1.506zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
        ),
        color: 'from-yellow-400/20 to-amber-500/20',
        borderColor: 'border-yellow-400/30 hover:border-yellow-400/60',
        glow: 'group-hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]',
    },
    {
        title: 'Embedded Systems & IoT',
        description: 'Bridging software and hardware by programming microcontrollers, sensors, and actuators to build connected, smart physical systems.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
            </svg>
        ),
        color: 'from-emerald-500/20 to-teal-500/20',
        borderColor: 'border-emerald-500/30 hover:border-emerald-500/60',
        glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function WhatIDo() {
    return (
        <section id="services" className="relative py-24 bg-dark overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none translate-y-1/3 -translate-x-1/4" />
            <div className="absolute inset-0 bg-checkerboard opacity-[0.03] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-neon text-sm font-mono tracking-[0.2em] uppercase block mb-3">Capabilities</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            What I <span className="text-dark-card bg-neon px-2 rounded-lg inline-block transform -rotate-2">Do</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-dark-text md:text-lg">
                            Transforming complex problems into elegant, scalable solutions across the entire technology stack.
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`group relative bg-dark-card/20 backdrop-blur-md rounded-2xl p-8 border ${service.borderColor} transition-all duration-500 overflow-hidden ${service.glow}`}
                        >
                            {/* Hover animated background gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0`} />
                            
                            <div className="relative z-10">
                                {/* Icon container */}
                                <div className="mb-6 inline-flex items-center justify-center p-3 rounded-xl bg-dark/50 border border-dark-border/50 text-white group-hover:scale-110 group-hover:text-white transition-all duration-300">
                                    {service.icon}
                                </div>
                                
                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-dark-text text-sm leading-relaxed group-hover:text-dark-text transition-colors duration-300">
                                    {service.description}
                                </p>
                                
                                {/* Bottom glowing line */}
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-white/20 group-hover:w-full transition-all duration-500 ease-out" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
