import { Handshake, Award } from "lucide-react";

// --- Brand & Partner Data ---

interface BrandItem {
  name: string;
  logoUrl: string | null; // null = use text fallback
  website?: string;
}

const brands: BrandItem[] = [
  {
    name: "InFocus",
    logoUrl: "https://logo.clearbit.com/infocus.com",
    website: "https://www.infocus.com",
  },
  {
    name: "ViewSonic",
    logoUrl: "https://logo.clearbit.com/viewsonic.com",
    website: "https://www.viewsonic.com",
  },
  {
    name: "Vivitek",
    logoUrl: "https://logo.clearbit.com/vivitek.com",
    website: "https://www.vivitek.com",
  },
  {
    name: "Mi",
    logoUrl: "https://logo.clearbit.com/mi.com",
    website: "https://www.mi.com",
  },
  {
    name: "Oway",
    logoUrl: null, // Less common brand — text fallback
  },
];

const partners: BrandItem[] = [
  {
    name: "Cisco",
    logoUrl: "https://logo.clearbit.com/cisco.com",
    website: "https://www.cisco.com",
  },
  {
    name: "Corvet",
    logoUrl: null, // Niche brand — text fallback
  },
];

// --- Logo Card Component ---

function LogoCard({ brand }: { brand: BrandItem }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center h-20 w-44 rounded-xl bg-card border border-border shadow-soft hover:shadow-medium hover:border-primary/30 transition-all duration-300 group px-4">
      {brand.logoUrl ? (
        <img
          src={brand.logoUrl}
          alt={`${brand.name} logo`}
          className="h-10 max-w-[120px] object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300 dark:invert dark:brightness-200 dark:group-hover:invert-0 dark:group-hover:brightness-100"
          loading="lazy"
          onError={(e) => {
            // Fallback to text if image fails
            const target = e.currentTarget;
            const parent = target.parentElement;
            if (parent) {
              target.style.display = "none";
              const fallback = document.createElement("span");
              fallback.className =
                "font-display font-bold text-lg text-muted-foreground group-hover:text-primary transition-colors duration-300";
              fallback.textContent = brand.name;
              parent.appendChild(fallback);
            }
          }}
        />
      ) : (
        <span className="font-display font-bold text-lg text-muted-foreground group-hover:text-primary transition-colors duration-300 select-none">
          {brand.name}
        </span>
      )}
    </div>
  );
}

// --- Scrolling Marquee ---

function LogoMarquee({ items }: { items: BrandItem[] }) {
  // Duplicate items for seamless infinite scroll
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex gap-6 animate-marquee w-max">
        {duplicated.map((brand, index) => (
          <LogoCard key={`${brand.name}-${index}`} brand={brand} />
        ))}
      </div>
    </div>
  );
}

// --- Static Logo Grid (for smaller sets like Partners) ---

function LogoGrid({ items }: { items: BrandItem[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {items.map((brand, index) => (
        <div
          key={brand.name}
          className="animate-fade-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <LogoCard brand={brand} />
        </div>
      ))}
    </div>
  );
}

// --- Main Section ---

export function BrandsPartnersSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Brands We Carry */}
        <div className="mb-16">
          <div className="text-center mb-10 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent border border-border mb-4">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Brands We Carry
              </span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">
              Authorized Dealer of World-Class Brands
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              We bring you products from the most trusted names in education
              technology and display solutions.
            </p>
          </div>

          <LogoMarquee items={brands} />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-xs mx-auto mb-16">
          <div className="flex-1 h-px bg-border" />
          <span className="text-muted-foreground text-xs uppercase tracking-widest font-medium">
            &
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Partners */}
        <div>
          <div className="text-center mb-10 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent border border-border mb-4">
              <Handshake className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Partners
              </span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">
              Partnered with Industry Leaders
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              We collaborate with leading technology companies to deliver
              comprehensive solutions.
            </p>
          </div>

          <LogoGrid items={partners} />
        </div>
      </div>
    </section>
  );
}
