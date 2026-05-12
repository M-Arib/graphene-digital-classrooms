import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Monitor, Tablet, Projector, Speaker, Wifi, Lightbulb, ArrowRight, Search } from "lucide-react";
import smartBoardImg from "@/assets/smart-board.webp";
import displayPanelImg from "@/assets/display-panel.webp";
import tabletsImg from "@/assets/tablets-learning.webp";

const products = [
  {
    title: "Interactive Smart Boards",
    description: "Touch-enabled displays that make teaching interactive and engaging. Features multi-touch capabilities, annotation tools, and seamless device connectivity.",
    icon: Monitor,
    image: smartBoardImg,
    category: "Displays",
    features: ["Multi-touch support", "Built-in software", "Wireless connectivity", "4K resolution"],
  },
  {
    title: "LED/LCD Display Panels",
    description: "High-resolution display systems perfect for presentations, digital signage, and classroom instruction with crystal-clear visuals.",
    icon: Projector,
    image: displayPanelImg,
    category: "Displays",
    features: ["Ultra HD quality", "Energy efficient", "Long lifespan", "Anti-glare coating"],
  },
  {
    title: "Educational Tablets",
    description: "Kid-friendly tablets designed specifically for educational purposes with pre-loaded learning apps and parental controls.",
    icon: Tablet,
    image: tabletsImg,
    category: "Devices",
    features: ["Rugged design", "Educational apps", "Parental controls", "Long battery life"],
  },
  {
    title: "Audio-Visual Systems",
    description: "Complete AV solutions including speakers, microphones, and sound systems for classrooms, auditoriums, and conference rooms.",
    icon: Speaker,
    image: null,
    category: "Audio-Visual",
    features: ["Crystal clear audio", "Easy installation", "Scalable systems", "Remote control"],
  },
  {
    title: "Wireless Presentation Systems",
    description: "Share content from any device wirelessly to displays and projectors for seamless presentations and collaboration.",
    icon: Wifi,
    image: null,
    category: "Connectivity",
    features: ["Multi-device support", "No cables needed", "Instant mirroring", "Secure connection"],
  },
  {
    title: "Smart Lighting Solutions",
    description: "Intelligent lighting systems that adapt to classroom needs, reducing eye strain and creating optimal learning environments.",
    icon: Lightbulb,
    image: null,
    category: "Lighting",
    features: ["Auto-adjustment", "Energy saving", "Mood settings", "App controlled"],
  },
];

const categories = ["All", "Displays", "Devices", "Audio-Visual", "Connectivity", "Lighting"];

const Products = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = products.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Complete Educational Technology Solutions
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From smart boards to complete classroom solutions, we provide everything
                you need to create a modern, engaging learning environment.
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-10 bg-background border-b border-border sticky top-16 z-30 backdrop-blur-md bg-background/95">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="pl-10 h-11 bg-muted/50"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat
                        ? "bg-primary text-primary-foreground shadow-soft"
                        : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No products found for "{search}"</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => { setSearch(""); setActiveCategory("All"); }}
                >
                  Clear filters
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((product, index) => (
                  <Card
                    key={index}
                    className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="h-48 relative overflow-hidden">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full gradient-primary flex items-center justify-center">
                          <product.icon className="w-20 h-20 text-primary-foreground/50" />
                        </div>
                      )}
                      <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-medium rounded-full bg-white/90 dark:bg-card/90 text-foreground shadow-soft">
                        {product.category}
                      </span>
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
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all duration-200"
                      >
                        Get a Quote <ArrowRight className="w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              We tailor our products to meet your specific requirements. Call 0324-4017722 or get in touch with our team.
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
