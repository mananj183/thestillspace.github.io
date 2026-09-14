import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Clock, Heart, IndianRupee } from 'lucide-react';
import { services } from '../data/servicesData';
import './ServiceDetail.css';

const processSteps = [
    {
        title: 'Reach Out',
        description:
            'Drop us a message on Instagram, WhatsApp, or email to get connected with a suitable therapist on our team.',
    },
    {
        title: 'Fill the Short 2-Min Intake Form',
        description:
            'Share a few details about what brings you to therapy so we can best prepare for your session.',
    },
    {
        title: 'Free Discovery Call',
        description:
            'A brief 10-minute call to understand your needs and answer any questions you may have.',
    },
    {
        title: 'Scheduling the Session',
        description:
            'Choose a convenient slot with our therapist and confirm your session by making the payment.',
    },
    {
        title: 'Session',
        description:
            'A calm, confidential 60-minute session with your therapist.',
    },
];

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = services.find((s) => s.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!service) {
        return (
            <div className="service-detail-page">
                <div className="container">
                    <p className="service-not-found">This service could not be found.</p>
                    <Link to="/" className="btn btn-primary">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="service-detail-page">
            {/* Header */}
            <section className="section service-header">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h1 className="service-title">{service.title}</h1>
                        <p className="service-subtitle">{service.description}</p>
                    </motion.div>
                </div>
            </section>
            {/* Fees & Session info */}
            <section className="section service-info-section">
                <div className="container">
                    <motion.div
                        className="service-info-cards"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="service-info-card">
                            <IndianRupee size={22} aria-hidden="true" />
                            <span className="service-info-label">Fees per session</span>
                            <span className="service-info-value">&#8377;1,200</span>
                        </div>
                        <div className="service-info-card">
                            <Clock size={22} aria-hidden="true" />
                            <span className="service-info-label">Session time</span>
                            <span className="service-info-value">60 minutes</span>
                        </div>
                    </motion.div>

                    <motion.a
                            href="https://forms.gle/p3LY41jq33sCv1kq7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ivory service-cta-button"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                        >
                            Book Your Free Call <ArrowRight size={18} aria-hidden="true" />
                        </motion.a>
                </div>
            </section>

            {/* Process */}
            <section className="service-process-section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <motion.h2
                        className="service-process-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Therapy Process
                    </motion.h2>

                    <div className="service-process">
                        {processSteps.map((step, index) => (
                            <motion.div
                                className="process-row"
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                            >
                                <div className="process-node-col">
                                    <div className="process-node">
                                        {index === processSteps.length - 1 ? (
                                            <Heart size={16} aria-hidden="true" />
                                        ) : (
                                            <ArrowDown size={16} aria-hidden="true" />
                                        )}
                                    </div>
                                    {index < processSteps.length - 1 && (
                                        <div className="process-line" aria-hidden="true" />
                                    )}
                                </div>
                                <div className="process-content">
                                    <h3>{step.title}</h3>
                                    {step.description && <p>{step.description}</p>}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;