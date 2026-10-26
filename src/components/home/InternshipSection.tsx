"use client";

import { 
  Briefcase, 
  Layers, 
  Users, 
  Award, 
  Sparkles, 
  ArrowRight,
  ExternalLink,
  Code2,
  Terminal,
  ShieldCheck
} from "lucide-react";
import { TiltCard3D } from "@/components/ui/TiltCard3D";

export function InternshipSection() {
  const highlights = [
    {
      title: "Work on real client projects",
      desc: "Develop production software for actual businesses under senior mentor code reviews.",
      icon: Briefcase,
      color: "from-purple-500 to-indigo-600",
      accent: "text-purple-400",
    },
    {
      title: "Build your project portfolio",
      desc: "Graduate with deployable applications and a GitHub profile that wows engineering leads.",
      icon: Layers,
      color: "from-cyan-500 to-blue-600",
      accent: "text-cyan-400",
    },
    {
      title: "Learn Collaboration",
      desc: "Work in agile sprints using Jira, PR reviews, daily standups, and Git branch workflows.",
      icon: Users,
      color: "from-emerald-500 to-teal-600",
      accent: "text-emerald-400",
    },
    {
      title: "Receive Internship Certificate",
      desc: "Earn an official verifiable industry Internship Certificate proving your practical experience.",
      icon: Award,
      color: "from-amber-500 to-rose-600",
      accent: "text-amber-400",
    },
  ];

  return (
    <section id="internship" className="py-20 md:py-28 bg-[#070B18] relative overflow-hidden border-t border-white/10">
      {/* Liquid morphing ambient background */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Left Story, Right 3D Visual Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Real-Time Industry Training</span>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold font-mono text-fuchsia-400 uppercase tracking-widest block">
                INTERNSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Experience Before <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                  You Graduate.
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Stop worrying about <strong className="text-white">&ldquo;0 experience&rdquo;</strong> on your resume. At Karka, every student works on <span className="text-cyan-300 font-semibold">real-time internship projects</span> guided by industry mentors.
              </p>
              <p>
                Gain the kind of <strong className="text-white">hands-on experience</strong> that employers crave — and build a <span className="text-fuchsia-300 font-semibold">powerhouse portfolio</span> before you even finish.
              </p>
            </div>

            {/* 4 Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.title}
                    className="p-4 rounded-2xl liquid-glass hover:border-cyan-400/40 transition-all flex items-start gap-3.5 shadow-lg group hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className={`w-5 h-5 ${h.accent}`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                        {h.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                        {h.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-xl shadow-cyan-500/20 hover:-translate-y-0.5"
              >
                <span>Apply for Internship Tracks</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Certification</span>
              </span>
            </div>

          </div>

          {/* Right Column: 3D Liquid Glass Portfolio Visual Card */}
          <div className="lg:col-span-6 relative perspective-1500">
            <TiltCard3D maxTilt={6} scale={1.02}>
              <div className="rounded-3xl liquid-glass-accent p-8 relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-purple-400/30">
                
                {/* Header banner */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">Live Client Capstone</h3>
                      <p className="text-xs text-cyan-300 font-mono">karka-intern-lab/cloud-saas</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>In Production</span>
                  </span>
                </div>

                {/* Simulated Project Details */}
                <div className="py-6 space-y-4">
                  <div className="p-4 rounded-2xl liquid-glass space-y-2">
                    <div className="text-xs font-semibold text-slate-300">
                      Project: <span className="text-white font-bold">Multi-Tenant AI Customer Support Platform</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Deployed on AWS ECS with React, FastAPI, PostgreSQL, and autonomous LangChain RAG agents handling 5,000+ support queries daily.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {["Next.js", "Python FastAPI", "LangChain", "Docker", "PostgreSQL", "AWS ECS"].map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Git PR Review Mockup */}
                  <div className="p-3.5 rounded-2xl bg-[#070B18]/90 border border-white/10 space-y-2 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-400 text-[11px]">
                      <span className="flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                        <span>PR #42: Optimize vector search indexing</span>
                      </span>
                      <span className="text-emerald-400 font-bold">Passed CI</span>
                    </div>
                    <div className="text-[11px] text-slate-300 pl-5 border-l-2 border-emerald-500/50">
                      Mentor Review: <span className="text-slate-400 font-sans">&ldquo;Clean implementation with 99.4% test coverage. Ready for production merge.&rdquo;</span>
                    </div>
                  </div>
                </div>

                {/* Footer Certificate Preview */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-fuchsia-400" />
                    <span>Official Experience Letter & Certificate Issued</span>
                  </div>
                  <span className="text-cyan-400 font-mono text-[11px]">Nagercoil Hub</span>
                </div>

              </div>
            </TiltCard3D>
          </div>

        </div>

      </div>
    </section>
  );
}
