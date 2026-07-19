import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = '', hover = true }: Props) {
  return (
    <div
      className={`
        bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl
        ${hover ? 'hover:bg-white/8 hover:border-[#FF9900]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#FF9900]/5' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
