import { Instagram, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

const ICONS = { instagram: Instagram, linkedin: Linkedin, mail: Mail } as const;

/** Footer: a frosted glass bar with centered social links. */
export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-border/30 bg-background-soft/20 backdrop-blur-xl backdrop-saturate-150"
    >
      <div className="mx-auto max-w-5xl px-6 py-10">
        <ul className="flex items-center justify-center gap-5">
          {SOCIAL_LINKS.map((link) => {
            // Menggunakan type assertion 'as keyof typeof ICONS' untuk menghilangkan garis merah
            const Icon = ICONS[link.icon as keyof typeof ICONS];

            if (!Icon) return null;

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
