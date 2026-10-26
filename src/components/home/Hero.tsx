"use client";

import { useState, useCallback, useRef } from "react";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Code2, 
  ShieldCheck, 
  Cpu, 
  TrendingUp,
  Zap,
  Layers,
  Award,
  Play
} from "lucide-react";

export function Hero() {
  const [activeCodeTab, setActiveCodeTab] = useState<"genai" | "fullstack" | "data">("genai");
  const terminalRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});

  // 3D Mouse Parallax Tilt for Terminal Window
  const handleTerminalMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!terminalRef.current) return;
    const rect = terminalRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTiltStyle({
      transform: `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(10px)`,
      transition: "transform 0.1s cubic-bezier(0.23, 1, 0.32, 1)",
    });
  }, []);

  const handleTerminalMouseLeave = useCallback(() => {
    setTiltStyle({
      transform: "perspective(1200px) rotateX(4deg) rotateY(-4deg) translateZ(0px)",
      transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
    });
  }, []);

  const codeSnippets = {
    genai: {
      filename: "ai_agent.py",
      lang: "Python 3.12 + LangChain",
      lines: [
        "# Karka Academy: Gen AI Mastery Track",
        "from karka_ai import LLMAgent, RAGPipeline",
        "",
        "agent = LLMAgent(",
        "    role='Senior Software Architect',",
        "    tools=['code_interpreter', 'vector_search'],",
        "    model='gemini-2.5-flash'",
        ")",
        "",
        "# Run multi-agent autonomous workflow",
        "result = agent.solve_ticket('Scale microservice to 100k QPS')",
        "print(f'✅ Deployment verified: {result.status}')",
      ],
      output: "⚡ Output: Optimized Kubernetes manifest generated & test suites passed (100% test coverage)",
    },
    fullstack: {
      filename: "server.ts",
      lang: "TypeScript + Next.js + Node",
      lines: [
        "// Karka Academy: MERN Fullstack Track",
        "import { auth, db } from '@karka/cloud';",
        "import { NextRequest, NextResponse } from 'next/server';",
        "",
        "export async function POST(req: NextRequest) {",
        "  const student = await auth.verifySession(req);",
        "  const cohort = await db.enrollment.create({",
        "    data: { studentId: student.id, track: 'AI_FULLSTACK', pap: true }",
        "  });",
        "  return NextResponse.json({ success: true, tuitionDue: 0 });",
        "}",
      ],
      output: "🚀 Status 200: Pay After Placement confirmed • Upfront Cost: ₹0",
    },
    data: {
      filename: "pipeline.py",
      lang: "PySpark + BigQuery",
      lines: [
        "# Karka Academy: Data Science & AI Track",
        "from pyspark.sql import SparkSession",
        "from karka.ml import ModelEvaluator",
        "",
        "spark = SparkSession.builder.appName('KarkaETL').getOrCreate()",
        "df = spark.read.parquet('gs://karka-data-lake/telemetry/')",
        "model = ModelEvaluator.train_xgboost(df, target='churn')",
        "",
        "print(f'Model Accuracy: {model.roc_auc:.4f} | Latency: 4.2ms')",
      ],
      output: "📊 ROC-AUC: 0.9842 • Ready for real-time production inference",
    },
  };

  const currentSnippet = codeSnippets[activeCodeTab];

  return (
    <section className="relative pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden">
      {/* ─── LIQUID GLASS AMBIENT MORPHING ORBS ─── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] pointer-events-none overflow-hidden">
        <div className="liquid-orb-cyan absolute -top-24 left-1/4 w-[480px] h-[480px] bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-transparent rounded-full blur-[110px]" />
        <div className="liquid-orb-purple absolute top-1/4 right-1/4 w-[520px] h-[520px] bg-gradient-to-br from-fuchsia-600/20 via-purple-600/15 to-transparent rounded-full blur-[130px]" />
        <div className="absolute -bottom-10 left-1/3 w-[360px] h-[360px] bg-[#4a044e]/25 rounded-full blur-[120px]" />
      </div>


      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Official Heading & Audience Tracks */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tag pill with exact official center copy */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-pill text-cyan-300 text-xs sm:text-sm font-semibold shadow-inner">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>The one and only exclusive AI Learning Center in Nagercoil</span>
            </div>

            {/* Main Title - Exact Official Branding */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.08]">
                <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  AI-Driven
                </span>
                <br />
                <span className="text-white">Software Developer</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Master Full Stack Development, Generative AI, and Data Science through hands-on capstone projects and working industry mentorship in Nagercoil. <strong className="text-white font-semibold">Zero upfront tuition fees</strong> with our Pay After Placement program.
            </p>

            {/* 4 Audience Tracks - Exact from official site */}
            <div className="pt-1">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">
                Targeted Learning Tracks:
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {[
                  { label: "School Students", desc: "Ages 10–17", href: "#courses" },
                  { label: "College Students", desc: "Internships", href: "#courses" },
                  { label: "Graduates", desc: "Pay After Placement", href: "#pay-after-placement", highlight: true },
                  { label: "Professionals", desc: "Upskilling", href: "#courses" },
                ].map((aud) => (
                  <a
                    key={aud.label}
                    href={aud.href}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      aud.highlight
                        ? "bg-purple-950/80 border border-purple-500/50 text-purple-200 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-900/30"
                        : "liquid-glass text-slate-300 hover:text-white hover:border-cyan-400/40"
                    }`}
                  >
                    <span>{aud.label}</span>
                    <span className="text-[10px] text-slate-400 font-mono">({aud.desc})</span>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#4a044e] via-[#6d1373] to-purple-600 hover:from-[#5e0563] hover:to-purple-500 shadow-xl shadow-purple-950/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group border border-purple-400/30"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#pay-after-placement"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-cyan-300 liquid-glass hover:bg-white/10 hover:border-cyan-400/50 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Pay After You Get Hired (₹0)</span>
              </a>
            </div>

            {/* Value checklist */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% Placement Support</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Upfront Tuition Fees</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-fuchsia-400 shrink-0" />
                <span>Real Client Internships</span>
              </div>
            </div>

            {/* 3D Animated Liquid Glass Stats Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-3 text-left">
              <div className="p-3.5 rounded-2xl liquid-glass hover:border-cyan-500/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-white">800+</div>
                <div className="text-xs text-slate-400 font-medium">Students Enrolled</div>
              </div>
              <div className="p-3.5 rounded-2xl liquid-glass hover:border-fuchsia-500/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-400 to-cyan-400">₹1,00,000</div>
                <div className="text-xs text-slate-400 font-medium">Infini AI Prize Pool</div>
              </div>
              <div className="p-3.5 rounded-2xl liquid-glass hover:border-cyan-500/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-white flex items-center gap-1">
                  <span>4.8</span>
                  <span className="text-amber-400 text-sm">★</span>
                </div>
                <div className="text-xs text-slate-400 font-medium">200+ Verified Ratings</div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Terminal Simulator */}
          <div className="lg:col-span-5 relative perspective-1500 mt-8 lg:mt-0">
            
            {/* Properly Anchored Floating Satellite Badges */}
            <div className="hidden xl:flex absolute -top-5 -left-6 z-20 pointer-events-none animate-float-3d">
              <div className="px-3.5 py-1.5 rounded-2xl liquid-glass text-cyan-300 text-xs font-mono shadow-2xl flex items-center gap-2 border border-cyan-400/30 backdrop-blur-xl">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>AI-Powered Curriculum</span>
              </div>
            </div>

            <div className="hidden xl:flex absolute -bottom-5 -right-6 z-20 pointer-events-none animate-float-3d-reverse">
              <div className="px-3.5 py-1.5 rounded-2xl liquid-glass text-fuchsia-300 text-xs font-mono shadow-2xl flex items-center gap-2 border border-purple-400/30 backdrop-blur-xl">
                <Award className="w-3.5 h-3.5 text-fuchsia-400" />
                <span>100% Placement Support</span>
              </div>
            </div>

            {/* Ambient Background Aura */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/30 rounded-3xl blur-2xl opacity-70 transition duration-500 pointer-events-none" />

            {/* 3D Tilting Terminal Container */}
            <div
              ref={terminalRef}
              onMouseMove={handleTerminalMouseMove}
              onMouseLeave={handleTerminalMouseLeave}
              style={{
                transform: "perspective(1200px) rotateX(4deg) rotateY(-4deg)",
                ...tiltStyle,
              }}
              className="relative rounded-2xl liquid-glass border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden preserve-3d"
            >
              
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-[#0D142A] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm"></span>
                  <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>karka-dev-env ~ v2.6</span>
                  </span>
                </div>
                
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">
                  Interactive 3D Preview
                </span>
              </div>

              {/* Track Selector Tabs */}
              <div className="flex border-b border-white/10 bg-[#070B18]">
                <button
                  onClick={() => setActiveCodeTab("genai")}
                  className={`flex-1 py-2 px-3 text-xs font-mono transition-colors flex items-center justify-center gap-1.5 border-b-2 ${
                    activeCodeTab === "genai"
                      ? "border-cyan-400 text-cyan-300 bg-white/5 font-semibold"
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Gen AI</span>
                </button>
                <button
                  onClick={() => setActiveCodeTab("fullstack")}
                  className={`flex-1 py-2 px-3 text-xs font-mono transition-colors flex items-center justify-center gap-1.5 border-b-2 ${
                    activeCodeTab === "fullstack"
                      ? "border-blue-400 text-blue-300 bg-white/5 font-semibold"
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Full Stack</span>
                </button>
                <button
                  onClick={() => setActiveCodeTab("data")}
                  className={`flex-1 py-2 px-3 text-xs font-mono transition-colors flex items-center justify-center gap-1.5 border-b-2 ${
                    activeCodeTab === "data"
                      ? "border-purple-400 text-purple-300 bg-white/5 font-semibold"
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Data Science</span>
                </button>
              </div>

              {/* Code Content Box */}
              <div className="p-4 font-mono text-xs text-slate-300 overflow-x-auto min-h-[250px] bg-[#070B18]/95">
                <div className="flex justify-between items-center text-slate-500 pb-2 mb-2 border-b border-white/5 text-[11px]">
                  <span>{currentSnippet.filename}</span>
                  <span className="text-cyan-400/80">{currentSnippet.lang}</span>
                </div>

                <div className="space-y-1">
                  {currentSnippet.lines.map((line, idx) => (
                    <div key={idx} className="flex">
                      <span className="w-6 text-slate-600 select-none text-right pr-3 shrink-0">
                        {idx + 1}
                      </span>
                      <span
                        className={
                          line.startsWith("#") || line.startsWith("//")
                            ? "text-slate-500 italic"
                            : line.includes("import") || line.includes("from")
                            ? "text-purple-400"
                            : line.includes("LLMAgent") || line.includes("POST") || line.includes("SparkSession")
                            ? "text-cyan-300 font-semibold"
                            : line.includes("true") || line.includes("0")
                            ? "text-emerald-400"
                            : "text-slate-200"
                        }
                      >
                        {line}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Output Console Box */}
                <div className="mt-4 p-2.5 rounded-lg bg-slate-950/90 border border-emerald-500/30 text-emerald-400 text-[11px] flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                  <span className="font-sans font-medium">{currentSnippet.output}</span>
                </div>
              </div>

              {/* Floating Verified Placement Notification Card */}
              <div className="p-3 bg-gradient-to-r from-slate-900 to-[#0F172A] border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
                    PK
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <span>Praveen K.</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/30">
                        Placed
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Cloud Software Engineer • Amazon Partner
                    </div>
                  </div>
                </div>

                <a
                  href="#testimonials"
                  className="text-[11px] text-cyan-400 hover:text-cyan-300 font-semibold underline"
                >
                  Read Story &rarr;
                </a>
              </div>

            </div>

            {/* Bottom Floating Technology Pills */}
            <div className="mt-3 flex items-center justify-center gap-2 text-center">
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Hover to tilt in 3D • Powered by Spike AI</span>
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
