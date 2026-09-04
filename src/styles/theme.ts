/**
 * Design tokens, mirrored from tailwind.config.ts for reference in non-Tailwind
 * contexts (e.g. inline styles, chart libraries). Tailwind config remains the
 * source of truth — update both together if a token changes.
 */
export const theme = {
  colors: {
    background: '#000000',
    backgroundSoft: '#0A0A0A',
    foreground: '#FFFFFF',
    muted: '#9CA3AF',
    border: '#262626',
    accent: '#3B82F6',
    accentLight: '#60A5FA',
  },
  fonts: {
    sans: 'Inter, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },
} as const;
