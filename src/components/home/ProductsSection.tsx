import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Tablet, Projector, Speaker, ArrowRight } from "lucide-react";
import smartBoardImg from "@/assets/smart-board.jpg";
import displayPanelImg from "@/assets/display-panel.jpg";
import tabletsImg from "@/assets/tablets-learning.jpg";

const products = [
  {
    title: "Smart Boards & Interactive Displays",
    description: "Transform teaching with touch-enabled displays that make learning interactive and engaging.",
    icon: Monitor,
    image: smartBoardImg,
  },
  {
    title: "LED/LCD Display Systems",
    description: "High-resolution display panels for classrooms, auditoriums, and presentation spaces.",
    icon: Projector,
    image: displayPanelImg,
  },
  {
    title: "Educational Tablets & Devices",
    description: "Kid-friendly tablets and learning devices designed for interactive education.",
    icon: Tablet,
    image: tabletsImg,
  },
  {
    title: "Audio-Visual Equipment",
    description: "Complete AV solutions for classrooms, labs, and auditoriums with crystal-clear sound.",
    icon: Speaker,
    image: null,
  },
];

export function ProductsSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Products & Solutions
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Complete Range of Educational Technology
          </h2>
          <p className="text-muted-foreground">
            From smart boards to educational tablets, we provide everything needed 
            to create a modern, engaging learning environment.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full gradient-primary flex items-center justify-center">
                        <product.icon className="w-16 h-16 text-primary-foreground/50" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                      <product.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {product.description}
                    </p>
                    <Link 
                      to="/products" 
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild variant="default" size="lg">
            <Link to="/products">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
