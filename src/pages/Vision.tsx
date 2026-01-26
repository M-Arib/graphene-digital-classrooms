import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Eye, Target, ArrowRight } from "lucide-react";

const Vision = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Vision & Mission
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Shaping the Future of Education
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our vision and mission drive every decision we make and every solution we create.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Vision
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the leading provider of educational technology solutions that 
                  transform traditional learning spaces into dynamic, engaging, and 
                  future-ready environments where every student has the opportunity 
                  to thrive and succeed.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-10">
                <blockquote className="text-2xl font-display font-semibold text-foreground italic">
                  "We envision a world where technology empowers every learner to 
                  reach their full potential."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-10">
                <blockquote className="text-2xl font-display font-semibold text-foreground italic">
                  "Our mission is to make modern education accessible and 
                  inspiring for all."
                </blockquote>
              </div>

              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 rounded-2xl gradient-warm flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To promote modern classrooms that encourage optimistic, engaging, 
                  and effective learning. We believe technology should inspire curiosity, 
                  improve understanding, and create a positive learning atmosphere for 
                  students of all ages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Goals Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Our Goals
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "01",
                  title: "Modernize Education",
                  description: "Transform 1000+ classrooms into smart learning environments by 2030.",
                },
                {
                  number: "02",
                  title: "Empower Educators",
                  description: "Train 10,000+ teachers in effective use of educational technology.",
                },
                {
                  number: "03",
                  title: "Impact Students",
                  description: "Positively impact the learning experience of 100,000+ students.",
                },
              ].map((goal, index) => (
                <div key={index} className="relative p-8 rounded-2xl bg-card border border-border hover:shadow-soft transition-all">
                  <span className="text-6xl font-display font-bold text-primary/10">
                    {goal.number}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-4 mb-2">
                    {goal.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {goal.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Join Us in Our Mission
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Partner with us to create optimistic learning experiences for the next generation.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">
                Get Started Today
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

export default Vision;
