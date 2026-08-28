import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ParticleNetwork } from "@/components/animations/ParticleNetwork";
import { Floating3D } from "@/components/animations/Floating3D";
import { GlassButton } from "@/components/animations/GlassButton";
import { AnimatedStats } from "@/components/animations/AnimatedStats";
import { Sparkles, ArrowRight, Play, Compass, ShieldCheck } from "lucide-react";

export function HeroSection() {
  const headlineLine1 = "Transform Classrooms Into";
  const headlineLine2 = "Smart Learning Spaces";

  const letterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.8 + i * 0.04,
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-background text-foreground">
      {/* 3D Particle Network Canvas Background */}
      <ParticleNetwork />

      {/* Futuristic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#5B2A86]/20 via-[#E6398B]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8A3BB8]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* ── Left Column: Headline & CTAs ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Innovation Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-card/80 dark:bg-[#0F0F1A]/80 backdrop-blur-xl border border-[#E6398B]/30 shadow-glow-pink mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6398B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E6398B]" />
              </span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#5B2A86] via-[#E6398B] to-[#F0ABFC]">
                Pakistan's #1 Smart Classroom Pioneer
              </span>
            </motion.div>

            {/* Staggered Animated Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-foreground mb-6">
              <span className="block">
                {headlineLine1.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#5B2A86] via-[#E6398B] to-[#F0ABFC] animate-gradient-shift">
                {headlineLine2.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index + headlineLine1.length}
                    initial="hidden"
                    animate="visible"
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Subheadline with subtle float & fade */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed font-normal"
            >
              Since 2014, Graphene Communication has empowered <strong className="text-foreground font-semibold">150+ schools</strong> and <strong className="text-foreground font-semibold">100,000+ students</strong> with interactive smart boards, 4K displays, robotics kits, and turnkey smart classroom ecosystems.
            </motion.p>

            {/* Glass-morphism CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link to="/smart-classrooms">
                <GlassButton variant="primary" showArrow className="px-8 py-4 text-base">
                  Explore Smart Classrooms
                </GlassButton>
              </Link>

              <Link to="/products">
                <GlassButton variant="secondary" className="px-7 py-4 text-base">
                  <Compass className="w-5 h-5 text-[#E6398B]" />
                  View All Products
                </GlassButton>
              </Link>
            </motion.div>

            {/* Trust badge icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 5.2 }}
              className="flex items-center gap-6 mt-8 pt-6 border-t border-border/70 text-xs text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Authorized National Distributor</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E6398B]" />
                <span>Full Turnkey Installation</span>
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: 3D Floating Tech Elements ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 3.8, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <Floating3D />
          </motion.div>
        </div>

        {/* ── Bottom: Animated Number Counters & Stats ── */}
        <div className="mt-12">
          <AnimatedStats />
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
