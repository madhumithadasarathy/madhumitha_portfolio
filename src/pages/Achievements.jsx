import { useState } from 'react';
import { motion } from 'framer-motion';

// ===== ADD YOUR ACHIEVEMENTS HERE =====
// For each achievement, fill in:
//   title: Name of the achievement
//   description: What you achieved
//   year: Year of the achievement
//   place: Where it happened
//   image: Path to the image (put images in public/achievements/)
//   tags: Array of relevant tags
const achievements = [
    {
        id: 4,
        title: 'School Topper in 12th Grade',
        description: 'Being recognised as the School Topper in 12th grade and securing the first place in French, English, Chemistry, Computer Science and Mathematics.',
        year: '2022',
        place: "St. Ursula's Anglo Indian Higher Secondary School",
        image: '/achievements/achievement1.jpg',
        tags: ['SchoolTopper', '12thGrade', 'Academics'],
    },
    {
        id: 1,
        title: 'EXPO-A-THON — AIRO 2.0',
        description: 'Proud to have secured third place at EXPO-A-THON, held as part of the international symposium AIRO 2.0, organized by the Department of Artificial Intelligence and Data Science. Competing alongside talented peers at an event of this scale was both challenging and rewarding. Moments like these reinforce why I value continuous learning — every competition is an opportunity to grow, adapt, and come back stronger. Grateful to the organizers and faculty for putting together such a well-run event.',
        year: 'FEBRUARY 3, 2023',
        place: 'Sri Sairam Engineering College',
        image: '/achievements/achievement2.jpeg',
        tags: ['ExpoAThon', 'AIRO2', 'Innovation', 'AI', 'Symposium', 'ThirdPlace'],
    },
    {
        id: 2,
        title: 'Another Achievement',
        description: 'Add another achievement description here. You can have as many entries as you want.',
        year: '2024',
        place: 'City, Country',
        image: null,
        tags: ['Tag1', 'Tag2'],
    },
    {
        id: 3,
        title: 'One More Achievement',
        description: 'Keep adding your achievements. Each one will appear as a post in the feed.',
        year: '2024',
        place: 'City, Country',
        image: null,
        tags: ['Tag1', 'Tag2'],
    },
];
// ======================================

function AchievementPost({ achievement, index }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
            className="w-full max-w-[470px] bg-black border border-white/[0.06] rounded-sm overflow-hidden mb-6"
        >
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
                        <div className="w-full h-full rounded-full border border-black overflow-hidden flex items-center justify-center bg-[#111]">
                            <span className="text-white text-[10px] font-bold">M</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white text-sm font-semibold leading-tight">madhumitha</span>
                        <span className="text-white/60 text-xs leading-tight">{achievement.place}</span>
                    </div>
                </div>
                <button className="text-white/60 hover:text-white pb-2 px-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                </button>
            </div>

            {/* Image placeholder (since image is null initially, we'll render a gradient square or the actual image if it exists) */}
            <div className="w-full aspect-square bg-[#111] overflow-hidden flex items-center justify-center border-b border-white/[0.06]">
                {achievement.image ? (
                    <img src={achievement.image} alt={achievement.title} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                    <div className="text-white/20 flex flex-col items-center gap-2">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                        <span className="text-xs uppercase tracking-widest font-mono">Image Area</span>
                    </div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="p-3 pb-2">
                <div className="flex justify-between items-center mb-3">
                    <div className="flex gap-4">
                        {/* Like */}
                        <button className="text-white hover:text-gray-300 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                        </button>
                        {/* Comment */}
                        <button className="text-white hover:text-gray-300 transition-colors" style={{ transform: 'scaleX(-1)' }}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                        </button>
                        {/* Share */}
                        <button className="text-white hover:text-gray-300 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                        </button>
                    </div>
                    {/* Bookmark */}
                    <button className="text-white hover:text-gray-300 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
                    </button>
                </div>

                <div className="text-white text-sm font-semibold mb-1">
                    {Math.floor(Math.random() * 800 + 100).toLocaleString()} likes
                </div>

                {/* Caption */}
                <div className="text-sm">
                    <span className="text-white font-semibold mr-2">madhumitha</span>
                    <span className="text-white/90">{achievement.title}: {achievement.description}</span>
                </div>

                {/* Tags */}
                <div className="mt-1 flex flex-wrap gap-1">
                    {achievement.tags.map(tag => (
                        <span key={tag} className="text-[#E0F2FE] hover:text-neon text-sm cursor-pointer transition-colors">
                            #{tag.toLowerCase().replace(/\s+/g, '')}
                        </span>
                    ))}
                </div>

                {/* Date */}
                <div className="text-white/40 text-[10px] uppercase mt-2 tracking-wider">
                    {achievement.year}
                </div>
            </div>
            
            <div className="p-3 pt-0 border-t border-white/[0.04]">
                 <div className="text-white/40 text-sm mt-2">Add a comment...</div>
            </div>
        </motion.article>
    );
}

export default function Achievements() {
    const [isFollowing, setIsFollowing] = useState(false);

    return (
        <div className="min-h-screen bg-[#030303] pt-24 pb-20">
            {/* Background grid */}
            <div className="fixed inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(163,230,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(163,230,53,0.3) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="max-w-[935px] mx-auto px-4 md:px-8 relative z-10">
                {/* ===== INSTAGRAM PROFILE HEADER ===== */}
                <motion.div
                    className="mb-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Top Profile Section */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 py-8 md:py-10">
                        {/* Profile Picture */}
                        <div className="flex-shrink-0">
                            <div className="w-[86px] h-[86px] md:w-[150px] md:h-[150px] rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[3px] md:p-[4px]">
                                <div className="w-full h-full rounded-full border-[3px] border-black overflow-hidden">
                                    <img
                                        src="/madhu.jpg"
                                        alt="Madhumitha"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Profile Info */}
                        <div className="flex-1 text-center md:text-left">
                            {/* Username Row */}
                            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 mb-4">
                                <h1 className="text-xl font-normal text-white tracking-wide">madhumitha_d</h1>
                                {/* Verified Badge */}
                                <svg className="w-[18px] h-[18px] text-[#3897f0] -ml-3 md:ml-0" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L14.09 4.26L17 3.29L17.34 6.34L20.39 6.68L19.42 9.59L21.68 11.68L19.74 14.09L21 17L18.06 17.71L17.34 20.66L14.43 19.74L12 22L9.57 19.74L6.66 20.66L5.94 17.71L3 17L4.26 14.09L2.32 11.68L4.58 9.59L3.61 6.68L6.66 6.34L7 3.29L9.91 4.26L12 2Z" />
                                    <path d="M10 15.5L7.5 13L8.91 11.59L10 12.67L15.09 7.59L16.5 9L10 15.5Z" fill="white" />
                                </svg>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setIsFollowing(!isFollowing)}
                                        className={`px-5 py-1.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                                            isFollowing
                                                ? 'bg-[#363636] hover:bg-[#4a4a4a] text-white'
                                                : 'bg-[#0095F6] hover:bg-[#1877F2] text-white'
                                        }`}
                                    >
                                        {isFollowing ? 'Following' : 'Follow'}
                                    </button>
                                    <a
                                        href="https://www.linkedin.com/in/madhudasarat"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-1.5 bg-[#363636] hover:bg-[#4a4a4a] text-white text-sm font-semibold rounded-lg transition-colors duration-200 inline-flex items-center"
                                    >
                                        Message
                                    </a>
                                    <button className="px-2 py-1.5 bg-[#363636] hover:bg-[#4a4a4a] text-white rounded-lg transition-colors duration-200">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
                                    </button>
                                </div>
                            </div>

                            {/* Stats Row */}
                            <div className="flex justify-center md:justify-start gap-8 md:gap-10 mb-5">
                                <div className="text-center md:text-left">
                                    <span className="text-white font-bold">{achievements.length}</span>
                                    <span className="text-white/60 text-sm ml-1">posts</span>
                                </div>
                                <div className="text-center md:text-left cursor-pointer hover:opacity-70 transition-opacity">
                                    <span className="text-white font-bold">2,847</span>
                                    <span className="text-white/60 text-sm ml-1">followers</span>
                                </div>
                                <div className="text-center md:text-left cursor-pointer hover:opacity-70 transition-opacity">
                                    <span className="text-white font-bold">486</span>
                                    <span className="text-white/60 text-sm ml-1">following</span>
                                </div>
                            </div>

                            {/* Bio */}
                            <div className="text-sm leading-relaxed">
                                <div className="text-white font-semibold">Madhumitha Dasarathy</div>
                                <div className="text-white/60 mt-0.5">🎓 Student · Developer · Artist · Musician</div>
                                <div className="text-white/80 mt-1">Collecting milestones, one achievement at a time 🏆</div>
                                <div className="text-white/80">Building cool things & breaking boundaries ✨</div>
                                <a href="/" className="text-[#E0F2FE] font-semibold hover:underline mt-1 inline-block">madhumitha-portfolio.dev</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Achievement Posts */}
                <div className="flex flex-col items-center gap-5">
                    {achievements.map((achievement, index) => (
                        <AchievementPost
                            key={achievement.id}
                            achievement={achievement}
                            index={index}
                        />
                    ))}
                </div>

                {/* End of Feed */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-full max-w-[680px] mx-auto mt-8 text-center py-8 border border-white/[0.04] rounded-xl bg-[#111]/50"
                >
                    <div className="text-2xl mb-2">🎯</div>
                    <p className="text-white/20 text-xs font-mono tracking-wider">More achievements loading...</p>
                </motion.div>
            </div>
        </div>
    );
}
