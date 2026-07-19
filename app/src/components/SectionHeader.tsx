interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="text-center mb-12">
      {eyebrow && (
        <span className="inline-block text-[#FF9900] text-sm font-semibold uppercase tracking-widest mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && (
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
