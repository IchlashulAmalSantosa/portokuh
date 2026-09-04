import { Button } from '@/components/ui/Button';
import { TerminalMetrics } from './TerminalMetrics';
import { profile } from '@/data/profile';
import { CV_PATH } from '@/lib/constants';

/** Hero: two-line heading, tagline, CTAs, and the terminal metrics widget. */
export function Hero() {
  return (
    <section id="home" className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            <span className="block text-foreground">Hi, I&apos;m {profile.role}</span>
          </h1>
          <p className="mt-6 max-w-md text-muted">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/#projects">View Projects</Button>
            <Button href={CV_PATH} variant="outline">
              Download CV
            </Button>
          </div>
        </div>

        <TerminalMetrics />
      </div>
    </section>
  );
}
