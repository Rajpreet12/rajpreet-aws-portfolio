import { summaryPillars, skills } from '../data/portfolio';
import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* Summary pillars */}
        <div>
          <SectionHeader
            eyebrow="Summary"
            title="6+ Years Building Secure, Scalable Cloud Systems"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {summaryPillars.map((p) => (
              <GlassCard key={p.title} className="p-5 space-y-3">
                <div className="text-3xl">{p.icon}</div>
                <h3 className="text-white font-semibold text-sm">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <SectionHeader
            eyebrow="Expertise"
            title="Core Technical Skills"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((group) => (
              <GlassCard key={group.category} className="p-5 space-y-3" hover={false}>
                <h3 className="text-[#FF9900] font-semibold text-xs uppercase tracking-wider">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-[#FF9900]/60 mt-1 flex-shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
