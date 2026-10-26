"use client";

import { useState } from "react";
import { 
  ShieldCheck, 
  Check, 
  X, 
  HelpCircle, 
  Sparkles, 
  ArrowRight, 
  Calculator, 
  UserCheck, 
  Laptop, 
  Briefcase, 
  Zap,
  Award,
  Star,
  CheckCircle2,
  FilePen,
  Users,
  MessageSquare,
  Trophy,
  PhoneCall
} from "lucide-react";
import { TiltCard3D } from "@/components/ui/TiltCard3D";

export function PayAfterPlacement() {
  // Interactive eligibility calculator state
  const [education, setEducation] = useState<string>("graduate");
  const [track, setTrack] = useState<string>("mern");
  const [commitment, setCommitment] = useState<string>("fulltime");

  const steps = [
    {
      num: "01",
      title: "Enroll & Learn",
      desc: "Learn from Real Mentors. Join live sessions, work on real-world projects, and get mentored by industry experts in our Nagercoil labs or online.",
      icon: Laptop,
      color: "from-fuchsia-500 to-purple-600",
    },
    {
      num: "02",
      title: "Get Job Ready",
      desc: "We help you build your ATS-optimized resume, production portfolio, and master technical mock interviews with personalized coaching.",
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
    },
    {
      num: "03",
      title: "Get Paid, Not Billed",
      desc: "Focus on learning today with ₹0 upfront tuition. You only begin paying affordable installments after you successfully secure your tech job.",
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const whatsIncluded = [
    { title: "1:1 Mentorship", desc: "Direct guidance from working industry engineers", icon: Trophy, color: "text-amber-400" },
    { title: "Placement Training", desc: "Rigorous algorithmic DSA and system design drills", icon: CheckCircle2, color: "text-emerald-400" },
    { title: "Resume & LinkedIn Preparation", desc: "ATS-optimized profiles that get recruiters' attention", icon: FilePen, color: "text-fuchsia-400" },
    { title: "Mock Interviews", desc: "Simulated HR and technical interview panels with feedback", icon: Users, color: "text-cyan-400" },
    { title: "Job Referral Support", desc: "Direct pipelines to 8+ regional and national hiring partners", icon: MessageSquare, color: "text-blue-400" },
  ];

  const comparisonRows = [
    {
      feature: "Upfront Tuition Fees",
      college: "High (₹3L – ₹10L+)",
      selfTaught: "Low (Unstructured)",
      karka: "₹0 Upfront (Pay After Placement)",
      highlight: true,
    },
    {
      feature: "Gen AI & Modern Tooling",
      college: "Outdated Syllabi",
      selfTaught: "Fragmented Tutorials",
      karka: "Integrated Generative AI & Spike AI",
      highlight: true,
    },
    {
      feature: "1-on-1 Industry Mentorship",
      college: "Rarely Available",
      selfTaught: "None",
      karka: "Working Tech Professionals",
      highlight: false,
    },
    {
      feature: "Real-world Capstones",
      college: "Theoretical projects",
      selfTaught: "Toy clones from videos",
      karka: "Production-grade portfolio apps",
      highlight: false,
    },
    {
      feature: "100% Placement Support",
      college: "Variable / Uncertain",
      selfTaught: "Zero assistance",
      karka: "Dedicated Placement Cell & Referrals",
      highlight: true,
    },
  ];

  return (
    <section id="pay-after-placement" className="py-20 md:py-28 bg-[#070B18] relative overflow-hidden border-t border-white/10">
      {/* Liquid morphing ambient background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exact Official Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Risk-Free Career Transformation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Pay After <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">You Get Hired</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Zero Upfront Fees. Zero Risk. We&apos;re so confident in our training that we don&apos;t get paid until you do.
          </p>
        </div>

        {/* 3 Steps Roadmap with 3D Liquid Glass Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <TiltCard3D key={step.num} maxTilt={7} scale={1.025}>
                <div
                  className="h-full relative p-7 rounded-3xl liquid-glass hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between shadow-2xl group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} p-[1.5px] shadow-lg`}>
                        <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <span className="text-3xl font-black text-slate-700 font-mono group-hover:text-cyan-400/30 transition-colors">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </TiltCard3D>
            );
          })}
        </div>

        {/* Split: What's Included (5 cols) & Comparison + Calculator (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column (5 cols): What's Included & The Karka Journey Showcase */}
          <div className="lg:col-span-5 space-y-6">
            {/* Card 1: What's Included */}
            <TiltCard3D maxTilt={5} scale={1.015}>
              <div className="rounded-3xl liquid-glass-accent p-6 sm:p-8 relative overflow-hidden shadow-2xl border border-purple-400/30">
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">What&apos;s Included</h3>
                    <p className="text-xs text-purple-300 font-mono mt-0.5">Everything needed to land your tech job</p>
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white/10 text-cyan-300 border border-white/20">
                    ₹0 Upfront
                  </span>
                </div>

                <div className="space-y-5">
                  {whatsIncluded.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-slate-950/80 border border-white/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                          <Icon className={`w-5 h-5 ${item.color}`} />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Rating Callout */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-white font-bold text-sm ml-1">4.8</span>
                  </div>
                  <span className="text-xs text-slate-300 font-mono">Based on 200 ratings</span>
                </div>
              </div>
            </TiltCard3D>

            {/* Card 2: The Karka Career Evolution Visual (Eliminates empty space) */}
            <TiltCard3D maxTilt={5} scale={1.015}>
              <div className="rounded-3xl liquid-glass p-6 sm:p-7 relative overflow-hidden shadow-2xl border border-white/10 group">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                      The Karka Pathway
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    Learn • Grow • Evolve
                  </span>
                </div>

                {/* Animated Graphic Artwork */}
                <div className="relative rounded-2xl overflow-hidden border border-white/15 aspect-[4/3] mb-4 shadow-inner">
                  <img
                    src="/images/students/pic.webp"
                    alt="Learn Grow Evolve - Karka Academy Tech Transformation"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.88] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                  
                  {/* Floating badges on image */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-emerald-400 flex items-center gap-1.5 shadow-lg">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>100% Placement Aligned</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white drop-shadow-md">
                    <div className="bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
                      <span className="text-[10px] text-slate-400 block font-mono">Guaranteed Outcome</span>
                      <span className="font-bold text-cyan-300">Software Career in Tech</span>
                    </div>
                    <div className="bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 text-right">
                      <span className="text-[10px] text-slate-400 block font-mono">Upfront Cost</span>
                      <span className="font-bold text-emerald-400">₹0 Rupee</span>
                    </div>
                  </div>
                </div>

                {/* Explanatory Caption */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Step onto the proven pathway designed for graduates in Kanyakumari. Build real client systems, master Gen AI tooling, and unlock full-time placements without financial burden.
                </p>

                {/* Transparent Guarantee Bullet Points */}
                <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs">
                  <div className="flex items-center gap-2.5 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>No Monthly Tuition:</strong> Zero fee deductions until your first paycheck</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span><strong>Minimum Salary Bar:</strong> PAP activates only upon landing an approved tech role</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span><strong>Transparent Contract:</strong> Legally verified, student-first agreement</span>
                  </div>
                </div>

                {/* Quick Admission Helpline */}
                <div className="mt-5 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white">Have PAP questions?</div>
                      <div className="text-[10px] text-slate-400 font-mono">+91 94875 30243</div>
                    </div>
                  </div>
                  <a
                    href="tel:+919487530243"
                    className="px-3 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs transition-colors shrink-0 flex items-center gap-1 shadow-md shadow-cyan-400/20"
                  >
                    <span>Call Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </TiltCard3D>
          </div>

          {/* Right: Comparison Table & Eligibility Checker */}
          <div className="lg:col-span-7 space-y-8">
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Why Karka PAP Outperforms Alternatives
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    How our accountability-driven model compares to traditional routes
                  </p>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/30">
                  100% Aligned
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400">
                      <th className="pb-3 font-semibold">Key Criteria</th>
                      <th className="pb-3 font-semibold text-slate-500">Colleges</th>
                      <th className="pb-3 font-semibold text-slate-500">Self-Learning</th>
                      <th className="pb-3 font-bold text-cyan-400">Karka PAP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {comparisonRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02]">
                        <td className="py-3.5 pr-2 font-medium text-slate-200">
                          {row.feature}
                        </td>
                        <td className="py-3.5 pr-2 text-slate-400">
                          {row.college}
                        </td>
                        <td className="py-3.5 pr-2 text-slate-400">
                          {row.selfTaught}
                        </td>
                        <td className="py-3.5 font-bold text-emerald-400">
                          {row.karka}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-slate-400 italic">
                * Note: Pay After Placement terms are subject to clearing the admissions aptitude assessment and maintaining program attendance.
              </div>
            </div>

            {/* Interactive Eligibility Checker */}
            <div className="w-full">
              <div className="liquid-glass rounded-3xl p-6 sm:p-8 shadow-2xl relative border border-cyan-400/40 hover:border-cyan-400/60 transition-all">
                <div className="flex items-center gap-2 mb-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  <Calculator className="w-4 h-4 text-cyan-400" />
                  <span>Interactive Eligibility Assessment</span>
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">
                  Check Your PAP Eligibility
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Answer 3 quick questions to discover your eligibility status for zero-upfront enrollment.
                </p>

                <div className="space-y-4 text-xs">
                  {/* Question 1 */}
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1.5">
                      1. Current Qualification / Status:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: "graduate", label: "Graduate (Any Stream)" },
                        { id: "final_year", label: "Final Year Student" },
                        { id: "career_switch", label: "Working Professional" },
                        { id: "diploma", label: "Diploma / School" },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setEducation(opt.id)}
                          className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                            education === opt.id
                              ? "bg-cyan-500/20 border-cyan-400 text-white font-bold shadow-md shadow-cyan-500/20"
                              : "bg-slate-900 border-white/10 text-slate-400 hover:border-white/20"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Question 2 */}
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1.5">
                      2. Preferred Specialization:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "mern", label: "MERN Stack" },
                        { id: "genai", label: "Gen AI" },
                        { id: "datascience", label: "Data Science" },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setTrack(opt.id)}
                          className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                            track === opt.id
                              ? "bg-cyan-500/20 border-cyan-400 text-white font-bold shadow-md shadow-cyan-500/20"
                              : "bg-slate-900 border-white/10 text-slate-400 hover:border-white/20"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Question 3 */}
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1.5">
                      3. Dedicated Daily Commitment:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: "fulltime", label: "Full Time (6–8 hrs/day)" },
                        { id: "parttime", label: "Part Time (3–4 hrs/day)" },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setCommitment(opt.id)}
                          className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                            commitment === opt.id
                              ? "bg-cyan-500/20 border-cyan-400 text-white font-bold shadow-md shadow-cyan-500/20"
                              : "bg-slate-900 border-white/10 text-slate-400 hover:border-white/20"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Assessment Result Box */}
                  <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-emerald-950/70 to-cyan-950/70 border border-emerald-500/40 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Eligible for Pay After Placement</span>
                      </span>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                        High Probability
                      </span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      Your profile qualifies for our <strong>{track.toUpperCase()}</strong> cohort with <strong>₹0 upfront tuition</strong>. Admissions include an interview and basic aptitude assessment.
                    </p>
                    <a
                      href="#contact"
                      className="mt-2 w-full py-2.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-lg shadow-emerald-500/20"
                    >
                      <span>Apply for PAP Fast-Track</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              </div>
            </div>

      </div>
    </div>
    </div>
  </section>
);
}
