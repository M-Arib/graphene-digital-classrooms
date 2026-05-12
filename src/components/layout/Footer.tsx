import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "@/components/Logo";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Vision & Mission", path: "/vision" },
    { name: "Why Choose Us", path: "/why-us" },
    { name: "Contact", path: "/contact" },
  ],
  solutions: [
    { name: "Smart Classrooms", path: "/smart-classrooms" },
    { name: "Interactive Displays", path: "/products" },
    { name: "Educational Tablets", path: "/products" },
    { name: "Audio-Visual Systems", path: "/products" },
  ],
};

// Update these with real social media URLs when available
const socialLinks = {
  facebook: "",   // e.g. "https://facebook.com/graphenecommunication"
  instagram: "",  // e.g. "https://instagram.com/graphenecommunication"
  linkedin: "",   // e.g. "https://linkedin.com/company/graphenecommunication"
};

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              aria-label="Graphene Communication — Home"
              className="inline-flex items-center mb-6"
            >
              <Logo onDark className="h-12 w-auto" />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Transforming traditional classrooms into modern, smart, and
              future-ready learning environments across Pakistan.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/923244017722"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-green-600/80 flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              )}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 text-white">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  328/14 W Sector, DHA Phase 3, Lahore, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-violet-400 flex-shrink-0" />
                <a href="tel:+923244017722" className="text-white/70 hover:text-white text-sm transition-colors">
                  0324-4017722
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-violet-400 flex-shrink-0" />
                <a href="mailto:info@graphenecommunication.com" className="text-white/70 hover:text-white text-sm transition-colors">
                  info@graphenecommunication.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a
                  href="https://wa.me/923244017722"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-green-400 text-sm transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Graphene Communication. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
