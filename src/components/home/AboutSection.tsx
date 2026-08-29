import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  HeartHandshake,
  ArrowRight,
  Sparkles,
  Calendar,
  Layers,
  Award,
  CheckCircle,
  Linkedin,
  Mail,
  UserCheck,
} from "lucide-react";

export function AboutSection() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const timelineMilestones = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Established in DHA Phase 3, Lahore with a mission to bring world-class interactive educational hardware to Pakistani schools.",
      badge: "Inception",
    },
    {
      year: "2018",
      title: "50+ Schools Milestone",
      description: "Partnered with premier universities and private schooling chains for large-scale multi-touch interactive panel deployments.",
      badge: "Scale",
    },
    {
      year: "2021",
      title: "STEM & Robotics Launch",
      description: "Introduced Bee-Bot early coding robots, student learning tablets, and 4K visualizers for hands-on STEM curriculums.",
      badge: "Innovation",
    },
    {
      year: "Today",
      title: "150+ Schools & 100K+ Students",
      description: "Pakistan's undisputed leader in turnkey smart classroom engineering, training, and 24/7 localized support.",
      badge: "Leadership",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Engineering & Deployment",
      role: "Smart Infrastructure Lead",
      bio: "10+ years installing 4K interactive screens, acoustic audio setups, and seamless school-wide wireless casting systems.",
      skills: ["4K Displays", "Turnkey AV", "Classroom Architecture"],
    },
    {
      id: 2,
      name: "Teacher Enablement Team",
      role: "EdTech & Pedagogy Specialists",
      bio: "Dedicated certified trainers conducting hands-on teacher onboarding so educators master interactive whiteboarding software in minutes.",
      skills: ["Teacher Training", "Interactive Software", "STEM Curriculum"],
    },
  ];

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#5B2A86]/10 blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#E6398B]/10 blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent border border-border mb-4 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#E6398B]" />
            <span className="text-[#5B2A86] dark:text-[#F0ABFC] font-bold text-xs uppercase tracking-wider">
              A Decade of Innovation (2014 – Present)
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground"
          >
            Pioneering the Future of Learning in Pakistan
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mt-4 text-base sm:text-lg leading-relaxed"
          >
            From our headquarters in DHA Lahore, Graphene Communication has been the trusted transformation partner for educators, administrators, and future leaders.
          </motion.p>
        </div>

        {/* ── Grid: Interactive Timeline + Progress Context ── */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left: Interactive Timeline (Draws on Scroll) */}
          <div className="lg:col-span-7">
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-[#E6398B]" />
              Our Transformation Journey
            </h3>

            <div className="relative pl-8 border-l-2 border-gradient-to-b from-[#5B2A86] via-[#E6398B] to-[#F0ABFC] space-y-10">
              {timelineMilestones.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Glowing Milestone Marker */}
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-background border-4 border-[#E6398B] group-hover:scale-125 group-hover:border-[#5B2A86] shadow-glow-pink transition-all duration-300 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E6398B] group-hover:bg-[#5B2A86]" />
                  </div>

                  <div className="p-5 rounded-2xl bg-card/80 dark:bg-[#0F0F1A]/80 backdrop-blur-md border border-border group-hover:border-[#E6398B]/40 hover:shadow-medium transition-all duration-300">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-display font-black text-lg sm:text-xl text-[#E6398B]">
                        {item.year}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full bg-accent text-[#5B2A86] dark:text-[#F0ABFC]">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-base sm:text-lg text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Institutional Impact & Storytelling Context */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
              <Award className="w-6 h-6 text-[#5B2A86] dark:text-[#F0ABFC]" />
              Proven Impact Metrics
            </h3>

            {/* Story Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#5B2A86]/10 via-[#E6398B]/5 to-card backdrop-blur-xl border border-[#E6398B]/30 shadow-soft"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5B2A86] to-[#E6398B] flex items-center justify-center text-white font-bold text-xl shadow-md">
                  G
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground text-lg">
                    Graphene Communication
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    DHA Phase 3, Lahore • Est. 2014
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We believe every classroom in Pakistan deserves high-speed interactive learning tools that empower educators to teach with confidence and ignite students' imagination.
              </p>
            </motion.div>

            {/* Animated Progress Bars */}
            <div className="p-6 rounded-2xl bg-card border border-border space-y-5">
              <h4 className="font-display font-bold text-sm text-foreground uppercase tracking-wider mb-2">
                Operational Excellence
              </h4>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1.5">
                  <span className="text-foreground">On-Time Turnkey Deployment</span>
                  <span className="text-[#E6398B]">99.8%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "99.8%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#5B2A86] to-[#E6398B] rounded-full"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1.5">
                  <span className="text-foreground">Teacher Adoption & Satisfaction</span>
                  <span className="text-[#E6398B]">98.5%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "98.5%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#5B2A86] to-[#E6398B] rounded-full"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1.5">
                  <span className="text-foreground">24/7 SLA Support Response</span>
                  <span className="text-[#E6398B]">100%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#5B2A86] to-[#E6398B] rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* 3D Flip Team Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  onClick={() => setFlippedCard(flippedCard === member.id ? null : member.id)}
                  className="perspective-1000 h-44 cursor-pointer"
                >
                  <motion.div
                    animate={{ rotateY: flippedCard === member.id ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative w-full h-full rounded-2xl"
                  >
                    {/* Front Face */}
                    <div className="absolute inset-0 backface-hidden p-5 rounded-2xl bg-card border border-border hover:border-[#E6398B]/50 shadow-soft flex flex-col justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-[#5B2A86] dark:text-[#F0ABFC]">
                          <UserCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-display font-bold text-sm text-foreground">
                            {member.name}
                          </div>
                          <div className="text-[11px] text-[#E6398B] font-semibold">
                            {member.role}
                          </div>
                        </div>
                      </div>
                      <div className="text-[10px] text-muted-foreground font-mono flex items-center justify-between border-t border-border/60 pt-2">
                        <span>Click / Hover to flip</span>
                        <span className="text-[#E6398B]">Details ↻</span>
                      </div>
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 p-5 rounded-2xl bg-gradient-to-br from-[#5B2A86] to-[#0F0F1A] text-white border border-[#F0ABFC]/30 shadow-strong flex flex-col justify-between">
                      <p className="text-xs text-white/90 leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((s, i) => (
                          <span key={i} className="text-[9px] px-2 py-0.5 rounded bg-white/15 backdrop-blur-md">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-[#E6398B] transition-colors group"
          >
            <span>Read More About Our Mission & Team</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
export default AboutSection;
