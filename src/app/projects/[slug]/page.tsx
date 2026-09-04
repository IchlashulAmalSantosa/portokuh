import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ProjectHeader } from '@/components/project/ProjectHeader';
import { ProjectVisualizations } from '@/components/project/ProjectVisualizations';
import { ChallengeImpact } from '@/components/project/ChallengeImpact';
import { SolutionSteps } from '@/components/project/SolutionSteps';
import { KeyInsightsTerminal } from '@/components/project/KeyInsightsTerminal';
import { projects, getProjectBySlug } from '@/data/projects';

interface ProjectPageProps {
  params: { slug: string };
}

// Pemetaan deskripsi visualisasi berdasarkan slug project
const VISUALIZATION_DESCRIPTIONS: Record<string, string> = {
  'analisis-sentimen-whoosh-indobert-svm':
    'Key charts from the multi-platform social media sentiment analysis and model evaluation.',
  'ecommerce-sales-operational-analytics':
    'Interactive Tableau dashboard breakdowns covering sales trends, delivery logistics, payment channels, and regional performance.',
  'superstore-commercial-performance-profitability':
    'Power BI dashboard analytics highlighting commercial KPIs, sales vs profit trends, and sub-category profit leak diagnostics.',
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Mengambil deskripsi spesifik sesuai slug proyek
  const visualizationDescription =
    VISUALIZATION_DESCRIPTIONS[project.slug] ||
    'Key charts and data visualizations extracted from the project analysis.';

  return (
    <>
      <ProjectHeader project={project} />
      <ProjectVisualizations
        items={project.visualizations}
        description={visualizationDescription}
      />
      <ChallengeImpact challenge={project.challenge} impact={project.impact} />
      <SolutionSteps steps={project.solution} />
      <KeyInsightsTerminal insights={project.insights} />
    </>
  );
}
