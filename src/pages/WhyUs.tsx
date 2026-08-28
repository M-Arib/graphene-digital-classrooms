import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Headphones,
  Award,
  TrendingUp,
  Settings,
  Clock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Users,
} from "lucide-react";
import { GlassButton } from "@/components/animations/GlassButton";

const reasons = [
  {
    icon: Award,
    title: "10+ Years of Proven Leadership",
    description: "Founded in 2014 in DHA Lahore, we bring over a decade of hands-on expertise in educational smart hardware and school digital infrastructure.",
    stat: "10+",
    statLabel: "Years Active",
    gradient: "from-[#5B2A86] to-[#8A3BB8]",
  },
  {
    icon: Users,
    title: "150+ Schools & 100K+ Students",
    description: "Our interactive classrooms are actively powering tier-1 schools, colleges, and university auditoriums nationwide.",
    stat: "150+",
    statLabel: "Institutions",
    gradient: "from-[#8A3BB8] to-[#E6398B]",
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Local SLA Support",
    description: "Our dedicated technical engineering teams provide rapid on-site troubleshooting, spare parts, and regular preventative servicing.",
    stat: "24/7",
    statLabel: "Live Support",
    gradient: "from-[#E6398B] to-[#F0ABFC]",
  },
  {
    icon: Settings,
    title: "Custom Turnkey Architecture",
    description: "We don't sell box items — we tailor display sizes, acoustic audio, wireless casting, and teacher controls to your specific classroom dimensions.",
    stat: "100%",
    statLabel: "Turnkey Setup",
    gradient: "from-[#5B2A86] to-[#E6398B]",
  },
  {
    icon: TrendingUp,
    title: "Authorized Global Brand Distributor",
    description: "Official authorized dealer of world-renowned brands including Cisco, ViewSonic, InFocus, Vivitek, and Xiaomi.",
    stat: "100%",
    statLabel: "Genuine Brands",
    gradient: "from-[#8A3BB8] to-[#F0ABFC]",
  },
  {
    icon: Clock,
    title: "Fast 48-Hour Deployment",
    description: "Streamlined installation processes ensure minimal classroom downtime, scheduled during weekends and off-hours.",
    stat: "2-5",
    statLabel: "Days Deploy",
    gradient: "from-[#E6398B] to-[#5B2A86]",
  },
];

export function WhyUs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main-content" className="pt-32 pb-24">
        {/* ── Hero ── */}
        <section className="py-16 relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent border border-border mb-4 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#E6398B]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#5B2A86] dark:text-[#F0ABFC]">
                Why Partner With Graphene
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground"
            >
              Pakistan's Most Trusted Smart Classroom Partner
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mt-4 text-base sm:text-lg leading-relaxed"
            >
              Discover why over 150 forward-thinking educational institutions entrust Graphene Communication to build their interactive future.
            </motion.p>
          </div>
        </section>

        {/* ── Reasons Grid ── */}
        <section className="py-12 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-[#E6398B]/50 hover:shadow-strong transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="text-right">
                        <span className="font-display text-3xl font-extrabold text-[#E6398B]">
                          {reason.stat}
                        </span>
                        <p className="text-xs text-muted-foreground font-semibold">
                          {reason.statLabel}
                        </p>
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-xs font-semibold text-[#5B2A86] dark:text-[#F0ABFC]">
                    <CheckCircle2 className="w-4 h-4 text-[#E6398B]" />
                    <span>Guaranteed Excellence</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── Call To Action ── */}
        <section className="mt-16 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto p-10 rounded-3xl bg-gradient-to-br from-[#5B2A86] to-[#E6398B] text-white shadow-strong">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-4">
              Bring 21st-Century Learning to Your Campus
            </h2>
            <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Speak with our solution architects today to design a smart classroom package suited to your curriculum and budget.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact">
                <GlassButton variant="glass" showArrow className="px-8 py-3.5 bg-white text-[#5B2A86] hover:bg-white/90">
                  Request Free Site Survey
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
export default WhyUs;
