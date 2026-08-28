import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { School, Users, Award, Sparkles, TrendingUp } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function AnimatedStats() {
  const stats = [
    {
      id: "schools",
      icon: School,
      value: 150,
      suffix: "+",
      label: "Schools Transformed",
      sublabel: "Across all major cities in Pakistan",
      gradient: "from-[#5B2A86] to-[#8A3BB8]",
      ringColor: "border-[#5B2A86]/40",
      effect: "particle-trail",
    },
    {
      id: "students",
      icon: Users,
      value: 100,
      suffix: "K+",
      label: "Students Impacted",
      sublabel: "Experiencing smart 21st-century learning",
      gradient: "from-[#8A3BB8] to-[#E6398B]",
      ringColor: "border-[#E6398B]/40",
      effect: "spiral",
    },
    {
      id: "years",
      icon: Award,
      value: 10,
      suffix: "+",
      label: "Years of Innovation",
      sublabel: "Pioneering digital education since 2014",
      gradient: "from-[#E6398B] to-[#F0ABFC]",
      ringColor: "border-[#F0ABFC]/50",
      effect: "expanding-ring",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: index * 0.18, ease: "easeOut" }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative group p-6 rounded-2xl bg-card/80 dark:bg-[#0F0F1A]/80 backdrop-blur-xl border border-border hover:border-[#E6398B]/50 shadow-soft hover:shadow-strong transition-all duration-300 overflow-hidden"
          >
            {/* Glow backdrop on hover */}
            <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-gradient-to-br from-[#5B2A86]/20 to-[#E6398B]/20 blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

            {/* Expanding ring visual effect */}
            <div className="relative flex items-center justify-between mb-4">
              <div className="relative">
                <div className={`absolute -inset-1.5 rounded-xl border ${stat.ringColor} animate-pulse-ring`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-md text-white`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-accent text-[#E6398B] font-bold">
                Verified
              </span>
            </div>

            {/* Counter Value */}
            <div className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors flex items-baseline gap-1">
              <Counter end={stat.value} suffix={stat.suffix} duration={2.2} />
            </div>

            {/* Labels */}
            <h3 className="font-display font-bold text-base text-foreground mt-1">
              {stat.label}
            </h3>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              {stat.sublabel}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
export default AnimatedStats;
