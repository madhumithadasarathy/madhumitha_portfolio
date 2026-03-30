import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {
        id: 'web',
        num: '01',
        title: 'Web & UI',
        subtitle: 'Web & UI Development',
        skills: ['React', 'Tailwind', 'Three.js', 'Framer Motion'],
        description: 'Building responsive, pixel-perfect websites and interactive user interfaces with modern frameworks and sleek animations.',
        color: '#06b6d4',
        angle: 0,
    },
    {
        id: 'fullstack',
        num: '02',
        title: 'Full Stack',
        subtitle: 'Full Stack Development',
        skills: ['Python', 'Java', 'Node.js', 'REST APIs'],
        description: 'Developing end-to-end applications — from database design and server-side logic to polished, dynamic frontends.',
        color: '#d946ef',
        angle: 60,
    },
    {
        id: 'app',
        num: '03',
        title: 'App Dev',
        subtitle: 'Mobile App Development',
        skills: ['Cross-platform', 'React Native', 'Performance'],
        description: 'Creating fast, cross-platform mobile apps with intuitive UX, optimized for real-world performance and user engagement.',
        color: '#f97316',
        angle: 120,
    },
    {
        id: 'ai',
        num: '04',
        title: 'AI & ML',
        subtitle: 'AI & Machine Learning',
        skills: ['TensorFlow', 'PyTorch', 'Data Science', 'CNNs'],
        description: 'Training predictive models and deep learning networks to solve real-world problems using data-driven intelligence.',
        color: '#00e639',
        angle: 180,
    },
    {
        id: 'genai',
        num: '05',
        title: 'Gen AI',
        subtitle: 'Generative AI',
        skills: ['LLMs', 'Transformers', 'RAG', 'Agents'],
        description: 'Leveraging large language models and generative AI to build intelligent chatbots, automation tools, and creative solutions.',
        color: '#facc15',
        angle: 240,
    },
    {
        id: 'iot',
        num: '06',
        title: 'IoT',
        subtitle: 'Embedded Systems & IoT',
        skills: ['Arduino', 'Raspberry Pi', 'Sensors', 'C++'],
        description: 'Connecting the digital and physical world by programming microcontrollers and sensors into smart, connected systems.',
        color: '#10b981',
        angle: 300,
    },
];

// Unused placeholder
const terminalLines = [];

function TerminalReadout({ activeService }) {
    const [lines, setLines] = useState([]);
    const [currentChar, setCurrentChar] = useState('');
    const intervalRef = useRef(null);

    useEffect(() => {
        setLines([]);
        setCurrentChar('');
        let lineIdx = 0;
        let charIdx = 0;
        const targetLines = [
            `> Loading ${activeService.subtitle}...`,
            `> Skills: ${activeService.skills.join(', ')}`,
            `> ${activeService.description}`,
            `> Status: Ready ✓`,
        ];

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (lineIdx >= targetLines.length) {
                clearInterval(intervalRef.current);
                return;
            }
            const line = targetLines[lineIdx];
            if (charIdx < line.length) {
                charIdx++;
                setCurrentChar(line.substring(0, charIdx));
            } else {
                setLines(prev => [...prev, line]);
                setCurrentChar('');
                lineIdx++;
                charIdx = 0;
            }
        }, 20);

        return () => clearInterval(intervalRef.current);
    }, [activeService]);

    return (
        <div className="font-mono text-[11px] md:text-xs leading-relaxed space-y-1 h-[180px] overflow-hidden">
            {lines.map((line, i) => (
                <div key={i} className="text-dark-text opacity-70">{line}</div>
            ))}
            {currentChar && (
                <div className="text-white">
                    {currentChar}
                    <span className="animate-pulse text-neon">█</span>
                </div>
            )}
        </div>
    );
}

export default function WhatIDo() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [scanAngle, setScanAngle] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const pauseTimeoutRef = useRef(null);
    const active = services[activeIndex];

    // Auto-cycle through services every 4 seconds
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % services.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [isPaused]);

    // When user interacts, pause auto-cycle, resume after 5s of no interaction
    const handleUserSelect = (index) => {
        setActiveIndex(index);
        setIsPaused(true);
        if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 5000);
    };

    // Rotating radar scan
    useEffect(() => {
        const interval = setInterval(() => {
            setScanAngle(prev => (prev + 1) % 360);
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="services" className="relative py-20 md:py-32 bg-[#030303] overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(163,230,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(163,230,53,0.3) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full relative z-10">
                
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 border border-neon/20 rounded-full bg-neon/5">
                            <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                            <span className="text-neon text-xs font-mono tracking-[0.3em] uppercase">My Skills</span>
                            <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                            What I <span className="text-neon">Do</span>
                        </h2>
                        <p className="text-dark-text text-sm md:text-base mt-3 max-w-xl mx-auto">Hover over any node on the radar to explore my capabilities across different tech domains.</p>
                    </motion.div>
                </div>

                {/* Main Layout: Radar + Terminal */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-center min-h-[600px]">

                    {/* LEFT: Radar / Orbital Display */}
                    <div className="relative flex items-center justify-center">
                        <div className="relative w-[340px] h-[340px] md:w-[500px] md:h-[500px]">
                            
                            {/* Outer ring */}
                            <div className="absolute inset-0 rounded-full border border-white/[0.07]" />
                            {/* Middle ring */}
                            <div className="absolute inset-[15%] rounded-full border border-white/[0.05]" />
                            {/* Inner ring */}
                            <div className="absolute inset-[35%] rounded-full border border-white/[0.04]" />
                            
                            {/* Crosshair lines */}
                            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/[0.04]" />
                            <div className="absolute left-0 top-1/2 w-full h-[1px] bg-white/[0.04]" />
                            
                            {/* Rotating Radar Sweep Beam */}
                            <div 
                                className="absolute top-1/2 left-1/2 origin-[0%_0%] w-[250px] md:w-[250px] h-[2px]"
                                style={{
                                    transform: `rotate(${scanAngle}deg)`,
                                    background: `linear-gradient(90deg, rgba(163,230,53,0.6) 0%, transparent 100%)`,
                                    filter: 'blur(1px)',
                                }}
                            />
                            {/* Sweep glow trail */}
                            <div 
                                className="absolute top-1/2 left-1/2 origin-[0%_0%] w-[250px] h-[40px] -mt-[20px]"
                                style={{
                                    transform: `rotate(${scanAngle}deg)`,
                                    background: `linear-gradient(90deg, rgba(163,230,53,0.08) 0%, transparent 70%)`,
                                    filter: 'blur(8px)',
                                }}
                            />

                            {/* Center Hub */}
                            <div className="absolute inset-[40%] rounded-full bg-[#0a0a0a] border border-neon/30 flex items-center justify-center z-20">
                                <div className="text-center">
                                    <div className="text-neon text-[10px] md:text-xs font-mono tracking-widest">ACTIVE</div>
                                    <div className="text-white text-lg md:text-2xl font-black tracking-tight">{active.num}</div>
                                </div>
                            </div>

                            {/* Orbital Nodes */}
                            {services.map((service, index) => {
                                const isActive = activeIndex === index;
                                const angleRad = (service.angle - 90) * (Math.PI / 180);
                                const radius = 42; // % from center
                                const x = 50 + radius * Math.cos(angleRad);
                                const y = 50 + radius * Math.sin(angleRad);

                                return (
                                    <motion.div
                                        key={service.id}
                                        className="absolute z-30 cursor-pointer group"
                                        style={{
                                            left: `${x}%`,
                                            top: `${y}%`,
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                        onClick={() => handleUserSelect(index)}
                                        onMouseEnter={() => handleUserSelect(index)}
                                        whileHover={{ scale: 1.15 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {/* Ping ring on active */}
                                        {isActive && (
                                            <motion.div
                                                className="absolute inset-[-8px] rounded-full border-2"
                                                style={{ borderColor: service.color }}
                                                animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            />
                                        )}

                                        {/* Node dot */}
                                        <div
                                            className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                                                isActive ? 'bg-black/80 scale-110' : 'bg-black/50 border-white/10'
                                            }`}
                                            style={{
                                                borderColor: isActive ? service.color : undefined,
                                                boxShadow: isActive ? `0 0 25px ${service.color}40, inset 0 0 15px ${service.color}15` : 'none',
                                            }}
                                        >
                                            <span className="text-[10px] md:text-xs font-mono font-bold tracking-wider text-white">
                                                {service.num}
                                            </span>
                                        </div>
                                        
                                        {/* Label below node */}
                                        <div className={`absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-center transition-all duration-300 ${
                                            isActive ? 'opacity-100' : 'opacity-40'
                                        }`}>
                                            <span className="text-[9px] md:text-[10px] font-mono tracking-wider uppercase" 
                                                  style={{ color: isActive ? service.color : '#888' }}>
                                                {service.title}
                                            </span>
                                        </div>

                                        {/* Connection line to center */}
                                        {isActive && (
                                            <motion.div
                                                className="absolute z-[-1]"
                                                style={{
                                                    width: '2px',
                                                    height: `${radius * 1.6}%`,
                                                    background: `linear-gradient(to bottom, ${service.color}60, transparent)`,
                                                    transformOrigin: 'top center',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: `rotate(${service.angle + 90}deg)`,
                                                }}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                            />
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT: Info Panel / Terminal */}
                    <div className="flex flex-col gap-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                className="relative"
                            >
                                {/* Module Header Card */}
                                <div className="relative rounded-2xl border border-white/[0.08] bg-[#0a0a0a]/80 backdrop-blur-sm overflow-hidden">
                                    
                                    {/* Top Status Bar */}
                                    <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: active.color }} />
                                            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: active.color }}>
                                                {active.subtitle}
                                            </span>
                                        </div>
                                        <span className="font-mono text-[10px] text-white/30 tracking-widest">#{active.num}</span>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 md:p-8">
                                        <h3 className="text-3xl md:text-5xl font-black text-white mb-3 tracking-tight">
                                            {active.title}
                                        </h3>
                                        <p className="text-dark-text text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                                            {active.description}
                                        </p>

                                        {/* Skill Chips */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {active.skills.map((skill, i) => (
                                                <motion.span
                                                    key={skill}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: i * 0.05, duration: 0.3 }}
                                                    className="px-3 py-1.5 font-mono text-[10px] md:text-xs tracking-wider border rounded-lg"
                                                    style={{
                                                        color: active.color,
                                                        borderColor: `${active.color}30`,
                                                        backgroundColor: `${active.color}08`,
                                                    }}
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>

                                        {/* Divider */}
                                        <div className="h-[1px] bg-white/[0.06] mb-5" />

                                        {/* Terminal Readout */}
                                        <div className="bg-black/40 rounded-lg p-4 border border-white/[0.04]">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                                <span className="font-mono text-[10px] text-white/20 ml-2">module_terminal</span>
                                            </div>
                                            <TerminalReadout activeService={active} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Bottom Module Quick-Select Bar */}
                <div className="mt-12 flex justify-center gap-2 md:gap-3">
                    {services.map((service, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <button
                                key={service.id}
                                onClick={() => handleUserSelect(index)}
                                className={`relative px-3 py-2 md:px-5 md:py-2.5 rounded-lg font-mono text-[10px] md:text-xs tracking-wider uppercase border transition-all duration-300 ${
                                    isActive
                                        ? 'text-white border-white/20'
                                        : 'text-white/30 border-white/[0.06] hover:text-white/60 hover:border-white/10'
                                }`}
                                style={{
                                    backgroundColor: isActive ? `${service.color}15` : 'transparent',
                                    borderColor: isActive ? `${service.color}40` : undefined,
                                    color: isActive ? service.color : undefined,
                                }}
                            >
                                {service.title}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-[20%] right-[20%] h-[2px] rounded-full"
                                        style={{ backgroundColor: service.color }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
