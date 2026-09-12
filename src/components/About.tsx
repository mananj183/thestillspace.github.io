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

                    <p>
                        Therapy at The Still Space is to pause, make sense of your experiences, and build a kinder relationship with yourself without judgment or pressure to “have it all figured out.”
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
