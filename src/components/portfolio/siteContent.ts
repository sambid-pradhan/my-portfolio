export const heroChips = [
  "Agentic AI",
  "LLM Orchestration",
  "RPA / RDA Automation",
  "RAG Pipelines",
  "LLMOps",
  "Enterprise ML",
];

export const timeline = [
  {
    period: "May 2021 – Present · 5 yrs",
    role: "Architect — AI/ML & GenAI",
    company: "Nitor Infotech, an Ascendion Company",
  },
  {
    period: "2017 – 2020 · 3 yrs",
    role: "Senior Data Analyst",
    company: "Discover Dollar Inc",
  },
  { period: "2022", role: "MBA in Business Analytics", company: "BITS Pilani" },
  { period: "2015", role: "B.E. in Aeronautical Engineering", company: "JNTU-H University" },
];

export const certifications = [
  { name: "Advanced Machine Learning Specialization", org: "Coursera / Stanford University" },
  { name: "Deep Learning Specialization", org: "deeplearning.ai" },
  { name: "AI Agents for Image & Video Generation", org: "Applied AI Certification" },
  { name: "Spec-Driven Development with Coding Agents", org: "AI Engineering Certification" },
  { name: "Azure AI Engineer Associate", org: "Microsoft · In Progress" },
];

export const values = [
  "AI should solve real problems, not just impress in demos. Every system I build starts with a business outcome and works backward.",
  "The best AI engineers are translators — bridging what's technically possible and what actually moves the needle.",
  "I want to be in the room with customers, shape the product from day one, and own what gets built — not just hand it off.",
  "Full observability, clean handoffs, and systems that are as easy to debug as they are powerful to run.",
  "Building something ground up — the product, the team, the vision — is what genuinely excites me.",
];

export const toolGroups = [
  {
    label: "GenAI & Agents",
    pills: ["LangGraph", "LangChain", "LangSmith", "LlamaIndex", "CrewAI", "GPT-4.1", "GPT-5.2", "Hugging Face"],
  },
  {
    label: "Orchestration & Observability",
    pills: ["Temporal", "n8n", "Dynatrace", "Pendo", "MLflow", "GitHub Actions", "CI/CD"],
  },
  {
    label: "ML / Deep Learning",
    pills: ["PyTorch", "TensorFlow", "Keras", "XGBoost", "CatBoost", "Scikit-learn", "YOLO v5", "AutoML"],
  },
  {
    label: "Cloud & Infrastructure",
    pills: ["GCP Vertex AI", "Azure ML", "Azure OpenAI", "Azure AI Search", "OpenShift", "AWS EC2", "Kubernetes"],
  },
  {
    label: "Data & APIs",
    pills: ["FastAPI", "PostgreSQL", "PySpark", "Apache Airflow", "Databricks", "Pandas", "NumPy"],
  },
  { label: "Languages", pills: ["Python", "R", "SQL", "Bash"] },
];

export type Project = {
  client: string;
  title: string;
  role: string;
  accent: "navy" | "coral" | "blue" | "dark";
  description: string;
  tech: string[];
  impact: string;
};

export const clientProjects: Project[] = [
  {
    client: "Cigna Healthcare",
    title: "Agentic Workflow Automation Platform",
    role: "GenAI Architect",
    accent: "navy",
    description:
      "Designed and built a custom n8n-style agentic automation platform enabling intelligent automation of complex healthcare claims workflows — navigating legacy mainframe systems and enterprise browsers. Temporal ensures reliable, durable orchestration with automatic retries and long-running state management.",
    tech: ["LangGraph", "GPT-4.1", "GPT-5.2", "Temporal", "FastAPI", "PostgreSQL", "OpenShift", "LangSmith", "Dynatrace"],
    impact: "Replaced expensive enterprise RPA licensing with a fully custom, intelligent automation stack",
  },
  {
    client: "Provation Healthcare",
    title: "AI-Powered Patient Education Chatbot",
    role: "GenAI Architect",
    accent: "coral",
    description:
      "Designed a context-aware patient chatbot grounded in Provation's approved clinical content using in-scope learning — ensuring accuracy and compliance. LangGraph manages multi-turn conversational state while Pendo captures product usage metrics to continuously improve the patient experience.",
    tech: ["LangGraph", "Azure OpenAI", "LangChain", "Azure AI Search", "Container Apps", "Pendo", "Kubernetes"],
    impact: "Improved patient adherence and reduced procedure cancellations through personalized AI guidance",
  },
  {
    client: "Albertsons Companies",
    title: "Advanced Assortment Optimization",
    role: "Data Scientist R&D",
    accent: "blue",
    description:
      "Built deep learning and ensemble ML models for demand forecasting and category assortment planning across store locations for one of the largest US grocery retailers. Optuna hyperparameter optimization and time-based cross-validation ensured production-grade reliability.",
    tech: ["CatBoost", "Keras", "Azure ML Pipelines", "MLflow", "Optuna", "Azure Databricks"],
    impact: "30% improvement over baseline — better assortment decisions across thousands of store locations",
  },
  {
    client: "Discover Dollar — Retail",
    title: "Enterprise Claims Extraction Pipeline",
    role: "Associate Data Analyst",
    accent: "dark",
    description:
      "Architected an automated pipeline for revenue leakage detection and vendor claim generation — processing CSVs, Excel, and database extracts into standardised formats with full audit trails, error handling, and compliance logging.",
    tech: ["Python", "Advanced SQL", "Apache Airflow", "AWS", "Data Quality Frameworks"],
    impact: "Automated pipeline significantly reduced outstanding vendor payments and streamlined claims processing",
  },
];

export const hobbyProjects = [
  {
    thumb: "ht-teal",
    icon: "📄",
    badge: "badge-live",
    badgeText: "🔨 In Progress",
    title: "ContractLens — AI Contract Key Term Extractor",
    description:
      "Upload any contract PDF and instantly extract key terms — parties, dates, obligations, penalties, renewal clauses, and governing law — powered by LLM document intelligence.",
    tags: ["LangChain", "GPT-4.1", "FastAPI", "PDF Parsing"],
  },
  {
    thumb: "ht-coming",
    icon: "💡",
    badge: "badge-soon",
    badgeText: "Coming Soon",
    title: "Your Next Project Here",
    description:
      "Always building. Check back soon for what's brewing — usually something at the intersection of AI, automation, and a problem worth solving.",
    tags: ["TBD"],
  },
  {
    thumb: "ht-coming",
    icon: "🚀",
    badge: "badge-soon",
    badgeText: "Ideas Stage",
    title: "Got an idea? Let's build it.",
    description:
      "Open to collaborating on interesting side projects. If you have a problem worth solving with AI, reach out — I'm always up for a good conversation.",
    tags: ["Open to collab"],
  },
];

export const blogPosts = [
  {
    thumb: "bt1",
    icon: "🤖",
    cat: "Agentic AI",
    title: "Why Temporal is the Missing Piece in Agentic AI Workflows",
    excerpt:
      "Most LLM orchestration breaks under real-world conditions. Here's how Temporal's durable execution model changes everything for long-running agents.",
    read: "5 min read",
  },
  {
    thumb: "bt2",
    icon: "⚙️",
    cat: "LLMOps",
    title: "LangSmith + Dynatrace: Full-Stack Observability for Production LLMs",
    excerpt:
      'What does "observability" actually mean when your system is an LLM making decisions? A practical guide from a production deployment.',
    read: "7 min read",
  },
  {
    thumb: "bt3",
    icon: "🏗️",
    cat: "Architecture",
    title: "Building a Custom RPA Platform with LangGraph: Lessons from the Field",
    excerpt:
      "We replaced enterprise RPA with a fully custom agentic automation engine. Here's the architecture, the tradeoffs, and what we'd do differently.",
    read: "10 min read",
  },
  {
    thumb: "bt4",
    icon: "🧠",
    cat: "RAG Systems",
    title: "In-Scope Learning: How to Keep Your RAG System Grounded",
    excerpt:
      "Hallucination isn't just a model problem — it's an architecture problem. How we constrained a healthcare chatbot to only what it should know.",
    read: "6 min read",
  },
  {
    thumb: "bt5",
    icon: "📊",
    cat: "ML Engineering",
    title: "From Notebook to Production: The ML Pipeline Stack That Actually Works",
    excerpt:
      "MLflow, Azure ML Pipelines, and Optuna — how I set up reproducible, monitored, and scalable model training for enterprise clients.",
    read: "8 min read",
  },
  {
    thumb: "bt6",
    icon: "🚀",
    cat: "Career & Leadership",
    title: "From Data Analyst to GenAI Architect: What Changed and What Didn't",
    excerpt:
      "Eight years of lessons on how AI engineering has evolved — and why good systems thinking never goes out of style.",
    read: "5 min read",
  },
];
