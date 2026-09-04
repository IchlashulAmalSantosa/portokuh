import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  terminal?: boolean;
}

/** Base card primitive: a frosted glass panel with a soft inner highlight. */
export function Card({ className, terminal, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border/40 bg-background-soft/40 p-6',
        'backdrop-blur-xl backdrop-saturate-150 shadow-[var(--shadow-glass)]',
        terminal && 'terminal-surface font-mono',
        className
      )}
      {...props}
    />
  );
}
