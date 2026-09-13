import { motion } from 'framer-motion';
import { Compass, Users, Wind, Shield } from 'lucide-react';

const services = [
    {
        icon: <Compass size={26} strokeWidth={1.5} />,
        title: 'Individual Therapy',
        description:
            'One-on-one sessions to address personal challenges, mental health disorders, and personal growth.',
    },
    {
        icon: <Users size={26} strokeWidth={1.5} />,
        title: 'Couples Counseling',
        description:
            'Helping partners improve communication, resolve conflict, and strengthen their emotional bond.',
    },
    {
        icon: <Wind size={26} strokeWidth={1.5} />,
        title: 'Anxiety & Stress',
        description:
            'Evidence-based strategies to manage anxiety, reduce stress, and improve coping mechanisms.',
    },
    {
        icon: <Shield size={26} strokeWidth={1.5} />,
        title: 'Trauma Recovery',
        description:
            'Safe, paced work to process traumatic events and move towards healing and integration.',
    },
];

const Services = () => {
    return (
        <section id="services" className="services-section" aria-label="Services">
            <div className="container">
                <motion.div
                    className="section-head"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="eyebrow">The Work</p>
                    <h2 className="section-title">My Approach</h2>
                    <p className="section-sub">
                        Tailored therapeutic interventions designed to meet your unique
                        needs and goals.
                    </p>
                </motion.div>

                <div className="service-grid">
                    {services.map((service, index) => (
                        <motion.article
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                        >
                            <div className="service-icon" aria-hidden="true">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;