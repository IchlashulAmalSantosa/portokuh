interface ProgressBarProps {
  label: string;
  level: number;
}

/** Horizontal skill-level bar rendered as a glass groove with a glowing fill. */
export function ProgressBar({ label, level }: ProgressBarProps) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-foreground">{label}</span>
        <span className="text-muted">{level}%</span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full border border-border/30 bg-background-soft/30 backdrop-blur-md"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className="h-full rounded-full bg-accent shadow-[0_0_12px_rgba(59,130,246,0.65)]"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
