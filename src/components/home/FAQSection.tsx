import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, HelpCircle, Sparkles, MessageSquare } from "lucide-react";
import { faqs } from "@/data/faqs";

// Helper component to highlight matched search terms
function HighlightedText({ text, highlight }: { text: string; highlight: string }) {
  if (!highlight.trim()) return <span>{text}</span>;
  const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark
            key={i}
            className="bg-[#E6398B]/25 text-[#E6398B] font-bold px-1 rounded"
          >
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
}

export function FAQSection() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = useMemo(() => {
    if (!search.trim()) return faqs;
    const q = search.toLowerCase();
    return faqs.filter(
      (f) =>
        f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
    );
  }, [search]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 bg-muted/30 relative overflow-hidden">
      {/* Floating Decorative Question Mark Particles in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none">
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 left-10 text-primary/10 text-8xl font-black font-display"
        >
          ?
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -15, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-14 text-[#E6398B]/10 text-9xl font-black font-display"
        >
          ?
        </motion.div>
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 right-1/4 text-[#F0ABFC]/15 text-6xl font-black"
        >
          ?
        </motion.div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent border border-border mb-4 shadow-sm"
          >
            <HelpCircle className="w-4 h-4 text-[#E6398B]" />
            <span className="text-[#5B2A86] dark:text-[#F0ABFC] font-bold text-xs uppercase tracking-wider">
              Frequently Asked Questions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground"
          >
            Everything You Need to Know
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mt-4 text-base sm:text-lg"
          >
            Find quick answers regarding our installation timelines, products, warranty, and nationwide support.
          </motion.p>

          {/* Real-time Search & Filter Input */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 relative max-w-md mx-auto"
          >
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions (e.g., installation, warranty, tablets)..."
                className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-card border border-border focus:border-[#E6398B] focus:ring-2 focus:ring-[#E6398B]/20 outline-none text-sm text-foreground placeholder:text-muted-foreground shadow-soft transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 text-xs font-bold text-muted-foreground hover:text-foreground"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results Count Badge */}
            <div className="flex items-center justify-between text-xs text-muted-foreground mt-2.5 px-2">
              <span>Showing {filteredFaqs.length} of {faqs.length} questions</span>
              {search && (
                <span className="text-[#E6398B] font-semibold">
                  Filtered by "{search}"
                </span>
              )}
            </div>
          </motion.div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-soft ${
                      isOpen
                        ? "bg-card border-[#E6398B]/50 shadow-glow-pink"
                        : "bg-card/70 dark:bg-[#0F0F1A]/70 border-border hover:border-border/80 hover:bg-card"
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-display font-bold text-base sm:text-lg text-foreground flex items-center gap-3">
                        <MessageSquare className={`w-4 h-4 flex-shrink-0 transition-colors ${isOpen ? "text-[#E6398B]" : "text-muted-foreground"}`} />
                        <HighlightedText text={faq.question} highlight={search} />
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                          isOpen
                            ? "bg-[#E6398B] text-white"
                            : "bg-accent text-muted-foreground"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/40">
                            <HighlightedText text={faq.answer} highlight={search} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center p-12 bg-card rounded-2xl border border-dashed border-border"
              >
                <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="font-display font-bold text-lg text-foreground">
                  No matching questions found
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Have a specific question? Contact our team directly at 0324-4017722.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
export default FAQSection;
