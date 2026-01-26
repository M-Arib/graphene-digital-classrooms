import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, Users, Wifi, Zap, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-classroom.jpg";

const features = [
  {
    icon: Monitor,
    title: "Interactive Displays",
    description: "Large touch-enabled screens that make lessons come alive with interactive content.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Enable group activities and peer learning through shared digital workspaces.",
  },
  {
    icon: Wifi,
    title: "Connected Ecosystem",
    description: "Seamlessly integrate all devices and systems for a unified learning experience.",
  },
  {
    icon: Zap,
    title: "Real-time Feedback",
    description: "Instant assessment tools that help teachers understand student progress.",
  },
];

const benefits = [
  "Increased student engagement and participation",
  "Better visualization of complex concepts",
  "Personalized learning experiences",
  "Improved teacher effectiveness",
  "Enhanced collaboration and communication",
  "Future-ready skill development",
  "Reduced paper usage and costs",
  "Easy content sharing and access",
];

const SmartClassrooms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Smart Classroom"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-primary-foreground/90 text-sm font-medium">
                  Smart Learning Solutions
                </span>
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
                Transform Your Classrooms Into Smart Learning Spaces
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                Create engaging, interactive, and technology-enhanced learning environments 
                that inspire students and empower educators.
              </p>
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Schedule a Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Smart Classroom Features
              </h2>
              <p className="text-muted-foreground">
                Our smart classroom solutions combine cutting-edge technology with 
                educational best practices.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto rounded-xl gradient-primary flex items-center justify-center mb-5">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Benefits of Smart Classrooms
                </h2>
                <p className="text-muted-foreground mb-8">
                  Smart classrooms create an environment where students are more engaged, 
                  teachers are more effective, and learning outcomes improve significantly.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-strong">
                  <img
                    src={heroImage}
                    alt="Smart Classroom in Action"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-medium hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full gradient-warm flex items-center justify-center">
                      <span className="text-xl font-bold text-secondary-foreground">85%</span>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground">Improved Engagement</p>
                      <p className="text-muted-foreground text-sm">Average student participation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Go Smart?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Let us help you design and implement the perfect smart classroom solution for your institution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">
                  Get a Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SmartClassrooms;
