import { communityStats } from '../data/portfolio';
import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';

export default function Community() {
  return (
    <section id="community" className="py-24 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Impact"
          title="Community & Thought Leadership"
          subtitle="Contributing to the AWS and global cloud community through mentorship, content creation, and published writing."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {communityStats.map((stat) => (
            <GlassCard key={stat.label} className="p-6 text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </GlassCard>
          ))}
        </div>

        {/* Community detail cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard className="p-6" hover={false}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-lg bg-[#FF9900]/10 border border-[#FF9900]/20 flex items-center justify-center text-xl">🏅</span>
              <h3 className="text-white font-semibold text-lg">AWS Community Builder</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Selected for the AWS Community Builder program on the <strong className="text-slate-300">AI Engineering track</strong> — recognizing active contribution to the global cloud and AI community through writing, mentorship, and open knowledge sharing.
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-[#FF9900] mt-0.5">→</span>
                60+ published articles on Medium and Dev.to
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF9900] mt-0.5">→</span>
                Covers cloud architecture, DevSecOps, and AI topics
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF9900] mt-0.5">→</span>
                Freelance AI engineering via Upwork
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-6" hover={false}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-xl">🌍</span>
              <h3 className="text-white font-semibold text-lg">CloudHer Mentor · WIICA</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Mentor at <strong className="text-slate-300">CloudHer</strong> through the Women in Cloud (WIICA) program — supporting aspiring cloud engineers across <strong className="text-slate-300">25+ countries</strong> with career guidance, technical coaching, and cloud skill development.
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">→</span>
                Mentoring women entering cloud and DevOps careers
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">→</span>
                Global reach across 25+ countries
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">→</span>
                Focus on AWS, IaC, and cloud-native skills
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-6" hover={false}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl">🚀</span>
              <h3 className="text-white font-semibold text-lg">Upnotch Mentor · Worldwide</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Active mentor on <strong className="text-slate-300">Upnotch</strong>, a global mentorship platform — helping engineers worldwide accelerate their careers in cloud, DevOps, and AI engineering.
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">→</span>
                1-on-1 career and technical mentorship sessions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">→</span>
                Resume reviews, interview prep, and roadmaps
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">→</span>
                Serving mentees globally across time zones
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-6" hover={false}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-xl">🎬</span>
              <h3 className="text-white font-semibold text-lg">Content & Training</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Mentored <strong className="text-slate-300">15+ engineers</strong> on CI/CD, IaC, and DevSecOps at Tech With Engineers, improving deployment efficiency by 30%.
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">→</span>
                Tutorial video series on Cloud and DevOps topics
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">→</span>
                Hackathons on Terraform and observability
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">→</span>
                Training on GitHub Actions and secure pipelines
              </li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
