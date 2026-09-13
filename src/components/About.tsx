import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import arshooImage from '@/assets/arshoo.jpg';

const About = () => {
    const navigate = useNavigate();
    return (
        <section className="about-section" id="about" aria-label="About Me">
            <div className="container">
                <div className="about-grid">
                    {/* Portrait column */}
                    <motion.div
                        className="about-portrait-col"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <div className="portrait-frame">
                            <div className="portrait">
                                <img
                                    src={arshooImage}
                                    alt="Arshita Sharma in soft natural light"
                                />
                            </div>
                        </div>
                        <h3 className="founder-name">
                            Arshita Sharma
                        </h3>
                        <p className="founder-title">
                            RCI Licensed Clinical Psychologist
                        </p>
                    </motion.div>

                    {/* Text column */}
                    <motion.div
                        className="about-body"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                    >
                        <h2 className="section-title">About Me</h2>

                        <div className="about-text">
                            <p>
                                I'm Arshita Sharma, an RCI-licensed Clinical Psychologist
                                with over 2.5 years of professional experience across
                                hospitals, rehabilitation settings, crisis intervention,
                                and psychotherapy.
                            </p>

                            <p className="highlight-text">
                                Nothing can replace therapy.
                            </p>

                            <p>
                                Therapy at The Still Space is to pause, make sense of your
                                experiences, and build a kinder relationship with yourself
                                without judgment or pressure to &ldquo;have it all figured
                                out.&rdquo;
                            </p>
                        </div>

                        <button
                            className="btn-know-more"
                            onClick={() => navigate('/about-me')}
                            aria-label="About Me"
                        >
                            <span className="btn-know-more-label">Know more about me</span>
                            <svg
                                className="btn-know-more-arrow"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;