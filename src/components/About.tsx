import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Therapist Portrait"
                        style={{
                            width: '100%',
                            borderRadius: '1rem',
                            boxShadow: 'var(--shadow)'
                        }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                        Compassionate Care
                    </h2>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--accent)', marginBottom: '1.5rem', fontWeight: 600 }}>
                        Dr. Sarah Mitchell, Clinical Psychologist
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', display: 'block' }}>
                        With over 10 years of experience in clinical psychology, I integrate evidence-based practices with a warm, empathetic approach. My goal is to create a safe space where you can explore your thoughts and feelings without judgment.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', display: 'block' }}>
                        I specialize in anxiety, depression, and trauma recovery, helping individuals regain control over their lives and build resilience for the future.
                    </p>
                </motion.div>
            </div>
            <style>{`
                @media (max-width: 968px) {
                    .container {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
