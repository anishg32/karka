"use client";

import { 
  MessageSquare, 
  Laptop, 
  Brain, 
  Users, 
  Sparkles, 
  Briefcase,
  CheckCircle2,
  Layers,
  ArrowRight
} from "lucide-react";
import { TiltCard3D } from "@/components/ui/TiltCard3D";

export function JobReadinessPillars() {
  const pillars = [
    {
      num: "01",
      title: "Master the Language of Business",
      subtitle: "Corporate Communication & Collaboration",
      icon: MessageSquare,
      skills: ["Listening", "Speaking", "Reading", "Writing"],
      gradient: "from-blue-500/20 to-cyan-500/10",
      accent: "text-blue-400",
      border: "border-blue-500/30",
    },
    {
      num: "02",
      title: "Build Scalable Modern Apps",
      subtitle: "Fullstack Product Engineering",
      icon: Laptop,
      skills: ["Web / Mobile", "Data Analytics", "UI/UX Design", "Digital Marketing"],
      gradient: "from-emerald-500/20 to-teal-500/10",
      accent: "text-emerald-400",
      border: "border-emerald-500/30",
    },
    {
      num: "03",
      title: "AI Skills",
      subtitle: "Core Future-Proof Intelligence",
      isCore: true,
      icon: Brain,
      skills: ["Prompt Engineering", "AI Automation", "AI Tools", "LLM"],
      gradient: "from-purple-500/25 to-pink-500/15",
      accent: "text-fuchsia-400",
      border: "border-purple-500/50",
    },
    {
      num: "04",
      title: "Interview Skills",
      subtitle: "ATS Optimization & Mock Rounds",
      icon: Users,
      skills: ["ATS Friendly Profile", "Mock Interview", "Group Discussion", "Presentation Skills"],
      gradient: "from-amber-500/20 to-orange-500/10",
      accent: "text-amber-400",
      border: "border-amber-500/30",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#060914] relative overflow-hidden border-t border-white/10">
      {/* Liquid morphing ambient background */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#4a044e]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Official Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-purple-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-fuchsia-400" />
            <span>Holistic Career Transformation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            4 Pillars of a <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">Job-Ready Tech Career</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            We don&apos;t just teach code; we build careers. Our holistic curriculum is designed to transform you into a complete professional.
          </p>
        </div>

        {/* 4 Pillars Grid with 3D Liquid Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <TiltCard3D key={pillar.num} maxTilt={9} scale={1.03}>
                <div
                  className={`h-full relative p-7 rounded-3xl liquid-glass ${pillar.border} transition-all duration-300 flex flex-col justify-between shadow-2xl group`}
                >
                  {/* Core Pillar Badge */}
                  {pillar.isCore && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black text-[10px] uppercase tracking-wider shadow-lg shadow-purple-900/50 border border-white/20">
                      Core Pillar
                    </div>
                  )}

                  <div>
                    {/* Top row with icon & step number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900/80 border border-white/15 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                        <Icon className={`w-6 h-6 ${pillar.accent}`} />
                      </div>
                      <span className="text-4xl font-black text-slate-700/60 font-mono group-hover:text-cyan-400/30 transition-colors">
                        {pillar.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 mb-6 font-medium">
                      {pillar.subtitle}
                    </p>

                    {/* Sub-skills list */}
                    <div className="space-y-2.5 pt-4 border-t border-white/10">
                      {pillar.skills.map((skill) => (
                        <div key={skill} className="flex items-center gap-2.5 text-xs text-slate-300">
                          <span className={`w-2 h-2 rounded-full ${pillar.isCore ? "bg-fuchsia-400 shadow-[0_0_8px_rgba(236,72,153,0.8)]" : "bg-cyan-400"}`} />
                          <span className="font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>Pillar {pillar.num} of 04</span>
                    <span className="text-cyan-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Ready &rarr;
                    </span>
                  </div>

                </div>
              </TiltCard3D>
            );
          })}
        </div>

      </div>
    </section>
  );
}
