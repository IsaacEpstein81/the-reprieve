type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeaderProps) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-forest-600">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-ink/72">{description}</p>
    </div>
  );
}
