"use client";

import { useState } from "react";
import { 
  Trophy, 
  ExternalLink, 
  Sparkles, 
  Terminal, 
  Code2, 
  Cpu, 
  Zap, 
  Layers, 
  CheckCircle2, 
  Flame,
  ArrowRight,
  School,
  MapPin,
  Award,
  LogIn,
  Brain,
  TrendingUp,
  Users,
  Presentation,
  Palette,
  Clapperboard,
  Bot
} from "lucide-react";
import { TiltCard3D } from "@/components/ui/TiltCard3D";

export function FlagshipPlatforms() {
  const [spikeInput, setSpikeInput] = useState("");
  const [spikeResponse, setSpikeResponse] = useState<string | null>(null);

  const infiniContests = [
    {
      name: "PaperPulse",
      tag: "Idea Presentation",
      icon: Presentation,
    },
    {
      name: "TechRush",
      tag: "Technical Quiz",
      icon: Brain,
    },
    {
      name: "Bug Hunt",
      tag: "Debugging",
      icon: Terminal,
    },
    {
      name: "SiteSprint",
      tag: "Website Building",
      icon: Code2,
    },
    {
      name: "Graphix",
      tag: "Poster Design",
      icon: Palette,
    },
    {
      name: "VibeCut",
      tag: "Video Creation",
      icon: Clapperboard,
    },
  ];

  const handleSpikeAsk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!spikeInput.trim()) return;
    setSpikeResponse(`Spike AI: Analyzing "${spikeInput}"... Karka mentors recommend checking out the Next.js App Router & FastAPI integration in your student dashboard!`);
  };

  return (
    <section id="infini-ai" className="py-20 md:py-28 bg-[#050813] relative overflow-hidden border-t border-white/10">
      {/* Liquid morphing ambient background */}
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exact Official Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-fuchsia-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-fuchsia-400" />
            <span>Beyond the classroom</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Explore <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">Karka Platforms</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Compete with students across the district or level up with AI-powered learning.
          </p>
        </div>

        {/* 2-Column Flagship Cards Layout (Infini 7 cols + Spike 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 1. Karka Infini AI Card (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <TiltCard3D maxTilt={5} scale={1.015}>
              <div className="h-full rounded-3xl liquid-glass-accent p-8 sm:p-10 relative overflow-hidden shadow-2xl border border-purple-400/30 flex flex-col justify-between">
                
                {/* Background radial glow */}
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl pointer-events-none" />

                <div>
                  {/* Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-400/40 flex items-center justify-center text-white shadow-inner">
                        <Trophy className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-black text-white">Karka Infini AI</h3>
                        <p className="text-xs text-purple-300 font-mono">Inter-college student competition</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-cyan-300 leading-none">
                        ₹1,00,000
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-purple-200 mt-1">
                        Total prize pool
                      </div>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="mt-6 text-lg font-bold text-white leading-snug">
                    Showcase Your Skills. Compete. Get Recognized. Win Big!
                  </p>

                  {/* 6 Official Contests Bento */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {infiniContests.map((contest) => {
                      const Icon = contest.icon;
                      return (
                        <div
                          key={contest.name}
                          className="rounded-2xl liquid-glass p-3.5 hover:border-cyan-400/40 transition-colors group"
                        >
                          <Icon className="w-5 h-5 text-fuchsia-300 group-hover:scale-110 transition-transform" />
                          <p className="mt-2 font-bold text-xs text-white group-hover:text-cyan-300 transition-colors">
                            {contest.name}
                          </p>
                          <p className="text-[10px] text-slate-300">
                            {contest.tag}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* 3 Official Rounds */}
                  <div className="mt-8 pt-6 border-t border-white/10 grid sm:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3">
                      <School className="w-5 h-5 text-fuchsia-300 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-white">Round 1</p>
                        <p className="text-[11px] text-slate-300 leading-relaxed">Campus arena at your college</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-white">Round 2</p>
                        <p className="text-[11px] text-slate-300 leading-relaxed">District-level grand finale for the top 3 teams</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-white">Rewards</p>
                        <p className="text-[11px] text-slate-300 leading-relaxed">Cash prizes, Karka Rolling Trophy & certificates</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <a
                    href="https://infini.karka.academy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white text-[#4a044e] px-6 py-3 text-xs font-extrabold uppercase tracking-wider hover:bg-slate-100 transition-all shadow-xl shadow-purple-950/50 hover:scale-105"
                  >
                    <span>Register for Infini</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-xs font-semibold text-purple-200">
                    Free entry · Join multiple contests · Teams of 1–4
                  </p>
                </div>

              </div>
            </TiltCard3D>
          </div>

          {/* 2. Spike AI Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <TiltCard3D maxTilt={5} scale={1.015}>
              <div className="h-full rounded-3xl liquid-glass p-8 sm:p-10 relative overflow-hidden shadow-2xl border border-cyan-400/30 flex flex-col justify-between">
                
                {/* Background glow */}
                <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none" />

                <div>
                  {/* Header */}
                  <div className="flex items-center gap-3 pb-6 border-b border-white/10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-fuchsia-600 flex items-center justify-center text-slate-950 shadow-lg shadow-fuchsia-500/25">
                      <Zap className="w-6 h-6 text-slate-950 fill-current" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">Spike AI</h3>
                      <p className="text-xs text-amber-300 font-mono">Learning platform</p>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="mt-6 text-lg font-bold text-white leading-snug">
                    The <span className="bg-gradient-to-r from-amber-300 to-fuchsia-400 bg-clip-text text-transparent">AI-powered</span> learning platform by Karka Academy
                  </p>

                  {/* Interactive Prompt Simulator */}
                  <form onSubmit={handleSpikeAsk} className="mt-5 space-y-2">
                    <div className="relative flex items-center gap-2 rounded-2xl border border-white/15 bg-slate-900/90 px-4 py-3 shadow-inner">
                      <Sparkles className="w-4 h-4 shrink-0 text-amber-300 animate-pulse" />
                      <input
                        type="text"
                        value={spikeInput}
                        onChange={(e) => setSpikeInput(e.target.value)}
                        placeholder="Ask Spike anything you're learning..."
                        className="w-full bg-transparent text-xs text-white placeholder-slate-400 focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="px-2.5 py-1 rounded-lg bg-amber-400/20 text-amber-300 border border-amber-400/40 text-[10px] font-bold shrink-0 hover:bg-amber-400 hover:text-slate-950 transition-colors"
                      >
                        Ask
                      </button>
                    </div>

                    {spikeResponse && (
                      <div className="p-3 rounded-xl bg-purple-950/80 border border-purple-500/30 text-[11px] text-purple-200 animate-fadeIn">
                        {spikeResponse}
                      </div>
                    )}
                  </form>

                  {/* 4 Official Pillars */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl liquid-glass p-3.5 hover:border-amber-400/40 transition-colors">
                      <Bot className="w-5 h-5 text-amber-300" />
                      <p className="mt-2 font-bold text-xs text-white">AI-Guided</p>
                      <p className="text-[10px] text-slate-400">Learn with AI at your side</p>
                    </div>

                    <div className="rounded-2xl liquid-glass p-3.5 hover:border-amber-400/40 transition-colors">
                      <Code2 className="w-5 h-5 text-amber-300" />
                      <p className="mt-2 font-bold text-xs text-white">Hands-On</p>
                      <p className="text-[10px] text-slate-400">Practise as you learn</p>
                    </div>

                    <div className="rounded-2xl liquid-glass p-3.5 hover:border-amber-400/40 transition-colors">
                      <TrendingUp className="w-5 h-5 text-amber-300" />
                      <p className="mt-2 font-bold text-xs text-white">Progress</p>
                      <p className="text-[10px] text-slate-400">Track your growth</p>
                    </div>

                    <div className="rounded-2xl liquid-glass p-3.5 hover:border-amber-400/40 transition-colors">
                      <Users className="w-5 h-5 text-amber-300" />
                      <p className="mt-2 font-bold text-xs text-white">Mentor-Backed</p>
                      <p className="text-[10px] text-slate-400">Paired with Karka mentors</p>
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href="https://spike.karka.academy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-amber-200 to-fuchsia-400 px-6 py-3 text-xs font-black text-slate-950 uppercase tracking-wider hover:opacity-95 transition-opacity shadow-lg"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Open Spike Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </TiltCard3D>
          </div>

        </div>

      </div>
    </section>
  );
}
