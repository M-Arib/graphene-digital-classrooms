import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-center bg-cover opacity-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Classrooms?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Join 500+ educational institutions that have already modernized their 
            learning environments with Graphene Communication.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="secondary" size="xl">
              <Link to="/contact">
                Get a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href="tel:+1234567890">
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm mb-4">
              Trusted by leading educational institutions
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {["School District A", "University B", "College C", "Academy D"].map((name, i) => (
                <div 
                  key={i}
                  className="px-4 py-2 rounded-lg bg-primary-foreground/10 text-primary-foreground/70 text-sm font-medium"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
