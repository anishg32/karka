// Verified academy information from official website and structured data
// Source: karka.academy, schema.org data, official social media
// Last verified: October 2026

export const academy = {
  name: "Karka AI & Tech Academy",
  shortName: "Karka Academy",
  alternateName: "Karka AI Academy",
  tagline: "AI-Driven Software Developer",
  description:
    "The one and only exclusive AI Learning Center in Nagercoil. Master Full Stack Development, Data Science, and Generative AI with industry mentorship and placement support.",
  foundingYear: 2020,
  phone: "+919487530243",
  email: "contact@karka.academy",
  website: "https://www.karka.academy",
  hours: "Mon–Sat 09:00–18:00",
  languages: ["English", "Tamil"],

  address: {
    street: "Nagercoil, Kanyakumari District",
    city: "Nagercoil",
    state: "Tamil Nadu",
    postalCode: "629001",
    country: "India",
  },

  geo: {
    lat: 8.1833,
    lng: 77.4119,
  },

  social: {
    facebook: "https://www.facebook.com/karka.academy",
    instagram: "https://www.instagram.com/karka.ai/",
    linkedin: "https://www.linkedin.com/company/karka-academy/",
    twitter: "https://twitter.com/karka_academy",
  },

  platforms: {
    infini: {
      name: "Karka Infini AI",
      description: "Inter-college student competition",
      url: "https://infini.karka.academy/",
      prizePool: "₹1,00,000",
      events: ["PaperPulse", "TechRush", "Bug Hunt", "SiteSprint", "Graphix", "VibeCut"],
    },
    spike: {
      name: "Spike AI",
      description: "AI-powered learning platform by Karka Academy",
      url: "https://spike.karka.academy/",
      features: ["AI-Guided Learning", "Hands-On Practice", "Progress Tracking", "Mentor-Backed"],
    },
  },

  // Company logos displayed on the official website (verified placements)
  placementPartners: [
    "Amazon",
    "TCS",
    "HCL",
    "Matrimony",
    "Novac",
    "Capecom",
    "Flow",
    "Sodisys",
  ],

  // Exact Why Karka 6 Pillars verified from official website
  whyKarka: [
    {
      num: "01",
      title: "Pay After You Get Hired",
      badge: "Zero Upfront Tuition",
      description:
        "Traditional institutes demand heavy upfront fees regardless of your job outcome. At Karka, you start learning with ₹0 upfront tuition because we carry the financial risk—you only pay your course fees after you successfully secure a tech job.",
      icon: "wallet",
    },
    {
      num: "02",
      title: 'An "AI-First" Future-Proof Curriculum',
      badge: "AI-Powered",
      description:
        "Instead of wasting time on decade-old coding syntax, Karka natively integrates Generative AI workflows, Prompt Engineering, and AI Automation across all our tracks. You will learn how to build software and design interfaces with AI, exactly how modern tech companies build today.",
      icon: "sparkles",
    },
    {
      num: "03",
      title: "Live Internships Over Paper Certificates",
      badge: "Real Experience",
      description:
        "Employers ignore generic print certificates; they hire proof. Karka functions as a hands-on, AI-powered internship platform where you work on real client projects, graduating with a live, deployable portfolio and an official Internship Certificate.",
      icon: "rocket",
    },
    {
      num: "04",
      title: "Continuous On-Site Expert Mentorship",
      badge: "In-Person Labs",
      description:
        "You gain daily access to fully equipped physical labs and direct, face-to-face guidance from industry mentors who track your progress and solve your technical bugs in real time, ensuring you never get stuck or lose learning momentum.",
      icon: "users",
    },
    {
      num: "05",
      title: "Direct Regional & Global Hiring Pipelines",
      badge: "Fast-Track Hiring",
      description:
        "We completely bypass crowded online job portals by sending your completed portfolio directly to our network of hiring partners, local tech companies, and startup ecosystems that look to us to fill their open roles immediately.",
      icon: "briefcase",
    },
    {
      num: "06",
      title: "The 4-Pillar Job Readiness System",
      badge: "Complete Professional",
      description:
        "We transform you into a complete professional by systematically building your core technical stack, optimizing your speed using AI tools, training you in corporate business communication, and mastering technical mock interviews.",
      icon: "trophy",
    },
  ],

  // 4 Pillars of a Job-Ready Tech Career (Official Website Section)
  jobReadinessPillars: [
    {
      step: "01",
      title: "Master the Language of Business",
      subtitle: "Corporate Communication & Client Collaboration",
      skills: ["Listening", "Speaking", "Reading", "Writing"],
      color: "from-blue-500/20 to-cyan-500/10",
      accent: "text-blue-400",
      border: "border-blue-500/30",
    },
    {
      step: "02",
      title: "Build Scalable Modern Apps",
      subtitle: "Fullstack & Digital Product Engineering",
      skills: ["Web / Mobile", "Data Analytics", "UI/UX Design", "Digital Marketing"],
      color: "from-emerald-500/20 to-teal-500/10",
      accent: "text-emerald-400",
      border: "border-emerald-500/30",
    },
    {
      step: "03",
      title: "AI Skills",
      subtitle: "Core Future-Proof Intelligence",
      isCore: true,
      skills: ["Prompt Engineering", "AI Automation", "AI Tools", "LLM"],
      color: "from-purple-500/25 to-pink-500/15",
      accent: "text-purple-400",
      border: "border-purple-500/40",
    },
    {
      step: "04",
      title: "Interview Skills",
      subtitle: "Placement Readiness & Career Launch",
      skills: ["ATS Friendly Profile", "Mock Interview", "Group Discussion", "Presentation Skills"],
      color: "from-amber-500/20 to-orange-500/10",
      accent: "text-amber-400",
      border: "border-amber-500/30",
    },
  ],

  // Official Testimonials with Gabriel Samraj video spotlight and real student portraits
  testimonials: [
    {
      id: "gabriel",
      name: "Gabriel Samraj",
      role: "Frontend Developer",
      subRole: "UI/UX Designer",
      company: "Leading Tech Firm",
      quote:
        "Karka's UI/UX design course was a game-changer for me. The instructors are passionate and the curriculum is up-to-date with the latest design trends. I now feel confident in my ability to create stunning visuals that stand out.",
      image: "/images/students/gabriel.jpg",
      videoUrl: "/videos/gabrielsamraj.mp4",
      highlight: "Featured Video Success Story",
      avatarBg: "from-purple-600 to-indigo-600",
    },
    {
      id: "prabin",
      name: "Prabin",
      role: "Full Stack Developer",
      subRole: "MERN Stack Specialist",
      company: "Capecom",
      quote:
        "Starting with ₹0 upfront tuition took away all the fear. Karka's real client projects and hands-on lab mentorship in Nagercoil gave me the exact skills needed to crack technical rounds.",
      image: "/images/students/stu1.webp",
      videoUrl: "/videos/gabrielsamraj.mp4",
      highlight: "Capecom Placement",
      avatarBg: "from-cyan-600 to-blue-600",
    },
    {
      id: "shiju",
      name: "Shiju",
      role: "AI & Data Engineer",
      subRole: "Data Science Specialist",
      company: "Novac",
      quote:
        "Spike AI code reviews and the daily problem-solving sessions at Karka elevated my engineering foundation. Building production pipelines gave me an undeniable edge during hiring interviews.",
      image: "/images/students/stu3.webp",
      videoUrl: "/videos/gabrielsamraj.mp4",
      highlight: "Novac Placement",
      avatarBg: "from-emerald-600 to-teal-600",
    },
    {
      id: "kishore",
      name: "Kishore",
      role: "React Developer",
      subRole: "Frontend Engineer",
      company: "TCS",
      quote:
        "From mock technical interviews to ATS-optimized resume building, the placement support at Karka is unparalleled. Today I work on enterprise applications with complete confidence.",
      image: "/images/students/stu1.webp",
      videoUrl: "/videos/gabrielsamraj.mp4",
      highlight: "TCS Placement",
      avatarBg: "from-blue-600 to-indigo-600",
    },
    {
      id: "sridevi",
      name: "Sridevi",
      role: "UI/UX Designer",
      subRole: "Product Designer",
      company: "Flow",
      quote:
        "Learning design systems, user journeys, and modern AI design tools helped me build a powerhouse portfolio that hired managers noticed immediately. Truly transformative experience.",
      image: "/images/students/stu2.webp",
      videoUrl: "/videos/gabrielsamraj.mp4",
      highlight: "Flow Placement",
      avatarBg: "from-pink-600 to-rose-600",
    },
  ],

  audiences: [
    {
      name: "School Students",
      slug: "for-school-students",
      description: "Early coding, logic, Python & AI fundamentals for school innovators.",
      badge: "Ages 10–17",
      icon: "school",
    },
    {
      name: "College Students",
      slug: "for-college-students",
      description: "Industry-aligned internships, semester projects & skill-building.",
      badge: "Pre-Final & Final Year",
      icon: "graduation-cap",
    },
    {
      name: "Graduates",
      slug: "for-graduates",
      description: "Zero upfront fees Pay After Placement bootcamps with 100% placement support.",
      badge: "Pay After Placement",
      icon: "briefcase",
    },
    {
      name: "Professionals",
      slug: "for-professionals",
      description: "Weekend & evening upskilling in Generative AI, Cloud & Data Engineering.",
      badge: "Career Switchers",
      icon: "trending-up",
    },
  ],
} as const;

export const faqItems = [
  {
    question: "What programs does Karka Academy offer?",
    answer:
      "Karka Academy offers courses in Full Stack Development (MERN, React+Java, React+Python), Generative AI, Data Science & AI, Data Analytics, UI/UX Design, and more. Programs are available for school students, college students, graduates, and working professionals.",
  },
  {
    question: "What is the Pay After Placement model?",
    answer:
      "Pay After Placement allows eligible students to begin learning without upfront course fees. Payment obligations start only after the student secures a placement. Specific terms, eligibility criteria, and conditions apply — please contact the academy directly for the official terms and full details.",
    // NOTE: Exact payment terms, percentages, and conditions are not publicly verified.
    // Contact the academy for authoritative information.
  },
  {
    question: "Who is eligible to enroll?",
    answer:
      "Karka Academy offers programs for different groups: school students, college students seeking internships, graduates looking for job-ready skills with placement support, and working professionals seeking to upskill. Specific eligibility requirements vary by program.",
  },
  {
    question: "Are the courses online or in-person?",
    answer:
      "Most programs are available online. The academy is based in Nagercoil, Tamil Nadu, and may offer in-person sessions for select programs. Check individual course pages or contact the academy for the latest format details.",
  },
  {
    question: "What kind of projects will I work on?",
    answer:
      "Students work on hands-on capstone projects that simulate real-world scenarios. These projects are designed to build a portfolio that demonstrates practical skills to potential employers.",
  },
  {
    question: "Does Karka Academy provide placement support?",
    answer:
      "Yes, Karka Academy provides 100% placement support for eligible programs. This includes resume building, mock interviews, mentorship from industry professionals, and connections with hiring partners. Past students have been placed at companies like Amazon, TCS, HCL, and others as shown on the official website.",
  },
  {
    question: "What is Karka Infini AI?",
    answer:
      "Karka Infini AI is an inter-college student competition with a total prize pool of ₹1,00,000. It includes events like PaperPulse (idea presentation), TechRush (technical quiz), Bug Hunt (debugging), SiteSprint (website building), Graphix (poster design), and VibeCut (video creation). Registration is free.",
  },
  {
    question: "How can I contact Karka Academy?",
    answer:
      "You can reach Karka Academy by phone at +91 94875 30243, by email at contact@karka.academy, or through their social media channels. The academy is located in Nagercoil, Kanyakumari District, Tamil Nadu 629001, and operates Monday through Saturday, 9 AM to 6 PM.",
  },
];
