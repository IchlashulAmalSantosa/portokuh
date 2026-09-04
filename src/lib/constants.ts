import { SocialLink } from '@/types';

export const NAV_ITEMS = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#footer' },
] as const;

export const SOCIAL_LINKS: SocialLink[] = [
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
    label: 'Mail',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=yaas.santosa@gmail.com',
    icon: 'mail',
  },
];

export const CV_PATH = '/cv/ichlashul-cv.pdf';
