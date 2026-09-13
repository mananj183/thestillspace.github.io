import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface Quote {
    quote: string;
    byline?: string;
}

interface QuoteSectionProps {
    quotes: Quote[];
    title?: string | null;
}

const QuoteSection = ({ quotes, title }: QuoteSectionProps) => {
    const [index, setIndex] = useState(0);

    if (quotes.length === 0) {
        return null;
    }

    const current = quotes[index % quotes.length];

    const goPrev = () => setIndex((i) => (i - 1 + quotes.length) % quotes.length);
    const goNext = () => setIndex((i) => (i + 1) % quotes.length);

    return (
        <section className="quote-section" aria-label="Reflection">
            <div className="container">
                {title && <h3 className="quote-title">{title}</h3>}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                >
                    <span className="quote-mark" aria-hidden="true">&ldquo;</span>
                    <AnimatePresence mode="wait">
                        <motion.blockquote
                            key={index}
                            className="quote-text"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                            {current.quote}
                        </motion.blockquote>
                    </AnimatePresence>
                    {current.byline && (
                        <motion.p
                            key={`byline-${index}`}
                            className="quote-byline"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                            {current.byline}
                        </motion.p>
                    )}
                </motion.div>
                <div className="quote-nav">
                    <button
                        type="button"
                        className="quote-nav-btn"
                        onClick={goPrev}
                        aria-label="Previous quote"
                    >
                        <ChevronLeft size={22} strokeWidth={1.5} />
                    </button>
                    <button
                        type="button"
                        className="quote-nav-btn"
                        onClick={goNext}
                        aria-label="Next quote"
                    >
                        <ChevronRight size={22} strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default QuoteSection;