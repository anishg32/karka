// Course data verified from official karka.academy website
// Last verified: October 2026

export interface Course {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  duration: string;
  mode: string;
  description: string;
  skills: string[];
  audience: string;
  slug: string;
  featured?: boolean;
}

export const courseCategories = [
  { name: "Fullstack Courses", slug: "coding" },
  { name: "Gen AI Courses", slug: "gen-ai" },
  { name: "Data & ML Courses", slug: "data" },
  { name: "Design Courses", slug: "design" },
  { name: "Digital Media Courses", slug: "media" },
  { name: "Content & Marketing", slug: "marketing" },
  { name: "Other Tech Courses", slug: "tech" },
  { name: "Non Tech Courses", slug: "non-tech" },
  { name: "Kids & School", slug: "kids" },
] as const;

export const courses: Course[] = [
  // Fullstack Courses
  {
    id: "mern-fullstack",
    title: "MERN Fullstack Development",
    category: "Fullstack Courses",
    categorySlug: "coding",
    duration: "6 Months",
    mode: "Hybrid / Online",
    description:
      "Master Full-Stack web development using MongoDB, Express, React, and Node.js. Build scalable web applications from scratch with 100% placement support.",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "Next.js", "REST APIs", "Git"],
    audience: "Graduates",
    slug: "mern-fullstack",
    featured: true,
  },
  {
    id: "react-java-fullstack",
    title: "React + Java Fullstack",
    category: "Fullstack Courses",
    categorySlug: "coding",
    duration: "6 Months",
    mode: "Hybrid / Online",
    description:
      "Combine modern React frontend development with robust enterprise Java and Spring Boot backends and microservice architectures.",
    skills: ["React", "Java", "Spring Boot", "MySQL", "Hibernate", "Microservices", "REST APIs"],
    audience: "Graduates",
    slug: "react-java-fullstack",
    featured: true,
  },
  {
    id: "react-python-fullstack",
    title: "React + Python Fullstack",
    category: "Fullstack Courses",
    categorySlug: "coding",
    duration: "6 Months",
    mode: "Hybrid / Online",
    description:
      "Build high-performance web applications using React on the frontend and Python Django or FastAPI on the backend with AI API integrations.",
    skills: ["React", "Python", "Django", "FastAPI", "PostgreSQL", "Docker", "REST APIs"],
    audience: "Graduates",
    slug: "react-python-fullstack",
  },
  {
    id: "fullstack-internship",
    title: "Full Stack Developer Internship",
    category: "Fullstack Courses",
    categorySlug: "coding",
    duration: "6 Months",
    mode: "Lab & Online",
    description:
      "Rigorous MERN stack training for students. Master DevOps, System Design, and Production best practices on real client applications.",
    skills: ["MERN Stack", "DevOps", "System Design", "Production CI/CD", "Real Client Work"],
    audience: "College Students",
    slug: "fullstack-internship",
  },

  // Gen AI Courses
  {
    id: "genai-foundations",
    title: "Generative AI Foundations",
    category: "Gen AI Courses",
    categorySlug: "gen-ai",
    duration: "3 Months",
    mode: "Online / In-Person",
    description:
      "Master the basics of Generative AI, prompt engineering, and fundamental AI concepts. Start your journey into the tech future.",
    skills: ["Prompt Engineering", "ChatGPT", "Claude", "Midjourney", "AI Tools", "AI Workflow Automation"],
    audience: "All Levels",
    slug: "genai-foundations",
    featured: true,
  },
  {
    id: "genai-mastery",
    title: "Generative AI Mastery",
    category: "Gen AI Courses",
    categorySlug: "gen-ai",
    duration: "6 Months",
    mode: "Hybrid / Online",
    description:
      "Go beyond prompt engineering to building production RAG pipelines, autonomous multi-agent frameworks, and fine-tuned open-weights models.",
    skills: ["LangChain", "LlamaIndex", "RAG Pipelines", "Vector Databases", "Agentic Workflows", "Model Fine-Tuning"],
    audience: "Intermediate",
    slug: "genai-mastery",
    featured: true,
  },
  {
    id: "genai-llm-developer",
    title: "Gen AI (LLM) Developer",
    category: "Gen AI Courses",
    categorySlug: "gen-ai",
    duration: "6 Months",
    mode: "Hybrid / Online",
    description:
      "Specialized engineering track to build enterprise AI assistants, custom small language models, and evaluate LLMs for production deployment.",
    skills: ["Hugging Face", "PyTorch", "Transformers", "LoRA/QLoRA", "Ollama", "vLLM", "MLOps"],
    audience: "Advanced",
    slug: "genai-llm-developer",
  },

  // Data & ML Courses
  {
    id: "ai-data-science",
    title: "AI & Data Science",
    category: "Data & ML Courses",
    categorySlug: "data",
    duration: "6 Months",
    mode: "Hybrid / Online",
    description:
      "Comprehensive study of AI and Data Science concepts. Master the tools and machine learning models that drive the AI revolution.",
    skills: ["Python", "Pandas", "Scikit-Learn", "Machine Learning", "Deep Learning", "TensorFlow", "Statistics"],
    audience: "Graduates",
    slug: "ai-data-science",
    featured: true,
  },
  {
    id: "data-analytics-ai",
    title: "Data Analytics with AI",
    category: "Data & ML Courses",
    categorySlug: "data",
    duration: "5 Months",
    mode: "Online",
    description:
      "Leverage modern AI analytics to transform raw business data into actionable dashboards and predictive models using SQL, PowerBI, and Python.",
    skills: ["SQL", "Power BI", "Tableau", "Python", "Data Visualization", "Predictive Analytics"],
    audience: "All Levels",
    slug: "data-analytics-ai",
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    category: "Data & ML Courses",
    categorySlug: "data",
    duration: "6 Months",
    mode: "Hybrid / Online",
    description:
      "Build large-scale data lakes, streaming ETL pipelines with Apache Spark and Kafka, and modern cloud data warehouses.",
    skills: ["PySpark", "Apache Kafka", "BigQuery", "Snowflake", "dbt", "Airflow", "Cloud ETL"],
    audience: "Intermediate",
    slug: "data-engineering",
  },

  // Design Courses
  {
    id: "uiux-design",
    title: "UI/UX Design",
    category: "Design Courses",
    categorySlug: "design",
    duration: "4 Months",
    mode: "In-Person / Online",
    description:
      "Master the art of designing intuitive, beautiful user interfaces and experiences using Figma, design systems, and modern AI design tools.",
    skills: ["Figma", "User Research", "Wireframing", "Interactive Prototyping", "Design Systems", "AI UI Generation"],
    audience: "All Levels",
    slug: "ui-ux-design",
    featured: true,
  },
  {
    id: "web-designing",
    title: "Web Designing",
    category: "Design Courses",
    categorySlug: "design",
    duration: "3 Months",
    mode: "In-Person / Online",
    description:
      "Learn responsive web layout design, typography, color theory, HTML5/CSS3, and modern visual branding for clients.",
    skills: ["HTML5", "CSS3", "Responsive Web Design", "Tailwind CSS", "Framer", "Visual Branding"],
    audience: "College Students",
    slug: "web-designing",
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    category: "Design Courses",
    categorySlug: "design",
    duration: "3 Months",
    mode: "In-Person / Online",
    description:
      "Create high-impact digital graphics, brand identities, marketing collateral, and social media creative assets.",
    skills: ["Photoshop", "Illustrator", "Brand Identity", "Typography", "Visual Composition"],
    audience: "All Levels",
    slug: "graphic-designing",
  },

  // Digital Media Courses
  {
    id: "video-editing",
    title: "Video Editing",
    category: "Digital Media Courses",
    categorySlug: "media",
    duration: "3 Months",
    mode: "In-Person",
    description:
      "Master cinematic video editing, pacing, color grading, sound design, and viral short-form video creation.",
    skills: ["Premiere Pro", "DaVinci Resolve", "Color Grading", "Sound Design", "Reels & Shorts"],
    audience: "All Levels",
    slug: "video-editing",
  },
  {
    id: "multimedia-animation",
    title: "Multimedia & Animation",
    category: "Digital Media Courses",
    categorySlug: "media",
    duration: "4 Months",
    mode: "In-Person",
    description:
      "Bring visuals to life with motion graphics, 2D animations, title sequences, and visual effects for brands and creators.",
    skills: ["After Effects", "Motion Graphics", "2D Animation", "Kinetic Typography", "VFX"],
    audience: "All Levels",
    slug: "multimedia-animation",
  },

  // Content & Marketing
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Content & Marketing",
    categorySlug: "marketing",
    duration: "3 Months",
    mode: "Online / In-Person",
    description:
      "Drive customer growth through Google Ads, Meta Ads, social media marketing, marketing automation, and conversion optimization.",
    skills: ["Performance Marketing", "Meta Ads", "Google Ads", "Social Media", "Conversion Rate Optimization"],
    audience: "All Levels",
    slug: "digital-marketing",
  },
  {
    id: "seo-analyst",
    title: "SEO Analyst",
    category: "Content & Marketing",
    categorySlug: "marketing",
    duration: "2 Months",
    mode: "Online",
    description:
      "Master technical SEO, keyword research, on-page optimization, and AI content search visibility to rank #1 on Google.",
    skills: ["Technical SEO", "Keyword Research", "Google Search Console", "Ahrefs", "Semantic Search"],
    audience: "All Levels",
    slug: "seo-analyst",
  },
  {
    id: "storytelling-content",
    title: "Storytelling & Content Writing",
    category: "Content & Marketing",
    categorySlug: "marketing",
    duration: "2 Months",
    mode: "Online",
    description:
      "Craft persuasive copy, brand narratives, long-form articles, and AI-accelerated business storytelling.",
    skills: ["Copywriting", "Brand Storytelling", "Content Strategy", "AI Writing Tools", "Editorial Strategy"],
    audience: "All Levels",
    slug: "storytelling-content",
  },

  // Other Tech Courses
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    category: "Other Tech Courses",
    categorySlug: "tech",
    duration: "5 Months",
    mode: "Hybrid / Online",
    description:
      "Learn cloud architecture, continuous deployment pipelines, containerization with Docker & Kubernetes, and infrastructure as code.",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Linux", "CI/CD"],
    audience: "Intermediate",
    slug: "cloud-devops",
  },

  // Non Tech Courses
  {
    id: "hr-finance",
    title: "HR & Finance",
    category: "Non Tech Courses",
    categorySlug: "non-tech",
    duration: "3 Months",
    mode: "In-Person",
    description:
      "Practical corporate training in talent acquisition, employee management, payroll processing, and financial accounting.",
    skills: ["Talent Acquisition", "HR Operations", "Payroll Systems", "Corporate Law", "Financial Reporting"],
    audience: "Graduates",
    slug: "hr-finance",
  },
  {
    id: "tally-prime",
    title: "Tally Prime & GST",
    category: "Non Tech Courses",
    categorySlug: "non-tech",
    duration: "2 Months",
    mode: "In-Person",
    description:
      "Hands-on accounting and GST compliance certification using Tally Prime for businesses and financial advisory.",
    skills: ["Tally Prime", "GST Filing", "Bookkeeping", "Inventory Management", "Financial Statements"],
    audience: "All Levels",
    slug: "tally",
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    category: "Non Tech Courses",
    categorySlug: "non-tech",
    duration: "4 Months",
    mode: "Online / In-Person",
    description:
      "Bridge business needs with technical solutions through requirement modeling, agile sprints, user stories, and stakeholder management.",
    skills: ["Business Requirements", "Agile & Scrum", "User Stories", "Process Flow Diagrams", "Jira", "SQL"],
    audience: "Graduates",
    slug: "business-analyst",
  },

  // Kids & School
  {
    id: "python-kids",
    title: "Python for Kids",
    category: "Kids & School",
    categorySlug: "kids",
    duration: "2 Months",
    mode: "In-Person / Online",
    description:
      "Interactive introduction to programming logic using Python. Build games, animations, and solve puzzles while learning core coding concepts.",
    skills: ["Python Logic", "Game Development with Pygame", "Algorithmic Thinking", "Problem Solving"],
    audience: "School Students",
    slug: "python-for-kids",
  },
];

export const featuredCourses = courses.filter((c) => c.featured);

export function getCoursesByCategory(categorySlug: string): Course[] {
  return courses.filter((c) => c.categorySlug === categorySlug);
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
