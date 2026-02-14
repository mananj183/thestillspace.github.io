import logoVideo from '@/assets/logo.mp4';
import finalLightVideo from '@/assets/final-light.mp4';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../utils/theme';

const Hero = () => {
    const { theme } = useTheme();
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
            <div className="container" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                {/* Text Content */}
                <motion.div
                    style={{ y: textY, opacity: textOpacity }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        fontWeight: 800,
                        lineHeight: 1.2,
                        marginBottom: '1.5rem',
                        color: 'var(--text-primary)'
                    }}>
                        Find Peace in the <span style={{ color: 'var(--accent)' }}>Present Moment</span>
                    </h1>
                    <p style={{
                        fontSize: '1.125rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem',
                        maxWidth: '450px'
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
                        width: '100%',
                        maxWidth: '480px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mixBlendMode: theme === 'light' ? 'darken' : 'lighten'
                    }}
                >
                    <video
                        src={theme === 'light' ? finalLightVideo : logoVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '70vh',
                            objectFit: 'contain'
                        }}
                    />
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
        </section >
    );
};

export default Hero;
