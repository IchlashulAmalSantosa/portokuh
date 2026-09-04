import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Data Analytics & ML',
    type: 'checklist',
    items: [
      { name: 'Exploratory Data Analysis (EDA)' },
      { name: 'Statistical Inference' },
      { name: 'Data Cleaning' },
      { name: 'Sentiment Analysis' },
      { name: 'ML Fundamentals' },
    ],
  },
  {
    title: 'Languages & Tools',
    type: 'badge',
    items: [
      { name: 'Python' },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Scikit-Learn' },
      { name: 'PyTorch' },
      { name: 'SQL (PostgreSQL)' },
      { name: 'HTML/CSS/JS' },
    ],
  },
  {
    title: 'Visualization & BI',
    type: 'progress',
    items: [
      { name: 'Tableau', level: 70 },
      { name: 'Power BI', level: 70 },
      { name: 'Matplotlib', level: 75 },
      { name: 'Seaborn', level: 75 },
    ],
  },
];
