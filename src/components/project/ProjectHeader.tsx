import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Project } from '@/types';

interface ProjectHeaderProps {
  project: Project;
}

/** Project detail header: back link, terminal-style title with cursor, tag stack. */
export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to Projects
        </Link>

        <h1 className="mt-6 font-mono text-2xl sm:text-3xl">
          <span className="text-accent">&gt;</span> {project.title}
          <span className="ml-1 inline-block h-6 w-2 translate-y-1 animate-blink bg-foreground align-middle" />
        </h1>

        <p className="mt-4 max-w-2xl text-muted">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </header>
  );
}
