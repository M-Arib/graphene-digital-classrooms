import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ParticleNetwork } from "@/components/animations/ParticleNetwork";
import { Floating3D } from "@/components/animations/Floating3D";
import { GlassButton } from "@/components/animations/GlassButton";
import { AnimatedStats } from "@/components/animations/AnimatedStats";
import { Sparkles, ArrowRight, Play, Compass, ShieldCheck } from "lucide-react";

export function HeroSection() {
  const line1Words = ["Transforming", "Classrooms", "Into"];
  const line2Words = ["Smart", "Learning", "Spaces"];

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
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
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

            {/* Formal, Correctly Formatted & Wrapped Headline (No Mid-Word Breaks) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight leading-[1.15] text-foreground mb-6"
            >
              <span className="inline-block">
                {line1Words.map((word, idx) => (
                  <span key={idx} className="inline-block whitespace-nowrap mr-3.5">
                    {word}
                  </span>
                ))}
              </span>
              <span className="block mt-1.5 bg-clip-text text-transparent bg-gradient-to-r from-[#5B2A86] via-[#E6398B] to-[#F0ABFC] animate-gradient-shift">
                {line2Words.map((word, idx) => (
                  <span key={idx} className="inline-block whitespace-nowrap mr-3.5">
                    {word}
                  </span>
                ))}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed font-normal"
            >
              Since 2014, Graphene Communication has empowered <strong className="text-foreground font-semibold">150+ schools</strong> and <strong className="text-foreground font-semibold">100,000+ students</strong> across Pakistan with 4K interactive touch panels, laser projectors, STEM robotics, and turnkey digital learning spaces.
            </motion.p>

            {/* Glass-morphism CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <Link to="/contact">
                <GlassButton variant="primary" showArrow className="w-full sm:w-auto text-sm sm:text-base py-3.5 px-7">
                  Schedule Free On-Site Demo
                </GlassButton>
              </Link>
              <Link to="/smart-classrooms">
                <GlassButton variant="secondary" className="w-full sm:w-auto text-sm sm:text-base py-3.5 px-7">
                  Explore 3D Virtual Tour
                </GlassButton>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex items-center gap-6 mt-8 pt-6 border-t border-border/50 text-xs text-muted-foreground"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#E6398B]" />
                <span>3-Year Warranty & SLA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#5B2A86] dark:text-[#F0ABFC]" />
                <span>PPRA & Tender Verified</span>
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: Interactive 3D Showcase ── */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <Floating3D />
          </div>
        </div>

        {/* ── Bottom Section: Animated Numbers Bar ── */}
        <div className="mt-16">
          <AnimatedStats />
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
