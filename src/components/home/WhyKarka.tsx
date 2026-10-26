"use client";

import { 
  Wallet, 
  Sparkles, 
  Rocket, 
  Users, 
  Network, 
  LayoutGrid, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { academy } from "@/data/academy";
import { TiltCard3D } from "@/components/ui/TiltCard3D";

export function WhyKarka() {
  const iconMap: Record<string, React.ElementType> = {
    wallet: Wallet,
    sparkles: Sparkles,
    rocket: Rocket,
    users: Users,
    briefcase: Network,
    trophy: LayoutGrid,
  };

  return (
    <section id="why-karka" className="py-20 md:py-28 bg-[#050812] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exact Official Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <CheckCircle className="w-4 h-4 text-cyan-400" />
            <span>The Karka Academy Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Why <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">Karka?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            Six reasons ambitious learners in Nagercoil choose Karka over every other institute.
          </p>
        </div>

        {/* 3D Liquid Glass Bento Grid for 6 Exact Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academy.whyKarka.map((pillar) => {
            const Icon = iconMap[pillar.icon] || Sparkles;
            return (
              <TiltCard3D key={pillar.title} maxTilt={8} scale={1.025}>
                <div
                  className="h-full group relative p-7 rounded-3xl liquid-glass hover:border-cyan-400/50 transition-all duration-300 shadow-2xl flex flex-col justify-between"
                >
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-fuchsia-300 transition-all duration-300 shadow-inner">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      <span className="text-fuchsia-400 font-mono mr-1.5">{pillar.num}.</span>
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </TiltCard3D>
            );
          })}
        </div>

        {/* Liquid Glass Bottom Callout Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl liquid-glass-accent border border-purple-400/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1">
            <div className="text-white font-bold text-lg sm:text-xl flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Ready to transform your tech career with Zero Upfront Tuition?</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Visit our Nagercoil center for on-site lab tours or join our next online cohort session.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5"
            >
              <span>Schedule Free Counseling</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
