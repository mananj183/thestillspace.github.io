import { useEffect } from 'react';
import { motion } from 'framer-motion';
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
                        <h2 className="about-title">Introduction</h2>
                        <p>
                            Hi, I am Arshita. Welcome to The Still Space. I created this practice with a singular vision: to help people find clarity and peace amid life's chaotic turbulence. We all need a safe harbor sometimes.
                        </p>
                        <p>
                            My journey as an RCI Licensed Clinical Psychologist has been driven by a passion for understanding the human mind and a deep empathy for those navigating mental hardship. Together, we can find a way forward.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 2: Story */}
            <section className="section" id="about-story" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container about-me-grid">
                    <motion.div
                        className="about-text" style={{ order: 1 }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="about-title">My Story</h2>
                        <p>
                            Growing up, I saw people around me struggle with their mental health. I knew that it was hard but realized that it was even more challenging without professional support. Nothing can replace therapy.
                        </p>
                        <p>
                            Helping people with their mental health journey is not just my profession, it’s also personal for me. The Still Space started as an idea when I was just a kid. I'm thrilled that I am finally doing it and helping people uncover their inherent resilience!
                        </p>
                    </motion.div>
                    <motion.div
                        className="about-me-carousel-wrapper" style={{ order: 2 }}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <ImageCarousel images={storyImages} interval={5000} />
                    </motion.div>
                </div>
            </section>

            {/* Section 3: Timeline */}
            <section className="section" id="about-timeline">
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
