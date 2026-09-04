export interface Metric {
  label: string;
  value: string;
}

export interface SkillItem {
  name: string;
  /** Only used when the parent category's type is 'progress'. 0-100. */
  level?: number;
}

export interface SkillCategory {
  title: string;
  type: 'checklist' | 'badge' | 'progress';
  items: SkillItem[];
}

export interface ProfileStat {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  bioHighlight: string;
  highlightCardTitle: string;
  highlightCardDescription: string;
  photo: string;
  stats: ProfileStat[];
}

export interface ProjectImpact {
  label: string;
  value: string;
}

export interface ProjectSolutionStep {
  step: string;
  title: string;
  description: string;
}

// Alias export agar kompatibel dengan komponen SolutionSteps.tsx
export type SolutionStep = ProjectSolutionStep;

export interface ProjectVisualization {
  title: string;
  caption: string;
  icon: 'map' | 'bar-chart' | 'activity';
  image?: string;
}

export interface ProjectInsightRow {
  actual: string;
  forecast: string;
  error: string;
  bar?: string;
}

export interface Project {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  description: string;
  stack: string[];
  visualizations: ProjectVisualization[];
  challenge: {
    description: string;
    points: string[];
  };
  impact: ProjectImpact[];
  solution: ProjectSolutionStep[];
  insights: {
    paragraphs: string[];
    codeFileName: string;
    rows: ProjectInsightRow[];
  };
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'linkedin' | 'mail' | 'instagram';
}
