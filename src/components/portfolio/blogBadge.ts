export type TagBadge = {
  label: string;
  className: string;
};

const TAG_BADGES: Record<string, TagBadge> = {
  "Agentic AI": { label: "AI", className: "tag-badge tag-badge--ai" },
  "Developer Tools": { label: "Dev", className: "tag-badge tag-badge--dev" },
  LLMOps: { label: "Ops", className: "tag-badge tag-badge--ops" },
  Architecture: { label: "Arch", className: "tag-badge tag-badge--arch" },
  "RAG Systems": { label: "RAG", className: "tag-badge tag-badge--rag" },
  "ML Engineering": { label: "ML", className: "tag-badge tag-badge--ml" },
  "Career & Leadership": { label: "Lead", className: "tag-badge tag-badge--lead" },
};

export function getTagBadge(tag?: string): TagBadge {
  if (tag && TAG_BADGES[tag]) return TAG_BADGES[tag];
  const label = tag ? tag.replace(/[^a-zA-Z]/g, "").slice(0, 3).toUpperCase() || "BG" : "BG";
  return { label, className: "tag-badge" };
}
