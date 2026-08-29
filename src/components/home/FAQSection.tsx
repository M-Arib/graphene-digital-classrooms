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
    <section className="py-24 bg-muted/30 relative overflow-hidden">
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
      </div>

      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent border border-border mb-3 shadow-sm"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#E6398B]" />
            <span className="text-[#5B2A86] dark:text-[#F0ABFC] font-bold text-xs uppercase tracking-wider">
              Frequently Asked Questions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight"
          >
            Everything You Need to Know
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mt-3 text-xs sm:text-sm max-w-lg mx-auto"
          >
            Find quick answers regarding our installation timelines, tender procurement, warranty, and nationwide support.
          </motion.p>

          {/* Real-time Search & Filter Input */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 relative max-w-md mx-auto"
          >
            <div className="relative flex items-center">
              <Search className="absolute left-3.5 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions (e.g., installation, tenders, warranty)..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-card border border-border focus:border-[#E6398B] focus:ring-2 focus:ring-[#E6398B]/20 outline-none text-xs sm:text-sm text-foreground placeholder:text-muted-foreground shadow-soft transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3.5 text-xs font-bold text-muted-foreground hover:text-foreground"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results Count Badge */}
            <div className="flex items-center justify-between text-[11px] text-muted-foreground mt-2 px-1">
              <span>Showing {filteredFaqs.length} of {faqs.length} questions</span>
              {search && (
                <span className="text-[#E6398B] font-semibold">
                  Filtered by "{search}"
                </span>
              )}
            </div>
          </motion.div>
        </div>

        {/* Accordion List with Refined, Professional Font Sizes */}
        <div className="space-y-3">
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
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                    className={`rounded-xl border transition-all duration-300 overflow-hidden shadow-soft ${
                      isOpen
                        ? "bg-card border-[#E6398B]/50 shadow-glow-pink"
                        : "bg-card/70 dark:bg-[#0F0F1A]/70 border-border hover:border-border/80 hover:bg-card"
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-3 cursor-pointer"
                    >
                      <span className="font-display font-medium text-xs sm:text-sm text-foreground flex items-center gap-2.5">
                        <MessageSquare className={`w-3.5 h-3.5 flex-shrink-0 transition-colors ${isOpen ? "text-[#E6398B]" : "text-muted-foreground"}`} />
                        <HighlightedText text={faq.question} highlight={search} />
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                          isOpen
                            ? "bg-[#E6398B] text-white"
                            : "bg-accent text-muted-foreground"
                        }`}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40">
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
                className="text-center p-8 bg-card rounded-xl border border-dashed border-border"
              >
                <HelpCircle className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="font-display font-bold text-sm text-foreground">
                  No matching questions found
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Have a specific query? Call us at 0324-4017722 or email us.
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
