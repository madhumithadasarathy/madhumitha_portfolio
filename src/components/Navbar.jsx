import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Experience', path: '/experience' },
    { name: 'Extracurriculars', path: '/extracurriculars' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur-lg border-b border-dark-border">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 rounded-full bg-neon flex items-center justify-center text-dark font-bold text-sm
                          group-hover:scale-110 transition-transform duration-300">
                        M
                    </div>
                </Link>

                {/* Desktop Links */}
                <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className="text-sm font-medium text-dark-text hover:text-neon transition-colors duration-300 relative
                           after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px]
                           after:bg-neon after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <a
                    href="#contact"
                    className="hidden lg:inline-flex items-center gap-2 bg-neon text-dark font-semibold text-sm px-6 py-2.5
                     rounded-full hover:bg-neon-dark hover:shadow-[0_0_24px_rgba(0,230,57,0.4)] transition-all duration-300"
                >
                    Let's Talk
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </a>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden text-white p-2"
                    aria-label="Toggle menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        {mobileOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-500 ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <ul className="px-6 pb-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                onClick={() => setMobileOpen(false)}
                                className="text-dark-text hover:text-neon transition-colors duration-300 text-sm font-medium block w-full py-1"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-neon text-dark font-semibold text-sm px-6 py-2.5 rounded-full
                         hover:bg-neon-dark transition-all duration-300"
                        >
                            Let's Talk
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
