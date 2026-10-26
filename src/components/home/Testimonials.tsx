"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Star, 
  Quote, 
  Play, 
  Pause, 
  Building2, 
  ShieldCheck, 
  Award, 
  ArrowRight,
  Sparkles,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  RotateCcw,
  CheckCircle2
} from "lucide-react";
import { academy } from "@/data/academy";
import { TiltCard3D } from "@/components/ui/TiltCard3D";

export function Testimonials() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const activeLearner = academy.testimonials[activeStoryIndex];

  // Reset playback when switching student stories
  useEffect(() => {
    setIsPlaying(false);
    setVideoProgress(0);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [activeStoryIndex]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Autoplay with audio blocked; trying muted:", err);
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      });
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setVideoProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#050813] relative overflow-hidden border-t border-white/10">
      {/* Liquid morphing ambient background */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exact Official Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-fuchsia-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-fuchsia-400" />
            <span>Real Career Transformations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Voices of Our <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">Learners</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Hear directly from our graduates about how Karka transformed their careers and helped them land their dream jobs in tech.
          </p>
        </div>

        {/* Interactive Main Story Showcase (3 columns: Tabs List + Video Card + Detailed Quote) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column (3 cols): Up Next Story Selector Tabs with Real Photos */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0 scrollbar-none order-2 lg:order-1">
            <div className="hidden lg:flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
              <span>Up Next</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </div>

            {academy.testimonials.map((learner, idx) => {
              const isActive = idx === activeStoryIndex;
              return (
                <button
                  key={learner.id}
                  onClick={() => setActiveStoryIndex(idx)}
                  className={`p-3 rounded-2xl text-left transition-all shrink-0 w-48 lg:w-full flex items-center justify-between group ${
                    isActive
                      ? "liquid-glass-accent border-purple-400/60 shadow-xl shadow-purple-950/50 scale-[1.02]"
                      : "liquid-glass hover:border-white/20 text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-white/20 group-hover:scale-105 transition-transform">
                      <img
                        src={learner.image || "/images/students/stu1.webp"}
                        alt={learner.name}
                        className="w-full h-full object-cover object-top"
                      />
                      {isActive && (
                        <div className="absolute inset-0 bg-cyan-400/20 border border-cyan-400 rounded-xl" />
                      )}
                    </div>
                    <div className="truncate">
                      <div className={`text-xs font-bold truncate ${isActive ? "text-white" : "text-slate-300"}`}>
                        {learner.name}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">
                        {learner.role} • {learner.company}
                      </div>
                    </div>
                  </div>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Center Column (4 cols): Video/Reel Card with 3D Tilt & Real HTML5 Playback */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2">
            <TiltCard3D maxTilt={6} scale={1.02}>
              <div 
                className="relative w-full max-w-[290px] sm:max-w-[320px] h-[450px] rounded-3xl bg-[#090D1E] border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden preserve-3d flex flex-col justify-between p-4 group cursor-pointer"
                onClick={togglePlay}
              >
                
                {/* Real HTML5 Video Element */}
                <video
                  ref={videoRef}
                  src={activeLearner.videoUrl || "/videos/gabrielsamraj.mp4"}
                  playsInline
                  muted={isMuted}
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={() => setIsPlaying(false)}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    isPlaying ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                />

                {/* Animated Image Poster when paused */}
                {!isPlaying && (
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={activeLearner.image || "/images/students/gabriel.jpg"}
                      alt={activeLearner.name}
                      className="w-full h-full object-cover object-top filter brightness-[0.7] contrast-[1.1] scale-105 group-hover:scale-110 transition-transform duration-700 animate-pulse"
                      style={{ animationDuration: "6s" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/70" />
                  </div>
                )}

                {/* Top status bar: REC badge & Controls */}
                <div className="flex items-center justify-between relative z-20">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-white shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.9)]" />
                    <span>REC</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/* Sound Toggle */}
                    <button
                      onClick={toggleMute}
                      className="p-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-white hover:text-cyan-300 transition-colors shadow-lg"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>

                    {/* Fullscreen Modal trigger */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalOpen(true);
                      }}
                      className="p-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-white hover:text-cyan-300 transition-colors shadow-lg"
                      title="Fullscreen video player"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Center Content: Animated Play Button & Info Overlay */}
                <div className="relative z-20 flex flex-col items-center justify-center text-center my-auto">
                  {!isPlaying && (
                    <div className="relative mb-3 group-hover:scale-110 transition-transform">
                      {/* Pulse rings */}
                      <span className="absolute -inset-3 rounded-full bg-cyan-400/20 animate-ping" />
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-[2px] shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                        <div className="w-full h-full rounded-full bg-slate-950/90 flex items-center justify-center text-white">
                          <Play className="w-7 h-7 fill-cyan-400 text-cyan-400 ml-1" />
                        </div>
                      </div>
                    </div>
                  )}

                  {!isPlaying && (
                    <>
                      <h3 className="text-xl font-black text-white drop-shadow-md">
                        {activeLearner.name}
                      </h3>
                      <p className="text-xs text-cyan-300 font-mono mt-0.5 font-bold drop-shadow">
                        {activeLearner.role} • {activeLearner.company}
                      </p>
                      <span className="text-[10px] text-slate-300 mt-2 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                        Click anywhere to play video story
                      </span>
                    </>
                  )}

                  {isPlaying && (
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                      <Pause className="w-8 h-8 text-white fill-current" />
                    </div>
                  )}
                </div>

                {/* Bottom Card Tape Tag & Live Progress Bar */}
                <div className="relative z-20 space-y-2">
                  {/* Progress Bar */}
                  {isPlaying && (
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-md">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-150"
                        style={{ width: `${videoProgress}%` }}
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <div className="inline-block px-3 py-1 rounded-xl bg-white text-[#4a044e] font-black text-xs uppercase tracking-tight shadow-xl">
                      {activeLearner.name}
                    </div>
                    <span className="text-[10px] font-mono text-cyan-300 font-semibold bg-slate-950/80 px-2 py-0.5 rounded border border-white/10">
                      {isPlaying ? "Playing Official Reel" : "Video Story"}
                    </span>
                  </div>
                </div>

              </div>
            </TiltCard3D>
          </div>

          {/* Right Column (5 cols): Detailed Quote & Advantage Box */}
          <div className="lg:col-span-5 space-y-6 order-3">
            
            {/* Live Indicator */}
            <div className="flex items-center gap-2 text-xs font-black text-fuchsia-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>Now Playing</span>
            </div>

            {/* Learner Info */}
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                Karka Learner Success Story
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white">
                {activeLearner.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-cyan-400 font-semibold pt-1">
                <span>{activeLearner.role}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="text-slate-300">{activeLearner.company}</span>
              </div>
            </div>

            {/* Quote Box with Specular Liquid Glass Border */}
            <div className="relative p-6 rounded-3xl liquid-glass border-l-4 border-l-purple-400 shadow-xl">
              <Quote className="w-8 h-8 text-fuchsia-400/30 mb-2" />
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed italic font-normal">
                &ldquo;{activeLearner.quote}&rdquo;
              </p>
              
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="text-amber-400 flex items-center gap-1 font-bold">
                  ★ ★ ★ ★ ★ 5.0 Rating
                </span>
                <span className="text-purple-300 font-mono text-[11px] font-bold">
                  {activeLearner.highlight}
                </span>
              </div>
            </div>

            {/* The Karka Advantage Box with Play Reel Button */}
            <div className="p-5 rounded-2xl liquid-glass-accent flex items-start justify-between gap-3.5 border border-purple-400/30 shadow-lg">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-fuchsia-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-fuchsia-300 uppercase tracking-wider mb-1">
                    The Karka Advantage
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Watch how {activeLearner.name} transformed their career directly from our Nagercoil campus to {activeLearner.company}.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="shrink-0 px-3 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md transition-all hover:scale-105"
              >
                <span>Full Story</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Fullscreen Video Story Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-fadeIn"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-3xl rounded-3xl liquid-glass border border-white/20 p-4 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/20">
                  <img
                    src={activeLearner.image || "/images/students/stu1.webp"}
                    alt={activeLearner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {activeLearner.name} — Success Story Reel
                  </h3>
                  <p className="text-xs text-cyan-300 font-mono">
                    {activeLearner.role} • Placed at {activeLearner.company}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player in Modal */}
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center border border-white/10">
              <video
                ref={modalVideoRef}
                src={activeLearner.videoUrl || "/videos/gabrielsamraj.mp4"}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Karka Academy Graduate & Placement</span>
              </div>
              <span className="font-mono text-cyan-400">Nagercoil Campus</span>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

