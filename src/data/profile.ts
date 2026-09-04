import { Profile, SocialLink } from '@/types';

export const profile: Profile = {
  name: "Ichlashul 'Amal Santosa",
  role: 'Amal',
  tagline:
    'Informatics Engineering | Fresh Graduated | Transforming raw complex data into actionable business insights and predictive models.',
  highlightCardTitle: 'Informatics to Data',
  highlightCardDescription:
    'Bridging software engineering logic with data science rigor.',
  bio: 'A Bachelor’s degree graduate in Informatics Engineering from UIN Sunan Gunung Djati Bandung, possessing a strong foundation in software engineering, data processing (Data Science & NLP), and the implementation of Artificial Intelligence (AI) and Machine Learning. Gained practical experience through the Kampus Merdeka Certified Independent Study (MSIB) program (Bangkit Academy) in the Cloud Computing track, developing expertise in machine learning model testing, REST API development, and backend system integration. Accustomed to collaborative work within cross-functional teams and adaptable in applying modern technologies to meet business operational and research needs.',
  bioHighlight: '',
  photo: '/images/photos.jpg',
  stats: [
    { label: 'Degree', value: 'S.T.' },
    { label: 'Certification', value: 'BNSP' },
    { label: 'Focus', value: 'End-to-End' },
  ],
};

export const socialLinks: SocialLink[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/amalsntsa?igsi=bTJqNHlraGt4bDZi',
    icon: 'instagram',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ichlashul-amal-santosa-051731305/',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=yaas.santosa@gmail.com',
    icon: 'mail',
  },
];
