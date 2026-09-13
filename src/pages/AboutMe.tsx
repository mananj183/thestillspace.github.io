import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import './AboutMe.css';

// Random images for placeholders
const introImages = [
    'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800'
];

const storyImages = [
    'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800'
];

const milestones = [
    {
        title: 'Completing my Bachelors',
        desc: 'Began the journey into psychology, learning the foundational principles of human behavior and mental processes. This degree shaped my initial understanding of the complexities of the mind.',
        img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
        side: 'left'
    },
    {
        title: 'Completing my Masters',
        desc: 'Deepened my knowledge with advanced clinical psychology coursework and practical application. Research and hands-on experience became central to my growth.',
        img: 'https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?auto=format&fit=crop&q=80&w=800',
        side: 'right'
    },
    {
        title: 'Completing PDCP',
        desc: 'Earned my Post Graduate Diploma in Clinical Psychology. This rigorous program equipped me with the professional skills essential for clinical assessment and intervention.',
        img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
        side: 'left'
    },
    {
        title: 'Additional Certifications',
        desc: 'Continuously expanding my expertise with specialized certifications in various therapeutic modalities to better serve individuals experiencing distinct challenges.',
        img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
        side: 'right'
    },
    {
        title: 'My Therapy Style',
        desc: 'Developing an empathetic, structured, and client-centered approach to therapy. I prioritize creating a safe, non-judgmental space tailored to facilitate resilience and healing.',
        img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
        side: 'left'
    }
];

const AboutMe = () => {
    useEffect(() => {
        // Scroll to top when loading the page
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-me-page">
            {/* Section 1: Introduction */}
            <section className="section" id="about-intro">
                <div className="container about-me-grid">
                    <motion.div
                        className="about-me-carousel-wrapper"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <ImageCarousel images={introImages} />
                    </motion.div>
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="about-title">Arshita Sharma</h2>
                        <p>
                            Hi! My name is Arshita Sharma. I've worked with adolescents and adults facing a wide range of emotional and psychological concerns, including individuals navigating high distress, self-harm, addiction recovery, and complex trauma. These experiences have shaped a therapeutic style that is compassionate, collaborative, and grounded in real-life challenges rather than one-size-fits-all solutions.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem' }}
                            >
                                <Instagram size={18} />
                                <span>Instagram</span>
                            </a>
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem' }}
                            >
                                <Linkedin size={18} />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 4: How I Work */}
            <section className="section" id="about-approach" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container about-me-grid">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="about-title">How I Work</h2>
                        <p>
                            My work is trauma-informed and evidence-based, but above all, it is human. I value empathy, attunement, honesty, and creating a relationship where you feel understood and supported.
                        </p>
                        <p>
                            I integrate approaches such as Cognitive Behavior Therapy (CBT), Acceptance and Commitment Therapy (ACT), Dialectical Behavior Therapy (DBT), Internal Family Systems (IFS), somatic practices, and Polyvagal-informed interventions, depending on what feels most helpful for you. Rather than following a rigid approach, I tailor therapy to your unique needs and goals.
                        </p>
                        <p>
                            I work with adolescents, young adults, and adults seeking support for their emotional and psychological well-being.
                        </p>
                    </motion.div>
                    <motion.div
                        className="areas-card"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3>Areas I work with</h3>
                        <ul className="areas-list">
                            <li>Trauma and complex trauma</li>
                            <li>Grief</li>
                            <li>Anxiety, panic attacks, and phobias</li>
                            <li>Depression and mood-related concerns</li>
                            <li>Emotional dysregulation</li>
                            <li>Stress and burnout</li>
                            <li>Self-esteem and self-worth</li>
                            <li>Relationship and interpersonal difficulties</li>
                            <li>Identity, life transitions, and belonging</li>
                        </ul>
                    </motion.div>
                </div>
            </section>
            {/* Section 2: Story */}
            <section className="section" id="about-story" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container about-me-grid">
                    <motion.div
                        className="about-me-carousel-wrapper" style={{ order: 1 }}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <ImageCarousel images={storyImages} interval={5000} />
                    </motion.div>
                    <motion.div
                        className="about-text" style={{ order: 2 }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="about-title">Who I am outside the therapy room</h2>
                        <p>
                            Outside of therapy, I'm someone who finds joy in the little things&mdash;cooking comforting meals, exploring new places, dancing, getting lost in a good book, and spending time on my yoga mat or at the gym. These moments keep me grounded and remind me of the importance of balance, curiosity, and caring for ourselves in everyday life.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 5: Timeline */}
            <section className="section" id="about-timeline" style={{ backgroundColor: 'var(--bg-alt)' }}>
                <div className="container">
                    <motion.h2
                        className="about-title"
                        style={{ textAlign: 'center', marginBottom: '1rem' }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Milestones
                    </motion.h2>

                    <div className="timeline-container">
                        {milestones.map((milestone, index) => (
                            <div key={index} className={`timeline-item timeline-${milestone.side}`}>
                                <motion.div
                                    className="milestone-content"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <div className="milestone-text-block">
                                        <div className="milestone-text">
                                            <h3>{milestone.title}</h3>
                                            <p>{milestone.desc}</p>
                                        </div>
                                    </div>
                                    <div className="milestone-img-block">
                                        <div className="milestone-img-wrapper">
                                            <img src={milestone.img} alt={milestone.title} />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;
