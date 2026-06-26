import Link from "next/link";
import { formatDate } from "@/utils/formatDate";
import { getTagBadge } from "./blogBadge";

type BlogPost = {
  slug: string;
  content: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt: string;
    tag?: string;
    image?: string;
    thumbnail?: string;
  };
};

const THUMBS = ["bt1", "bt2", "bt3", "bt4", "bt5", "bt6"] as const;

function estimateReadMinutes(content: string) {
  const words = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      <section className="blog-header">
        <div className="blog-header-inner">
          <div className="eyebrow light">Thoughts & Writing</div>
          <h1 className="section-title light" style={{ marginBottom: "1rem" }}>
            Ideas from the
            <br />
            frontier of AI.
          </h1>
          <p className="blog-intro">
            Practical insights on building, deploying, and scaling AI systems in the real world —
            written for engineers and architects who want to go deeper.
          </p>
        </div>
      </section>

      <div className="blog-grid">
        {posts.map((post, index) => {
          const thumbSrc = post.metadata.thumbnail || post.metadata.image;
          const badge = getTagBadge(post.metadata.tag);
          return (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
            <div
              className={`blog-thumb ${thumbSrc ? "blog-thumb-image" : THUMBS[index % THUMBS.length]}`}
            >
              {thumbSrc ? (
                <img src={thumbSrc} alt="" />
              ) : (
                <span className={badge.className} aria-hidden="true">
                  {badge.label}
                </span>
              )}
            </div>
            <div className="blog-body">
              <div className="blog-cat">{post.metadata.tag}</div>
              <div className="blog-title">{post.metadata.title}</div>
              <div className="blog-excerpt">{post.metadata.summary}</div>
              <div className="blog-meta">
                <span className="blog-date">
                  {formatDate(post.metadata.publishedAt, false)} · {estimateReadMinutes(post.content)} min read
                </span>
              </div>
            </div>
          </Link>
          );
        })}
      </div>

      <div className="blog-cta">
        <div>
          <h3>Want to collaborate or chat AI?</h3>
          <p>Architecture problems, new ideas, co-founder conversations — always open.</p>
        </div>
        <a href="mailto:sambid9988@gmail.com" className="btn-primary">
          Get in Touch →
        </a>
      </div>
    </>
  );
}
