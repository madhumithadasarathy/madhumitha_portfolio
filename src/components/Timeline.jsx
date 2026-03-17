import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useRef, useState, useMemo, useEffect } from 'react';

function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < breakpoint);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, [breakpoint]);
    return isMobile;
}

const milestones = [
    {
        year: '2022 – 2026',
        shortYear: '26',
        degree: 'BE CSE',
        fullDegree: 'Bachelor of Engineering',
        subtitle: 'AI & Machine Learning',
        school: 'Sri Sairam Engineering College',
        location: 'Chennai, Tamil Nadu',
        score: 'Ongoing',
        scoreNum: null,
        color: '#a3e635',
        colorDim: 'rgba(163,230,53,0.08)',
        detail: 'Pursuing a Bachelor of Engineering in Computer Science & Engineering with a specialization in Artificial Intelligence and Machine Learning — building the future, one model at a time.',
    },
    {
        year: '2021',
        shortYear: '21',
        degree: 'Class XII',
        fullDegree: 'Higher Secondary',
        subtitle: 'Board Examinations',
        school: "St. Ursula's Anglo Indian HSS",
        location: 'Church Park, Chennai',
        score: '96.56%',
        scoreNum: 96.56,
        color: '#c084fc',
        colorDim: 'rgba(192,132,252,0.08)',
        detail: 'Achieved an outstanding 96.56% in the Class XII board examinations, demonstrating consistent academic excellence and a passion for science and mathematics.',
    },
    {
        year: '2019',
        shortYear: '19',
        degree: 'Class X',
        fullDegree: 'Secondary School',
        subtitle: 'Board Examinations',
        school: "St. Ursula's Anglo Indian HSS",
        location: 'Church Park, Chennai',
        score: '93%',
        scoreNum: 93,
        color: '#22d3ee',
        colorDim: 'rgba(34,211,238,0.08)',
        detail: 'Scored 93% in the Class X board examinations, establishing a rock-solid academic foundation that paved the way for engineering.',
    },
];

// Floating particles component
function Particles({ color, count = 20 }) {
    const particles = useMemo(() =>
        Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            delay: Math.random() * 5,
            duration: Math.random() * 8 + 6,
        })), [count]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        background: color,
                        opacity: 0.2,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.1, 0.35, 0.1],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
}

export default function Timeline() {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const isMobile = useIsMobile();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    useMotionValueEvent(scrollYProgress, 'change', (v) => {
        const idx = Math.min(Math.floor(v * milestones.length), milestones.length - 1);
        setActiveIndex(idx);
    });

    const active = milestones[activeIndex];

    return (
        <section id="timeline" ref={containerRef} className="relative bg-dark" style={{ height: isMobile ? `${milestones.length * 70}vh` : `${milestones.length * 100}vh` }}>
            <div className="sticky top-0 h-screen overflow-hidden flex items-start pt-20 lg:items-center lg:pt-0" style={{ willChange: 'transform' }}>

                {/* ═══ BACKGROUND LAYERS ═══ */}

                {/* Large color blob */}
                <motion.div
                    className="absolute w-[350px] h-[350px] sm:w-[700px] sm:h-[700px] rounded-full blur-[80px] sm:blur-[200px] pointer-events-none"
                    animate={{
                        background: active.colorDim,
                        x: activeIndex === 0 ? '50%' : activeIndex === 1 ? '-30%' : '20%',
                        y: activeIndex === 0 ? '-40%' : activeIndex === 1 ? '0%' : '-20%',
                    }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    style={{ right: 0, top: 0 }}
                />
                <motion.div
                    className="absolute w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] rounded-full blur-[60px] sm:blur-[150px] pointer-events-none"
                    animate={{ background: active.colorDim }}
                    transition={{ duration: 1.5 }}
                    style={{ left: '-5%', bottom: '10%' }}
                />

                {/* Particles */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0"
                    >
                        <Particles color={active.color} count={isMobile ? 8 : 25} />
                    </motion.div>
                </AnimatePresence>

                {/* Decorative rings */}
                {!isMobile && (
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                    >
                        <svg width="800" height="800" viewBox="0 0 800 800" className="opacity-[0.03]">
                            <circle cx="400" cy="400" r="350" fill="none" stroke={active.color} strokeWidth="0.5" strokeDasharray="4 8" />
                            <circle cx="400" cy="400" r="300" fill="none" stroke={active.color} strokeWidth="0.5" strokeDasharray="2 12" />
                            <circle cx="400" cy="400" r="390" fill="none" stroke={active.color} strokeWidth="0.3" strokeDasharray="1 16" />
                        </svg>
                    </motion.div>
                )}

                {/* Grid lines */}
                <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(${active.color} 1px, transparent 1px), linear-gradient(90deg, ${active.color} 1px, transparent 1px)`,
                        backgroundSize: '80px 80px',
                    }}
                />

                {/* Top border */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-dark-border to-transparent" />

                {/* ═══ CONTENT ═══ */}
                <div className="w-full px-6 md:px-10 lg:px-16 relative z-10">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">

                        {/* ── LEFT COLUMN: Nav + Controls ── */}
                        <div className="lg:col-span-4 xl:col-span-3">
                            {/* Section tag */}
                            <div className="mb-8">
                                <span className="text-[10px] uppercase tracking-[0.25em] font-mono block mb-2" style={{ color: active.color }}>
                                    Academic Journey
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                    Where It<br />All <motion.span
                                        key={activeIndex}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        style={{ color: active.color }}
                                    >Started</motion.span>
                                </h2>
                            </div>

                            {/* Navigation cards */}
                            <div className="flex flex-col gap-2">
                                {milestones.map((m, i) => (
                                    <motion.div
                                        key={m.year}
                                        className="relative rounded-xl overflow-hidden transition-all duration-500"
                                        animate={{
                                            borderColor: i === activeIndex ? m.color + '30' : 'transparent',
                                        }}
                                        style={{ border: '1px solid transparent' }}
                                    >
                                        {/* Active background highlight */}
                                        <motion.div
                                            className="absolute inset-0"
                                            animate={{
                                                background: i === activeIndex ? m.color + '08' : 'transparent',
                                            }}
                                            transition={{ duration: 0.5 }}
                                        />

                                        <div className="relative z-10 flex items-center gap-4 px-4 py-3">
                                            {/* Animated ring indicator */}
                                            <div className="relative w-10 h-10 shrink-0">
                                                <svg viewBox="0 0 40 40" className="w-full h-full">
                                                    {/* Background ring */}
                                                    <circle cx="20" cy="20" r="16" fill="none" stroke="#333" strokeWidth="2" />
                                                    {/* Animated progress ring */}
                                                    <motion.circle
                                                        cx="20" cy="20" r="16"
                                                        fill="none"
                                                        stroke={m.color}
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeDasharray={2 * Math.PI * 16}
                                                        animate={{
                                                            strokeDashoffset: i === activeIndex ? 0 : 2 * Math.PI * 16,
                                                        }}
                                                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                                                        style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                                                    />
                                                </svg>
                                                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black font-compagnon text-white">
                                                    {m.shortYear}
                                                </span>
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <span className={`text-sm font-semibold block transition-colors duration-500 ${i === activeIndex ? 'text-white' : 'text-dark-text/30'}`}>
                                                    {m.degree}
                                                </span>
                                                <span className={`text-[11px] block transition-colors duration-500 ${i === activeIndex ? 'text-dark-text' : 'text-dark-text/15'}`}>
                                                    {m.school}
                                                </span>
                                            </div>

                                            <span
                                                className={`text-xs font-black font-compagnon shrink-0 transition-all duration-500 ${i === activeIndex ? '' : 'opacity-15'}`}
                                                style={{ color: i === activeIndex ? m.color : '#444' }}
                                            >
                                                {m.score}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Scroll progress bar */}
                            <div className="mt-6 px-1">
                                <div className="flex items-center gap-3">
                                    <div className="flex-1 h-[3px] bg-dark-border/15 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full rounded-full"
                                            style={{
                                                scaleX: scrollYProgress,
                                                transformOrigin: 'left',
                                                background: active.color,
                                            }}
                                        />
                                    </div>
                                    <span className="text-[10px] font-mono" style={{ color: active.color + '80' }}>
                                        {activeIndex + 1}/{milestones.length}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* ── RIGHT COLUMN: Main Display ── */}
                        <div className="lg:col-span-8 xl:col-span-9 relative" style={{ minHeight: '500px' }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 50, scale: 0.97 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -40, scale: 0.97 }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex flex-col justify-center h-full"
                                >
                                    {/* Giant watermark year */}
                                    <div className="absolute -top-10 right-0 pointer-events-none select-none overflow-hidden">
                                        <motion.span
                                            className="text-[200px] md:text-[300px] lg:text-[380px] font-black font-compagnon leading-none block"
                                            style={{ color: active.color, opacity: 0.04 }}
                                            initial={{ x: 80, opacity: 0 }}
                                            animate={{ x: 0, opacity: 0.04 }}
                                            transition={{ duration: 0.8, delay: 0.1 }}
                                        >
                                            {active.shortYear}
                                        </motion.span>
                                    </div>

                                    <div className="relative z-10">
                                        {/* Top label */}
                                        <motion.div
                                            className="flex items-center gap-3 mb-6"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1, duration: 0.4 }}
                                        >
                                            <div className="h-[1px] w-8" style={{ background: active.color + '60' }} />
                                            <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold" style={{ color: active.color }}>
                                                {active.year}
                                            </span>
                                            {active.scoreNum === null && (
                                                <span className="relative flex h-2.5 w-2.5 ml-1">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ background: active.color }} />
                                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: active.color }} />
                                                </span>
                                            )}
                                        </motion.div>

                                        {/* Score — MASSIVE */}
                                        <motion.div
                                            className="mb-4"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.15, duration: 0.5 }}
                                        >
                                            <span
                                                className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black font-compagnon leading-[0.85] block"
                                                style={{ color: active.color }}
                                            >
                                                {active.score}
                                            </span>
                                        </motion.div>

                                        {/* Full degree */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.25, duration: 0.4 }}
                                        >
                                            <h3 className="text-2xl md:text-4xl font-bold text-white">{active.fullDegree}</h3>
                                            <p className="text-lg md:text-xl font-semibold mt-1" style={{ color: active.color + 'AA' }}>{active.subtitle}</p>
                                        </motion.div>

                                        {/* Divider */}
                                        <motion.div
                                            className="my-6 h-[1px] max-w-md"
                                            style={{ background: `linear-gradient(90deg, ${active.color}30, transparent)` }}
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ delay: 0.3, duration: 0.6 }}
                                            layoutId="divider"
                                        />

                                        {/* Description */}
                                        <motion.p
                                            className="text-dark-text text-base md:text-lg leading-relaxed max-w-xl mb-8"
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.35, duration: 0.4 }}
                                        >
                                            {active.detail}
                                        </motion.p>

                                        {/* Info chips */}
                                        <motion.div
                                            className="flex flex-wrap gap-3"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.45, duration: 0.4 }}
                                        >
                                            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" style={{ color: active.color + '80' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
                                                </svg>
                                                <span className="text-sm text-white">{active.school}</span>
                                            </div>
                                            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" style={{ color: active.color + '80' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                </svg>
                                                <span className="text-sm text-white">{active.location}</span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* ═══ BOTTOM SCROLL HINT ═══ */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                    <motion.div
                        className="flex flex-col items-center gap-2"
                        animate={{ opacity: activeIndex === milestones.length - 1 ? 0.1 : 0.3 }}
                    >
                        <span className="text-[10px] text-dark-text/40 font-mono tracking-wider">scroll</span>
                        <motion.div
                            className="w-5 h-8 rounded-full border border-dark-text/15 flex items-start justify-center p-1.5"
                            animate={{ borderColor: active.color + '20' }}
                        >
                            <motion.div
                                className="w-1 h-1.5 rounded-full"
                                style={{ background: active.color }}
                                animate={{ y: [0, 8, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
