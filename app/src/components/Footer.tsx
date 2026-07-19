import { profile, socialLinks, navLinks } from '../data/portfolio';
import SocialIcon from './SocialIcon';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12 mt-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-md bg-[#FF9900] flex items-center justify-center font-bold text-[#0a0f1e] text-sm">
                RG
              </span>
              <span className="font-semibold text-white">{profile.name}</span>
            </div>
            <p className="text-slate-500 text-xs">AWS Community Builder · {profile.location}</p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-500 hover:text-[#FF9900] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 flex items-center justify-center rounded-md text-slate-500 hover:text-[#FF9900] hover:bg-white/5 transition-all"
              >
                <SocialIcon icon={s.icon} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-600">
          © {year} {profile.name} · AWS Community Builder (AI Engineering) · Built with React, TypeScript &amp; Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
