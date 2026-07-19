import { experience, spotlightRole } from '../data/portfolio';
import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* Timeline */}
        <div>
          <SectionHeader
            eyebrow="Career"
            title="Professional Timeline"
            subtitle="From IT support to cloud architecture and AI engineering — a consistent path of growth."
          />

          <ol className="relative border-l border-white/10 ml-4 space-y-0" aria-label="Career timeline">
            {experience.map((job, i) => (
              <li key={i} className="ml-8 pb-10 last:pb-0">
                {/* Dot */}
                <span className="absolute -left-[9px] w-4 h-4 rounded-full border-2 border-[#FF9900] bg-[#0a0f1e]" />

                <GlassCard className="p-5 space-y-2" hover={false}>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-white font-semibold text-base">{job.role}</h3>
                      <p className="text-[#FF9900] text-sm font-medium">{job.company}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-xs text-slate-400 bg-white/5 border border-white/10 px-2 py-1 rounded-md block">
                        {job.period}
                      </span>
                      {job.location && (
                        <span className="text-xs text-slate-500 mt-1 block">{job.location}</span>
                      )}
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{job.description}</p>
                </GlassCard>
              </li>
            ))}
          </ol>
        </div>

        {/* Spotlight role */}
        <div>
          <SectionHeader
            eyebrow="Spotlight Role"
            title="Technical Support Engineer · Tech With Engineers"
          />

          <div className="grid sm:grid-cols-3 gap-5">
            {spotlightRole.highlights.map((h) => (
              <GlassCard key={h.title} className="p-6 space-y-3">
                <div className="text-3xl">{h.icon}</div>
                <h3 className="text-white font-semibold">{h.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{h.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
