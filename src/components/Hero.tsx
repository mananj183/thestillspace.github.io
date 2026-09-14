import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import arshooImage from '@/assets/hero.png';

const Hero = () => {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start']
    });

    const copyY = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    return (
        <section id="hero" ref={sectionRef} className="hero" aria-label="Welcome to The Still Space">
            <div className="container">
                <div className="hero-grid">
                    {/* Text Content */}
                    <motion.div
                        className="hero-copy"
                        style={{ y: copyY }}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <p className="hero-eyebrow">The Still Space by Arshita</p>
                        <h1 className="hero-title">
                            A space to pause.<br />A place to understand.
                        </h1>
                        <p className="hero-lede">
                            A calm, confidential room for those carrying anxiety, grief,
                            trauma, or the quiet weight of trying to hold everything together.
                            Healing begins when you feel safe enough to slow down, be heard,
                            and be yourself.
                        </p>
                        <div className="hero-cta-row">
                            <motion.a
                                href="https://forms.gle/p3LY41jq33sCv1kq7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-ivory"
                                whileHover={{ y: -2 }}
                                whileTap={{ y: 0 }}
                            >
                                Book Your Free Call <ArrowRight size={18} aria-hidden="true" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Portrait */}
                    <motion.div
                        className="hero-portrait-frame"
                        style={{ scale: portraitScale }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                    >
                        <div className="hero-portrait">
                            <img
                                src={arshooImage}
                                alt="Arshita Sharma, clinical psychologist, seated in soft natural light"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;