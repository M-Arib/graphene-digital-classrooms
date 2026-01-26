import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Zap, HeartHandshake, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "10+ years serving Pakistan's top educational institutions",
  },
  {
    icon: Zap,
    title: "Modern Technology",
    description: "Latest smart classroom solutions for enhanced learning",
  },
  {
    icon: HeartHandshake,
    title: "Full Support",
    description: "Installation, training, and ongoing technical assistance",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Your Trusted Ed-Tech Partner
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Graphene Communication transforms traditional classrooms into smart, 
              future-ready learning environments. We partner with schools, colleges, 
              and universities across Pakistan.
            </p>

            <div className="grid gap-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild variant="outline" size="lg">
              <Link to="/about">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Stats Card */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="bg-card rounded-2xl shadow-medium border border-border p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-3xl">G</span>
                </div>
                <p className="font-display text-xl font-semibold text-foreground">
                  Graphene Communication
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Excellence in Educational Technology
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "150+", label: "Schools" },
                  { value: "100K+", label: "Students" },
                  { value: "10+", label: "Years" },
                  { value: "98%", label: "Satisfaction" },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-muted/50">
                    <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-muted-foreground text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
