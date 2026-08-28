import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, Eye } from "lucide-react";
import { products, Product } from "@/data/products";

// ─── 3D Tilt Card Component ──────────────────────────────────────────────────
function TiltProductCard({ product, index }: { product: Product; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt calculation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    x.set(clientX / rect.width - 0.5);
    y.set(clientY / rect.height - 0.5);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const Icon = product.icon;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
          rotateX: 15,
          rotateY: -15,
        },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            delay: index * 0.15,
          },
        },
      }}
      className="perspective-1000 h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="relative h-full flex flex-col justify-between rounded-2xl bg-card/90 dark:bg-[#0F0F1A]/90 backdrop-blur-xl border border-border hover:border-[#E6398B]/50 hover:shadow-strong transition-colors duration-300 p-6 overflow-hidden group cursor-pointer"
      >
        {/* Dynamic Glow Border on Hover */}
        <div
          className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-[#5B2A86]/25 to-[#E6398B]/25 blur-xl transition-opacity duration-500 pointer-events-none ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        <div>
          {/* Header row: Category & Badge */}
          <div className="flex items-center justify-between gap-2 mb-4" style={{ transform: "translateZ(20px)" }}>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent text-[#5B2A86] dark:text-[#F0ABFC] group-hover:rotate-2 transition-transform duration-300">
              {product.type || product.categoryLabel}
            </span>
            {product.badge && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#E6398B]/15 text-[#E6398B] border border-[#E6398B]/30">
                <Sparkles className="w-3 h-3" />
                {product.badge}
              </span>
            )}
          </div>

          {/* Product Visual or Icon Showcase */}
          <div
            className="relative w-full h-48 rounded-xl overflow-hidden bg-muted/60 dark:bg-muted/20 flex items-center justify-center mb-5 group-hover:shadow-soft transition-all duration-500"
            style={{ transform: "translateZ(30px)" }}
          >
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#5B2A86] via-[#8A3BB8] to-[#E6398B] flex items-center justify-center text-white shadow-glow-purple group-hover:scale-110 transition-transform duration-500">
                <Icon className="w-10 h-10 group-hover:animate-pulse" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Title & Description */}
          <div style={{ transform: "translateZ(25px)" }}>
            <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Key Features preview */}
          {product.features && (
            <div className="mt-4 space-y-1.5 pt-3 border-t border-border/60" style={{ transform: "translateZ(15px)" }}>
              {product.features.slice(0, 2).map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E6398B] flex-shrink-0" />
                  <span className="line-clamp-1">{feat}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between" style={{ transform: "translateZ(20px)" }}>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-[#E6398B] transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary group-hover:bg-[#E6398B] group-hover:text-white transition-colors duration-300">
            <Eye className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Products Section ───────────────────────────────────────────────────
export function ProductsSection() {
  // Show ONLY 4 featured products on the home page as strictly required
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="py-28 bg-muted/40 relative overflow-hidden">
      {/* Background Decorative ambient light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#5B2A86]/10 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#E6398B]/10 blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent border border-border mb-4 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#E6398B]" />
            <span className="text-[#5B2A86] dark:text-[#F0ABFC] font-bold text-xs uppercase tracking-wider">
              Future-Ready Hardware
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground"
          >
            Cutting-Edge Smart Classroom Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mt-4 text-base sm:text-lg leading-relaxed"
          >
            Equipping educational institutions across Pakistan with the latest interactive displays, student devices, and STEM robotics tools.
          </motion.p>
        </div>

        {/* 3D Product Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredProducts.map((product, index) => (
            <TiltProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA to full catalogue */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-display font-bold text-base bg-gradient-to-r from-[#5B2A86] to-[#E6398B] text-white shadow-glow-pink hover:shadow-strong hover:scale-105 transition-all duration-300 group"
          >
            <span>Explore All 20+ Solutions Across 4 Categories</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
export default ProductsSection;