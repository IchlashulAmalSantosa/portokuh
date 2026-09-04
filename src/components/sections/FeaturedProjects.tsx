import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projects } from '@/data/projects';

/** Featured Projects: three project cards linking to their detail page. */
export function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading title="Featured Projects" />

      <div className="grid gap-6 sm:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.slug} className="flex flex-col">
            <Badge className="w-fit">{project.tag}</Badge>
            <h3 className="mt-4 text-base font-semibold">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm text-muted">{project.summary}</p>
            <Link
              href={`/projects/${project.slug}`}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
            >
              View Case Study
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
