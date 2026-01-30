import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../utils/theme';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            backgroundColor: 'var(--bg-primary)',
            borderBottom: '1px solid var(--border)',
            backdropFilter: 'blur(8px)',
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
                <NavLink to="/" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--accent)' }}>
                    Serenity Minds
                </NavLink>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            style={({ isActive }) => ({
                                color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                                fontWeight: isActive ? 600 : 400,
                                transition: 'color 0.2s',
                            })}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <button onClick={toggleTheme} aria-label="Toggle theme" style={{ padding: '0.5rem', color: 'var(--text-primary)' }}>
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-menu-btn" style={{ display: 'none' }}>
                    <button onClick={toggleTheme} style={{ marginRight: '1rem', color: 'var(--text-primary)' }}>
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button onClick={toggleMenu} aria-label="Toggle menu" style={{ color: 'var(--text-primary)' }}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            backgroundColor: 'var(--bg-primary)',
                            borderBottom: '1px solid var(--border)',
                            overflow: 'hidden'
                        }}
                    >
                        <div className="container" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    style={({ isActive }) => ({
                                        padding: '0.75rem 0',
                                        color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                                        fontWeight: isActive ? 600 : 400,
                                    })}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
            align-items: center;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
