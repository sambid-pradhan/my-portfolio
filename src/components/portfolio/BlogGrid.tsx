"use client";

import { blogPosts } from "./siteContent";
import { useToast } from "./Toast";

export function BlogGrid() {
  const { showToast } = useToast();

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
        {blogPosts.map((post) => (
          <button
            key={post.title}
            type="button"
            className="blog-card"
            onClick={() =>
              showToast("Full article coming soon — reach out if you want the draft.")
            }
          >
            <div className={`blog-thumb ${post.thumb}`}>{post.icon}</div>
            <div className="blog-body">
              <div className="blog-cat">{post.cat}</div>
              <div className="blog-title">{post.title}</div>
              <div className="blog-excerpt">{post.excerpt}</div>
              <div className="blog-meta">
                <span className="blog-date">Coming Soon</span>
                <span className="blog-read">{post.read}</span>
              </div>
            </div>
          </button>
        ))}
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
