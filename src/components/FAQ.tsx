import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs, type FaqItem } from '../data/faqData';

interface FAQProps {
    items?: FaqItem[];
}

const FAQ = ({ items = faqs }: FAQProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);

    return (
        <section id="faqs" className="faq-section" aria-label="Frequently Asked Questions">
            <div className="container">
                <motion.div
                    className="section-head"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="eyebrow">Common Questions</p>
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <p className="section-sub">
                        A few things people often ask before beginning therapy.
                    </p>
                </motion.div>

                <div className="faq-list">
                    {items.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                className={`faq-item${isOpen ? ' faq-item-open' : ''}`}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <h3>
                                    <button
                                        type="button"
                                        className="faq-question"
                                        onClick={() => toggle(index)}
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-panel-${index}`}
                                    >
                                        <span className="faq-question-text">{item.question}</span>
                                        <span className="faq-toggle" aria-hidden="true">
                                            <ChevronDown size={20} strokeWidth={1.5} />
                                        </span>
                                    </button>
                                </h3>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            id={`faq-panel-${index}`}
                                            className="faq-answer"
                                            role="region"
                                            aria-label={item.question}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        >
                                            <p>{item.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;