"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { hobbyProjects } from "./siteContent";

function CardLink({
  href,
  className,
  children,
}: {
  href?: string;
  className: string;
  children: ReactNode;
}) {
  if (!href) return <div className={className}>{children}</div>;
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={`${className} is-link`}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${className} is-link`}>
      {children}
    </Link>
  );
}

export function WorkTabs() {
  const [featuredProject, ...otherProjects] = hobbyProjects;

  return (
    <>
      <section className="work-header">
        <div className="eyebrow">Projects Lab</div>
        <h1 className="section-title dark">
          Projects I&apos;m
          <br />
          building.
        </h1>
        <p className="work-intro">
          Public tools, product experiments, and AI ideas I&apos;m shaping outside enterprise
          delivery. Client impact lives on the About page; this space is for things you can follow,
          try, or build with me.
        </p>
      </section>

      <div className="work-panels">
        <div className="work-section is-active">
          {featuredProject && (
            <CardLink href={featuredProject.href} className="project-lab-card project-lab-card--featured">
              <div className={`project-lab-visual ${featuredProject.thumb}`}>
                <span className="hobby-thumb-label">{featuredProject.title.slice(0, 1)}</span>
              </div>
              <div className="project-lab-body">
                <div className={`project-lab-status ${featuredProject.badge}`}>
                  {featuredProject.badgeText}
                </div>
                <h2 className="project-lab-title">{featuredProject.title}</h2>
                <p className="project-lab-desc">{featuredProject.description}</p>
                <div className="project-lab-tags">
                  {featuredProject.tags.map((tag) => (
                    <span key={tag} className="project-lab-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </CardLink>
          )}

          <div className="project-lab-grid">
            {otherProjects.map((project) => (
              <CardLink key={project.title} href={project.href} className="project-lab-card">
                <div className={`project-lab-status ${project.badge}`}>{project.badgeText}</div>
                <h2 className="project-lab-title">{project.title}</h2>
                <p className="project-lab-desc">{project.description}</p>
                <div className="project-lab-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-lab-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardLink>
            ))}
          </div>

          <div className="project-lab-cta">
            <div>
              <h2>Have a problem worth solving with AI?</h2>
              <p>Bring the domain pain. I&apos;ll bring the architecture, prototype loop, and shipping discipline.</p>
            </div>
            <a href="mailto:sambid9988@gmail.com" className="btn-primary">
              Start a Conversation {"->"}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
