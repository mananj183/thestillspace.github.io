export interface FaqItem {
    question: string;
    answer: string;
}

export const faqs: FaqItem[] = [
    {
        question: 'How do I know if therapy is right for me?',
        answer:
            'If you are feeling stuck, overwhelmed, or unsure how to navigate a difficult phase of life, therapy can help. It provides a confidential, non-judgmental space to make sense of your experiences and build practical, lasting ways to move forward.',
    },
    {
        question: 'Do you offer online sessions?',
        answer:
            'Yes. Sessions are currently conducted online across India, so you can access therapy from the comfort and privacy of your own space. All you need is a stable internet connection and a quiet corner for our session.',
    },
    {
        question: 'How long is each session and how often do we meet?',
        answer:
            'Sessions are typically 50 minutes long and usually take place once a week. The frequency can be adjusted based on your needs, the nature of your concerns, and what we agree is most helpful at each stage of your therapy.',
    },
    {
        question: 'What happens in the first session?',
        answer:
            'The first session is an opportunity for us to get to know each other. We will talk about what brought you to therapy, your goals, and any questions you have. It is also a chance for you to see whether you feel comfortable working with me.',
    },
    {
        question: 'Is everything I share in therapy confidential?',
        answer:
            'Yes. Confidentiality is a core part of the therapeutic relationship. What you share stays between us, with the only exceptions being situations where there is a risk of serious harm to yourself or others, or when disclosure is required by law.',
    },
];