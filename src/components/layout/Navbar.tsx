"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Menu, 
  X, 
  ChevronRight, 
  PhoneCall,
  Terminal,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { academy } from "@/data/academy";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

interface NavbarProps {
  onOpenApply?: () => void;
}

export function Navbar({ onOpenApply }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Programs", href: "#courses" },
    { label: "Why Karka", href: "#why-karka" },
    { label: "Internship", href: "#internship" },
    { label: "Pay After Placement", href: "#pay-after-placement", badge: "0 Fees" },
    { label: "Career Matcher", href: "#career-matcher" },
    { label: "Infini AI", href: "#infini-ai", highlight: true },
    { label: "FAQs", href: "#faq" },
  ];

  return (
    <>
      {/* 3D Glowing Scroll Progress Line */}
      <ScrollProgress />

      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        
        {/* Top Admissions Announcement Banner */}
        {bannerVisible && (
          <div className="bg-gradient-to-r from-cyan-950 via-blue-950 to-purple-950 border-b border-cyan-500/20 py-1.5 px-4 text-center text-xs text-slate-300 relative">
            <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span className="text-slate-300">
                <strong className="text-cyan-300 font-semibold">Admissions Open 2026:</strong>{" "}
                Full Stack, Generative AI & Data Science with <strong className="text-white">Pay After Placement</strong>.
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 font-bold text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-2 ml-1"
              >
                <span>Reserve Spot</span>
                <ArrowRight className="w-3 h-3" />
              </a>
              <button
                onClick={() => setBannerVisible(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                aria-label="Dismiss banner"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Main Navbar Bar */}
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-[#070B18]/95 backdrop-blur-xl border-b border-white/10 py-2.5 shadow-2xl shadow-cyan-950/30"
              : "bg-[#070B18]/60 backdrop-blur-md border-b border-white/5 py-3.5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              
              {/* Original Official Brand Logo with Hover Glow & Animation */}
              <Link href="/" className="flex items-center gap-3 group shrink-0">
                <div className="relative p-1.5 sm:p-2 rounded-xl bg-white/95 border border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] group-hover:scale-105 transition-all duration-300 flex items-center justify-center backdrop-blur-md">
                  <img
                    src="/logo.png"
                    alt="Karka AI & Tech Academy Original Logo"
                    className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="hidden sm:flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black tracking-wider text-white uppercase group-hover:text-cyan-300 transition-colors">
                      Nagercoil Hub
                    </span>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-cyan-400 font-mono tracking-tight">
                    Exclusive AI Learning Center
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation Links - No Wrapping */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2 liquid-glass rounded-full px-3.5 py-1.5 shadow-inner">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-xs xl:text-sm font-semibold px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                      link.highlight
                        ? "text-cyan-300 hover:text-white hover:bg-cyan-500/20"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        {link.badge}
                      </span>
                    )}
                  </a>
                ))}
              </nav>

              {/* Right Action Buttons */}
              <div className="hidden sm:flex items-center gap-3 shrink-0">
                <a
                  href={`tel:${academy.phone}`}
                  className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 whitespace-nowrap"
                  title="Call Admissions Hotline"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                  <span>+91 94875 30243</span>
                </a>

                <a
                  href="#contact"
                  className="relative group inline-flex items-center justify-center p-0.5 overflow-hidden rounded-xl font-bold text-xs tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 shrink-0"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl"></span>
                  <span className="relative px-4 py-2 transition-all ease-in duration-200 bg-[#070B18] rounded-[10px] group-hover:bg-opacity-0 text-white flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white" />
                    <span>Apply for PAP</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
              </div>

              {/* Mobile Menu Toggle Button */}
              <div className="flex lg:hidden items-center gap-2">
                <a
                  href="#contact"
                  className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:opacity-90 transition-opacity"
                >
                  Apply
                </a>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#070B18]/98 border-b border-white/10 backdrop-blur-2xl px-5 pt-3 pb-6 space-y-3 shadow-2xl animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-cyan-400"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={`tel:${academy.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-semibold text-slate-300"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <span>Admissions: +91 94875 30243</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Apply for Cohort 2026</span>
              </a>
            </div>
          </div>
        )}

      </header>
    </>
  );
}
