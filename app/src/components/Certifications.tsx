import { certifications } from '../data/portfolio';
import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';

const levelStyles: Record<string, string> = {
  Professional:  'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Associate:     'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Specialty:     'bg-green-500/10 text-green-400 border-green-500/20',
  Foundational:  'bg-slate-500/10 text-slate-400 border-slate-500/20',
};

function CertBadge({ cert }: { cert: (typeof certifications)[number] }) {
  return (
    <GlassCard className="p-5 flex items-start gap-4">
      <div
        className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xs text-white border-2"
        style={{ borderColor: cert.badgeColor, backgroundColor: `${cert.badgeColor}20` }}
      >
        {cert.code.split('-')[0]}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-white font-medium text-sm leading-snug mb-1">{cert.name}</h3>
        <p className="text-slate-500 text-xs mb-2">{cert.issuer} · {cert.year}</p>
        <span
          className={`inline-block px-2 py-0.5 text-xs font-medium rounded border ${levelStyles[cert.level] ?? 'bg-white/5 text-slate-400 border-white/10'}`}
        >
          {cert.level}
        </span>
      </div>
    </GlassCard>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Industry-validated expertise across cloud, DevOps, security, infrastructure, and AI."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <CertBadge key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
