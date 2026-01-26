import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Monitor, Tablet, Projector, Speaker, Wifi, Lightbulb, ArrowRight } from "lucide-react";
import smartBoardImg from "@/assets/smart-board.jpg";
import displayPanelImg from "@/assets/display-panel.jpg";
import tabletsImg from "@/assets/tablets-learning.jpg";

const products = [
  {
    title: "Interactive Smart Boards",
    description: "Touch-enabled displays that make teaching interactive and engaging. Features multi-touch capabilities, annotation tools, and seamless device connectivity.",
    icon: Monitor,
    image: smartBoardImg,
    features: ["Multi-touch support", "Built-in software", "Wireless connectivity", "4K resolution"],
  },
  {
    title: "LED/LCD Display Panels",
    description: "High-resolution display systems perfect for presentations, digital signage, and classroom instruction with crystal-clear visuals.",
    icon: Projector,
    image: displayPanelImg,
    features: ["Ultra HD quality", "Energy efficient", "Long lifespan", "Anti-glare coating"],
  },
  {
    title: "Educational Tablets",
    description: "Kid-friendly tablets designed specifically for educational purposes with pre-loaded learning apps and parental controls.",
    icon: Tablet,
    image: tabletsImg,
    features: ["Rugged design", "Educational apps", "Parental controls", "Long battery life"],
  },
  {
    title: "Audio-Visual Systems",
    description: "Complete AV solutions including speakers, microphones, and sound systems for classrooms, auditoriums, and conference rooms.",
    icon: Speaker,
    image: null,
    features: ["Crystal clear audio", "Easy installation", "Scalable systems", "Remote control"],
  },
  {
    title: "Wireless Presentation Systems",
    description: "Share content from any device wirelessly to displays and projectors for seamless presentations and collaboration.",
    icon: Wifi,
    image: null,
    features: ["Multi-device support", "No cables needed", "Instant mirroring", "Secure connection"],
  },
  {
    title: "Smart Lighting Solutions",
    description: "Intelligent lighting systems that adapt to classroom needs, reducing eye strain and creating optimal learning environments.",
    icon: Lightbulb,
    image: null,
    features: ["Auto-adjustment", "Energy saving", "Mood settings", "App controlled"],
  },
];

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Products & Solutions
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Complete Educational Technology Solutions
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From smart boards to complete classroom solutions, we provide everything 
                you need to create a modern, engaging learning environment.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <div className="h-48 relative overflow-hidden">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full gradient-primary flex items-center justify-center">
                        <product.icon className="w-20 h-20 text-primary-foreground/50" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                      <product.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              We can tailor our products to meet your specific requirements. Get in touch with our team.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
