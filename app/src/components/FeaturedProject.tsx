import { projects } from '../data/portfolio';
import Tag from './Tag';

export default function FeaturedProject() {
  const featured = projects.find((p) => p.featured);
  if (!featured) return null;

  return (
    <section id="featured" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-center bg-gradient-to-br from-[#FF9900]/10 via-[#FF9900]/5 to-transparent border border-[#FF9900]/20 rounded-2xl p-8 lg:p-12 backdrop-blur-sm">

          {/* Text */}
          <div className="flex-1 space-y-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] text-xs font-semibold">
              ⭐ Featured Project
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              {featured.title}
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              {featured.description}
            </p>

            {/* Highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {featured.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-2 text-sm text-slate-300 bg-white/5 rounded-lg px-3 py-2 border border-white/10"
                >
                  <span className="text-[#FF9900]">✓</span>
                  {h}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {featured.tags.map((t) => (
                <Tag key={t} label={t} variant="orange" />
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-2">
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#FF9900] text-[#0a0f1e] font-semibold text-sm hover:bg-[#e8890a] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>

          {/* Visual — Multi-Agent architecture diagram */}
          <div className="flex-shrink-0 w-full lg:w-80 xl:w-96">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0d1424] p-5 space-y-3">
              <div className="flex items-center gap-1.5 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs text-slate-500 font-mono">orchestrator.py</span>
              </div>
              {[
                { label: 'User Task Input', color: 'bg-blue-500/20 border-blue-500/30 text-blue-300' },
                { label: 'Orchestrator Agent', color: 'bg-[#FF9900]/20 border-[#FF9900]/30 text-[#FF9900]' },
                { label: 'Planner · Executor · Critic', color: 'bg-purple-500/20 border-purple-500/30 text-purple-300' },
                { label: 'AWS Lambda + S3', color: 'bg-green-500/20 border-green-500/30 text-green-300' },
                { label: 'Structured Output', color: 'bg-blue-500/20 border-blue-500/30 text-blue-300' },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center gap-3">
                  <div className={`flex-1 px-3 py-2 rounded-lg border text-xs font-mono ${step.color}`}>
                    {step.label}
                  </div>
                  {i < 4 && (
                    <svg className="w-3 h-3 text-slate-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
