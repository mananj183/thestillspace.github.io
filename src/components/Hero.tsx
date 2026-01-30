import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const svgY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const svgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    const handleScrollToContact = (e: React.MouseEvent) => {
        e.preventDefault();
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" ref={containerRef} className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                {/* Text Content */}
                <motion.div
                    style={{ y: textY, opacity: textOpacity }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 800,
                        lineHeight: 1.2,
                        marginBottom: '1.5rem',
                        color: 'var(--text-primary)'
                    }}>
                        Find Peace in the <span style={{ color: 'var(--accent)' }}>Present Moment</span>
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2.5rem',
                        maxWidth: '500px'
                    }}>
                        Professional clinical psychology services to guide you through life's challenges with compassion and evidence-based care.
                    </p>
                    <a href="#contact" onClick={handleScrollToContact} className="btn btn-primary" style={{ textDecoration: 'none' }}>
                        Book a Consultation <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                    </a>
                </motion.div>

                {/* Animation Area */}
                <motion.div
                    style={{
                        y: svgY,
                        scale: svgScale,
                        position: 'relative',
                        height: '500px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <motion.svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ width: '100%', height: '100%', maxWidth: '500px' }}
                    >
                        {/* Abstract Organic Blob 1 */}
                        <motion.path
                            fill="var(--accent)"
                            opacity="0.1"
                            d="M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.5,-41.3C83.9,-27,88.5,-12.1,86.4,2C84.3,16.1,75.4,29.4,65.4,40.8C55.4,52.2,44.2,61.7,31.7,68.4C19.2,75.1,5.3,79,-9.2,80.7C-23.7,82.4,-38.8,81.9,-51.1,74.7C-63.4,67.5,-72.9,53.6,-78.6,38.9C-84.3,24.2,-86.2,8.7,-82.7,-5.2C-79.2,-19.1,-70.3,-31.4,-59.6,-40.8C-48.9,-50.2,-36.4,-56.7,-23.7,-64.3C-11,-71.9,1.9,-80.6,15.7,-81.1C29.5,-81.6,44.3,-73.9,45.7,-76.3Z"
                            transform="translate(100 100)"
                            animate={{
                                d: [
                                    "M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.5,-41.3C83.9,-27,88.5,-12.1,86.4,2C84.3,16.1,75.4,29.4,65.4,40.8C55.4,52.2,44.2,61.7,31.7,68.4C19.2,75.1,5.3,79,-9.2,80.7C-23.7,82.4,-38.8,81.9,-51.1,74.7C-63.4,67.5,-72.9,53.6,-78.6,38.9C-84.3,24.2,-86.2,8.7,-82.7,-5.2C-79.2,-19.1,-70.3,-31.4,-59.6,-40.8C-48.9,-50.2,-36.4,-56.7,-23.7,-64.3C-11,-71.9,1.9,-80.6,15.7,-81.1C29.5,-81.6,44.3,-73.9,45.7,-76.3Z",
                                    "M41.5,-73.2C54.6,-66.6,66.8,-57.2,75.8,-45.3C84.8,-33.4,90.6,-19,90.5,-4.7C90.4,9.6,84.4,23.8,75.1,36.4C65.8,49,53.2,60,39.6,67.3C26,74.6,11.4,78.2,-1.9,81.5C-15.2,84.8,-27.3,87.8,-39.7,83.9C-52.1,80,-64.8,69.2,-73.2,56.4C-81.6,43.6,-85.7,28.8,-83.9,14.6C-82.1,0.4,-74.4,-13.2,-64.9,-24.1C-55.4,-35,-44.1,-43.2,-32.5,-50.6C-20.9,-58,-9,-64.6,4.3,-72C17.6,-79.4,35.2,-87.6,41.5,-73.2Z",
                                    "M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.5,-41.3C83.9,-27,88.5,-12.1,86.4,2C84.3,16.1,75.4,29.4,65.4,40.8C55.4,52.2,44.2,61.7,31.7,68.4C19.2,75.1,5.3,79,-9.2,80.7C-23.7,82.4,-38.8,81.9,-51.1,74.7C-63.4,67.5,-72.9,53.6,-78.6,38.9C-84.3,24.2,-86.2,8.7,-82.7,-5.2C-79.2,-19.1,-70.3,-31.4,-59.6,-40.8C-48.9,-50.2,-36.4,-56.7,-23.7,-64.3C-11,-71.9,1.9,-80.6,15.7,-81.1C29.5,-81.6,44.3,-73.9,45.7,-76.3Z",
                                ],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        {/* Abstract Organic Blob 2 */}
                        <motion.path
                            fill="var(--accent)"
                            opacity="0.15"
                            d="M39.9,-65.7C50.9,-59.5,58.9,-46.8,64.4,-33.6C69.9,-20.4,72.9,-6.7,71.2,6.4C69.5,19.5,63.1,32,54.1,42.4C45.1,52.8,33.5,61.1,20.8,65.6C8.1,70.1,-5.7,70.8,-18.2,67.1C-30.7,63.4,-41.9,55.3,-51.7,45.4C-61.5,35.5,-69.9,23.8,-71.8,11.2C-73.7,-1.4,-69.1,-14.9,-60.6,-26.1C-52.1,-37.3,-39.7,-46.2,-27.2,-51.7C-14.7,-57.2,-2.1,-59.3,10.2,-58.5C22.5,-57.7,34.8,-53.9,39.9,-65.7Z"
                            transform="translate(100 100) scale(0.8)"
                            animate={{
                                rotate: 360,
                                scale: [0.8, 0.9, 0.8]
                            }}
                            transition={{
                                rotate: { duration: 50, repeat: Infinity, ease: "linear" },
                                scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                            }}
                        />

                        {/* Central Circle */}
                        <motion.circle
                            cx="100"
                            cy="100"
                            r="30"
                            fill="var(--accent)"
                            opacity="0.2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.5
                            }}
                        />
                    </motion.svg>
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 968px) {
          .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          h1 {
            font-size: 2.5rem !important;
          }
          p {
            margin: 0 auto 2.5rem !important;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
