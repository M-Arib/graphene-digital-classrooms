import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lightbulb, Target, Users, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We bring the latest educational technology to transform how students learn and teachers teach.",
  },
  {
    icon: Target,
    title: "Student-Focused",
    description: "Every solution we provide is designed with student engagement and learning outcomes in mind.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Our team provides comprehensive training and ongoing support for all implementations.",
  },
];

export function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Graphene Communication
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Your Partner in Educational Transformation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Graphene Communication is an electronics and education-technology solutions 
              provider focused on transforming traditional classrooms into modern, smart, 
              and future-ready learning environments. We work closely with schools, colleges, 
              and universities to support their transition toward advanced digital education.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
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
                Read More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center animate-pulse-glow">
                    <span className="text-primary-foreground font-display font-bold text-4xl">G</span>
                  </div>
                  <p className="font-display text-xl font-semibold text-foreground">
                    Graphene Communication
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Shaping the Future of Education
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-medium max-w-xs hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full gradient-warm flex items-center justify-center">
                  <span className="text-2xl font-bold text-secondary-foreground">15+</span>
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">Years of Excellence</p>
                  <p className="text-muted-foreground text-sm">In Education Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
