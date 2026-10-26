"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, Search, PhoneCall, Sparkles } from "lucide-react";
import { faqItems, academy } from "@/data/academy";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredFaqs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#070B18] relative overflow-hidden border-t border-white/10">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Frequently Asked <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-300 bg-clip-text text-transparent">Questions</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal">
            Everything you need to know about our Pay After Placement model, course structure, mentor support, and placement assistance.
          </p>

          {/* Search FAQ */}
          <div className="relative max-w-md mx-auto pt-2">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. fees, placement, eligibility)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all backdrop-blur-md"
            />
          </div>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-sm">
              No matching answers found. Try a different keyword or call our team directly!
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "liquid-glass-accent border-cyan-400/50 shadow-xl shadow-cyan-950/30"
                      : "liquid-glass hover:border-white/25"
                  }`}
                >
                  <button
                    onClick={() => toggleIndex(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/20 to-slate-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-white">Still have questions?</div>
            <div className="text-xs text-slate-400">Our academic counselors in Nagercoil are happy to help you.</div>
          </div>
          <a
            href={`tel:${academy.phone}`}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center gap-2 border border-white/10 transition-colors shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
            <span>Call +91 94875 30243</span>
          </a>
        </div>

      </div>
    </section>
  );
}
