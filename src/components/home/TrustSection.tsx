import { 
  GraduationCap, 
  Building2, 
  BadgeCheck,
  School,
  University
} from "lucide-react";

const trustBadges = [
  { icon: School, label: "Matric Board" },
  { icon: GraduationCap, label: "Cambridge" },
  { icon: University, label: "HEC Universities" },
  { icon: Building2, label: "Private Academies" },
  { icon: BadgeCheck, label: "Government" },
];

export function TrustSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Trusted Partner
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">
            Serving Pakistan's Best Institutions
          </h2>
        </div>

        {/* Trust Badges - Simple Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border shadow-soft hover:shadow-medium hover:border-primary/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                <badge.icon className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-medium text-foreground text-sm">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
