"use client";

import { useState } from "react";
import { clientProjects, hobbyProjects } from "./siteContent";

export function WorkTabs() {
  const [tab, setTab] = useState<"client" | "hobby">("client");

  return (
    <>
      <section className="work-header">
        <div className="eyebrow">Portfolio</div>
        <h1 className="section-title dark">
          Projects that
          <br />
          moved the needle.
        </h1>
        <div className="work-tabs" role="tablist" aria-label="Project categories">
          <button
            type="button"
            className={`work-tab${tab === "client" ? " active" : ""}`}
            role="tab"
            aria-selected={tab === "client"}
            onClick={() => setTab("client")}
          >
            Client Projects
          </button>
          <button
            type="button"
            className={`work-tab${tab === "hobby" ? " active" : ""}`}
            role="tab"
            aria-selected={tab === "hobby"}
            onClick={() => setTab("hobby")}
          >
            Side Projects
          </button>
        </div>
      </section>

      <div className="work-panels">
        <div className={`work-section${tab === "client" ? " is-active" : ""}`} id="tab-client">
          <div className="projects-grid">
            {clientProjects.map((p) => (
              <div key={p.title} className="project-card">
                <div className={`project-accent pa-${p.accent}`}>
                  <div>
                    <div className="project-client">{p.client}</div>
                    <div className="project-title">{p.title}</div>
                  </div>
                  <div className="role-badge">{p.role}</div>
                </div>
                <div className="project-body">
                  <p className="project-desc">{p.description}</p>
                  <div className="tech-row">
                    {p.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="impact-bar">💡 {p.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`work-section${tab === "hobby" ? " is-active" : ""}`} id="tab-hobby">
          <p className="hobby-intro">
            Things I build outside of work — experiments, tools, and ideas I&apos;m genuinely curious
            about. Some are live, most are works in progress.
          </p>
          <div className="hobby-grid">
            {hobbyProjects.map((h) => (
              <div key={h.title} className="hobby-card">
                <div className={`hobby-thumb ${h.thumb}`}>{h.icon}</div>
                <div className="hobby-body">
                  <div className={`hobby-badge ${h.badge}`}>{h.badgeText}</div>
                  <div className="hobby-title">{h.title}</div>
                  <div className="hobby-desc">{h.description}</div>
                  <div className="hobby-stack">
                    {h.tags.map((t) => (
                      <span key={t} className="hobby-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
