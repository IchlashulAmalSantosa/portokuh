interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

/** Consistent heading used at the top of each home-page section. */
export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="mb-2 text-sm font-medium text-accent">{eyebrow}</p>
      )}
      <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
      {description && (
        <p className="mt-3 max-w-2xl text-muted">{description}</p>
      )}
    </div>
  );
}
