import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--bg-secondary)',
            padding: '3rem 0',
            marginTop: 'auto',
            borderTop: '1px solid var(--border)'
        }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--accent)' }}>Serenity Minds</h3>
                <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '600px' }}>
                    Offering professional, compassionate therapy services to help you find balance and peace in your life.
                </p>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <a href="#" style={{ color: 'var(--text-secondary)' }} aria-label="Email"><Mail size={20} /></a>
                    <a href="#" style={{ color: 'var(--text-secondary)' }} aria-label="LinkedIn"><Linkedin size={20} /></a>
                    <a href="#" style={{ color: 'var(--text-secondary)' }} aria-label="GitHub"><Github size={20} /></a>
                </div>

                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>
                    &copy; {new Date().getFullYear()} Serenity Minds. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
