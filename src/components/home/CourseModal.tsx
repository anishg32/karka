"use client";

import { X, Clock, MapPin, CheckCircle2, Sparkles, BookOpen, ArrowRight, ShieldCheck, Laptop } from "lucide-react";
import { Course } from "@/data/courses";

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onApply: (courseTitle: string) => void;
}

export function CourseModal({ course, onClose, onApply }: CourseModalProps) {
  if (!course) return null;

  // Mock modular syllabus aligned with course topic
  const syllabusWeeks = [
    {
      phase: "Phase 1: Fundamentals & AI-Enhanced Foundations",
      duration: "Weeks 1–4",
      topics: [
        "Core syntax, object-oriented concepts, and problem solving",
        "Modern development environment setup & Git/GitHub version control",
        "AI-assisted coding: utilizing LLMs & prompt engineering for rapid prototyping",
        "Mini-project: Interactive CLI & logic validation tool",
      ],
    },
    {
      phase: "Phase 2: Deep Dive into Core Stack & Architecture",
      duration: "Weeks 5–12",
      topics: [
        "Component architecture, state management, and asynchronous data flows",
        "API design (REST/GraphQL), backend routing, and authentication pipelines",
        "Database modeling (SQL & NoSQL), indexing, and performance tuning",
        "Mid-term Milestone: Fullstack CRUD platform with live deployment",
      ],
    },
    {
      phase: "Phase 3: Production Engineering & Cloud Deployment",
      duration: "Weeks 13–20",
      topics: [
        "Cloud hosting (AWS / GCP / Vercel), containerization with Docker",
        "CI/CD pipelines, automated testing, and security best practices",
        "AI integration: embedding vectors, RAG architecture, or intelligent bots",
        "Capstone Build: Enterprise-grade SaaS application with real users",
      ],
    },
    {
      phase: "Phase 4: Placement Drills & Industry Mentorship",
      duration: "Weeks 21–24",
      topics: [
        "Resume audit & portfolio optimization with senior tech mentors",
        "Live technical mock interviews & data structures/system design rounds",
        "Behavioral interview preparation & HR negotiation coaching",
        "Direct company referral sessions with verified hiring partners",
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0A0E21] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 bg-[#0E1533] flex items-start justify-between relative">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                {course.category}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-white/10 flex items-center gap-1">
                <Clock className="w-3 h-3 text-cyan-400" />
                {course.duration}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {course.mode} Mode
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {course.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              {course.description}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[60vh] text-xs sm:text-sm text-slate-300">
          
          {/* Skills Breakdown */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Technologies & Skills Covered</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {course.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-xs hover:border-cyan-500/40"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Program Curriculum Roadmap */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Curriculum & Learning Milestones</span>
            </h4>
            <div className="space-y-3">
              {syllabusWeeks.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs sm:text-sm">
                      {item.phase}
                    </span>
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                      {item.duration}
                    </span>
                  </div>
                  <ul className="space-y-1 pl-1 text-[11px] sm:text-xs text-slate-400">
                    {item.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Placement support & Pay After Placement note */}
          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <div className="font-bold text-emerald-300">Pay After Placement (PAP) Eligible</div>
              <p className="text-slate-300 mt-0.5 leading-relaxed">
                Eligible graduates can enroll in this program with ₹0 upfront tuition. 100% placement support includes 1-on-1 resume reviews, mock interviews, and partner referrals.
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0E1533] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            Target Audience: <strong className="text-white">{course.audience}</strong>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-xs font-semibold text-slate-300 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onApply(course.title);
                onClose();
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-cyan-500/25"
            >
              <span>Enroll / Apply for PAP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
