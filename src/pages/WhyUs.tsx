import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
    title: "10+ Years of Experience",
    description: "We bring over a decade of expertise in educational technology, understanding the unique needs of institutions.",
    stat: "10+",
    statLabel: "Years",
  },
  {
    icon: Shield,
    title: "Proven Quality",
    description: "Every product and service we deliver is rigorously tested and backed by industry-leading standards.",
    stat: "100%",
    statLabel: "Quality",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Our support team is available 24/7 to help you with any issues or questions.",
    stat: "24/7",
    statLabel: "Support",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description: "We don't believe in one-size-fits-all. Every solution is tailored to your specific requirements.",
    stat: "100%",
    statLabel: "Custom",
  },
  {
    icon: TrendingUp,
    title: "Latest Technology",
    description: "We stay ahead of the curve, bringing you the newest innovations in educational technology.",
    stat: "50+",
    statLabel: "Products",
  },
  {
    icon: Clock,
    title: "Quick Implementation",
    description: "Our efficient processes ensure fast deployment with minimal disruption to your operations.",
    stat: "2-4",
    statLabel: "Weeks",
  },
];


const WhyUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Your Trusted Partner in Educational Technology
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Discover why hundreds of educational institutions choose Graphene Communication 
                as their technology partner.
              </p>
            </div>
          </div>
        </section>

        {/* Reasons Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <reason.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="text-right">
                      <p className="font-display text-3xl font-bold text-secondary">{reason.stat}</p>
                      <p className="text-muted-foreground text-sm">{reason.statLabel}</p>
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-center shadow-strong">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Join Our Partner Network?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Let's discuss how we can help transform your educational environment.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">
                  Start the Conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhyUs;
