import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import arshooImage from '@/assets/arshoo.jpg';

const About = () => {
    const navigate = useNavigate();
    return (
        <section className="about-section" id="about" aria-label="About Me">
            {/* Left Column: Image & Name */}
            <motion.div
                className="about-details"
                aria-label="My Details"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
            >
                <div className="blob-c">
                    <div className="blob-arshita">
                        <img
                            src={arshooImage}
                            alt="Arshita Sharma"
                        />
                    </div>
                </div>

                <h3 className="founder-name">
                    Arshita Sharma
                </h3>

                <h3 className="founder-title">
                    RCI Licensed Clinical Psychologist
                </h3>
            </motion.div>

            {/* Right Column: Content */}
            <motion.div
                className="about-content-wrapper about-divider"
                aria-label="About Me Content"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
            >
                <h2 className="about-me-title">
                    About Me
                </h2>

                <div className="about-text-block">
                    <p>I'm Arshita Sharma, an RCI-licensed Clinical Psychologist with over 2.5 years of professional experience across hospitals, rehabilitation settings, crisis intervention, and psychotherapy.</p>

                    <p className="highlight-text">
                        Nothing can replace therapy.
                    </p>

                    <p>Helping people with their mental health journey is not just my profession, it’s also personal for me. The Still Space started as an idea when I was just a kid. I'm thrilled that I am finally doing it!</p>

                    <p className="highlight-text" style={{ marginTop: '1.25rem', textAlign: 'center' }}>
                        Get to know me, The Still Space.
                    </p>
                </div>

                <button className="btn-know-more" onClick={() => navigate('/about-me')} aria-label="About Me">
                    Know more about me
                </button>
            </motion.div>
        </section>
    );
};

export default About;
