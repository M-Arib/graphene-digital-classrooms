import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Eye, Target, ArrowRight } from "lucide-react";

const timelineEvents = [
  {
    year: "2014",
    title: "Company Founded",
    description: "Graphene Communication was established in Lahore with a vision to modernize Pakistan's educational institutions.",
  },
  {
    year: "2016",
    title: "First 50 Classrooms",
    description: "Reached a milestone of transforming 50 classrooms in Lahore's leading schools with interactive smart boards.",
  },
  {
    year: "2018",
    title: "Expanded Product Line",
    description: "Launched a full range of AV systems, educational tablets, and wireless presentation solutions.",
  },
  {
    year: "2021",
    title: "DHA Phase 3 Headquarters",
    description: "Established our permanent office at 328/14 W Sector, DHA Phase 3, Lahore serving all of Pakistan.",
  },
  {
    year: "2024",
    title: "150+ Schools Served",
    description: "Now serving over 150 leading schools across Pakistan, impacting thousands of students.",
  },
];

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
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Shaping the Future of Education
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our vision and mission drive every decision we make and every solution we create for Pakistan's institutions.
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
                  future-ready environments where every student in Pakistan has the
                  opportunity to thrive and succeed.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-10">
                <blockquote className="text-xl md:text-2xl font-display font-semibold text-foreground italic">
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
                <blockquote className="text-xl md:text-2xl font-display font-semibold text-foreground italic">
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
                  students of all ages across Pakistan.
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
                  description: "Transform 1,000+ classrooms into smart learning environments by 2030.",
                },
                {
                  number: "02",
                  title: "Empower Educators",
                  description: "Train 10,000+ teachers in effective use of educational technology.",
                },
                {
                  number: "03",
                  title: "Impact Students",
                  description: "Positively impact the learning experience of 500,000+ students.",
                },
              ].map((goal, index) => (
                <div key={index} className="relative p-8 rounded-2xl bg-card border border-border hover:shadow-soft transition-all hover:border-primary/30">
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

        {/* Company Timeline */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground">
                From a small Lahore startup to Pakistan's trusted EdTech partner
              </p>
            </div>

            <div className="relative max-w-3xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

              <div className="space-y-10">
                {timelineEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`relative flex gap-6 md:gap-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full gradient-primary border-2 border-background shadow-soft md:-translate-x-2 translate-y-1 z-10" />

                    {/* Content */}
                    <div
                      className={`ml-14 md:ml-0 md:w-[48%] ${index % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:ml-auto"
                        }`}
                    >
                      <div className="bg-card border border-border rounded-xl p-5 shadow-soft hover:shadow-medium hover:border-primary/30 transition-all duration-300">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                          {event.year}
                        </span>
                        <h3 className="font-display font-semibold text-foreground mt-1 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
              Partner with us to create inspiring learning experiences for the next generation across Pakistan.
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
