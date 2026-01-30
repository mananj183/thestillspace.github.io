import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MapPin, Mail } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Get in Touch</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Take the first step towards your wellbeing today.</p>
                </motion.div>

                <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>

                    {/* Contact Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <Phone color="var(--accent)" />
                            <div>
                                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Phone</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <Mail color="var(--accent)" />
                            <div>
                                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Email</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>contact@sereniteminds.com</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <MapPin color="var(--accent)" />
                            <div>
                                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Location</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>123 Serenity Lane, Suite 100<br />Wellness City, CA 90210</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid var(--border)',
                                    backgroundColor: 'var(--bg-primary)',
                                    color: 'var(--text-primary)'
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid var(--border)',
                                    backgroundColor: 'var(--bg-primary)',
                                    color: 'var(--text-primary)'
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid var(--border)',
                                    backgroundColor: 'var(--bg-primary)',
                                    color: 'var(--text-primary)',
                                    resize: 'vertical'
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-primary"
                            style={{ alignSelf: 'flex-start', opacity: isSubmitting ? 0.7 : 1 }}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                            {!isSubmitting && <Send size={18} style={{ marginLeft: '0.5rem' }} />}
                        </button>
                        {status === 'success' && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                style={{ color: 'var(--accent)', marginTop: '0.5rem' }}
                            >
                                Thank you! Your message has been sent.
                            </motion.p>
                        )}
                    </form>
                </div>
                <style>{`
                    @media (max-width: 768px) {
                        .contact-grid {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default Contact;
