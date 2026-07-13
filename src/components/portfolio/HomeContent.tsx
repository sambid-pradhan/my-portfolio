"use client";

import Image from "next/image";
import Link from "next/link";
import { person } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { getTagBadge } from "./blogBadge";
import {
  capabilityPillars,
  clientProjects,
  heroChips,
  proofPoints,
  resumeUrl,
} from "./siteContent";
import { useHeroIntro } from "./usePageTransition";
import { useScrollReveal } from "./useScrollReveal";

export type HomeBlogPost = {
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

function estimateReadMinutes(content: string) {
  const words = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function HomeContent({ latestPosts }: { latestPosts: HomeBlogPost[] }) {
  const intro = useHeroIntro();
  const featuredRef = useScrollReveal<HTMLElement>();
  const writingRef = useScrollReveal<HTMLElement>();
  const contactRef = useScrollReveal<HTMLElement>();
  const featured = clientProjects.slice(0, 2);

  return (
    <>
      <section className={`hero${intro ? " hero--intro" : ""}`}>
        <div className="hero-inner">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-role enter-item" style={{ ["--i" as string]: 1 }}>
                GenAI Architect - AI Solution Designer - LLMOps
              </div>
              <h1 className="hero-name enter-item" style={{ ["--i" as string]: 2 }}>
                I turn enterprise AI ideas into <em>production systems.</em>
              </h1>
              <p className="hero-statement enter-item" style={{ ["--i" as string]: 3 }}>
                I&apos;m Sambid Pradhan, a GenAI Architect with 8+ years across AI, ML,
                and data systems. I design agentic workflows, grounded assistants, RAG
                pipelines, and LLMOps patterns for healthcare, retail, and automation teams.
              </p>
              <div className="hero-btns enter-item" style={{ ["--i" as string]: 4 }}>
                <Link href="/about" className="btn-primary">
                  View Profile
                </Link>
                <a href={resumeUrl} className="btn-outline" download>
                  Download Resume
                </a>
              </div>
              <div className="hero-chips enter-item" style={{ ["--i" as string]: 5 }}>
                {heroChips.map((chip) => (
                  <span key={chip} className="hero-chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="hero-media enter-item" style={{ ["--i" as string]: 2 }}>
              <div className="hero-profile-card">
                <Image
                  className="profile-img profile-img--home"
                  src={person.avatar}
                  alt={person.name}
                  width={360}
                  height={480}
                  priority
                  sizes="(max-width: 900px) 320px, 360px"
                />
                <div className="hero-profile-note">
                  <span>Currently</span>
                  <strong>Architecting agentic AI systems at Nitor Infotech</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-metrics" aria-label="Proof points">
        <div className="home-metrics-inner">
          {proofPoints.map((item) => (
            <div key={item.label} className="home-metric">
              <span className="home-metric-value">{item.value}</span>
              <span className="home-metric-label">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section home-capabilities">
        <div className="home-section-inner">
          <div className="home-section-head">
            <div>
              <div className="eyebrow">What I Bring</div>
              <h2 className="section-title dark">Architecture, execution, and operating discipline.</h2>
            </div>
            <Link href="/work" className="home-section-link">
              Explore projects {"->"}
            </Link>
          </div>
          <div className="capability-grid">
            {capabilityPillars.map((pillar) => (
              <article className="capability-card" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-featured reveal-section" ref={featuredRef}>
        <div className="home-section-inner">
          <div className="home-section-head">
            <div>
              <div className="eyebrow">Enterprise Impact</div>
              <h2 className="section-title dark">Production systems, not demos.</h2>
            </div>
            <Link href="/about" className="home-section-link">
              View credibility proof {"->"}
            </Link>
          </div>
          <div className="home-featured-grid">
            {featured.map((project) => {
              const card = (
                <>
                  <div className={`home-featured-accent pa-${project.accent}`}>
                    <span className="home-featured-client">{project.client}</span>
                    <span className="role-badge">{project.role}</span>
                  </div>
                  <div className="home-featured-body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p className="home-featured-impact">
                      <span className="impact-label">Impact</span>
                      {project.impact}
                    </p>
                  </div>
                </>
              );

              return project.href ? (
                <Link key={project.title} href={project.href} className="home-featured-card is-link">
                  {card}
                </Link>
              ) : (
                <article key={project.title} className="home-featured-card">
                  {card}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section className="home-section home-writing reveal-section" ref={writingRef}>
          <div className="home-section-inner">
            <div className="home-section-head">
              <div>
                <div className="eyebrow">Latest Writing</div>
                <h2 className="section-title dark">Ideas from the frontier of AI.</h2>
              </div>
              <Link href="/blog" className="home-section-link">
                All articles {"->"}
              </Link>
            </div>
            <div className="home-writing-list">
              {latestPosts.map((post) => {
                const badge = getTagBadge(post.metadata.tag);
                const thumbSrc = post.metadata.thumbnail || post.metadata.image;
                return (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="home-writing-card">
                    {thumbSrc ? (
                      <img className="home-writing-thumb" src={thumbSrc} alt="" loading="lazy" />
                    ) : (
                      <span className={badge.className} aria-hidden="true">
                        {badge.label}
                      </span>
                    )}
                    <div className="home-writing-copy">
                      <span className="home-writing-tag">{post.metadata.tag}</span>
                      <h3>{post.metadata.title}</h3>
                      <p>{post.metadata.summary}</p>
                      <span className="home-writing-meta">
                        {formatDate(post.metadata.publishedAt, false)} -{" "}
                        {estimateReadMinutes(post.content)} min read
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="home-contact reveal-section" ref={contactRef}>
        <div className="home-contact-inner">
          <div>
            <h2>Building something with AI?</h2>
            <p>Architecture reviews, co-founder conversations, or a hard problem worth solving - always open.</p>
          </div>
          <div className="home-contact-actions">
            <a href="mailto:sambid9988@gmail.com" className="btn-primary">
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/sambid-pradhan/"
              className="btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
