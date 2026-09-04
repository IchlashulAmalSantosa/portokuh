import { SolutionStep } from '@/types';

interface SolutionStepsProps {
  steps: SolutionStep[];
}

export function SolutionSteps({ steps }: SolutionStepsProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-lg font-semibold">Implementation Steps</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((item) => (
          <div
            key={item.step}
            className="rounded-2xl border border-border/40 bg-background-soft/20 p-6 backdrop-blur-sm"
          >
            <span className="font-mono text-xs font-semibold text-accent">
              STEP {item.step}
            </span>
            <h3 className="mt-2 text-base font-medium">{item.title}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
