import React, { useState, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Users,
  Wifi,
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Sliders,
  Maximize2,
  Info,
  Layers,
  Volume2,
  Cpu,
  Bot,
  RotateCcw,
  Check,
  X,
} from "lucide-react";
import { GlassButton } from "@/components/animations/GlassButton";
import heroImage from "@/assets/hero-classroom.webp";
import smartBoardImg from "@/assets/smart-board.webp";
import displayPanelImg from "@/assets/display-panel.webp";

// ─── 1. Interactive Before / After Slider ────────────────────────────────────
function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative w-full max-w-4xl mx-auto h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-strong border border-border select-none cursor-ew-resize group"
    >
      {/* ── AFTER Image (Smart Classroom) ── */}
      <img
        src={heroImage}
        alt="Graphene Smart Classroom Modern Setup"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-[#E6398B] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5" />
        <span>After: Smart Classroom</span>
      </div>

      {/* ── BEFORE Image (Traditional Classroom Overlay with clipPath) ── */}
      <div
        className="absolute inset-0 overflow-hidden bg-slate-900"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={displayPanelImg}
          alt="Traditional Classroom Setup"
          className="absolute inset-0 w-[1000px] sm:w-[1200px] h-full object-cover grayscale brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/80 text-white/90 font-bold text-xs uppercase tracking-wider border border-white/20">
          Before: Traditional Classroom
        </div>
      </div>

      {/* ── Draggable Split Handle ── */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-glow-pink cursor-ew-resize flex items-center justify-center pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="w-10 h-10 -ml-5 rounded-full bg-gradient-to-tr from-[#5B2A86] to-[#E6398B] text-white shadow-glow-purple border-2 border-white flex items-center justify-center animate-pulse-ring">
          <Sliders className="w-4 h-4" />
        </div>
      </div>

      {/* Instruction tooltip */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-white/80 pointer-events-none">
        Drag or click slider to compare
      </div>
    </div>
  );
}

// ─── 2. Interactive 3D Classroom Tour with Hotspots ──────────────────────────
function InteractiveClassroomTour() {
  const hotspots = [
    {
      id: "board",
      title: "4K Multi-Touch Smart Board",
      x: "50%",
      y: "32%",
      icon: Monitor,
      description: "65\"–86\" Anti-Glare 4K display with 20-point touch, dual OS (Windows/Android), digital whiteboarding, and wireless screen sharing.",
      specs: ["4K UHD Resolution", "20-Point Touch", "Zero Bonding Tech"],
    },
    {
      id: "audio",
      title: "Acoustic Audio & Wireless Lapel",
      x: "22%",
      y: "18%",
      icon: Volume2,
      description: "Even acoustic sound coverage across the entire lecture hall with zero-feedback wireless microphones for teachers.",
      specs: ["Ceiling Speakers", "DSP Noise Cancellation", "Bluetooth 5.2"],
    },
    {
      id: "podium",
      title: "Smart Teacher Console & Casting",
      x: "78%",
      y: "48%",
      icon: Wifi,
      description: "One-touch central control podium allowing educators to project tablet content, laptop screens, or test questions seamlessly.",
      specs: ["Instant Wireless Mirroring", "Multi-Device Pairing", "Secure LAN"],
    },
    {
      id: "stem",
      title: "STEM Robotics & Sensor Lab",
      x: "30%",
      y: "75%",
      icon: Bot,
      description: "Hands-on Bee-Bot coding robots and SenseDisc multi-sensor experiment stations for interactive science & math classes.",
      specs: ["200-Step Memory", "Real-Time Sensor Graphing", "iOS/Android/Win"],
    },
  ];

  const [activeHotspot, setActiveHotspot] = useState(hotspots[0]);

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-card border border-border shadow-strong p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#E6398B] font-bold">
            Interactive Hotspot Explorer
          </span>
          <h3 className="font-display text-2xl font-bold text-foreground">
            Virtual Smart Classroom Architecture
          </h3>
        </div>
        <div className="text-xs text-muted-foreground flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Click any glowing node to inspect equipment</span>
        </div>
      </div>

      {/* Visual Classroom Simulator Canvas with Hotspots */}
      <div className="relative w-full h-[360px] sm:h-[440px] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 group">
        <img
          src={heroImage}
          alt="Virtual Classroom Simulator"
          className="w-full h-full object-cover brightness-75"
        />

        {/* Hotspot markers */}
        {hotspots.map((spot) => {
          const Icon = spot.icon;
          const isActive = activeHotspot.id === spot.id;
          return (
            <button
              key={spot.id}
              onClick={() => setActiveHotspot(spot)}
              style={{ top: spot.y, left: spot.x }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 z-20 cursor-pointer ${
                isActive
                  ? "bg-[#E6398B] text-white scale-125 shadow-glow-pink ring-4 ring-white/40"
                  : "bg-[#5B2A86]/80 text-white hover:scale-110 shadow-soft"
              }`}
              title={spot.title}
            >
              <Icon className="w-5 h-5 animate-pulse" />
            </button>
          );
        })}

        {/* Dynamic Detail Card Overlay on the Active Hotspot */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeHotspot.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm rounded-2xl bg-card/95 dark:bg-[#0F0F1A]/95 backdrop-blur-2xl border border-[#E6398B]/40 p-5 shadow-strong z-30"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5B2A86] to-[#E6398B] flex items-center justify-center text-white">
                  <activeHotspot.icon className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-sm text-foreground">
                  {activeHotspot.title}
                </h4>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              {activeHotspot.description}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
              {activeHotspot.specs.map((spec, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md bg-accent text-[10px] font-semibold text-[#5B2A86] dark:text-[#F0ABFC]"
                >
                  {spec}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Main Page Component ─────────────────────────────────────────────────────
export function SmartClassrooms() {
  const [flippedBenefit, setFlippedBenefit] = useState<number | null>(null);

  const comparisonData = [
    {
      feature: "Display & Writing Surface",
      traditional: "Chalk dust & static whiteboards requiring constant cleaning",
      smart: "4K Ultra-HD touch panels with infinite digital whiteboard canvas",
    },
    {
      feature: "Student Interaction",
      traditional: "Passive listening from desks with limited engagement",
      smart: "Interactive participation, live screen answering & STEM tools",
    },
    {
      feature: "Content Accessibility",
      traditional: "Restricted strictly to printed paper textbooks",
      smart: "Instant 3D animations, simulations, video libraries & web resources",
    },
    {
      feature: "Lesson Recording & Archiving",
      traditional: "No mechanism to record missed lectures for absent students",
      smart: "One-click lesson recording saved automatically to cloud for revision",
    },
    {
      feature: "Assessment & Feedback",
      traditional: "Manual grading delayed by days or weeks",
      smart: "Instant quiz polls with real-time analytics graphs on screen",
    },
  ];

  const benefitCards = [
    {
      id: 1,
      title: "85% Higher Student Engagement",
      front: "Visual, multi-touch interactions transform abstract subjects into intuitive experiences.",
      back: "Studies in partner schools show classroom retention and exam scores increase noticeably within the first term.",
      icon: Users,
    },
    {
      id: 2,
      title: "Save 10+ Hours / Week",
      front: "Teachers prepare and launch interactive digital lesson plans in minutes.",
      back: "Preloaded multimedia templates eliminate manual whiteboard drafting and paper distribution costs.",
      icon: Zap,
    },
    {
      id: 3,
      title: "Complete Hybrid Readiness",
      front: "Seamless integration with Zoom, Microsoft Teams, and Google Classroom.",
      back: "Remote students or campus branches join live with high-definition audio and crystal-clear whiteboard streams.",
      icon: Wifi,
    },
    {
      id: 4,
      title: "100% Turnkey Support",
      front: "Hardware mounting, cable management, software setup, and teacher training included.",
      back: "Local Lahore engineering team guarantees immediate on-site maintenance and spare parts availability.",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main-content">
        {/* ── Hero Section ── */}
        <section className="pt-36 pb-24 relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent border border-border mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#E6398B]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#5B2A86] dark:text-[#F0ABFC]">
                Turnkey Smart Ecosystem
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-[1.1] mb-6"
            >
              Step Into the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5B2A86] via-[#E6398B] to-[#F0ABFC]">
                Future of Education
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Explore how Graphene transforms standard classrooms into dynamic, high-engagement digital hubs equipped with 4K touchscreens, student devices, and STEM labs.
            </motion.p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact">
                <GlassButton variant="primary" showArrow className="px-8 py-4">
                  Schedule Free On-Site Demo
                </GlassButton>
              </Link>
              <Link to="/products">
                <GlassButton variant="secondary" className="px-7 py-4">
                  Browse Hardware Specs
                </GlassButton>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Section 1: Draggable Before / After Slider ── */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                Witness the Transformation
              </h2>
              <p className="text-muted-foreground mt-3 text-sm sm:text-base">
                Slide back and forth to see the difference between a traditional setup and a modernized Graphene Smart Classroom.
              </p>
            </div>

            <BeforeAfterSlider />
          </div>
        </section>

        {/* ── Section 2: 3D Interactive Virtual Classroom Tour ── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <InteractiveClassroomTour />
          </div>
        </section>

        {/* ── Section 3: Traditional vs Smart Comparison Matrix ── */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[#E6398B] font-bold text-xs uppercase tracking-wider">
                Head-to-Head Comparison
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2">
                Traditional vs. Graphene Smart Classroom
              </h2>
            </div>

            <div className="space-y-4">
              {comparisonData.map((row, index) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 rounded-2xl bg-card border border-border shadow-soft items-center"
                >
                  <div className="md:col-span-4">
                    <span className="font-display font-bold text-base text-foreground">
                      {row.feature}
                    </span>
                  </div>
                  <div className="md:col-span-4 flex items-start gap-2 text-xs text-muted-foreground p-3 rounded-xl bg-muted/40">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>{row.traditional}</span>
                  </div>
                  <div className="md:col-span-4 flex items-start gap-2 text-xs font-semibold text-foreground p-3 rounded-xl bg-accent/60 border border-[#E6398B]/20">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{row.smart}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: Interactive Benefit Flip Cards ── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[#5B2A86] dark:text-[#F0ABFC] font-bold text-xs uppercase tracking-wider">
                Proven ROI & Outcomes
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2">
                Key Benefits for Educational Institutions
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefitCards.map((card) => {
                const Icon = card.icon;
                const isFlipped = flippedBenefit === card.id;
                return (
                  <div
                    key={card.id}
                    onClick={() => setFlippedBenefit(isFlipped ? null : card.id)}
                    className="perspective-1000 h-64 cursor-pointer"
                  >
                    <motion.div
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                      style={{ transformStyle: "preserve-3d" }}
                      className="relative w-full h-full rounded-2xl"
                    >
                      {/* Front Card Face */}
                      <div className="absolute inset-0 backface-hidden p-6 rounded-2xl bg-card border border-border hover:border-[#E6398B]/50 hover:shadow-strong transition-all duration-300 flex flex-col justify-between">
                        <div>
                          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-[#5B2A86] dark:text-[#F0ABFC] mb-4">
                            <Icon className="w-6 h-6" />
                          </div>
                          <h3 className="font-display font-bold text-lg text-foreground mb-2">
                            {card.title}
                          </h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {card.front}
                          </p>
                        </div>
                        <div className="text-[10px] font-mono text-[#E6398B] font-bold flex items-center justify-between border-t border-border pt-2">
                          <span>Click to see evidence</span>
                          <span>↻</span>
                        </div>
                      </div>

                      {/* Back Card Face */}
                      <div className="absolute inset-0 backface-hidden rotate-y-180 p-6 rounded-2xl bg-gradient-to-br from-[#5B2A86] via-[#8A3BB8] to-[#E6398B] text-white shadow-strong flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-white/80 font-bold">
                            Outcome Detail
                          </span>
                          <h4 className="font-display font-bold text-base text-white mt-2 mb-3">
                            {card.title}
                          </h4>
                          <p className="text-xs text-white/90 leading-relaxed">
                            {card.back}
                          </p>
                        </div>
                        <div className="text-[10px] text-white/70 font-mono">
                          Tap to flip back
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default SmartClassrooms;
