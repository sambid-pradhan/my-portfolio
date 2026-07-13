"use client";

import { person } from "@/resources";
import { FaLinkedin } from "react-icons/fa6";
import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";
import {
  capabilityPillars,
  certifications,
  clientProjects,
  proofPoints,
  resumeHighlights,
  resumeUrl,
  timeline,
  toolGroups,
} from "./siteContent";
import { useScrollReveal } from "./useScrollReveal";

export function AboutContent() {
  const proofRef = useScrollReveal<HTMLElement>();
  const workRef = useScrollReveal<HTMLElement>();
  const outcomesRef = useScrollReveal<HTMLElement>();
  const timelineRef = useScrollReveal<HTMLElement>();
  const stackRef = useScrollReveal<HTMLElement>();

  return (
    <>
      <section className="about-hero about-hero--resume about-hero--intro">
        <div className="about-hero-grid about-hero-grid--profile">
          <div className="about-hero-copy">
            <div className="eyebrow light">Profile</div>
            <h1 className="about-hero-title">
              GenAI architect for teams moving from AI demos to durable systems.
            </h1>
            <p className="about-hero-text">
              I design agentic AI, RAG, automation, and LLMOps systems for enterprise
              environments where reliability, observability, compliance, and business impact
              matter as much as the model.
            </p>
            <div className="about-hero-actions">
              <a href={resumeUrl} className="btn-primary" download>
                Download Resume
              </a>
              <a href="mailto:sambid9988@gmail.com" className="btn-outline">
                Start a Conversation
              </a>
            </div>
          </div>
          <aside className="resume-card resume-card--executive" aria-label="Resume snapshot">
            <div className="resume-card-head">
              <img className="resume-avatar" src={person.avatar} alt={person.name} />
              <div>
                <span className="resume-kicker">Sambid Pradhan</span>
                <h2>GenAI Architect</h2>
                <p>AI/ML Solution Designer - LLMOps - Agentic AI</p>
              </div>
            </div>
            <div className="resume-card-focus">
              <span>Currently</span>
              <strong>Architecting healthcare and enterprise automation systems at Nitor Infotech.</strong>
            </div>
            <div className="resume-card-links">
              <a href="mailto:sambid9988@gmail.com">
                <HiEnvelope aria-hidden="true" />
                <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/sambid-pradhan/" target="_blank" rel="noreferrer">
                <FaLinkedin aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="about-proof reveal-section" aria-label="Career proof points" ref={proofRef}>
        <div className="about-proof-grid about-proof-grid--strip reveal-stagger">
          {proofPoints.map((point, index) => (
            <div className="about-proof-card" key={point.label} style={{ ["--i" as string]: index }}>
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-resume-section about-resume-section--plain reveal-section" ref={workRef}>
        <div className="about-resume-grid about-resume-grid--plain">
          <div>
            <div className="eyebrow">How I Work</div>
            <h2 className="section-title dark">Architecture first, production always.</h2>
            <p className="resume-summary">
              I lead enterprise AI architecture across healthcare, retail, and financial-services
              contexts. My work spans workflow agents, grounded clinical assistants,
              forecasting systems, revenue leakage automation, and the operating layer that makes
              AI systems measurable after launch.
            </p>
          </div>
          <div className="capability-list reveal-stagger">
            {capabilityPillars.map((pillar, index) => (
              <article key={pillar.title} className="capability-row" style={{ ["--i" as string]: index }}>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="enterprise-section enterprise-section--outcomes reveal-section" ref={outcomesRef}>
        <div className="eyebrow">Selected Enterprise Outcomes</div>
        <h2 className="section-title dark">Four environments, one pattern: ship the system.</h2>
        <div className="enterprise-grid enterprise-grid--outcomes reveal-stagger">
          {clientProjects.map((project, index) => (
            <article
              key={project.title}
              className="enterprise-card enterprise-card--outcome"
              style={{ ["--i" as string]: index }}
            >
              <div>
                <div className="enterprise-client">{project.client}</div>
                <h3 className="enterprise-title">{project.title}</h3>
              </div>
              <p>{project.impact}</p>
              <div className="enterprise-tech enterprise-tech--tight">
                {project.tech.slice(0, 4).map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-body about-body--resume reveal-section" ref={timelineRef}>
        <div className="about-two-col about-two-col--profile">
          <div className="about-block">
            <div className="eyebrow">Experience</div>
            <h2 className="section-title dark">Career timeline.</h2>
            <div className="timeline">
              {timeline.map((item, i) => (
                <div key={`${item.role}-${item.period}`} className="tl-item">
                  <div className="tl-dot-col">
                    <div className="tl-dot" />
                    {i < timeline.length - 1 && <div className="tl-line" />}
                  </div>
                  <div>
                    <div className="tl-period">{item.period}</div>
                    <div className="tl-role">{item.role}</div>
                    <div className="tl-company">{item.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-block profile-stack">
            <div>
              <div className="eyebrow">Resume Highlights</div>
              <ul className="resume-highlight-list resume-highlight-list--compact">
                {resumeHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="eyebrow">Contact</div>
              <div className="contact-links contact-links--profile">
                <a href="mailto:sambid9988@gmail.com">
                  <HiEnvelope aria-hidden="true" />
                  <span>sambid9988@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/sambid-pradhan/" target="_blank" rel="noreferrer">
                  <FaLinkedin aria-hidden="true" />
                  <span>linkedin.com/in/sambid-pradhan</span>
                </a>
                <span className="contact-info">
                  <HiPhone aria-hidden="true" />
                  <span>+91 888 401 3325</span>
                </span>
                <span className="contact-info">
                  <HiMapPin aria-hidden="true" />
                  <span>Bhubaneswar / Pune, India</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tools-section tools-section--compact reveal-section" ref={stackRef}>
        <div className="eyebrow">Stack and Learning</div>
        <h2 className="section-title dark">Tools, platforms, and certifications.</h2>
        <div className="profile-stack-grid">
          <div className="tools-grid tools-grid--compact">
            {toolGroups.map((group) => (
              <div key={group.label} className="tool-card tool-card--compact">
                <div className="tool-label">{group.label}</div>
                <div className="tool-pills">
                  {group.pills.slice(0, 6).map((pill) => (
                    <span key={pill} className="tool-pill">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="cert-list cert-list--compact">
            {certifications.map((cert) => (
              <div key={cert.name} className="cert-item">
                <div className="cert-name">{cert.name}</div>
                <div className="cert-org">{cert.org}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
