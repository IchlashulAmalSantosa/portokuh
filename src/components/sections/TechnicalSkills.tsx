import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillChecklist } from '@/components/ui/SkillChecklist';
import { skillCategories } from '@/data/skills';

/** Technical Skills: three cards — checklist, tool badges, progress bars. */
export function TechnicalSkills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading title="Technical Skills" />

      <div className="grid gap-6 sm:grid-cols-3">
        {skillCategories.map((category) => (
          <Card key={category.title}>
            <h3 className="mb-5 text-sm font-medium">{category.title}</h3>

            {category.type === 'checklist' && (
              <SkillChecklist items={category.items} />
            )}

            {category.type === 'badge' && (
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge key={item.name}>{item.name}</Badge>
                ))}
              </div>
            )}

            {category.type === 'progress' && (
              <div className="space-y-4">
                {category.items.map((item) => (
                  <ProgressBar
                    key={item.name}
                    label={item.name}
                    level={item.level ?? 0}
                  />
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
