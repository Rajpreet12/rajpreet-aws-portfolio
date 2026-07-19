import { blogs } from '../data/portfolio';
import GlassCard from './GlassCard';
import Tag from './Tag';
import SectionHeader from './SectionHeader';

function BlogCard({ post }: { post: (typeof blogs)[number] }) {
  const date = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <GlassCard className="p-6 flex flex-col gap-4 h-full group">
      <div className="flex items-center justify-between text-xs text-slate-500">
        <time dateTime={post.date}>{date}</time>
        <span>{post.readTime}</span>
      </div>

      <div className="flex-1">
        <h3 className="text-white font-semibold text-base leading-snug mb-2 group-hover:text-[#FF9900] transition-colors">
          <a href={post.href} target="_blank" rel="noopener noreferrer">
            {post.title}
          </a>
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">{post.summary}</p>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
        <a
          href={post.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read ${post.title}`}
          className="flex-shrink-0 text-slate-500 hover:text-[#FF9900] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </GlassCard>
  );
}

export default function Blogs() {
  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Writing"
          title="Latest Blog Posts"
          subtitle="60+ articles published on Medium and Dev.to — covering AWS architecture, serverless, DevSecOps, AI engineering, and cloud best practices."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {blogs.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://medium.com/@rajpreet-gill"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-white/20 text-slate-300 text-sm hover:bg-white/5 hover:border-white/40 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
            60+ posts on Medium
          </a>
          <a
            href="https://dev.to/rajpreet-gill"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-white/20 text-slate-300 text-sm hover:bg-white/5 hover:border-white/40 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.29zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.02-.02h.7l.74-.02-.06.26c-.06.25-.52 2.09-.82 3.36-.2.79-.41 1.58-.47 1.8l-.17.62z" />
            </svg>
            Read posts on Dev.to
          </a>
        </div>
      </div>
    </section>
  );
}
