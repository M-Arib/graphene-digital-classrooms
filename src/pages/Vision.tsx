import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, Target, ArrowRight, Sparkles, CheckCircle2, Award, Compass, Flag } from "lucide-react";
import { GlassButton } from "@/components/animations/GlassButton";

const timelineEvents = [
  {
    year: "2014",
    title: "Company Founded",
    description: "Graphene Communication was established in Lahore with a vision to modernize Pakistan's educational institutions.",
  },
  {
    year: "2016",
    title: "First 50 Classrooms",
    description: "Reached a milestone of transforming 50 classrooms in Lahore's leading schools with interactive smart boards.",
  },
  {
    year: "2018",
    title: "Expanded Product Line",
    description: "Launched a full range of AV systems, educational tablets, and wireless presentation solutions.",
  },
  {
    year: "2021",
    title: "DHA Phase 3 Headquarters",
    description: "Established our permanent office at 328/14 W Sector, DHA Phase 3, Lahore serving all of Pakistan.",
  },
  {
    year: "2024",
    title: "150+ Schools Served",
    description: "Now serving over 150 leading schools across Pakistan, impacting thousands of students.",
  },
];

const corePillars = [
  {
    icon: Compass,
    title: "Pedagogical Innovation",
    description: "Technology is only as effective as the learning outcomes it unlocks. We prioritize interactive, student-centered methodologies.",
  },
  {
    icon: Award,
    title: "Institutional Trust",
    description: "A decade of dependable hardware warranties, manufacturer authorization, and rapid local technical service level agreements.",
  },
  {
    icon: Flag,
    title: "Nationwide Impact",
    description: "Bridging the digital divide across Pakistan's schools, colleges, and university auditoriums with future-ready smart infrastructure.",
  },
];

export function Vision() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main-content" className="pt-32 pb-24">
        {/* ── Hero Section (Refined Typography) ── */}
        <section className="py-12 relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent border border-border mb-3 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E6398B]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#5B2A86] dark:text-[#F0ABFC]">
                Vision & Mission
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground"
            >
              Shaping the Future of Education Across Pakistan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mt-3 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
            >
              Our vision and mission drive every technological solution we provide to help Pakistan's students thrive in a connected world.
            </motion.p>
          </div>
        </section>

        {/* ── Vision & Mission Side-by-Side ── */}
        <section className="container mx-auto px-4 mt-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-7 sm:p-8 rounded-3xl bg-card border border-border hover:border-[#E6398B]/50 shadow-soft transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#5B2A86] to-[#8A3BB8] flex items-center justify-center text-white mb-5 shadow-soft">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#E6398B] font-bold">
                  Our North Star
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-1 mb-3">
                  Our Vision
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  To be Pakistan's most trusted educational technology leader, transforming every conventional classroom into an inspiring, interactive, and globally competitive learning hub where every student can achieve their full potential.
                </p>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-muted/40 border border-border/60">
                <p className="font-display italic text-xs text-foreground font-medium">
                  "Empowering the next generation of Pakistani innovators through immersive digital learning."
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-7 sm:p-8 rounded-3xl bg-card border border-border hover:border-[#5B2A86]/50 shadow-soft transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8A3BB8] to-[#E6398B] flex items-center justify-center text-white mb-5 shadow-soft">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#5B2A86] dark:text-[#F0ABFC] font-bold">
                  Our Purpose
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-1 mb-3">
                  Our Mission
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  To equip academic institutions with turnkey hardware ecosystems — combining 4K interactive displays, STEM robotics, and student learning devices — backed by reliable local engineering support and comprehensive teacher training.
                </p>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-muted/40 border border-border/60">
                <p className="font-display italic text-xs text-foreground font-medium">
                  "Making future-ready classroom technology accessible, reliable, and easy to use."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Core Strategic Pillars ── */}
        <section className="container mx-auto px-4 mt-16 max-w-5xl">
          <div className="text-center mb-10">
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Guiding Principles
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              The fundamental values behind every installation and partnership.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {corePillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-muted/30 border border-border shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-[#5B2A86] dark:text-[#F0ABFC] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-foreground mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Journey Timeline ── */}
        <section className="container mx-auto px-4 mt-20 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E6398B] font-bold">
              Milestones & Growth
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-1">
              A Decade of Educational Transformation
            </h3>
          </div>

          <div className="relative border-l-2 border-[#E6398B]/30 ml-4 sm:ml-8 space-y-8 pb-4">
            {timelineEvents.map((evt, index) => (
              <motion.div
                key={evt.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-6 sm:pl-8 group"
              >
                {/* Dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-[#E6398B] group-hover:bg-[#E6398B] group-hover:scale-125 transition-all shadow-glow-pink" />

                <span className="text-xs font-mono font-bold text-[#E6398B] px-2.5 py-0.5 rounded-full bg-[#E6398B]/10 border border-[#E6398B]/20 inline-block mb-1">
                  {evt.year}
                </span>
                <h4 className="font-display font-bold text-base text-foreground">
                  {evt.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                  {evt.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="container mx-auto px-4 mt-16 text-center">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-card to-muted/40 border border-border max-w-3xl mx-auto shadow-soft">
            <h3 className="font-display text-xl font-bold text-foreground">
              Partner With Pakistan's Leading EdTech Innovator
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-md mx-auto">
              Schedule a meeting with our educational consultants in DHA Lahore to discuss your institution's digital roadmap.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Link to="/contact">
                <GlassButton variant="primary" showArrow className="py-3 px-6 text-xs sm:text-sm">
                  Get in Touch
                </GlassButton>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Vision;
