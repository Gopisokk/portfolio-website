import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div
                        className={`mx-auto max-w-5xl rounded-full border border-white/10 bg-black/50 backdrop-blur-md px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'shadow-[0_0_20px_rgba(0,0,0,0.5)]' : ''
                            }`}
                    >
                        <a href="#" className="text-xl font-bold tracking-tighter text-white">
                            GOPI<span className="text-primary">.RK</span>
                        </a>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-medium text-gray-300 hover:text-primary transition-colors relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                                </a>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            <a href="https://github.com/Gopisokk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/gopirk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6 items-center">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-bold text-white hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="flex gap-6 mt-8">
                                <a href="https://github.com/Gopisokk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <Github size={24} />
                                </a>
                                <a href="https://linkedin.com/in/gopirk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <Linkedin size={24} />
                                </a>
                                <a href="mailto:gopi030506@gmail.com" className="text-gray-400 hover:text-white">
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
