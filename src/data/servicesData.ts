export interface Service {
    slug: string;
    title: string;
    description: string;
}

export const services: Service[] = [
    {
        slug: 'individual-therapy-for-adults',
        title: 'Individual Therapy For Adults',
        description:
            'One-on-one sessions to address personal challenges, mental health disorders, and personal growth.',
    },
    {
        slug: 'therapy-for-teens-adolescents',
        title: 'Therapy for Teens & Adolescents',
        description:
            'Supporting young people through the challenges of adolescence and beyond.',
    },
];