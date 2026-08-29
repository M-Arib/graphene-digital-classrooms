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
    title: "Support Available",
    description: "Our dedicated technical engineering teams provide on-site troubleshooting, spare parts, and regular preventative servicing.",
    stat: "SLA",
    statLabel: "Support",
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
    title: "Fast Deployment",
    description: "Streamlined installation processes ensure minimal classroom downtime, scheduled flexibly to suit your institution's calendar.",
    stat: "Fast",
    statLabel: "Deploy",
    gradient: "from-[#E6398B] to-[#5B2A86]",
  },
];

export function WhyUs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main-content" className="pt-32 pb-24">
        {/* ── Hero with Professional Heading Sizing ── */}
        <section className="py-12 relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent border border-border mb-3 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E6398B]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#5B2A86] dark:text-[#F0ABFC]">
                Why Partner With Graphene
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground"
            >
              Pakistan's Most Trusted Smart Classroom Partner
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mt-3 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
            >
              Discover why over 150 forward-thinking educational institutions entrust Graphene Communication to build their interactive future.
            </motion.p>
          </div>
        </section>

        {/* ── Value Propositions Grid ── */}
        <section className="container mx-auto px-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl bg-card border border-border hover:border-[#E6398B]/50 p-6 sm:p-7 shadow-soft hover:shadow-strong transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Stat & Icon Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center text-white shadow-soft group-hover:scale-105 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                        <div className="font-display font-bold text-xl sm:text-2xl text-foreground">
                          {reason.stat}
                        </div>
                        <div className="text-[10px] uppercase font-mono text-muted-foreground tracking-wider font-semibold">
                          {reason.statLabel}
                        </div>
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-border flex items-center text-xs font-semibold text-[#5B2A86] dark:text-[#F0ABFC] group-hover:text-[#E6398B] transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-[#E6398B]" />
                    <span>Guaranteed Quality Standard</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="container mx-auto px-4 mt-16 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-card via-muted/40 to-card border border-border max-w-4xl mx-auto shadow-soft">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
              Ready to Upgrade Your Institution's Learning Environment?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-lg mx-auto">
              Our Lahore team is available for on-site consultations, feasibility studies, and live hardware demonstrations.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact">
                <GlassButton variant="primary" showArrow className="py-3 px-6 text-xs sm:text-sm">
                  Request Free Site Survey
                </GlassButton>
              </Link>
              <a href="mailto:mohsen.alam@yellow-wombat-705667.hostingersite.com">
                <button className="px-5 py-3 rounded-xl border border-border text-xs sm:text-sm font-semibold text-foreground hover:bg-muted transition-colors cursor-pointer">
                  Email Quotation Request
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default WhyUs;
