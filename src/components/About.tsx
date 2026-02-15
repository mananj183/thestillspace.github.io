import { motion } from 'framer-motion';
import arshooImage from '@/assets/arshoo.jpg';

const About = () => {
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
                    Clinical Psychologist
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
                    <p>Growing up, I saw people around me struggle with their mental health. I knew that it was hard but realized that it was even more challenging without professional support.</p>

                    <p className="highlight-text">
                        Nothing can replace therapy.
                    </p>

                    <p>Helping people with their mental health journey is not just my profession, it’s also personal for me. The Friendly Couch started as an idea when I was just a kid. I'm thrilled that I am finally doing it!</p>

                    <p className="highlight-text" style={{ marginTop: '1.25rem', textAlign: 'center' }}>
                        Get to know me, The Still Space.
                    </p>
                </div>

                <a href="#about" aria-label="About Me" style={{ marginTop: '2.5rem' }}>
                    <button className="btn-know-more">
                        Know more about me
                    </button>
                </a>
            </motion.div>
        </section>
    );
};

export default About;
