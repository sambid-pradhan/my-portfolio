"use client";

import Link from "next/link";
import { person } from "@/resources";
import { heroChips } from "./siteContent";
import { useHeroIntro } from "./usePageTransition";

export function HomeContent() {
  const intro = useHeroIntro();

  return (
    <section className={`hero${intro ? " hero--intro" : ""}`}>
      <div className="hero-inner">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-role enter-item" style={{ ["--i" as string]: 1 }}>
              GenAI Architect · Nitor Infotech
            </div>
            <h1 className="hero-name enter-item" style={{ ["--i" as string]: 2 }}>
              Sambid
              <br />
              <em>Pradhan</em>
            </h1>
            <p className="hero-statement enter-item" style={{ ["--i" as string]: 3 }}>
              I build <strong>intelligent systems</strong> that think, automate, and scale — from
              agentic RPA platforms replacing enterprise tooling, to LLM-powered clinical chatbots
              deployed in production healthcare environments.
            </p>
            <div className="hero-btns enter-item" style={{ ["--i" as string]: 4 }}>
              <Link href="/work" className="btn-primary">
                See My Work →
              </Link>
              <Link href="/about" className="btn-outline">
                My Story
              </Link>
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
            <img
              className="profile-img profile-img--home"
              src={person.avatar}
              alt={person.name}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
