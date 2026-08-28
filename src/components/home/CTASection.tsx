import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GlassButton } from "@/components/animations/GlassButton";
import { Phone, ArrowRight, Sparkles, Shield, CheckCircle, Zap } from "lucide-react";

export function CTASection() {
  const trustBadges = [
    { icon: Shield, text: "Authorized Dealer Warranty" },
    { icon: Zap, text: "Rapid 48hr Installation" },
    { icon: CheckCircle, text: "Free Site Survey & Demo" },
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-br from-[#5B2A86] via-[#8A3BB8] to-[#E6398B] text-white animate-gradient-shift">
      {/* Floating Geometric Particle Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Floating Ring 1 */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="absolute -top-16 -left-16 w-64 h-64 rounded-full border-2 border-white/20 blur-sm"
        />

        {/* Floating Ring 2 */}
        <motion.div
          animate={{
            y: [25, -25, 25],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full border-2 border-[#F0ABFC]/30 blur-sm"
        />

        {/* Orbiting Diamond */}
        <motion.div
          animate={{
            y: [-15, 15, -15],
            rotateZ: [45, 90, 45],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-12 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/25 mb-6 shadow-md"
          >
            <Sparkles className="w-4 h-4 text-[#F0ABFC] animate-spin" style={{ animationDuration: "6s" }} />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              Start Your Classroom Modernization
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6"
          >
            Ready to Upgrade Your Institution to 21st-Century Standards?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Schedule a free on-site consultation and interactive hardware demonstration at your school, college, or university campus anywhere in Pakistan.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact">
              <GlassButton
                variant="glass"
                showArrow
                className="w-full sm:w-auto px-9 py-4 text-base font-bold bg-white text-[#5B2A86] hover:bg-white/90 shadow-strong"
              >
                Schedule Free Site Visit & Demo
              </GlassButton>
            </Link>

            <a href="tel:+923244017722">
              <GlassButton
                variant="secondary"
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white border-white/30 hover:bg-white/20"
              >
                <Phone className="w-5 h-5 text-[#F0ABFC]" />
                Call 0324-4017722
              </GlassButton>
            </a>
          </motion.div>

          {/* Trust Badges */}
          <div className="mt-14 pt-8 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {trustBadges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium text-white/95"
                >
                  <Icon className="w-4 h-4 text-[#F0ABFC] flex-shrink-0" />
                  <span>{badge.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default CTASection;
