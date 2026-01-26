import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Building2, 
  Award, 
  BadgeCheck,
  School,
  University
} from "lucide-react";

const trustBadges = [
  { icon: School, label: "CBSE Affiliated Schools" },
  { icon: GraduationCap, label: "ICSE Institutions" },
  { icon: University, label: "State Universities" },
  { icon: Building2, label: "Private Academies" },
  { icon: Award, label: "Award-Winning Schools" },
  { icon: BadgeCheck, label: "Government Schools" },
];

const testimonials = [
  {
    quote: "The smart classroom setup has completely transformed how our teachers deliver lessons. Student engagement has increased dramatically.",
    role: "Principal",
    institution: "Leading CBSE School, Delhi NCR",
  },
  {
    quote: "Professional installation, excellent after-sales support, and cutting-edge technology. Highly recommended for any educational institution.",
    role: "Director",
    institution: "Premier International School, Mumbai",
  },
  {
    quote: "We've seen a 40% improvement in student participation since implementing Graphene's smart classroom solutions.",
    role: "Academic Head",
    institution: "Top-Ranked University, Bangalore",
  },
];

export function TrustSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Trusted by the Best
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Partnered with Renowned Institutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From prestigious CBSE & ICSE schools to leading universities, we've helped 
            transform classrooms across India's most respected educational institutions.
          </p>
        </motion.div>

        {/* Scrolling Badge Carousel */}
        <div className="relative mb-16">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: [0, -1000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...trustBadges, ...trustBadges, ...trustBadges].map((badge, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-full bg-card border border-border shadow-soft hover:shadow-medium hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                    <badge.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-medium text-foreground whitespace-nowrap">
                    {badge.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted to-transparent pointer-events-none" />
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="absolute -top-3 left-6 text-6xl text-primary/20 font-serif">
                "
              </div>
              
              <p className="text-muted-foreground italic mb-6 pt-4 leading-relaxed">
                {testimonial.quote}
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {testimonial.role[0]}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.institution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl gradient-primary relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-center bg-cover opacity-5" />
          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "150+", label: "Schools Transformed" },
              { value: "100K+", label: "Students Benefited" },
              { value: "10+", label: "Years Experience" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/70 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
