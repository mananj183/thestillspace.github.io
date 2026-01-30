import { motion } from 'framer-motion';
import { Heart, Brain, Sun, Users } from 'lucide-react';

const services = [
    {
        icon: <Brain size={32} />,
        title: "Individual Therapy",
        description: "One-on-one sessions to address personal challenges, mental health disorders, and personal growth."
    },
    {
        icon: <Users size={32} />,
        title: "Couples Counseling",
        description: "Helping partners improve communication, resolve conflict, and strengthen their emotional bond."
    },
    {
        icon: <Sun size={32} />,
        title: "Anxiety & Stress",
        description: "Evidence-based strategies to manage anxiety, reduce stress, and improve coping mechanisms."
    },
    {
        icon: <Heart size={32} />,
        title: "Trauma Recovery",
        description: "Safe, paced work to process traumatic events and move towards healing and integration."
    }
];

const Services = () => {
    return (
        <section id="services" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>My Approach</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Tailored therapeutic interventions designed to meet your unique needs and goals.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                padding: '2rem',
                                borderRadius: '1rem',
                                boxShadow: 'var(--shadow)',
                                border: '1px solid var(--border)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{
                                color: 'var(--accent)',
                                marginBottom: '1.5rem',
                                padding: '1rem',
                                backgroundColor: 'rgba(46, 139, 87, 0.1)',
                                borderRadius: '50%'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
