import { Card } from '@/components/ui/Card';
import { Project } from '@/types';

interface ChallengeImpactProps {
  challenge: Project['challenge'];
  impact: Project['impact'];
}

/** Two columns: the problem on the left, the measured business impact on the right. */
export function ChallengeImpact({ challenge, impact }: ChallengeImpactProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-6 sm:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold">The Challenge</h2>
          <p className="mt-3 text-sm text-muted">{challenge.description}</p>
          <ul className="mt-4 space-y-2">
            {challenge.points.map((point) => (
              <li key={point} className="flex gap-2 text-sm text-muted">
                <span className="text-accent">→</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">Business Impact</h2>
          <div className="mt-4 space-y-6">
            {impact.map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-semibold text-accent">{item.value}</p>
                <p className="mt-1 text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
