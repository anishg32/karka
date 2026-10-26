"use client";

import { useState } from "react";
import { 
  Sparkles, 
  BrainCircuit, 
  Compass, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  Code, 
  Bot, 
  Database, 
  Palette 
} from "lucide-react";
import { TiltCard3D } from "@/components/ui/TiltCard3D";

interface QuizOption {
  label: string;
  sub: string;
  score: "coding" | "genai" | "data" | "design";
}

interface Question {
  title: string;
  subtitle: string;
  options: QuizOption[];
}

export function AIAssessmentQuiz({ onSelectCourse }: { onSelectCourse?: (course: string) => void }) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [scores, setScores] = useState({ coding: 0, genai: 0, data: 0, design: 0 });
  const [completed, setCompleted] = useState<boolean>(false);

  const questions: Question[] = [
    {
      title: "What is your primary educational or career background?",
      subtitle: "This helps us identify which foundational skills you can leverage immediately.",
      options: [
        { label: "Engineering / Computer Science / IT", sub: "Some programming knowledge or tech degree", score: "coding" },
        { label: "Non-IT Graduate (Arts, Commerce, Science)", sub: "Looking for an approachable, high-growth tech entry", score: "coding" },
        { label: "Working Professional", sub: "Seeking to upgrade into Generative AI & automation", score: "genai" },
        { label: "College Student (Any Year)", sub: "Searching for industry internships & practical experience", score: "data" },
      ],
    },
    {
      title: "What type of problem excites you the most?",
      subtitle: "Choose the day-to-day work that feels most energizing.",
      options: [
        { label: "Building complete web applications & interactive SaaS", sub: "User interfaces, databases, APIs, full product flows", score: "coding" },
        { label: "Working with AI models, ChatGPT, and automated agents", sub: "Prompt engineering, RAG, custom LLM tools", score: "genai" },
        { label: "Analyzing patterns, statistics, and business insights", sub: "Dashboards, big data, machine learning predictions", score: "data" },
        { label: "Crafting beautiful interfaces and user journeys", sub: "UI design, Figma, interactive prototypes", score: "design" },
      ],
    },
    {
      title: "What is your primary career goal in the next 6 months?",
      subtitle: "We prioritize tracks that match your target timeline and compensation.",
      options: [
        { label: "Land a high-paying Software Engineer job (Zero Upfront Risk)", sub: "Enroll in Pay After Placement Full Stack Bootcamp", score: "coding" },
        { label: "Become an AI Specialist ahead of the industry curve", sub: "Master LLM engineering and AI workflows", score: "genai" },
        { label: "Transition into Data Science or Business Analytics", sub: "Work with data pipelines, SQL, and predictive AI", score: "data" },
        { label: "Complete a recognized tech internship while in college", sub: "Build portfolio projects for campus placements", score: "coding" },
      ],
    },
  ];

  const handleSelectOption = (scoreType: "coding" | "genai" | "data" | "design") => {
    const newScores = { ...scores, [scoreType]: scores[scoreType] + 1 };
    setScores(newScores);

    if (currentStep + 1 < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScores({ coding: 0, genai: 0, data: 0, design: 0 });
    setCompleted(false);
  };

  const getRecommendation = () => {
    const maxScore = Math.max(scores.coding, scores.genai, scores.data, scores.design);
    if (scores.genai === maxScore) {
      return {
        track: "Generative AI Mastery & LLM Developer",
        courseName: "Generative AI Mastery",
        role: "AI Application Developer / Prompt Engineer",
        description: "You thrive on cutting-edge innovations. This track equips you with fine-tuning, RAG, LangChain, and autonomous AI agents.",
        duration: "6 Months • Pay After Placement Eligible",
        skills: ["LangChain", "Vector Databases", "Prompt Engineering", "Fine-Tuning", "Python"],
      };
    } else if (scores.data === maxScore) {
      return {
        track: "AI & Data Science Professional",
        courseName: "AI & Data Science",
        role: "Data Scientist / Machine Learning Engineer",
        description: "You have an analytical mind. This track takes you from Python statistics to machine learning, big data pipelines, and deep learning.",
        duration: "6 Months • Pay After Placement Eligible",
        skills: ["Python", "TensorFlow", "SQL", "Pandas", "Scikit-Learn"],
      };
    } else if (scores.design === maxScore) {
      return {
        track: "UI/UX & Creative Tech Specialization",
        courseName: "UI/UX Design Internship",
        role: "Product Designer / UI/UX Engineer",
        description: "You blend empathy and visual precision. Learn wireframing, Figma design systems, and rapid prototyping.",
        duration: "3 Months • Hands-on Project Track",
        skills: ["Figma", "User Research", "Wireframing", "Design Systems"],
      };
    } else {
      return {
        track: "MERN / Python Full Stack Development",
        courseName: "MERN Fullstack Development",
        role: "Full Stack Software Engineer",
        description: "The most versatile and in-demand software engineering pathway. Build high-performance frontend interfaces and scalable cloud backends.",
        duration: "6 Months • Pay After Placement Eligible",
        skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs", "Gen AI Tools"],
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section id="career-matcher" className="py-20 md:py-28 bg-[#070B18] relative overflow-hidden border-t border-white/10">
      {/* Liquid morphing ambient background */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#4a044e]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>Interactive 3D Career Matcher</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Find Your Ideal Tech Pathway in <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-300 bg-clip-text text-transparent">60 Seconds</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal">
            Not sure which course aligns with your strengths? Our intelligent matcher analyzes your preferences to recommend your highest-ROI career track.
          </p>
        </div>

        {/* Quiz Card Container */}
        <div className="rounded-3xl liquid-glass-accent p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-purple-500/30 relative overflow-hidden hover:border-purple-400/50 transition-all">
            
            {!completed ? (
              <div>
                {/* Progress Bar */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span>Question {currentStep + 1} of {questions.length}</span>
                  <span className="font-mono text-cyan-400">
                    {Math.round(((currentStep + 1) / questions.length) * 100)}% Complete
                  </span>
                </div>

                <div className="w-full h-1.5 bg-slate-800 rounded-full mb-8 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-300 shadow-sm"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  />
                </div>

                {/* Current Question */}
                <div className="mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {questions[currentStep].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {questions[currentStep].subtitle}
                  </p>
                </div>

                {/* Options with 3D hover */}
                <div className="space-y-3">
                  {questions[currentStep].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(option.score)}
                      className="w-full p-4 rounded-2xl liquid-glass hover:border-cyan-400/50 transition-all duration-200 text-left flex items-start justify-between group hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-950/40"
                    >
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {option.label}
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                          {option.sub}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Result Screen */
              <div className="space-y-6 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-600 p-[2px] mx-auto shadow-xl shadow-cyan-500/25">
                  <div className="w-full h-full bg-[#090D1E] rounded-[14px] flex items-center justify-center">
                    <BrainCircuit className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                    Assessment Match: 98% Compatibility
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                    Recommended Track: <span className="text-cyan-400">{rec.track}</span>
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 max-w-lg mx-auto">
                    {rec.description}
                  </p>
                </div>

                {/* Highlights Box */}
                <div className="p-5 rounded-2xl liquid-glass border border-white/15 max-w-xl mx-auto text-left space-y-3 shadow-inner">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Target Role:</span>
                    <span className="font-bold text-white">{rec.role}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Program Duration:</span>
                    <span className="font-semibold text-cyan-300">{rec.duration}</span>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <span className="text-[11px] text-slate-400 block mb-1.5 font-semibold">Core Skills You Will Master:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {rec.skills.map((s) => (
                        <span key={s} className="text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href="#contact"
                    onClick={() => {
                      if (onSelectCourse) {
                        onSelectCourse(rec.courseName);
                      }
                    }}
                    className="w-full sm:w-auto px-7 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5"
                  >
                    <span>Apply for This Track (PAP Eligible)</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={resetQuiz}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 font-medium text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Assessment</span>
                  </button>
                </div>

              </div>
            )}

          </div>

      </div>
    </section>
  );
}
