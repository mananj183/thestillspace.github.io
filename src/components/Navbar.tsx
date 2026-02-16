import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '@/assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '#hero' },
        { name: 'About', path: '#about' },
        { name: 'Services', path: '#services' },
        { name: 'Contact', path: '#contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.querySelector(path);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav style={{
            position: 'sticky',
            top: '0px',
            zIndex: 1000,
            boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.2)',
            backgroundColor: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border)',
            backdropFilter: 'blur(20px)',
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
                <a
                    href="#hero"
                    onClick={(e) => handleNavClick(e, '#hero')}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                    }}
                >
                    <img
                        src={logoImage}
                        alt="The Still Space"
                        style={{
                            height: '50px',
                            width: 'auto',
                            objectFit: 'contain'
                        }}
                    />
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            onClick={(e) => handleNavClick(e, link.path)}
                            style={{
                                color: 'var(--text-primary)',
                                fontWeight: 400,
                                transition: 'color 0.2s',
                                cursor: 'pointer',
                                textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-menu-btn" style={{ display: 'none' }}>
                    <button onClick={toggleMenu} aria-label="Toggle menu" style={{ color: 'var(--text-primary)' }}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

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
                                <a
                                    key={link.name}
                                    href={link.path}
                                    onClick={(e) => handleNavClick(e, link.path)}
                                    style={{
                                        padding: '0.75rem 0',
                                        color: 'var(--text-primary)',
                                        fontWeight: 400,
                                        cursor: 'pointer',
                                        textDecoration: 'none'
                                    }}
                                >
                                    {link.name}
                                </a>
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
