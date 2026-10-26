"use client";

import { useState } from "react";
import { Hero } from "@/components/home/Hero";
import { HiringPartners } from "@/components/home/HiringPartners";
import { WhyKarka } from "@/components/home/WhyKarka";
import { JobReadinessPillars } from "@/components/home/JobReadinessPillars";
import { InternshipSection } from "@/components/home/InternshipSection";
import { PayAfterPlacement } from "@/components/home/PayAfterPlacement";
import { CoursesSection } from "@/components/home/CoursesSection";
import { AIAssessmentQuiz } from "@/components/home/AIAssessmentQuiz";
import { FlagshipPlatforms } from "@/components/home/FlagshipPlatforms";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactSection } from "@/components/home/ContactSection";
import { FaqSection } from "@/components/home/FaqSection";

export default function Home() {
  const [selectedCourseForApply, setSelectedCourseForApply] = useState<string>("");

  const handleSelectCourse = (courseTitle: string) => {
    setSelectedCourseForApply(courseTitle);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section with Liquid Glass 3D Terminal & Morphing Orbs */}
      <Hero />

      {/* 2. Verified Corporate Hiring Partners (Where Our Graduates Work) */}
      <HiringPartners />

      {/* 3. Why Karka Bento Grid: 6 Numbered Pillars */}
      <WhyKarka />

      {/* 4. 4 Pillars of a Job-Ready Career (Language, Scalable Apps, AI Skills, Interview) */}
      <JobReadinessPillars />

      {/* 5. Internship: Experience Before You Graduate */}
      <InternshipSection />

      {/* 6. Pay After You Get Hired Core Model & Interactive Calculator */}
      <PayAfterPlacement />

      {/* 7. Choose Your Career Track (All 9 official categories) */}
      <CoursesSection onSelectCourseForApply={handleSelectCourse} />

      {/* 8. Interactive 60-Second AI Career Matcher (3D Quiz) */}
      <AIAssessmentQuiz onSelectCourse={handleSelectCourse} />

      {/* 9. Flagship Platforms: Karka Infini AI & Spike AI Interactive Lab */}
      <FlagshipPlatforms />

      {/* 10. Voices of Our Learners (Gabriel Samraj & Alumni Stories) */}
      <Testimonials />

      {/* 11. Interactive FAQ Accordion */}
      <FaqSection />

      {/* 12. Admissions & Counseling Application Form */}
      <ContactSection initialCourse={selectedCourseForApply} />
    </div>
  );
}
