import { Check } from 'lucide-react';
import { SkillItem } from '@/types';

interface SkillChecklistProps {
  items: SkillItem[];
}

/** Checkmark list used for the Data Analytics & ML skill card. */
export function SkillChecklist({ items }: SkillChecklistProps) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.name} className="flex items-center gap-2.5 text-sm">
          <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}
