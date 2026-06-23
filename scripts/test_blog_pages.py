"""Inspect blog pages for broken images, console errors, and load failures."""
from playwright.sync_api import sync_playwright

BASE = "http://localhost:3000"
PAGES = [
    "/blog",
    "/blog/obra-superpowers",
    "/blog/cursor-vs-codex-vs-claude",
    "/blog/copilot-ux-patterns",
    "/blog/cursor-vs-codex",  # redirect target
]

issues = []

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()

    console_errors = []
    page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
    page.on("pageerror", lambda err: console_errors.append(f"PAGEERROR: {err}"))

    for path in PAGES:
        console_errors.clear()
        url = f"{BASE}{path}"
        resp = page.goto(url, wait_until="domcontentloaded", timeout=30000)
        page.wait_for_timeout(2000)
        status = resp.status if resp else "no response"
        final_url = page.url

        broken_imgs = page.evaluate("""() => {
            return [...document.querySelectorAll('img')].filter(img => {
                return !img.complete || img.naturalWidth === 0;
            }).map(img => ({ src: img.src, alt: img.alt || '' }));
        }""")

        missing_hero = page.locator("article img, .blog-post-article img").count()
        thumb_count = page.locator(".blog-thumb-image img").count()

        issues.append({
            "path": path,
            "status": status,
            "final_url": final_url,
            "title": page.title(),
            "broken_images": broken_imgs,
            "article_images": missing_hero,
            "thumb_images": thumb_count,
            "console_errors": list(console_errors),
        })

        screenshot = path.replace("/", "_").strip("_") or "blog"
        page.screenshot(path=f"scripts/screenshots/{screenshot}.png", full_page=True)

    browser.close()

print("=== BLOG PAGE AUDIT ===\n")
for r in issues:
    print(f"## {r['path']}")
    print(f"  Status: {r['status']}")
    if r["final_url"] != f"{BASE}{r['path']}":
        print(f"  Redirected to: {r['final_url']}")
    print(f"  Title: {r['title']}")
    print(f"  Article images: {r['article_images']}, Card thumbs: {r['thumb_images']}")
    if r["broken_images"]:
        print("  BROKEN IMAGES:")
        for img in r["broken_images"]:
            print(f"    - {img['src']} (alt: {img['alt'][:60]})")
    if r["console_errors"]:
        print("  CONSOLE ERRORS:")
        for e in r["console_errors"][:5]:
            print(f"    - {e[:200]}")
    print()
