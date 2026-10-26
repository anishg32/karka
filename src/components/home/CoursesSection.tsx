"use client";

import { useState } from "react";
import { 
  courses, 
  courseCategories, 
  Course 
} from "@/data/courses";
import { CourseModal } from "./CourseModal";
import { TiltCard3D } from "@/components/ui/TiltCard3D";
import { 
  Search, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  Layers, 
  GraduationCap, 
  Filter, 
  CheckCircle2, 
  Code,
  Laptop
} from "lucide-react";

interface CoursesSectionProps {
  onSelectCourseForApply?: (courseTitle: string) => void;
}

export function CoursesSection({ onSelectCourseForApply }: CoursesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedAudience, setSelectedAudience] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalCourse, setActiveModalCourse] = useState<Course | null>(null);

  // Filter logic
  const filteredCourses = courses.filter((course) => {
    // Category match
    const categoryMatch =
      selectedCategory === "all" || course.categorySlug === selectedCategory;

    // Audience match
    const audienceMatch =
      selectedAudience === "all" ||
      (selectedAudience === "graduates" && course.audience.includes("Graduates")) ||
      (selectedAudience === "college" && course.audience.includes("College Students"));

    // Search query match (title, description, skills)
    const query = searchQuery.toLowerCase().trim();
    const searchMatch =
      !query ||
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query) ||
      course.skills.some((s) => s.toLowerCase().includes(query));

    return categoryMatch && audienceMatch && searchMatch;
  });

  const handleApplyClick = (courseTitle: string) => {
    if (onSelectCourseForApply) {
      onSelectCourseForApply(courseTitle);
    }
    // Also scroll smoothly to contact section
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="courses" className="py-20 md:py-28 bg-[#050813] relative overflow-hidden">
      {/* 3D Background radial gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Career-Ready Technology Curriculum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Choose Your <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">Career Track</span>
            </h2>
            <p className="text-base text-slate-300 mt-2 max-w-xl font-normal">
              Specialized internships and training pathways designed to launch your tech career.
            </p>
          </div>

          {/* Quick Audience Switcher */}
          <div className="flex items-center gap-1.5 p-1 liquid-glass rounded-2xl shrink-0">
            <button
              onClick={() => setSelectedAudience("all")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                selectedAudience === "all"
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Audiences
            </button>
            <button
              onClick={() => setSelectedAudience("graduates")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                selectedAudience === "graduates"
                  ? "bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-bold shadow-md shadow-purple-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Graduates (PAP)
            </button>
            <button
              onClick={() => setSelectedAudience("college")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                selectedAudience === "college"
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              College Students
            </button>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/25 font-bold"
                  : "liquid-glass text-slate-300 hover:text-white hover:border-white/20"
              }`}
            >
              All Programs ({courses.length})
            </button>

            {courseCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  selectedCategory === cat.slug
                    ? "bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/25 font-bold"
                    : "liquid-glass text-slate-300 hover:text-white hover:border-white/20"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box with liquid glass styling */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Python, React, Gen AI..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl liquid-glass text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors shadow-inner"
            />
          </div>

        </div>

        {/* Courses Cards Grid with 3D Tilt */}
        {filteredCourses.length === 0 ? (
          <div className="p-12 text-center rounded-3xl liquid-glass border border-white/10 space-y-3">
            <p className="text-slate-400 text-sm">
              No programs found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedAudience("all");
              }}
              className="text-xs text-cyan-400 hover:underline font-semibold"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <TiltCard3D key={course.id} maxTilt={7} scale={1.025}>
                <div
                  className="h-full group relative flex flex-col justify-between p-7 rounded-3xl liquid-glass hover:border-cyan-400/50 transition-all duration-300 shadow-xl hover:shadow-cyan-950/50"
                >
                  {/* Featured Badge */}
                  {course.featured && (
                    <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-extrabold text-[10px] tracking-wide shadow-lg border border-white/20">
                      POPULAR COHORT
                    </div>
                  )}

                  <div>
                    {/* Category & Duration Row */}
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="font-semibold text-cyan-400">
                        {course.category}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400 font-mono text-[11px] bg-slate-900 px-2 py-0.5 rounded border border-white/5">
                        <Clock className="w-3 h-3 text-cyan-400" />
                        {course.duration}
                      </span>
                    </div>

                    {/* Course Title */}
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                      {course.description}
                    </p>

                    {/* Skills badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {course.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 group-hover:border-cyan-500/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                      {course.skills.length > 4 && (
                        <span className="text-[10px] text-slate-500 px-1 py-0.5">
                          +{course.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer details & Action Buttons */}
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                        <span>{course.audience}</span>
                      </span>
                      <span className="text-emerald-400 font-semibold">
                        {course.audience.includes("Graduates") ? "PAP Available" : "Live Mentored"}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setActiveModalCourse(course)}
                        className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 hover:border-cyan-500/30 font-semibold text-xs transition-colors text-center"
                      >
                        Curriculum
                      </button>
                      <button
                        onClick={() => handleApplyClick(course.title)}
                        className="w-full py-2 px-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 border border-cyan-500/30 font-bold text-xs transition-all flex items-center justify-center gap-1 shadow-sm hover:shadow-cyan-500/25"
                      >
                        <span>Enroll</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                </div>
              </TiltCard3D>
            ))}
          </div>
        )}

      </div>

      {/* Curriculum Modal */}
      <CourseModal
        course={activeModalCourse}
        onClose={() => setActiveModalCourse(null)}
        onApply={(title) => handleApplyClick(title)}
      />
    </section>
  );
}
