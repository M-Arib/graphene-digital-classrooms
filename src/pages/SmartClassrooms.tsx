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
      className="relative w-full max-w-4xl mx-auto h-[340px] sm:h-[440px] rounded-3xl overflow-hidden shadow-strong border border-border select-none cursor-ew-resize group"
    >
      {/* ── AFTER Image (Smart Classroom) ── */}
      <img
        src={heroImage}
        alt="Graphene Smart Classroom Modern Setup"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-5 right-5 px-3.5 py-1.5 rounded-full bg-[#E6398B] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
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
        <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-black/80 text-white/90 font-bold text-xs uppercase tracking-wider border border-white/20">
          Before: Traditional Classroom
        </div>
      </div>

      {/* ── Draggable Split Handle ── */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-glow-pink cursor-ew-resize flex items-center justify-center pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="w-9 h-9 rounded-full bg-white text-[#5B2A86] shadow-strong flex items-center justify-center border-2 border-[#E6398B] -ml-4">
          <Sliders className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

// ─── 2. Virtual Classroom 3D Hotspot Explorer ────────────────────────────────
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
      title: "STEM Robotics & Student Devices",
      x: "30%",
      y: "75%",
      icon: Bot,
      description: "Hands-on Bee-Bot early coding robots, drop-proof educational tablets, and charging carts for interactive science & math classes.",
      specs: ["200-Step Memory", "Tactile Directional Coding", "Kid-Safe Tablets"],
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
          <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground tracking-tight">
            Virtual Smart Classroom Architecture
          </h3>
        </div>
        <div className="text-xs text-muted-foreground flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Click any glowing node to inspect equipment</span>
        </div>
      </div>

      {/* Visual Classroom Simulator Canvas with Hotspots */}
      <div className="relative w-full h-[340px] sm:h-[420px] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 group">
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
              <Icon className="w-4 h-4 animate-pulse" />
            </button>
          );
        })}

        {/* Dynamic Detail Card Overlay on the Active Hotspot */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeHotspot.id}
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm rounded-2xl bg-card/95 dark:bg-[#0F0F1A]/95 backdrop-blur-2xl border border-[#E6398B]/40 p-4 sm:p-5 shadow-strong z-30"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#5B2A86] to-[#E6398B] flex items-center justify-center text-white">
                  <activeHotspot.icon className="w-3.5 h-3.5" />
                </div>
                <h4 className="font-display font-bold text-xs sm:text-sm text-foreground">
                  {activeHotspot.title}
                </h4>
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              {activeHotspot.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {activeHotspot.specs.map((spec, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md bg-accent text-[10px] font-mono text-[#5B2A86] dark:text-[#F0ABFC] font-semibold"
                >
                  ✓ {spec}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Main Smart Classrooms Page ───────────────────────────────────────────────
export function SmartClassrooms() {
  const [flippedBenefit, setFlippedBenefit] = useState<number | null>(null);

  const comparisonData = [
    {
      feature: "Display & Writing",
      traditional: "Chalkboard / Static Whiteboard with dust & marker refills",
      smart: "4K UHD Anti-Glare Multi-Touchscreen with infinite digital canvas",
    },
    {
      feature: "Student Engagement",
      traditional: "Passive listening, limited interaction, one-way lecture",
      smart: "Interactive quizzes, tablet casting, and 20-point multi-user collaboration",
    },
    {
      feature: "Lesson Content",
      traditional: "Static textbooks, physical charts, manual overhead transparencies",
      smart: "3D simulations, real-time science sensors, video libraries, and web integration",
    },
    {
      feature: "Lecture Recording",
      traditional: "No recording; absent students miss entire lecture materials",
      smart: "One-click lesson recording with audio sync exported to PDF/MP4",
    },
    {
      feature: "Teacher Mobility",
      traditional: "Tethered to the board, restricted movement across the classroom",
      smart: "Wireless teacher tablet control, mobile casting, and remote presentation clicker",
    },
  ];

  const benefitCards = [
    {
      id: 1,
      title: "3x Higher Retention",
      front: "Visual, kinesthetic, and multi-sensory tools dramatically improve student comprehension.",
      back: "Studies show interactive visual learning boosts long-term STEM topic recall by up to 78%.",
      icon: Zap,
    },
    {
      id: 2,
      title: "Teacher Efficiency",
      front: "Pre-loaded interactive curriculum templates eliminate repetitive lesson prep time.",
      back: "Teachers save 5+ hours weekly with instant cloud whiteboards and digital assignment distribution.",
      icon: Cpu,
    },
    {
      id: 3,
      title: "Seamless Screen Sharing",
      front: "Students and teachers wirelessly project up to 4 devices simultaneously.",
      back: "Compatible with iOS, Android, macOS, ChromeOS, and Windows with zero driver installs.",
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
        {/* ── Hero Section (Refined Typography) ── */}
        <section className="pt-36 pb-20 relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent border border-border mb-4 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E6398B]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#5B2A86] dark:text-[#F0ABFC]">
                Turnkey Smart Ecosystem
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
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
              className="text-sm sm:text-base text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed"
            >
              Explore how Graphene transforms standard classrooms into dynamic, high-engagement digital hubs equipped with 4K touchscreens, student devices, and STEM labs.
            </motion.p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact">
                <GlassButton variant="primary" showArrow className="px-6 py-3 text-xs sm:text-sm">
                  Schedule Free On-Site Demo
                </GlassButton>
              </Link>
              <Link to="/products">
                <GlassButton variant="secondary" className="px-6 py-3 text-xs sm:text-sm">
                  Browse Hardware Specs
                </GlassButton>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Section 1: Draggable Before / After Slider ── */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Witness the Transformation
              </h2>
              <p className="text-muted-foreground mt-2 text-xs sm:text-sm leading-relaxed">
                Slide back and forth to see the difference between a traditional setup and a modernized Graphene Smart Classroom.
              </p>
            </div>

            <BeforeAfterSlider />
          </div>
        </section>

        {/* ── Section 2: 3D Interactive Virtual Classroom Tour ── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <InteractiveClassroomTour />
          </div>
        </section>

        {/* ── Section 3: Traditional vs Smart Comparison Matrix ── */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-[#E6398B] font-bold text-xs uppercase tracking-wider">
                Head-to-Head Comparison
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground mt-2">
                Traditional vs. Graphene Smart Classroom
              </h2>
            </div>

            <div className="space-y-3">
              {comparisonData.map((row, index) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-3 p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-soft items-center"
                >
                  <div className="md:col-span-4">
                    <span className="font-display font-bold text-xs sm:text-sm text-foreground">
                      {row.feature}
                    </span>
                  </div>
                  <div className="md:col-span-4 flex items-start gap-2 text-xs text-muted-foreground p-2.5 rounded-xl bg-muted/40">
                    <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>{row.traditional}</span>
                  </div>
                  <div className="md:col-span-4 flex items-start gap-2 text-xs font-semibold text-foreground p-2.5 rounded-xl bg-accent/60 border border-[#E6398B]/20">
                    <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{row.smart}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: Interactive Benefit Flip Cards ── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-[#5B2A86] dark:text-[#F0ABFC] font-bold text-xs uppercase tracking-wider">
                Proven ROI & Outcomes
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground mt-2">
                Key Benefits for Educational Institutions
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefitCards.map((card) => {
                const Icon = card.icon;
                const isFlipped = flippedBenefit === card.id;
                return (
                  <div
                    key={card.id}
                    onClick={() => setFlippedBenefit(isFlipped ? null : card.id)}
                    className="perspective-1000 h-60 cursor-pointer"
                  >
                    <motion.div
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="relative w-full h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]"
                    >
                      {/* Front Side */}
                      <div className="absolute inset-0 rounded-2xl bg-card border border-border p-5 flex flex-col justify-between shadow-soft [backface-visibility:hidden]">
                        <div>
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5B2A86] to-[#E6398B] flex items-center justify-center text-white mb-3 shadow-soft">
                            <Icon className="w-5 h-5" />
                          </div>
                          <h4 className="font-display font-bold text-sm sm:text-base text-foreground mb-1.5">
                            {card.title}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {card.front}
                          </p>
                        </div>
                        <div className="text-[11px] font-semibold text-[#E6398B] flex items-center gap-1">
                          <span>Click to flip</span>
                          <RotateCcw className="w-3 h-3" />
                        </div>
                      </div>

                      {/* Back Side */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5B2A86] to-[#0F0F1A] text-white p-5 flex flex-col justify-between shadow-strong [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div>
                          <div className="flex items-center gap-2 mb-2 text-[#F0ABFC]">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-[10px] font-mono uppercase font-bold">Deep Dive</span>
                          </div>
                          <h4 className="font-display font-bold text-sm text-white mb-1.5">
                            {card.title}
                          </h4>
                          <p className="text-xs text-white/80 leading-relaxed">
                            {card.back}
                          </p>
                        </div>
                        <div className="text-[11px] text-white/60 flex items-center gap-1">
                          <span>Click to return</span>
                          <RotateCcw className="w-3 h-3" />
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
