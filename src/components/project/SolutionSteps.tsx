import { Card } from '@/components/ui/Card';
import { Project } from '@/types';

interface SolutionStepsProps {
  steps: Project['solution'];
}

/** "The Solution" section: numbered steps, each in its own glass panel. */
export function SolutionSteps({ steps }: SolutionStepsProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-lg font-semibold">The Solution</h2>

      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {steps.map((item) => (
          <Card key={item.step}>
            <p className="font-mono text-sm text-accent">
              {item.step} // {item.title}
            </p>
            <p className="mt-2 text-sm text-muted">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
