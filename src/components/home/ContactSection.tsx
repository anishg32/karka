"use client";

import { useState, useEffect } from "react";
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles,
  ExternalLink
} from "lucide-react";
import { academy } from "@/data/academy";
import { courses } from "@/data/courses";

interface ContactSectionProps {
  initialCourse?: string;
}

export function ContactSection({ initialCourse = "" }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: initialCourse || "mern-fullstack",
    qualification: "graduate",
    isPapInterested: true,
    message: "",
  });

  // Sync selected course when passed from CoursesSection or Quiz
  useEffect(() => {
    if (initialCourse) {
      const match = courses.find(
        (c) => c.title.toLowerCase().includes(initialCourse.toLowerCase()) || c.id === initialCourse
      );
      setFormData((prev) => ({
        ...prev,
        program: match ? match.id : prev.program,
      }));
    }
  }, [initialCourse]);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate real client submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#050812] relative overflow-hidden border-t border-white/10">
      {/* Liquid morphing ambient background */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-[#4a044e]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Admissions & Counseling</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Take the First Step Toward Your <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-300 bg-clip-text text-transparent">AI Tech Career</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Apply for our upcoming 2026 cohort with Pay After Placement or request a personalized career counseling session with an industry mentor at our Nagercoil center.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Campus Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl liquid-glass space-y-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white">
                Visit Our Center in Nagercoil
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We are proud to operate the premier exclusive AI Learning Center in Nagercoil, serving ambitious students and graduates across Kanyakumari and Tamil Nadu.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <strong className="text-white block mb-0.5">{academy.name}</strong>
                    <span>
                      {academy.address.street}, {academy.address.city}, {academy.address.state} — {academy.address.postalCode}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">Admissions Hotline:</span>
                    <a
                      href={`tel:${academy.phone}`}
                      className="text-white font-bold hover:text-cyan-400 transition-colors"
                    >
                      +91 94875 30243
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">Official Email:</span>
                    <a
                      href={`mailto:${academy.email}`}
                      className="text-white hover:text-cyan-400 transition-colors"
                    >
                      {academy.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">Working Hours:</span>
                    <span className="text-white font-medium">{academy.hours} (Mon–Sat)</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Chat Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/919487530243?text=Hi%20Karka%20Academy,%20I%20am%20interested%20in%20learning%20more%20about%20your%20Pay%20After%20Placement%20courses.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat with Admissions on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Pay After Placement Trust Badge */}
            <div className="p-4 rounded-2xl liquid-glass border border-cyan-500/30 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-cyan-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <strong className="text-white block">Admissions Aptitude Test:</strong>
                All applicants undergo an initial evaluation to verify track alignment. Zero upfront fees if accepted into the PAP cohort.
              </div>
            </div>

          </div>

          {/* Application Form (7 cols) */}
          <div className="lg:col-span-7 liquid-glass-accent rounded-3xl p-8 sm:p-10 shadow-2xl relative">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Application Received!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. An admissions mentor from Karka Academy will contact you at <strong className="text-cyan-400">{formData.phone}</strong> within 24 hours to schedule your introductory counseling session and aptitude assessment.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-cyan-400 underline font-semibold mt-4 block mx-auto"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Apply for Cohort 2026
                  </h3>
                  <p className="text-xs text-slate-400">
                    Fill out the form below and our counseling team will be in touch shortly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anandha Krishnan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all backdrop-blur-md"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all backdrop-blur-md"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all backdrop-blur-md"
                    />
                  </div>

                  {/* Program Selection */}
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Preferred Program *
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/15 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all backdrop-blur-md"
                    >
                      {courses.map((c) => (
                        <option key={c.id} value={c.id} className="bg-slate-900 text-white">
                          {c.title} ({c.duration})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Qualification */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Highest Educational Qualification *
                  </label>
                  <select
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/15 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all backdrop-blur-md"
                  >
                    <option value="graduate" className="bg-slate-900 text-white">Graduate (B.E, B.Tech, B.Sc, B.Com, BCA, Arts)</option>
                    <option value="final_year" className="bg-slate-900 text-white">College Final Year Student</option>
                    <option value="pre_final" className="bg-slate-900 text-white">College Pre-Final Year Student</option>
                    <option value="professional" className="bg-slate-900 text-white">Working Professional (Switching to Tech/AI)</option>
                    <option value="school" className="bg-slate-900 text-white">School Student</option>
                  </select>
                </div>

                {/* Pay After Placement Checkbox */}
                <div className="p-4 rounded-2xl liquid-glass border border-emerald-500/30 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="papCheckbox"
                    checked={formData.isPapInterested}
                    onChange={(e) => setFormData({ ...formData, isPapInterested: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-gray-700 text-cyan-500 focus:ring-cyan-400"
                  />
                  <label htmlFor="papCheckbox" className="text-xs text-slate-300 cursor-pointer">
                    <strong className="text-emerald-400 block font-bold">Apply for Pay After Placement (Zero Upfront Tuition)</strong>
                    Check this box if you wish to be evaluated for our ₹0 upfront payment model.
                  </label>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Questions or Specific Goals (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your learning background or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all backdrop-blur-md resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-cyan-500/25"
                >
                  {submitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Application for Review</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
