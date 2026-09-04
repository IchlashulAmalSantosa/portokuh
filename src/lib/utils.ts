import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge Tailwind class names safely, resolving conflicting utility classes. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a raw metric value for display, e.g. formatMetric(92.4, '%') -> "92.4%".
 * Metrics are stored pre-formatted in data/metrics.ts; this helper covers the
 * rare case where a number needs a suffix applied at render time.
 */
export function formatMetric(value: number, suffix = ''): string {
  return `${value}${suffix}`;
}

/** Turn a project title into a URL slug, e.g. "E-Commerce Sales Prediction" -> "e-commerce-sales-prediction". */
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');
}
