'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { NAV_ITEMS } from '@/lib/constants';
import { profile } from '@/data/profile';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';

const SCROLL_THRESHOLD = 24;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-center',
        scrolled ? 'pt-3 px-3 sm:pt-4 sm:px-4' : 'pt-0 px-0'
      )}
    >
      <nav
        className={cn(
          'flex items-center justify-between border backdrop-blur-xl backdrop-saturate-150',
          'transition-[max-width,padding,background-color,border-color,box-shadow,gap] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]',
          scrolled
            ? 'w-auto max-w-[calc(100vw-1.5rem)] rounded-full border-white/20 dark:border-white/10 bg-background-soft/40 px-3.5 sm:px-6 py-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.12),inset_0_1px_1px_0_rgba(255,255,255,0.4)]'
            : 'w-full max-w-full rounded-none border-x-transparent border-t-transparent border-b-border/30 bg-background-soft/30 px-4 sm:px-8 py-3.5 shadow-none'
        )}
      >
        {/* Container Nama */}
        <div
          className={cn(
            'grid transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] items-center overflow-hidden shrink-0',
            scrolled
              ? 'grid-template-cols-[0fr] opacity-0 ml-0 mr-0 scale-95'
              : 'grid-template-cols-[1fr] opacity-100 mr-3 sm:mr-6 scale-100'
          )}
          style={{
            gridTemplateColumns: scrolled ? '0fr' : '1fr',
          }}
        >
          <div className="overflow-hidden whitespace-nowrap flex items-center">
            <Link
              href="/#home"
              className="font-mono text-xs sm:text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent leading-none inline-flex items-center"
            >
              <span className="inline sm:hidden">IAS</span>
              <span className="hidden sm:inline">{profile.name}</span>
            </Link>
          </div>
        </div>

        {/* Inner Menu & Dark Mode Button */}
        <div className="flex items-center gap-2 sm:gap-5 min-w-0 shrink">
          <ul className="flex items-center gap-2.5 sm:gap-5 text-[11px] sm:text-sm text-muted-foreground overflow-x-auto no-scrollbar py-0.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="shrink-0 flex items-center">
                <Link
                  href={item.href}
                  className="inline-flex items-center justify-center font-medium transition-colors hover:text-foreground whitespace-nowrap leading-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={cn(
              'h-3.5 w-[1px] bg-border/40 transition-opacity duration-500 shrink-0 self-center',
              scrolled ? 'hidden' : 'block'
            )}
          />

          <div className="flex items-center justify-center shrink-0">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
