import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const channels = [
    {
        id: 'drawing',
        num: 1,
        title: 'Drawing',
        network: 'ART-TV',
        show: '"The Sketchbook Sessions"',
        tagline: 'Where imagination meets paper. Creating worlds with just a pencil.',
        image: '/hobbies/drawing.png',
        color: '#f472b6',
    },
    {
        id: 'piano',
        num: 2,
        title: 'Pianist',
        network: 'MELODY-FM',
        show: '"Keys & Emotions"',
        tagline: 'Every key pressed is a feeling expressed. Classical to contemporary.',
        image: '/hobbies/piano.png',
        color: '#a78bfa',
    },
    {
        id: 'flute',
        num: 3,
        title: 'Flutist',
        network: 'MELODY-FM',
        show: '"Breath of Music"',
        tagline: 'Melodies carried by breath. The most soulful wind instrument.',
        image: '/hobbies/flute.png',
        color: '#67e8f9',
    },
    {
        id: 'violin',
        num: 4,
        title: 'Violinist',
        network: 'MELODY-FM',
        show: '"String Theory"',
        tagline: 'Strings that touch the soul. From classical ragas to western concertos.',
        image: '/hobbies/violin.png',
        color: '#fbbf24',
    },
    {
        id: 'books',
        num: 5,
        title: 'Reading Books',
        network: 'BRAIN-NET',
        show: '"Between the Pages"',
        tagline: 'Lost in worlds of words. Fiction, philosophy, and everything in between.',
        image: '/hobbies/books.png',
        color: '#34d399',
    },
    {
        id: 'podcasts',
        num: 6,
        title: 'Podcasts',
        network: 'BRAIN-NET',
        show: '"Tuned In"',
        tagline: 'Tuning into brilliant minds. Ideas, stories, and conversations that inspire.',
        image: '/hobbies/podcasts.png',
        color: '#fb923c',
    },
    {
        id: 'series',
        num: 7,
        title: 'Watching Series',
        network: 'BINGE-TV',
        show: '"The Watchlist"',
        tagline: 'Binge-worthy storytelling. If it has good writing, I\'m watching it.',
        image: '/hobbies/series.png',
        color: '#f87171',
    },
];

// CRT Static/Noise component
function TVStatic() {
    return (
        <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
            <div className="w-full h-full opacity-90" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                backgroundSize: '150px',
                animation: 'static-flicker 0.1s steps(5) infinite',
            }} />
        </div>
    );
}

export default function Hobbies() {
    const [currentChannel, setCurrentChannel] = useState(0);
    const [isStatic, setIsStatic] = useState(false);
    const [isPowered, setIsPowered] = useState(true);
    const [volume, setVolume] = useState(70);

    const changeChannel = useCallback((direction) => {
        setIsStatic(true);
        setTimeout(() => {
            setCurrentChannel(prev => {
                if (direction === 'up') return (prev + 1) % channels.length;
                return prev === 0 ? channels.length - 1 : prev - 1;
            });
            setIsStatic(false);
        }, 400);
    }, []);

    const goToChannel = useCallback((index) => {
        if (index === currentChannel) return;
        setIsStatic(true);
        setTimeout(() => {
            setCurrentChannel(index);
            setIsStatic(false);
        }, 400);
    }, [currentChannel]);

    // Keyboard controls
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'ArrowUp') changeChannel('up');
            if (e.key === 'ArrowDown') changeChannel('down');
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [changeChannel]);

    const channel = channels[currentChannel];

    return (
        <section id="hobbies" className="relative py-20 md:py-32 bg-[#030303] overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Ambient glow behind TV */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                    className="w-[600px] h-[400px] rounded-full blur-[120px] opacity-20 transition-colors duration-1000"
                    style={{ backgroundColor: isPowered ? channel.color : '#000' }}
                />
            </div>

            <div className="max-w-[1500px] mx-auto px-4 md:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 border border-neon/20 rounded-full bg-neon/5">
                        <span className="text-lg">📺</span>
                        <span className="text-neon text-xs font-mono tracking-[0.3em] uppercase">Now Showing</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                        My <span className="text-neon">Hobbies</span>
                    </h2>
                    <p className="text-dark-text text-sm md:text-base mt-3 max-w-md mx-auto">
                        Flip through channels to explore what I love doing beyond code. Use the remote or click a channel!
                    </p>
                </motion.div>

                {/* TV + Remote Layout */}
                <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 lg:gap-6">

                    {/* THE TV */}
                    <motion.div
                        className="relative w-full lg:flex-1"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* TV Outer Shell */}
                        <div className="relative bg-[#1a1a1a] rounded-[24px] p-3 md:p-4 border border-white/[0.06] shadow-2xl">
                            {/* TV Brand/Logo on top bezel */}
                            <div className="flex items-center justify-between px-4 mb-2">
                                <span className="text-white/20 text-[10px] font-mono tracking-widest">MADHU-VISION</span>
                                <div className="flex items-center gap-2">
                                    <div className={`w-1.5 h-1.5 rounded-full ${isPowered ? 'bg-green-500 animate-pulse' : 'bg-red-900'}`} />
                                    <span className="text-white/15 text-[10px] font-mono">{isPowered ? 'ON' : 'OFF'}</span>
                                </div>
                            </div>

                            {/* Screen */}
                            <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-white/[0.04]">
                                {isPowered ? (
                                    <>
                                        {/* Channel Content */}
                                        <AnimatePresence mode="wait">
                                            {!isStatic && (
                                                <motion.div
                                                    key={channel.id}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="absolute inset-0"
                                                >
                                                    <img
                                                        src={channel.image}
                                                        alt={channel.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    {/* Gradient */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

                                                    {/* Channel info overlay — top right */}
                                                    <div className="absolute top-4 right-4 text-right">
                                                        <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                                                            <div className="text-white font-mono font-bold text-2xl md:text-3xl leading-none">CH {channel.num}</div>
                                                            <div className="text-white/50 text-[10px] font-mono mt-1">{channel.network}</div>
                                                        </div>
                                                    </div>

                                                    {/* Bottom info — show name and details */}
                                                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: channel.color }} />
                                                            <span className="text-xs font-mono tracking-wider uppercase" style={{ color: channel.color }}>{channel.network}</span>
                                                            <span className="text-white/20 text-xs">•</span>
                                                            <span className="text-white/40 text-xs font-mono">LIVE</span>
                                                        </div>
                                                        <h3 className="text-2xl md:text-4xl font-black text-white mb-1 tracking-tight">{channel.title}</h3>
                                                        <p className="text-white/50 text-xs md:text-sm italic mb-2">{channel.show}</p>
                                                        <p className="text-white/60 text-sm md:text-base max-w-md">{channel.tagline}</p>
                                                    </div>

                                                    {/* REC indicator */}
                                                    <div className="absolute top-4 left-4 flex items-center gap-2">
                                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                                        <span className="text-red-400 text-[10px] font-mono tracking-wider">● REC</span>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Static noise overlay during channel change */}
                                        {isStatic && <TVStatic />}

                                        {/* CRT Scanlines (always on) */}
                                        <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.04]" style={{
                                            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
                                        }} />

                                        {/* CRT vignette */}
                                        <div className="absolute inset-0 pointer-events-none z-20" style={{
                                            background: 'radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.5) 100%)',
                                        }} />

                                        {/* Volume bar (shows briefly) */}
                                    </>
                                ) : (
                                    /* TV OFF state */
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="w-1 h-1 rounded-full bg-white/20" />
                                    </div>
                                )}
                            </div>

                            {/* Bottom bezel with "speaker grills" */}
                            <div className="flex items-center justify-between px-4 mt-2">
                                <div className="flex gap-1">
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className="w-[2px] h-3 bg-white/[0.06] rounded-full" />
                                    ))}
                                </div>
                                <button
                                    onClick={() => setIsPowered(!isPowered)}
                                    className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors"
                                >
                                    <svg className="w-3 h-3 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0" /><line x1="12" y1="2" x2="12" y2="12" /></svg>
                                </button>
                            </div>
                        </div>

                        {/* TV Stand */}
                        <div className="flex justify-center mt-[-2px]">
                            <div className="w-32 h-3 bg-[#1a1a1a] rounded-b-lg border-x border-b border-white/[0.04]" />
                        </div>
                        <div className="flex justify-center mt-[-1px]">
                            <div className="w-48 h-2 bg-[#111] rounded-b-xl border-x border-b border-white/[0.03]" />
                        </div>
                    </motion.div>

                    {/* THE REMOTE CONTROL */}
                    <motion.div
                        className="w-[220px] flex-shrink-0 hidden lg:flex"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="bg-[#111] rounded-[28px] p-6 border border-white/[0.06] shadow-xl w-full flex flex-col justify-between">
                            {/* Remote brand */}
                            <div className="text-center mb-6">
                                <div className="text-white/20 text-[9px] font-mono tracking-[0.3em] uppercase">Remote</div>
                            </div>

                            {/* Power button */}
                            <div className="flex justify-center mb-6">
                                <button
                                    onClick={() => setIsPowered(!isPowered)}
                                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                                        isPowered ? 'border-red-500/50 bg-red-500/10 hover:bg-red-500/20' : 'border-green-500/50 bg-green-500/10 hover:bg-green-500/20'
                                    }`}
                                >
                                    <svg className={`w-4 h-4 ${isPowered ? 'text-red-400' : 'text-green-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0" /><line x1="12" y1="2" x2="12" y2="12" /></svg>
                                </button>
                            </div>

                            {/* Channel Up/Down */}
                            <div className="flex flex-col items-center gap-2 mb-6">
                                <span className="text-white/20 text-[9px] font-mono tracking-widest mb-1">CHANNEL</span>
                                <button
                                    onClick={() => changeChannel('up')}
                                    className="w-14 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/50 hover:text-white hover:bg-white/[0.08] transition-all duration-200 flex items-center justify-center text-lg font-bold active:scale-95"
                                >
                                    ▲
                                </button>
                                <div className="text-white font-mono font-bold text-lg">{channel.num}</div>
                                <button
                                    onClick={() => changeChannel('down')}
                                    className="w-14 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/50 hover:text-white hover:bg-white/[0.08] transition-all duration-200 flex items-center justify-center text-lg font-bold active:scale-95"
                                >
                                    ▼
                                </button>
                            </div>

                            {/* Volume */}
                            <div className="flex flex-col items-center gap-2 mb-6">
                                <span className="text-white/20 text-[9px] font-mono tracking-widest mb-1">VOLUME</span>
                                <button
                                    onClick={() => setVolume(v => Math.min(100, v + 10))}
                                    className="w-14 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/40 hover:text-white hover:bg-white/[0.08] transition-all text-xs font-mono active:scale-95"
                                >
                                    VOL +
                                </button>
                                <div className="w-full bg-white/[0.06] rounded-full h-1.5 overflow-hidden">
                                    <div className="h-full bg-neon/60 rounded-full transition-all duration-300" style={{ width: `${volume}%` }} />
                                </div>
                                <button
                                    onClick={() => setVolume(v => Math.max(0, v - 10))}
                                    className="w-14 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/40 hover:text-white hover:bg-white/[0.08] transition-all text-xs font-mono active:scale-95"
                                >
                                    VOL −
                                </button>
                            </div>

                            {/* Number pad — direct channel select */}
                            <div className="grid grid-cols-3 gap-1.5">
                                {channels.map((ch, i) => (
                                    <button
                                        key={ch.id}
                                        onClick={() => goToChannel(i)}
                                        className={`h-9 rounded-lg font-mono text-sm font-bold transition-all duration-200 active:scale-90 border ${
                                            currentChannel === i
                                                ? 'bg-neon/20 text-neon border-neon/30'
                                                : 'bg-white/[0.03] text-white/40 border-white/[0.06] hover:text-white hover:bg-white/[0.06]'
                                        }`}
                                    >
                                        {ch.num}
                                    </button>
                                ))}
                            </div>

                            {/* Keyboard hint */}
                            <div className="mt-5 pt-4 border-t border-white/[0.04] text-center">
                                <span className="text-white/15 text-[9px] font-mono">↑↓ Arrow keys work too</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Mobile Channel Strip (replaces remote on small screens) */}
                <div className="lg:hidden mt-8 flex justify-center gap-2 flex-wrap">
                    {channels.map((ch, i) => (
                        <button
                            key={ch.id}
                            onClick={() => goToChannel(i)}
                            className={`px-4 py-2 rounded-xl font-mono text-xs tracking-wider border transition-all duration-300 active:scale-95 ${
                                currentChannel === i
                                    ? 'text-white border-white/20'
                                    : 'text-white/30 border-white/[0.06] hover:text-white/60'
                            }`}
                            style={{
                                backgroundColor: currentChannel === i ? `${ch.color}15` : 'transparent',
                                borderColor: currentChannel === i ? `${ch.color}40` : undefined,
                                color: currentChannel === i ? ch.color : undefined,
                            }}
                        >
                            CH{ch.num} · {ch.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* CSS for static animation */}
            <style>{`
                @keyframes static-flicker {
                    0% { transform: translate(0, 0); }
                    20% { transform: translate(-2%, -3%); }
                    40% { transform: translate(1%, 2%); }
                    60% { transform: translate(-1%, 1%); }
                    80% { transform: translate(2%, -1%); }
                    100% { transform: translate(0, 0); }
                }
            `}</style>
        </section>
    );
}
