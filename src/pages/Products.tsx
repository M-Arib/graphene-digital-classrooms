import React, { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  X,
  Phone,
  Projector,
  Tv,
  Monitor,
  Bot,
  Eye,
  Check,
  Scale,
  ExternalLink,
  ZoomIn,
} from "lucide-react";
import {
  products,
  productCategories,
  Product,
} from "@/data/products";
import { GlassButton } from "@/components/animations/GlassButton";

// ─── 3D Tilt Product Card ────────────────────────────────────────────────────
function ProductCard({
  product,
  onViewDetails,
  onZoomImage,
  isSelectedForCompare,
  onToggleCompare,
}: {
  product: Product;
  onViewDetails: (p: Product) => void;
  onZoomImage: (img: { src: string; title: string; type: string }) => void;
  isSelectedForCompare: boolean;
  onToggleCompare: (p: Product) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 200, damping: 18 });
  const mouseY = useSpring(y, { stiffness: 200, damping: 18 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    x.set(clientX / rect.width - 0.5);
    y.set(clientY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = product.icon;

  const badgeStyles: Record<string, string> = {
    Flagship: "bg-amber-500/20 text-amber-500 border-amber-500/40",
    "Flagship Wall": "bg-amber-500/20 text-amber-500 border-amber-500/40",
    STEM: "bg-emerald-500/20 text-emerald-500 border-emerald-500/40",
    Innovation: "bg-[#E6398B]/20 text-[#E6398B] border-[#E6398B]/40",
    "Core Solution": "bg-[#5B2A86]/20 text-[#5B2A86] dark:text-[#F0ABFC] border-[#5B2A86]/40",
    New: "bg-sky-500/20 text-sky-400 border-sky-500/40",
    "2025 Models": "bg-rose-500/20 text-rose-400 border-rose-500/40",
    "Vertical Signage": "bg-indigo-500/20 text-indigo-400 border-indigo-500/40",
    "Mobile Foldable": "bg-purple-500/20 text-purple-400 border-purple-500/40",
    "Classroom Essential": "bg-blue-500/20 text-blue-400 border-blue-500/40",
    Robotics: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "Smart Power": "bg-amber-500/20 text-amber-400 border-amber-500/40",
    "4K Clarity": "bg-purple-500/20 text-purple-400 border-purple-500/40",
    "Crystal Clear": "bg-teal-500/20 text-teal-400 border-teal-500/40",
    "Zero Cables": "bg-indigo-500/20 text-indigo-400 border-indigo-500/40",
    "Eye Comfort": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`relative h-full flex flex-col justify-between rounded-2xl bg-card border transition-all duration-300 p-6 shadow-soft group ${
        isSelectedForCompare
          ? "border-[#E6398B] ring-2 ring-[#E6398B]/30 shadow-glow-pink"
          : "border-border hover:border-[#E6398B]/50 hover:shadow-strong"
      }`}
    >
      <div>
        {/* Header Badges & Compare Toggle */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-accent text-[#5B2A86] dark:text-[#F0ABFC]">
              {product.type}
            </span>
            {product.badge && (
              <span
                className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                  badgeStyles[product.badge] || "bg-muted text-foreground border-border"
                }`}
              >
                ★ {product.badge}
              </span>
            )}
          </div>

          {/* Compare Checkbox */}
          <button
            onClick={() => onToggleCompare(product)}
            className={`flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-lg transition-colors cursor-pointer ${
              isSelectedForCompare
                ? "bg-[#E6398B] text-white"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
            title="Compare this product"
          >
            {isSelectedForCompare ? (
              <>
                <Check className="w-3 h-3" />
                <span>Selected</span>
              </>
            ) : (
              <>
                <Scale className="w-3 h-3" />
                <span>Compare</span>
              </>
            )}
          </button>
        </div>

        {/* Product Visual with Click-to-Zoom */}
        <div
          onClick={() => {
            if (product.image) {
              onZoomImage({
                src: product.image,
                title: product.name,
                type: product.type,
              });
            }
          }}
          className={`relative w-full h-48 rounded-xl overflow-hidden bg-muted/60 dark:bg-muted/20 flex items-center justify-center mb-5 transition-all duration-300 ${
            product.image ? "cursor-zoom-in" : ""
          }`}
          title={product.image ? "Click for high-resolution closeup" : ""}
        >
          {product.image ? (
            <>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Zoom Hover Indicator Badge */}
              <div className="absolute bottom-2 right-2 px-2 py-1 rounded-lg bg-black/70 backdrop-blur-md text-white text-[10px] font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <ZoomIn className="w-3 h-3 text-[#F0ABFC]" />
                <span>Closeup</span>
              </div>
            </>
          ) : (
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#5B2A86] via-[#8A3BB8] to-[#E6398B] flex items-center justify-center text-white shadow-glow-purple group-hover:scale-110 transition-transform duration-500">
              <Icon className="w-10 h-10 group-hover:animate-pulse" />
            </div>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="font-display font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2 line-clamp-3 leading-relaxed">
          {product.description}
        </p>

        {/* Key Features */}
        {product.features && (
          <div className="mt-4 space-y-1.5 pt-3 border-t border-border">
            {product.features.slice(0, 3).map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E6398B] flex-shrink-0" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action CTA */}
      <div className="mt-6 pt-4 border-t border-border flex items-center gap-3">
        <button
          onClick={() => onViewDetails(product)}
          className="flex-1 py-2.5 rounded-xl bg-accent text-[#5B2A86] dark:text-[#F0ABFC] hover:bg-[#5B2A86] hover:text-white font-display font-bold text-xs transition-colors duration-200 cursor-pointer text-center flex items-center justify-center gap-1.5"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>View Specifications</span>
        </button>
        <Link
          to="/contact"
          className="p-2.5 rounded-xl bg-muted hover:bg-[#E6398B] hover:text-white text-muted-foreground transition-colors"
          title="Get a Quote"
        >
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Main Products Page ───────────────────────────────────────────────────────
export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [zoomedImage, setZoomedImage] = useState<{ src: string; title: string; type: string } | null>(null);
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (zoomedImage) {
          setZoomedImage(null);
        } else if (selectedProduct) {
          setSelectedProduct(null);
        } else if (isCompareModalOpen) {
          setIsCompareModalOpen(false);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomedImage, selectedProduct, isCompareModalOpen]);

  const toggleCompare = (product: Product) => {
    if (compareList.some((p) => p.id === product.id)) {
      setCompareList(compareList.filter((p) => p.id !== product.id));
    } else {
      if (compareList.length >= 3) {
        alert("You can compare up to 3 products at a time.");
        return;
      }
      setCompareList([...compareList, product]);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main-content" className="pt-32 pb-24">
        {/* ── Page Hero Header (Refined Font Sizing) ── */}
        <section className="py-12 relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent border border-border mb-3 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E6398B]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#5B2A86] dark:text-[#F0ABFC]">
                Turnkey Hardware & EdTech Portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3"
            >
              Interactive Solutions for Every Classroom
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mt-3 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
            >
              Explore our complete portfolio of DLP & laser projectors, 3 DVLED display architectures, JTouch 4K interactive flat panels, and STEM robotics labs. Click on any product image for a high-resolution closeup.
            </motion.p>
          </div>
        </section>

        {/* ── Section-by-Section Category Layout ── */}
        <div className="space-y-16 container mx-auto px-4 mt-4">
          {productCategories.map((cat, catIdx) => {
            const catProducts = products.filter((p) => p.category === cat.id);
            const Icon = cat.icon;
            return (
              <section
                key={cat.id}
                className={`p-6 sm:p-8 rounded-3xl border ${
                  catIdx % 2 === 0
                    ? "bg-card border-border shadow-soft"
                    : "bg-muted/30 border-border/70 shadow-sm"
                }`}
              >
                {/* Category Section Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-5 border-b border-border">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#5B2A86] via-[#8A3BB8] to-[#E6398B] flex items-center justify-center text-white shadow-soft">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#E6398B] font-bold">
                        Category {catIdx + 1}
                      </span>
                      <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                        {cat.label}
                      </h2>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Category Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onViewDetails={setSelectedProduct}
                      onZoomImage={setZoomedImage}
                      isSelectedForCompare={compareList.some((p) => p.id === product.id)}
                      onToggleCompare={toggleCompare}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* ── Product Specification Quick-View Modal (z-50) ── */}
        <AnimatePresence>
          {selectedProduct && (
            <div
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setSelectedProduct(null);
                }
              }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-strong my-auto"
              >
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-6 right-6 w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer z-10 transition-colors"
                  title="Close specifications"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Visual Header with Zoom trigger */}
                {selectedProduct.image && (
                  <div
                    onClick={() => {
                      if (selectedProduct.image) {
                        setZoomedImage({
                          src: selectedProduct.image,
                          title: selectedProduct.name,
                          type: selectedProduct.type,
                        });
                      }
                    }}
                    className="w-full h-52 rounded-2xl bg-muted/40 flex items-center justify-center mb-6 overflow-hidden p-4 cursor-zoom-in group relative"
                    title="Click for full-screen closeup"
                  >
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/70 text-white text-xs font-semibold flex items-center gap-1.5">
                      <ZoomIn className="w-3.5 h-3.5 text-[#F0ABFC]" />
                      <span>Click for Fullscreen Closeup</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent text-[#5B2A86] dark:text-[#F0ABFC]">
                    {selectedProduct.categoryLabel}
                  </span>
                  {selectedProduct.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E6398B]/15 text-[#E6398B] border border-[#E6398B]/30">
                      ★ {selectedProduct.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground mt-2 mb-2">
                  {selectedProduct.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  {selectedProduct.description}
                </p>

                {/* Official Product Page Link if present */}
                {selectedProduct.productLink && (
                  <div className="mb-6 p-4 rounded-2xl bg-accent/50 border border-[#E6398B]/20 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold text-foreground block">
                        Official Model Series Specifications
                      </span>
                      <span className="text-[11px] text-muted-foreground">
                        InFocus Genesis IV Series Technical Page
                      </span>
                    </div>
                    <a
                      href={selectedProduct.productLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#5B2A86] to-[#E6398B] text-white font-bold text-xs shadow-soft hover:scale-105 transition-transform"
                    >
                      <span>Visit Specs Page</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                {/* Core Features */}
                <div className="mb-6">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-foreground mb-3">
                    Key Capabilities & Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProduct.features?.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-foreground p-2.5 rounded-xl bg-muted/40 border border-border/50">
                        <CheckCircle2 className="w-4 h-4 text-[#E6398B] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specs */}
                {selectedProduct.specs && (
                  <div className="mb-6">
                    <h4 className="font-display font-bold text-xs uppercase tracking-wider text-foreground mb-3">
                      Technical Specifications
                    </h4>
                    <div className="rounded-xl border border-border overflow-hidden">
                      {selectedProduct.specs.map((spec, i) => (
                        <div
                          key={i}
                          className={`flex justify-between text-xs p-3 ${
                            i % 2 === 0 ? "bg-muted/30" : "bg-card"
                          }`}
                        >
                          <span className="font-semibold text-muted-foreground">{spec.label}</span>
                          <span className="font-bold text-foreground text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Modal CTA */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-border">
                  <Link to="/contact" className="w-full sm:w-auto flex-1">
                    <GlassButton variant="primary" showArrow className="w-full py-3 text-xs sm:text-sm">
                      Request Official Quotation & Site Demo
                    </GlassButton>
                  </Link>
                  <a href="tel:+923244017722" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-5 py-3 rounded-xl border border-border font-display font-bold text-xs text-foreground hover:bg-muted flex items-center justify-center gap-2 cursor-pointer">
                      <Phone className="w-4 h-4 text-[#E6398B]" />
                      0324-4017722
                    </button>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ── High-Resolution Image Zoom / Lightbox Modal (z-[70]) ── */}
        <AnimatePresence>
          {zoomedImage && (
            <div
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setZoomedImage(null);
                }
              }}
              className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl cursor-zoom-out"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", damping: 22, stiffness: 220 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl max-h-[90vh] rounded-3xl bg-[#0F0F1A] border border-white/20 p-6 sm:p-8 shadow-strong flex flex-col items-center cursor-default my-auto"
              >
                <button
                  onClick={() => setZoomedImage(null)}
                  className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
                  title="Close viewer (ESC)"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="w-full text-left mb-4 pr-12">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#5B2A86] text-[#F0ABFC]">
                    {zoomedImage.type}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-2">
                    {zoomedImage.title}
                  </h3>
                </div>

                <div className="w-full flex-1 flex items-center justify-center overflow-hidden py-4 max-h-[65vh]">
                  <img
                    src={zoomedImage.src}
                    alt={zoomedImage.title}
                    className="max-h-[60vh] max-w-full object-contain rounded-2xl drop-shadow-2xl"
                  />
                </div>

                <div className="w-full pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                  <span>High-Resolution Product Closeup</span>
                  <button
                    onClick={() => setZoomedImage(null)}
                    className="text-[#E6398B] font-bold hover:underline cursor-pointer"
                  >
                    Click to close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ── Floating Compare Bottom Bar ── */}
        <AnimatePresence>
          {compareList.length > 0 && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-2xl bg-[#0F0F1A]/95 text-white backdrop-blur-2xl border border-[#E6398B]/40 rounded-2xl p-4 shadow-strong flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#5B2A86] to-[#E6398B] flex items-center justify-center text-white font-bold text-xs">
                  {compareList.length}/3
                </div>
                <div>
                  <div className="text-xs font-bold">Product Comparison Ready</div>
                  <div className="text-[10px] text-white/70">
                    {compareList.map((p) => p.name).join(", ")}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsCompareModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#5B2A86] to-[#E6398B] text-white font-display font-bold text-xs hover:scale-105 transition-all shadow-glow-pink cursor-pointer"
                >
                  Compare Now
                </button>
                <button
                  onClick={() => setCompareList([])}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 transition-colors"
                  title="Clear selection"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Side-by-Side Product Comparison Modal ── */}
        <AnimatePresence>
          {isCompareModalOpen && (
            <div
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setIsCompareModalOpen(false);
                }
              }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-strong"
              >
                <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground">
                      Product Comparison Matrix
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Compare specifications, features, and target use cases side by side.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsCompareModalOpen(false)}
                    className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {compareList.map((product) => (
                    <div key={product.id} className="p-5 rounded-2xl bg-muted/30 border border-border flex flex-col justify-between">
                      <div>
                        {product.image && (
                          <div
                            onClick={() => {
                              if (product.image) {
                                setZoomedImage({
                                  src: product.image,
                                  title: product.name,
                                  type: product.type,
                                });
                              }
                            }}
                            className="w-full h-32 rounded-xl bg-card p-2 flex items-center justify-center mb-3 cursor-zoom-in"
                            title="Click for closeup"
                          >
                            <img src={product.image} alt={product.name} className="max-h-full object-contain" />
                          </div>
                        )}
                        <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded bg-accent text-[#5B2A86] dark:text-[#F0ABFC]">
                          {product.categoryLabel}
                        </span>
                        <h4 className="font-display font-bold text-base text-foreground mt-2 mb-1">
                          {product.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-4">
                          {product.description}
                        </p>

                        {/* Specs list */}
                        {product.specs && (
                          <div className="space-y-2 border-t border-border pt-3">
                            <span className="text-[10px] font-mono text-[#E6398B] font-bold uppercase tracking-wider block">
                              Key Specs:
                            </span>
                            {product.specs.map((s, i) => (
                              <div key={i} className="text-xs flex justify-between">
                                <span className="text-muted-foreground">{s.label}:</span>
                                <span className="font-semibold text-foreground text-right">{s.value}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <Link to="/contact" className="mt-6">
                        <button className="w-full py-2 rounded-xl bg-gradient-to-r from-[#5B2A86] to-[#E6398B] text-white font-display font-bold text-xs shadow-soft hover:shadow-strong transition-all">
                          Request Quote
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
export default Products;
