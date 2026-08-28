import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Heart, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Vision & Mission", path: "/vision" },
    { name: "Why Choose Us", path: "/why-us" },
    { name: "Contact & Demo", path: "/contact" },
  ],
  solutions: [
    { name: "Smart Classrooms", path: "/smart-classrooms" },
    { name: "Interactive Displays", path: "/products" },
    { name: "Educational Tablets", path: "/products" },
    { name: "Robotics & STEM Labs", path: "/products" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-[#0F0F1A] text-white overflow-hidden border-t border-white/10">
      {/* ── 1. Animated Gradient Top Divider with Moving Light Beam ── */}
      <div className="relative w-full h-1 bg-gradient-to-r from-[#5B2A86] via-[#E6398B] to-[#F0ABFC]">
        <div className="absolute inset-0 animate-shimmer" />
      </div>

      {/* Background ambient radial glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5B2A86]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E6398B]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* ── Brand Column: Expanding Rings Effect ── */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              aria-label="Graphene Communication — Home"
              className="relative inline-flex items-center mb-6 group"
            >
              {/* Expanding Pulse Ring Behind Logo */}
              <div className="absolute -inset-3 rounded-2xl border border-[#E6398B]/30 animate-pulse-ring pointer-events-none" />
              <Logo onDark className="h-12 w-auto group-hover:scale-105 transition-transform duration-300" />
            </Link>

            <p className="text-white/70 text-sm leading-relaxed mb-6 font-normal">
              Transforming classrooms into smart, 21st-century learning spaces. Serving 150+ schools, colleges, and universities across Pakistan with turnkey interactive displays and STEM robotics ecosystems since 2014.
            </p>

            {/* Social & Direct Channels with 3D Hover & Glow */}
            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.12, rotateY: 15 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/923244017722"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-emerald-600/30 hover:bg-emerald-600 border border-emerald-500/40 flex items-center justify-center text-white shadow-soft transition-colors duration-300"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.12, rotateY: 15 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+923244017722"
                className="w-11 h-11 rounded-xl bg-[#5B2A86]/40 hover:bg-[#5B2A86] border border-[#F0ABFC]/30 flex items-center justify-center text-white shadow-soft transition-colors duration-300"
                aria-label="Call Office"
              >
                <Phone className="w-5 h-5 text-[#F0ABFC]" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.12, rotateY: 15 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:info@graphenecommunication.com"
                className="w-11 h-11 rounded-xl bg-[#E6398B]/30 hover:bg-[#E6398B] border border-[#E6398B]/40 flex items-center justify-center text-white shadow-soft transition-colors duration-300"
                aria-label="Email Us"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-base text-white mb-5 tracking-wide flex items-center gap-2">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-[#F0ABFC] transition-colors text-sm hover:translate-x-1.5 inline-flex items-center gap-1 duration-200"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Solutions ── */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-base text-white mb-5 tracking-wide">
              Solutions
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-[#E6398B] transition-colors text-sm hover:translate-x-1.5 inline-flex items-center gap-1 duration-200"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Info ── */}
          <div className="lg:col-span-4">
            <h4 className="font-display font-bold text-base text-white mb-5 tracking-wide">
              Headquarters
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#E6398B]/40 transition-colors">
                <MapPin className="w-5 h-5 text-[#E6398B] mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  328/14 W Sector, DHA Phase 3, Lahore, Pakistan
                </span>
              </li>

              <li className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#5B2A86]/60 transition-colors">
                <Phone className="w-5 h-5 text-[#F0ABFC] flex-shrink-0" />
                <a
                  href="tel:+923244017722"
                  className="text-white/80 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  0324-4017722 / +92 324 4017722
                </a>
              </li>

              <li className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#E6398B]/40 transition-colors">
                <Mail className="w-5 h-5 text-[#E6398B] flex-shrink-0" />
                <a
                  href="mailto:info@graphenecommunication.com"
                  className="text-white/80 hover:text-white text-xs sm:text-sm transition-colors"
                >
                  info@graphenecommunication.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs sm:text-sm">
            © {new Date().getFullYear()} Graphene Communication. All rights reserved. Founded 2014 in Lahore, Pakistan.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-white/50 hover:text-white text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/50 hover:text-white text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
