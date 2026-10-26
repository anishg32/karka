import Link from "next/link";
import { 
  Terminal, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  Heart,
  Globe
} from "lucide-react";
import { academy } from "@/data/academy";
import { courseCategories } from "@/data/courses";

export function Footer() {
  return (
    <footer className="bg-[#050811] text-slate-300 border-t border-white/10 relative overflow-hidden pt-16 pb-12">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="p-2 rounded-xl bg-white/95 border border-white/40 shadow-lg group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] group-hover:scale-105 transition-all duration-300">
                <img
                  src="/logo.png"
                  alt="Karka AI & Tech Academy Original Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The exclusive AI Learning Center in Nagercoil. Empowering graduates and college students with career-ready Full Stack, Generative AI, and Data Science mastery through our revolutionary Pay After Placement program.
            </p>

            {/* Placement Partners ticker badge */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Hiring Partners</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {academy.placementPartners.map((partner) => (
                  <span
                    key={partner}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-medium hover:border-cyan-500/40 transition-colors"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Programs</span>
            </h4>
            <ul className="space-y-2 text-sm">
              {courseCategories.map((cat) => (
                <li key={cat.slug}>
                  <a
                    href="#courses"
                    className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-cyan-500/50 text-xs">›</span>
                    <span>{cat.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#pay-after-placement"
                  className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-emerald-500/50 text-xs">›</span>
                  <span>Pay After Placement (PAP)</span>
                </a>
              </li>
              <li>
                <a
                  href="#career-matcher"
                  className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-cyan-500/50 text-xs">›</span>
                  <span>AI Career Matcher Quiz</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Ecosystem Platforms */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>Ecosystem</span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://infini.karka.academy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <div className="flex items-center justify-between text-white font-semibold text-xs group-hover:text-cyan-300">
                    <span>Karka Infini AI</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-cyan-300" />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Inter-college competition • ₹1,00,000 Prize Pool
                  </p>
                </a>
              </li>

              <li>
                <a
                  href="https://spike.karka.academy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <div className="flex items-center justify-between text-white font-semibold text-xs group-hover:text-purple-300">
                    <span>Spike AI</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-purple-300" />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    AI-powered adaptive learning & coding lab
                  </p>
                </a>
              </li>

              <li>
                <a
                  href="#why-karka"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-xs flex items-center gap-1"
                >
                  <span>› 1-on-1 Mentorship Model</span>
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-xs flex items-center gap-1"
                >
                  <span>› Admission & Placement FAQ</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Campus Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>Campus & Contact</span>
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  {academy.name}<br />
                  Nagercoil, Kanyakumari District<br />
                  Tamil Nadu — 629001, India
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${academy.phone}`}
                  className="hover:text-cyan-400 transition-colors font-medium"
                >
                  +91 94875 30243
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${academy.email}`}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {academy.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>{academy.hours} (Mon–Sat)</span>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center gap-2.5">
                <a
                  href={academy.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/10 transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={academy.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href={academy.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Competition & Attribution Banner */}
        <div className="mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© 2026 {academy.name}. All rights reserved.</span>
            <span>•</span>
            <span className="text-slate-500">Nagercoil, Tamil Nadu</span>
          </div>

          {/* Team NEXORA LABS Credit Banner */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-950/60 via-purple-950/60 to-slate-900 border border-cyan-500/30 text-slate-200">
            <span className="text-cyan-400 font-bold">NEXORA LABS</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300 tracking-wide">Innovate. Design. Transform.</span>
            <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded font-mono">
              Redesign 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
