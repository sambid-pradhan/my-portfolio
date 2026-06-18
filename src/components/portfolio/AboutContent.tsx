import { certifications, timeline, toolGroups, values } from "./siteContent";
import { person } from "@/resources";

export function AboutContent() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero-grid">
          <div className="about-hero-copy">
            <div className="eyebrow light">About Me</div>
            <h1 className="about-hero-title">
              Architect by trade,
              <br />
              <em>builder</em> at heart.
            </h1>
            <p className="about-hero-text">
              I&apos;ve spent 8+ years turning complex AI research into systems that actually work in
              production — for some of the largest enterprises in healthcare and retail. What drives
              me isn&apos;t just the technology, it&apos;s building something from the ground up, talking to
              customers, and owning the product vision end to end.
            </p>
            <p className="about-hero-text">
              Based in Bhubaneswar / Pune, India. Open to global collaborations and co-founder
              opportunities.
            </p>
          </div>
          <div className="about-hero-media">
            <img className="profile-img profile-img--about" src={person.avatar} alt={person.name} />
          </div>
        </div>
      </section>

      <section className="about-body">
        <div className="eyebrow">My Journey</div>
        <h2 className="section-title dark">The story so far.</h2>

        <div className="about-two-col">
          <div>
            <div className="about-block" style={{ marginBottom: "3rem" }}>
              <h3>Career Timeline</h3>
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

            <div className="about-block">
              <h3>Certifications</h3>
              <div className="cert-list">
                {certifications.map((c) => (
                  <div key={c.name} className="cert-item">
                    <div className="cert-name">{c.name}</div>
                    <div className="cert-org">{c.org}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="about-block" style={{ marginBottom: "3rem" }}>
              <h3>What I Believe In</h3>
              <ul className="values-list">
                {values.map((v) => (
                  <li key={v.slice(0, 40)}>{v}</li>
                ))}
              </ul>
            </div>

            <div className="about-block">
              <h3>Get In Touch</h3>
              <p>
                I&apos;m always open to interesting conversations — architecture problems, new ideas,
                collaboration opportunities, or just a chat about AI.
              </p>
              <div className="contact-links">
                <a href="mailto:sambid9988@gmail.com">✉ sambid9988@gmail.com</a>
                <a href="https://www.linkedin.com/in/sambid-pradhan/" target="_blank" rel="noreferrer">
                  🔗 linkedin.com/in/sambid-pradhan
                </a>
                <span style={{ color: "var(--muted)", fontSize: "0.88rem" }}>
                  📞 +91 888 401 3325
                </span>
                <span style={{ color: "var(--muted)", fontSize: "0.88rem" }}>
                  📍 Bhubaneswar / Pune, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tools-section">
        <div className="eyebrow">Tools & Technologies</div>
        <h2 className="section-title dark">The stack I work with.</h2>
        <div className="tools-grid">
          {toolGroups.map((g) => (
            <div key={g.label} className="tool-card">
              <div className="tool-label">{g.label}</div>
              <div className="tool-pills">
                {g.pills.map((p) => (
                  <span key={p} className="tool-pill">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
