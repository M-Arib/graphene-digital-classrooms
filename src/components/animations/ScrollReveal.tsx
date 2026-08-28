import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none" | "scale";
  delay?: number;
  duration?: number;
  className?: string;
  stagger?: boolean;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  stagger = false,
}: ScrollRevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 40, scale: 1 };
      case "down":
        return { opacity: 0, y: -40, scale: 1 };
      case "left":
        return { opacity: 0, x: 40, scale: 1 };
      case "right":
        return { opacity: 0, x: -40, scale: 1 };
      case "scale":
        return { opacity: 0, scale: 0.92 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        type: "spring",
        damping: 18,
        stiffness: 90,
        duration,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
export default ScrollReveal;
