import { useState } from 'react';
import { profile, socialLinks } from '../data/portfolio';
import SectionHeader from './SectionHeader';
import SocialIcon from './SocialIcon';

type FormState = 'idle' | 'sending' | 'sent';

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState('sending');
    await new Promise((r) => setTimeout(r, 1200));
    setFormState('sent');
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Let's Work Together"
          subtitle="Open to cloud consulting, DevSecOps engagements, AI projects, and speaking opportunities."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">I can help with:</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                {[
                  'AWS architecture & Well-Architected reviews',
                  'DevSecOps pipeline design and implementation',
                  'AI / LLM solution development (RAG, chatbots)',
                  'Kubernetes and container platform engineering',
                  'Cloud security, IAM governance, and SCPs',
                  'Technical mentorship and team training',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#FF9900] mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Find me online:</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 text-slate-400 hover:text-[#FF9900] hover:border-[#FF9900]/30 hover:bg-[#FF9900]/5 transition-all text-sm"
                  >
                    <SocialIcon icon={s.icon} className="w-4 h-4" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#FF9900]/5 border border-[#FF9900]/20">
              <p className="text-sm text-slate-400">
                Prefer email?{' '}
                <a href={`mailto:${profile.email}`} className="text-[#FF9900] hover:underline">
                  {profile.email}
                </a>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8">
            {formState === 'sent' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-3xl">✓</div>
                <h3 className="text-white font-semibold text-xl">Message Sent!</h3>
                <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button onClick={() => setFormState('idle')} className="mt-2 text-sm text-[#FF9900] hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">Name</label>
                  <input
                    id="name" name="name" type="text" required
                    value={form.name} onChange={handleChange} placeholder="Jane Smith"
                    className="w-full px-4 py-2.5 rounded-md bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900]/50 focus:border-[#FF9900]/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
                  <input
                    id="email" name="email" type="email" required
                    value={form.email} onChange={handleChange} placeholder="jane@company.com"
                    className="w-full px-4 py-2.5 rounded-md bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900]/50 focus:border-[#FF9900]/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">Message</label>
                  <textarea
                    id="message" name="message" rows={5} required
                    value={form.message} onChange={handleChange}
                    placeholder="Tell me about your project or what you need help with..."
                    className="w-full px-4 py-2.5 rounded-md bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900]/50 focus:border-[#FF9900]/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit" disabled={formState === 'sending'}
                  className="w-full py-3 rounded-md bg-[#FF9900] text-[#0a0f1e] font-semibold text-sm hover:bg-[#e8890a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-[#FF9900]/20"
                >
                  {formState === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
