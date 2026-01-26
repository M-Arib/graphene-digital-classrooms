import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Headphones, 
  Award, 
  TrendingUp, 
  Settings, 
  Clock,
  ArrowRight 
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Proven Expertise",
    description: "10+ years of experience in educational technology implementation.",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "Worked with 150+ institutions across the country.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated support team available round the clock.",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description: "Tailored solutions that fit your specific requirements.",
  },
  {
    icon: TrendingUp,
    title: "Latest Technology",
    description: "We bring the newest innovations in educational technology.",
  },
  {
    icon: Clock,
    title: "Quick Implementation",
    description: "Fast deployment with minimal disruption to your operations.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why Graphene Communication
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Your Trusted Education Technology Partner
          </h2>
          <p className="text-muted-foreground">
            We're committed to delivering excellence in every project, 
            backed by expertise and dedicated support.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/why-us">
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
