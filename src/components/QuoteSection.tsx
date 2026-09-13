import { motion } from 'framer-motion';

interface QuoteSectionProps {
    quote: string;
    byline?: string;
}

const QuoteSection = ({ quote, byline }: QuoteSectionProps) => {
    return (
        <section className="quote-section" aria-label="Reflection">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                >
                    <span className="quote-mark" aria-hidden="true">&ldquo;</span>
                    <blockquote className="quote-text">{quote}</blockquote>
                    {byline && <p className="quote-byline">{byline}</p>}
                </motion.div>
            </div>
        </section>
    );
};

export default QuoteSection;