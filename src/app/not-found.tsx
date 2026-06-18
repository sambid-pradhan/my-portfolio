import Link from "next/link";

export default function NotFound() {
  return (
    <section className="about-body" style={{ padding: "6rem 8%", textAlign: "center" }}>
      <div className="eyebrow">404</div>
      <h1 className="section-title dark">Page not found</h1>
      <p style={{ color: "var(--muted)", maxWidth: "28rem", margin: "1rem auto 2rem" }}>
        The page you are looking for does not exist or may have moved.
      </p>
      <Link href="/" className="btn-primary">
        Back to Home →
      </Link>
    </section>
  );
}
