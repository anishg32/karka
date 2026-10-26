"use client";

import { useState } from "react";
import { 
  ShieldCheck, 
  Building2, 
  Briefcase, 
  Award, 
  Sparkles,
  Pause,
  Play,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { academy } from "@/data/academy";

export function HiringPartners() {
  const [isPaused, setIsPaused] = useState(false);

  const partnerDetails = [
    { name: "Amazon", logo: "/images/partners/amazon.webp", role: "Cloud & Software", range: "₹6–14 LPA", tier: "Global Leader" },
    { name: "TCS", logo: "/images/partners/tcs.webp", role: "Fullstack Engineers", range: "₹4–8 LPA", tier: "Top IT Enterprise" },
    { name: "HCL", logo: "/images/partners/hcl.webp", role: "Software Engineering", range: "₹4.5–9 LPA", tier: "Tech Giant" },
    { name: "Matrimony", logo: "/images/partners/matrimony.webp", role: "MERN & React Devs", range: "₹4–7 LPA", tier: "Consumer Tech" },
    { name: "Novac", logo: "/images/partners/novac.webp", role: "AI & Fullstack Devs", range: "₹4–8 LPA", tier: "Digital Partner" },
    { name: "Capecom", logo: "/images/partners/capecom.webp", role: "Backend & Cloud Devs", range: "₹3.8–6.5 LPA", tier: "Enterprise Solutions" },
    { name: "Flow", logo: "/images/partners/flow.webp", role: "UI/UX & Frontend Devs", range: "₹4–7.5 LPA", tier: "Design & Product" },
    { name: "Sodisys", logo: "/images/partners/sodisys.webp", role: "Data & Python Devs", range: "₹4–7 LPA", tier: "Data Analytics" },
  ];

  const recentPlacements = [
    { student: "Gabriel Samraj", company: "Leading Tech Firm", role: "Frontend Developer", img: "/images/students/gabriel.jpg", tag: "PAP Graduate" },
    { student: "Prabin", company: "Capecom", role: "Full Stack Developer", img: "/images/students/stu1.webp", tag: "₹0 Upfront" },
    { student: "Shiju", company: "Novac", role: "AI & Data Engineer", img: "/images/students/stu3.webp", tag: "PAP Graduate" },
    { student: "Kishore", company: "TCS", role: "React Developer", img: "/images/students/stu1.webp", tag: "Placed 2026" },
    { student: "Sridevi", company: "Flow", role: "UI/UX Designer", img: "/images/students/sridevi.jpg", tag: "PAP Graduate" },
    { student: "Praveen K.", company: "Amazon Partner", role: "Cloud Software Engineer", img: "/images/students/stu3.webp", tag: "Placed 2026" },
    { student: "Ananya M.", company: "HCL", role: "Software Engineer", img: "/images/students/ananya.jpg", tag: "₹0 Upfront" },
    { student: "Dinesh S.", company: "Matrimony", role: "MERN Developer", img: "/images/students/stu1.webp", tag: "Placed 2026" },
  ];

  // Double arrays to ensure a 100% seamless, infinite moving marquee loop
  const marqueeRow1 = [...partnerDetails, ...partnerDetails];
  const marqueeRow2 = [...recentPlacements, ...recentPlacements];

  return (
    <section className="py-14 sm:py-18 border-y border-white/10 bg-[#060914] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Official Header with Marquee Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Where Our Learners are Making an Impact</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Where Our <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">Karka Graduates Work</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              From classrooms in Nagercoil to careers across India, our students are making their mark at leading tech companies.
            </p>
            
            {/* Pause / Play Control Toggle */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full liquid-glass-pill border border-white/20 text-xs font-mono text-cyan-300 hover:text-white hover:border-cyan-400/50 transition-all shrink-0 self-start sm:self-auto cursor-pointer"
              title={isPaused ? "Resume continuous animation" : "Pause moving animation"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                  <span>Resume Motion</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                  <span>Pause Motion</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>

      {/* Full-bleed Moving Marquee Track Area */}
      <div className="relative w-full overflow-hidden space-y-4 py-2">
        
        {/* Balanced Edge Fade Masks (soft subtle vignette, avoids darkening cards) */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#060914] to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#060914] to-transparent z-20" />

        {/* Row 1: Forward Moving Animation (Company Partner Tiles) */}
        <div className={`flex gap-4 sm:gap-6 animate-marquee w-max ${isPaused ? "animation-paused" : ""}`}>
          {marqueeRow1.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="group relative w-[210px] sm:w-[240px] p-4 rounded-2xl liquid-glass hover:border-cyan-400/60 transition-all duration-300 flex flex-col items-center justify-center text-center shadow-lg hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] shrink-0 cursor-pointer"
            >
              <div className="w-full h-14 rounded-xl bg-white/95 p-2 flex items-center justify-center mb-2.5 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all">
                <img
                  src={partner.logo}
                  alt={`${partner.name} official partner`}
                  className="max-h-9 max-w-[120px] w-auto object-contain filter drop-shadow-sm"
                />
              </div>

              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {partner.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <span className="text-xs text-slate-300 line-clamp-1">
                {partner.role}
              </span>

              <div className="mt-2.5 pt-2 border-t border-white/10 w-full flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span className="text-purple-300">{partner.tier}</span>
                <span className="text-cyan-300 font-semibold">{partner.range}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Reverse Moving Animation (Verified Placement Ticker with Premium Styling) */}
        <div className={`flex gap-3 sm:gap-4 animate-marquee-reverse w-max ${isPaused ? "animation-paused" : ""}`}>
          {marqueeRow2.map((placement, idx) => (
            <div
              key={`${placement.student}-${idx}`}
              className="group flex items-center gap-3.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-slate-900/95 via-slate-850/90 to-slate-900/95 border border-white/15 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 shrink-0 shadow-lg hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] cursor-pointer backdrop-blur-xl"
            >
              {/* Student Avatar with Crisp Framing & Status Dot */}
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-2 ring-white/20 group-hover:ring-cyan-400/60 shadow-md shrink-0 bg-slate-800">
                <img
                  src={placement.img}
                  alt={placement.student}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-950" />
              </div>

              {/* Student Name, Placement Details, Role */}
              <div className="text-left text-xs whitespace-nowrap flex items-center gap-2">
                <span className="font-bold text-white group-hover:text-cyan-300 transition-colors text-sm">
                  {placement.student}
                </span>

                <span className="text-slate-400 text-xs">placed at</span>

                <span className="font-bold text-cyan-300 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-400/30 text-xs shadow-inner">
                  {placement.company}
                </span>

                <span className="text-slate-300 text-xs font-medium">
                  • {placement.role}
                </span>
              </div>

              {/* Verified Outcome Badge */}
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 text-[11px] font-semibold tracking-tight shadow-sm shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {placement.tag}
              </span>
            </div>
          ))}
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-6">
        {/* Liquid Glass Highlight Banner */}
        <div className="p-4 rounded-2xl liquid-glass-accent flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-fuchsia-300 flex items-center justify-center shrink-0 border border-purple-400/30">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-slate-200">
              <strong className="text-white">Pay After You Get Hired:</strong> Zero upfront tuition. You only pay your course fees after you successfully secure a verified tech job.
            </div>
          </div>
          <a
            href="#pay-after-placement"
            className="shrink-0 font-bold text-cyan-300 hover:text-white flex items-center gap-1.5 underline underline-offset-4"
          >
            <span>Learn About the PAP Agreement</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

    </section>
  );
}
