import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingButtons() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/923244017722"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
                <MessageCircle className="w-7 h-7 fill-white" />
                {/* Tooltip */}
                <span className="absolute right-16 bg-slate-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    Chat on WhatsApp
                </span>
            </a>

            {/* Scroll To Top Button */}
            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className={cn(
                    "fixed bottom-24 right-6 z-50 w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-medium hover:shadow-strong flex items-center justify-center transition-all duration-300 hover:scale-110",
                    showScrollTop
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-4 pointer-events-none"
                )}
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </>
    );
}
