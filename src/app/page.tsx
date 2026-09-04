import { Hero } from '@/components/sections/Hero';
import { AboutMe } from '@/components/sections/AboutMe';
import { TechnicalSkills } from '@/components/sections/TechnicalSkills';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <TechnicalSkills />
      <FeaturedProjects />
    </>
  );
}
