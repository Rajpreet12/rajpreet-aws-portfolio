import { profile, socialLinks } from '../data/portfolio';
import SocialIcon from './SocialIcon';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF9900]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center gap-6 animate-fade-in">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF9900]/40 bg-[#FF9900]/10 text-[#FF9900] text-xs font-semibold tracking-wide">
          <span className="w-2 h-2 rounded-full bg-[#FF9900] animate-pulse" />
          AWS Community Builder · AI Engineering Track
        </span>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#ffb84d]">
            {profile.name}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-2xl">
          {profile.subtitle}
        </p>

        {/* Bio */}
        <p className="max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed">
          {profile.bio}
        </p>

        {/* Location + email */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-1.5 hover:text-[#FF9900] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {profile.email}
          </a>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <a
            href="#projects"
            className="px-6 py-3 rounded-md bg-[#FF9900] text-[#0a0f1e] font-semibold hover:bg-[#e8890a] transition-colors shadow-lg shadow-[#FF9900]/20"
          >
            View My Work
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/5 hover:border-white/40 transition-colors"
          >
            LinkedIn Profile
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3 mt-2">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 flex items-center justify-center rounded-md border border-white/10 text-slate-400 hover:text-[#FF9900] hover:border-[#FF9900]/40 hover:bg-[#FF9900]/5 transition-all"
            >
              <SocialIcon icon={s.icon} />
            </a>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 text-xs animate-bounce">
          <span>Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
