import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, Target, Users, Heart, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly explore and implement the latest educational technologies to keep institutions ahead of the curve.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every project, ensuring the highest quality solutions for our clients.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build long-term relationships with institutions, becoming their trusted technology partner.",
  },
  {
    icon: Heart,
    title: "Student-Centric",
    description: "Every solution we provide is designed with student learning and engagement at its core.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Pioneering Educational Technology Since 2014
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Graphene Communication is an electronics and education-technology solutions
                provider focused on transforming traditional classrooms into modern, smart,
                and future-ready learning environments.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2014 with a vision to revolutionize education through technology,
                    Graphene Communication has grown from a passionate team of educators
                    and technologists to a leading provider of educational technology solutions.
                  </p>
                  <p>
                    We work closely with Pakistan's top-tier schools to support their
                    transition toward advanced digital education. Our valued partners include
                    Beaconhouse School System and other leading school networks. Our team understands the unique
                    challenges faced by educational institutions and provides tailored solutions
                    that address specific needs.
                  </p>
                  <p>
                    Since our founding, we have successfully transformed hundreds of classrooms,
                    impacting the learning experience of thousands of students across the country.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shadow-strong">
                  <div className="text-center p-8">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-soft animate-pulse-glow">
                      <Logo variant="mark" className="w-28 h-28" />
                    </div>
                    <p className="font-display text-2xl font-bold text-foreground">
                      Founded 2014
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Serving Pakistan's Education Sector
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground">
                These values guide everything we do and shape how we work with our partners.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground">
                Dedicated professionals committed to transforming education across Pakistan
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {[
                {
                  name: "Muhammad Mohsen Alam",
                  role: "Founder & CEO",
                  initials: "MA",
                  bio: "Visionary leader and founder of Graphene Communication, driving the mission to modernize Pakistan's classrooms through cutting-edge educational technology.",
                },
                {
                  name: "Muhammad Arib",
                  role: "General Manager",
                  initials: "MA",
                  bio: "Leads day-to-day operations and ensures every client partnership delivers exceptional results and seamless implementation.",
                },
              ].map((member, i) => (
                <div
                  key={i}
                  className="group text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300"
                >
                  <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                    <span className="text-primary-foreground font-display font-bold text-2xl">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how we can transform your educational environment together.
            </p>
            <Button asChild variant="default" size="lg">
              <Link to="/contact">
                Contact Us Today
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

export default About;


