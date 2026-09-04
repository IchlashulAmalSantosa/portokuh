import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'filled' | 'outline';

interface BaseProps {
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  filled:
    'border-accent/40 bg-accent/70 text-white hover:bg-accent/85 hover:shadow-[0_8px_24px_-6px_rgba(59,130,246,0.55)]',
  outline: 'border-border/50 text-accent hover:border-accent/50 hover:bg-accent/10',
};

const baseClasses =
  'inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium ' +
  'backdrop-blur-xl backdrop-saturate-150 shadow-[var(--shadow-glass)] transition-all duration-200';

type ButtonAsButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

/** Shared CTA button, styled as a frosted glass capsule. Renders an <a> when `href` is given, otherwise a <button>. */
export function Button({ variant = 'filled', className, ...props }: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />
  );
}
