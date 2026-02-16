
import finalLightVideo from '@/assets/final-light.mp4';
// import healingTextImg from '@/assets/healing_text.png';
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

    return (
        <section id="hero" ref={containerRef} className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(to bottom, #ece6daa3, var(--bg-secondary))',
            paddingTop: '6rem', /* Added top padding for mobile navbar clearance */
            paddingBottom: '2rem'
        }}>
            {/* Unified Motion Container */}
            <motion.div
                className="container hero-container"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
            >

                {/* Text Content */}
                <motion.div
                    style={{ y: textY, opacity: textOpacity }}
                /* Removed individual entrance animation to unify with container */
                >

                    <h1 className="hero-title" style={{
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        fontWeight: 800,
                        lineHeight: 1.2,
                        marginBottom: '1.5rem',
                        color: 'var(--text-primary)'
                    }}>
                        Where <span style={{ color: 'var(--accent)' }}>Stillness</span> Meets Healing
                    </h1>
                    <p className="hero-text" style={{
                        fontSize: '1.125rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem',
                        maxWidth: '450px'
                    }}>
                        In the chaos of life, finding a still space within yourself is the first step towards growth. Together, we navigate the complexities of your mind to uncover clarity, resilience, and inner peace.
                    </p>

                    <a href="https://forms.gle/p3LY41jq33sCv1kq7" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                        Book a Consultation <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                    </a>
                </motion.div>

                {/* Animation Area */}
                <motion.div
                    className="hero-video-wrapper"
                    style={{
                        y: svgY,
                        scale: svgScale,
                        position: 'relative',
                        width: '100%',
                        maxWidth: '480px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mixBlendMode: 'darken'
                    }}
                >
                    <video
                        src={finalLightVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="hero-video"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '70vh',
                            objectFit: 'contain'
                        }}
                    />
                </motion.div>
            </motion.div>

            <style>{`
        @media (max-width: 968px) {
          .hero-container {
            display: flex !important;
            flex-direction: column-reverse; /* Video Top, Text Bottom */
            gap: 1.5rem !important;
            text-align: center;
            height: auto;
          }
          
          .hero-title {
            font-size: 1.75rem !important; /* Reduced from 2.5rem */
            margin-bottom: 1rem !important;
          }

          .hero-text {
            font-size: 0.95rem !important;
            margin-bottom: 1.5rem !important;
          }

          /* Video Sizing Optimization */
          .hero-video-wrapper {
             max-width: 60% !important; /* Significantly reduced width */
             margin: 0 auto;
          }

          .hero-video {
             max-height: 23vh !important; /* Limit height to fit on screen */
          }
          
          #hero {
             padding-top: 1rem !important; /* Adjust for mobile navbar */
             align-items: flex-start !important; /* Start from top */
             min-height: auto !important; /* Allow content to dictate height on small screens if needed, or keep 100vh */
             height: auto;
          }
          
          /* Ensure it fits in small height */
          @media (min-height: 500px) {
             #hero {
                min-height: 100vh !important;
                justify-content: center;
             }
          }
        }
      `}</style>
        </section >
    );
};

export default Hero;
