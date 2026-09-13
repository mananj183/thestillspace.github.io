import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImage from '@/assets/logo.png';

const navLinks = [
    { name: 'Home', path: '#hero' },
    { name: 'About', path: '#about' },
    { name: 'Services', path: '#services' },
    { name: 'Contact', path: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        setIsOpen(false);
        if (location.pathname !== '/') {
            navigate('/' + path);
            setTimeout(() => {
                document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="site-nav" aria-label="Main navigation">
            <div className="container nav-inner">
                <a
                    href="#hero"
                    className="nav-brand"
                    onClick={(e) => handleNavClick(e, '#hero')}
                >
                    <img
                        src={logoImage}
                        alt="The Still Space"
                    />
                </a>

                {/* Desktop Menu */}
                <div className="nav-desktop">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="nav-link"
                            onClick={(e) => handleNavClick(e, link.path)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="nav-menu-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="nav-mobile"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="container" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 1.5rem' }}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    className="nav-link"
                                    onClick={(e) => handleNavClick(e, link.path)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;