import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import heroImage from "@/assets/hero-classroom.webp";

function StatItem({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, count } = useCountUp(target);
  return (
    <div ref={ref}>
      <p className="font-display text-3xl font-bold text-secondary">
        {count}{suffix}
      </p>
      <p className="text-primary-foreground/60 text-sm mt-1">{label}</p>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="A modern smart classroom with interactive display boards and engaged students"
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/60 dark:from-primary/95 dark:via-primary/90 dark:to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Transforming Education with Technology
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
            Transform Your{" "}
            <span className="text-secondary">Classrooms</span>{" "}
            Into Smart Learning Spaces
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up animation-delay-200">
            We partner with schools across Pakistan to create smart,
            future-ready learning environments that inspire curiosity and enhance educational outcomes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Button asChild variant="hero" size="xl">
              <Link to="/products">
                Explore Solutions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/about">
                <PlayCircle className="w-5 h-5" />
                Learn More
              </Link>
            </Button>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-up animation-delay-400">
            <StatItem target={150} suffix="+" label="Schools Transformed" />
            <StatItem target={100} suffix="K+" label="Students Benefited" />
            <StatItem target={10} suffix="+" label="Years Experience" />
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

