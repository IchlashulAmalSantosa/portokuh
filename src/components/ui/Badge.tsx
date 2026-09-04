import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

/** Small glass pill used for tags and tool chips. */
export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border/40 bg-background-soft/40 px-3 py-1 text-sm text-muted',
        'backdrop-blur-md backdrop-saturate-150',
        className
      )}
      {...props}
    />
  );
}
