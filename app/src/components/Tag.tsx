interface Props {
  label: string;
  variant?: 'default' | 'orange' | 'blue';
}

export default function Tag({ label, variant = 'default' }: Props) {
  const styles = {
    default: 'bg-white/5 text-slate-300 border-white/10',
    orange: 'bg-[#FF9900]/10 text-[#FF9900] border-[#FF9900]/20',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  };

  return (
    <span
      className={`inline-block px-2 py-0.5 text-xs font-medium rounded border ${styles[variant]}`}
    >
      {label}
    </span>
  );
}
