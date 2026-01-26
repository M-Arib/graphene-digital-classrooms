import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "The smart classroom setup has completely transformed how our teachers deliver lessons. Student engagement increased by 40%.",
    author: "Dr. Ahmed Khan",
    role: "Principal",
    institution: "Leading Cambridge School, Lahore",
    rating: 5,
  },
  {
    quote: "Professional installation, excellent after-sales support. Highly recommended for any educational institution in Pakistan.",
    author: "Prof. Fatima Malik",
    role: "Director of Education",
    institution: "Premier Academy, Karachi",
    rating: 5,
  },
  {
    quote: "Our university lecture halls are now state-of-the-art. The interactive displays have revolutionized our teaching methodology.",
    author: "Dr. Hassan Raza",
    role: "Dean of Sciences",
    institution: "HEC University, Islamabad",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
            <Quote className="w-4 h-4" />
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            What Educators Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Trusted by leading educational institutions across Pakistan
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary">{testimonial.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
