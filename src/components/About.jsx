import { useMemo } from 'react';

// Generate a deterministic contribution grid (GitHub-style heatmap)
function ContributionGraph() {
    const weeks = 20;
    const days = 7;

    const grid = useMemo(() => {
        const data = [];
        // Use a seeded-like pattern for consistency
        const pattern = [0, 1, 0, 2, 3, 1, 0, 2, 1, 3, 4, 2, 1, 0, 3, 2, 4, 1, 0, 2,
            1, 3, 0, 2, 4, 1, 3, 2, 0, 1, 4, 2, 3, 1, 0, 2, 1, 0, 3, 4,
            2, 1, 3, 0, 2, 4, 1, 0, 3, 2, 1, 4, 0, 2, 3, 1, 2, 0, 4, 3,
            1, 2, 0, 3, 1, 4, 2, 0, 1, 3, 2, 4, 0, 1, 3, 2, 1, 0, 4, 2,
            3, 1, 0, 2, 4, 1, 3, 2, 0, 1, 2, 3, 4, 0, 1, 2, 3, 1, 0, 4,
            2, 3, 1, 0, 2, 1, 4, 3, 0, 2, 1, 3, 2, 4, 0, 1, 3, 2, 0, 1,
            4, 2, 1, 3, 0, 2, 1, 4, 3, 0, 2, 1, 3, 4, 0, 1, 2, 3, 1, 0];
        for (let w = 0; w < weeks; w++) {
            for (let d = 0; d < days; d++) {
                data.push(pattern[(w * days + d) % pattern.length]);
            }
        }
        return data;
    }, []);

    const levelColors = [
        'bg-dark-border/30',       // 0 - empty
        'bg-neon/15',              // 1 - low
        'bg-neon/30',              // 2 - medium
        'bg-neon/55',              // 3 - high
        'bg-neon/80',              // 4 - max
    ];

    return (
        <div className="flex gap-[3px]">
            {Array.from({ length: weeks }).map((_, w) => (
                <div key={w} className="flex flex-col gap-[3px]">
                    {Array.from({ length: days }).map((_, d) => (
                        <div
                            key={d}
                            className={`w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-[2px] ${levelColors[grid[w * days + d]]} transition-all duration-300 hover:ring-1 hover:ring-neon/50`}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

const commitLog = [
    { hash: 'a3f8e2c', msg: 'feat: AI for MRD Detection in Acute Myeloid Leukemia — XGBoost + SHAP explainability', time: 'AI/ML', branch: 'ml-research' },
    { hash: 'b7d1f09', msg: 'feat: Train Ticket Booking System — full-stack web application', time: 'Full Stack', branch: 'main' },
    { hash: 'c4e9a11', msg: 'feat: AGRIMISTRO — IoT fogponics farming with environmental monitoring', time: 'IoT', branch: 'iot-systems' },
    { hash: 'f1b3d77', msg: 'feat: ABHAYA — ESP32-CAM wearable for real-time AV capture & RF distress signaling', time: 'Embedded', branch: 'hardware' },
    { hash: 'e8c2a55', msg: 'feat: ELEVATE — Digital student monitoring with unique ID-based dropout prevention', time: 'EdTech', branch: 'main' },
];

export default function About() {
    return (
        <section id="about" className="relative min-h-screen py-16 bg-dark overflow-hidden flex flex-col justify-center">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-dark-border to-transparent" />
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-neon/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-full px-6 md:px-10 lg:px-16 relative z-10">
                {/* Header — GitHub-style breadcrumb */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 text-dark-text text-sm mb-4 font-mono flex-wrap">
                        <a href="https://github.com/madhumithadasarathy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-neon transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            <span>madhumithadasarathy</span>
                        </a>
                        <span className="text-dark-text/50">/</span>
                        <span className="text-white font-semibold">about</span>
                        <span className="px-2 py-0.5 text-[10px] rounded-full border border-dark-border/50 text-dark-text">public</span>
                        <a href="https://github.com/madhumithadasarathy" target="_blank" rel="noopener noreferrer"
                            className="ml-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-dark-border/40 text-xs text-dark-text hover:border-neon/50 hover:text-neon transition-all duration-300">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            View on GitHub
                        </a>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
                        Initialize <span className="text-neon">{`{ Profile }`}</span>
                    </h2>
                    <p className="text-dark-text max-w-2xl text-sm md:text-base">
                        A closer look at the algorithms and architecture behind my work. I blend logic with creativity to build robust, scalable systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

                    {/* ── LEFT COLUMN: Image + Stats ── */}
                    <div className="lg:col-span-3 flex flex-col gap-5">
                        {/* Profile Image Card */}
                        <div className="group relative bg-dark-card/10 backdrop-blur-sm rounded-2xl border border-dark-border/30 hover:border-neon/30 transition-all duration-500 overflow-hidden aspect-square">
                            <img
                                src="/madhu.jpg"
                                alt="Madhumitha"
                                className="w-full h-full object-cover object-top"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4 z-10">
                                <span className="text-white text-base font-bold block">Madhumitha</span>
                                <a href="https://github.com/madhumithadasarathy" target="_blank" rel="noopener noreferrer" className="text-neon text-xs font-mono hover:underline">@madhumithadasarathy</a>
                            </div>
                            {/* Online indicator */}
                            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-dark/60 backdrop-blur-sm rounded-full px-2.5 py-1 border border-dark-border/30">
                                <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                                <span className="text-[10px] text-neon font-medium">Active</span>
                            </div>
                        </div>

                        {/* Quick Stats — GitHub style */}
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { value: '15+', label: 'Repos' },
                                { value: '5+', label: 'Yrs' },
                                { value: '20+', label: 'Projects' },
                                { value: '10+', label: 'Stars' },
                            ].map((stat) => (
                                <div key={stat.label} className="bg-dark-card/10 backdrop-blur-sm rounded-xl p-3 border border-dark-border/30 hover:border-neon/30 transition-all duration-300 text-center group">
                                    <span className="text-xl font-black text-white font-compagnon block group-hover:text-neon transition-colors">{stat.value}</span>
                                    <span className="text-[10px] text-dark-text uppercase tracking-wider font-medium">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT COLUMN: Dashboard content ── */}
                    <div className="lg:col-span-9 flex flex-col gap-5">

                        {/* Row 1: Bio + Contribution Graph */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* README.md Card */}
                            <div className="bg-dark-card/10 backdrop-blur-sm rounded-2xl border border-dark-border/30 hover:border-neon/30 transition-all duration-500 overflow-hidden">
                                {/* Card header — file tab style */}
                                <div className="flex items-center gap-2 px-5 py-3 border-b border-dark-border/20 bg-dark-card/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-dark-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                    <span className="text-sm text-white font-medium font-mono">README.md</span>
                                </div>
                                <div className="p-5 space-y-3 text-dark-text text-sm leading-relaxed">
                                    <p>
                                        I'm <strong className="text-white">Madhumitha</strong>, an architect of digital experiences at the intersection of <strong className="text-neon">AI</strong> and <strong className="text-neon">Web Technologies</strong>.
                                    </p>
                                    <p>
                                        Final-year CSE (AI & ML) student crafting intelligent, high-performance applications — from training ML models to designing seamless user interfaces.
                                    </p>
                                    <p>
                                        Also exploring embedded systems and IoT, bridging software and hardware.
                                    </p>
                                </div>
                            </div>

                            {/* Contribution Graph Card */}
                            <div className="bg-dark-card/10 backdrop-blur-sm rounded-2xl border border-dark-border/30 hover:border-neon/30 transition-all duration-500 overflow-hidden">
                                <div className="flex items-center justify-between px-5 py-3 border-b border-dark-border/20 bg-dark-card/20">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-dark-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                        </svg>
                                        <span className="text-sm text-white font-medium font-mono">contributions</span>
                                    </div>
                                    <span className="text-[10px] text-dark-text font-mono">last 20 weeks</span>
                                </div>
                                <div className="p-5 flex flex-col gap-4">
                                    <div className="overflow-x-auto">
                                        <ContributionGraph />
                                    </div>
                                    {/* Legend */}
                                    <div className="flex items-center justify-end gap-1.5 text-[10px] text-dark-text">
                                        <span>Less</span>
                                        <div className="w-[10px] h-[10px] rounded-[2px] bg-dark-border/30" />
                                        <div className="w-[10px] h-[10px] rounded-[2px] bg-neon/15" />
                                        <div className="w-[10px] h-[10px] rounded-[2px] bg-neon/30" />
                                        <div className="w-[10px] h-[10px] rounded-[2px] bg-neon/55" />
                                        <div className="w-[10px] h-[10px] rounded-[2px] bg-neon/80" />
                                        <span>More</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Recent Commits */}
                        <div className="bg-dark-card/10 backdrop-blur-sm rounded-2xl border border-dark-border/30 hover:border-neon/30 transition-all duration-500 overflow-hidden">
                            <div className="flex items-center justify-between px-5 py-3 border-b border-dark-border/20 bg-dark-card/20">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                    <span className="text-sm text-white font-medium font-mono">recent activity</span>
                                </div>
                                <span className="text-[10px] text-dark-text font-mono">{commitLog.length} commits</span>
                            </div>
                            <div className="divide-y divide-dark-border/15">
                                {commitLog.map((commit) => (
                                    <div key={commit.hash} className="px-5 py-3 flex items-start gap-3 hover:bg-neon/[0.03] transition-colors group">
                                        {/* Commit dot */}
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-neon/40 group-hover:bg-neon/80 transition-colors shrink-0" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-white truncate group-hover:text-neon transition-colors">{commit.msg}</p>
                                            <div className="flex items-center gap-3 mt-1">
                                                <code className="text-[11px] text-neon/60 font-mono">{commit.hash}</code>
                                                <span className="text-[10px] text-dark-text px-1.5 py-0.5 rounded border border-dark-border/20 font-mono">{commit.branch}</span>
                                                <span className="text-[10px] text-dark-text">{commit.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Row 3: Tech Stack Tags — pinned repos style */}
                        <div className="bg-dark-card/10 backdrop-blur-sm rounded-2xl border border-dark-border/30 hover:border-neon/30 transition-all duration-500 overflow-hidden">
                            <div className="flex items-center gap-2 px-5 py-3 border-b border-dark-border/20 bg-dark-card/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-dark-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                </svg>
                                <span className="text-sm text-white font-medium font-mono">pinned skills</span>
                            </div>
                            <div className="p-5 flex flex-wrap gap-2">
                                {[
                                    { name: 'Machine Learning', color: 'bg-neon' },
                                    { name: 'Full-Stack Web', color: 'bg-blue-400' },
                                    { name: 'Data Science', color: 'bg-purple-400' },
                                    { name: 'Cloud Architecture', color: 'bg-orange-400' },
                                    { name: 'Embedded Systems', color: 'bg-rose-400' },
                                    { name: 'Python', color: 'bg-yellow-400' },
                                    { name: 'React', color: 'bg-cyan-400' },
                                    { name: 'TensorFlow', color: 'bg-orange-500' },
                                ].map((tag) => (
                                    <span key={tag.name} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-dark-border/20 bg-dark/10 text-xs text-white font-medium hover:border-neon/40 hover:bg-neon/[0.05] transition-all cursor-default group">
                                        <span className={`w-2 h-2 rounded-full ${tag.color}`} />
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
