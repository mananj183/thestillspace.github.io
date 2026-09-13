import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MapPin, Mail } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <section id="contact" className="contact-section" aria-label="Get in Touch">
            <div className="container">
                <motion.div
                    className="section-head"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="eyebrow">Get in Touch</p>
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="section-sub">
                        Take the first step towards your wellbeing today.
                    </p>
                </motion.div>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <div>
                        <div className="contact-info-item">
                            <div className="contact-info-icon" aria-hidden="true">
                                <Phone size={22} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3>Phone</h3>
                                <p>+91 95828 19854</p>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-info-icon" aria-hidden="true">
                                <Mail size={22} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3>Email</h3>
                                <p>thestillspacebyarshita@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-info-icon" aria-hidden="true">
                                <MapPin size={22} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3>Location</h3>
                                <p>Online</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-primary"
                            style={{ alignSelf: 'flex-start' }}
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
            </div>
        </section>
    );
};

export default Contact;