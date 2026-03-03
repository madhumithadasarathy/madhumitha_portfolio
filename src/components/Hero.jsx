import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const slideRight = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
};

const slideLeft = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
};

const viewportConfig = { once: false, amount: 0.3 };

export default function Hero() {
    return (
        <section
            id="home"
            className="relative h-screen bg-dark pt-20 pb-0 overflow-hidden flex items-center"
        >
            {/* Background glow effects */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-neon/3 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
                {/* Left Content */}
                <div className="flex-1 space-y-6 text-center lg:text-left z-10">
                    {/* Greeting badge */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="inline-flex items-center gap-2 bg-dark-card border border-dark-border rounded-full px-4 py-1.5"
                    >
                        <span className="text-sm">👋</span>
                        <span className="text-sm text-dark-text">Hello There!</span>
                    </motion.div>

                    {/* Main headline */}
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
                    >
                        I'm <span className="text-neon">Madhumitha</span>,{' '}
                        <br className="hidden sm:block" />
                        AI Engineer{' '}
                        <br className="hidden sm:block" />

                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                        className="text-dark-text text-sm sm:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed"
                    >
                        Final-year CS (AI & ML) student building engineering solutions across
                        web development, artificial intelligence, and embedded systems — with
                        measurable social impact.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
                    >
                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-2 bg-neon text-dark font-semibold px-7 py-3 rounded-full
                         hover:bg-neon-dark hover:shadow-[0_0_30px_rgba(0,230,57,0.35)] transition-all duration-300"
                        >
                            View My Work
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 border border-dark-border text-white font-medium px-7 py-3
                         rounded-full hover:border-neon/50 hover:text-neon transition-all duration-300"
                        >
                            Download CV
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                        </a>
                    </motion.div>
                </div>

                {/* Right Content — Image & Decorations */}
                <motion.div
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                    className="flex-1 relative flex items-center justify-center z-10"
                >
                    {/* Outer decorative ring */}
                    <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px]
                          rounded-full border-2 border-dashed border-dark-border animate-spin-slow opacity-40" />

                    {/* Main image container */}
                    <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px]
                          rounded-full overflow-hidden border-4 border-neon/30 bg-dark-card">
                        <img
                            src="/madhu.jpg"
                            alt="Madhumitha Dasarathy"
                            className="w-full h-full object-cover object-top"
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                    </div>

                    {/* Floating badge — AI/ML Engineer (top-right) */}
                    <motion.div
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
                        className="absolute top-4 right-0 sm:top-8 sm:-right-2 lg:top-12 lg:-right-4 animate-float"
                    >
                        <div className="bg-dark-card border border-dark-border rounded-2xl px-4 py-2.5 flex items-center gap-2
                            shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                            <div className="w-8 h-8 rounded-full bg-neon/20 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                                </svg>
                            </div>
                            <span className="text-white text-xs font-medium">AI/ML Engineer</span>
                        </div>
                    </motion.div>

                    {/* Floating badge — App Developer (top-left) */}
                    <motion.div
                        variants={slideRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
                        className="absolute -top-2 left-0 sm:-top-4 sm:-left-2 lg:-top-4 lg:-left-6 animate-float"
                        style={{ animationDelay: '0.8s' }}
                    >
                        <div className="bg-dark-card border border-dark-border rounded-2xl px-4 py-2.5 flex items-center gap-2
                            shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                            <div className="w-8 h-8 rounded-full bg-neon/20 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>
                            </div>
                            <span className="text-white text-xs font-medium">App Developer</span>
                        </div>
                    </motion.div>

                    {/* Floating badge — Web Developer (bottom-left) */}
                    <motion.div
                        variants={slideRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
                        className="absolute bottom-8 left-0 sm:bottom-12 sm:-left-4 lg:bottom-16 lg:-left-8 animate-float"
                        style={{ animationDelay: '1.5s' }}
                    >
                        <div className="bg-neon text-dark rounded-full px-4 py-2 flex items-center gap-2 shadow-[0_8px_32px_rgba(163,230,53,0.25)]">
                            <div className="w-6 h-6 rounded-full bg-dark/20 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                </svg>
                            </div>
                            <span className="text-xs font-semibold">Web Developer</span>
                        </div>
                    </motion.div>

                    {/* Floating badge — Full Stack Dev (bottom-right) */}
                    <motion.div
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
                        className="absolute -bottom-4 right-4 sm:-bottom-6 sm:right-0 lg:-bottom-6 lg:-right-2 animate-float"
                        style={{ animationDelay: '2.2s' }}
                    >
                        <div className="bg-neon text-dark rounded-full px-4 py-2 flex items-center gap-2 shadow-[0_8px_32px_rgba(163,230,53,0.25)]">
                            <div className="w-6 h-6 rounded-full bg-dark/20 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7" />
                                </svg>
                            </div>
                            <span className="text-[10px] sm:text-xs tracking-wider uppercase drop-shadow">Full Stack Dev</span>
                        </div>
                    </motion.div>

                    {/* Floating badge — SAP (right) */}
                    <motion.div
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        transition={{ duration: 0.5, delay: 0.65, ease: 'easeOut' }}
                        className="absolute top-1/2 right-0 sm:right-6 lg:-right-4 animate-float -translate-y-[60%]"
                        style={{ animationDelay: '1.2s' }}
                    >
                        <div className="bg-gradient-to-br from-[#1A1A24] to-dark-card border border-dark-border/80 rounded-2xl px-4 py-2.5 flex items-center gap-2
                            shadow-[-10px_-10px_30px_rgb(255,255,255,0.02),10px_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md">
                            <div className="w-8 h-8 rounded-full bg-neon/10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neon drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                                </svg>
                            </div>
                            <span className="text-white text-xs font-semibold tracking-wide">SAP</span>
                        </div>
                    </motion.div>

                    {/* Floating badge — Artist (left) */}
                    <motion.div
                        variants={slideRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        transition={{ duration: 0.5, delay: 0.75, ease: 'easeOut' }}
                        className="absolute top-1/2 -left-2 sm:-left-4 lg:-left-6 animate-float -translate-y-[40%]"
                        style={{ animationDelay: '2.5s' }}
                    >
                        <div className="bg-neon text-dark rounded-full px-4 py-2 flex items-center gap-2
                             shadow-[0_8px_32px_rgba(163,230,53,0.3)] transition-all duration-300">
                            <div className="w-6 h-6 rounded-full bg-dark/20 flex items-center justify-center backdrop-blur-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                                </svg>
                            </div>
                            <span className="text-xs font-bold tracking-wider uppercase text-dark">Artist</span>
                        </div>
                    </motion.div>

                    {/* Decorative green dot */}
                    <div className="absolute top-12 left-20 lg:left-16">
                        <div className="relative">
                            <div className="w-4 h-4 rounded-full bg-neon" />
                            <div className="absolute inset-0 w-4 h-4 rounded-full bg-neon animate-pulse-ring" />
                        </div>
                    </div>

                    {/* Decorative circle outline bottom-right */}
                    <div className="absolute -bottom-2 right-8 lg:right-4 w-12 h-12 rounded-full border-2 border-neon/30" />
                </motion.div>
            </div>
        </section>
    );
}
