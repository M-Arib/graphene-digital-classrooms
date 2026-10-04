// Single source of truth for per-page SEO metadata.
// Used at runtime (src/components/RouteEffects.tsx) to update <head> on navigation,
// and at build time (vite.config.ts) to prerender per-route HTML files and sitemap.xml.
// Keep this file free of "@/..." imports so the Vite config can load it.

export const SITE_URL = "https://graphenecommunication.com";
export const SITE_NAME = "Graphene Communication";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export interface PageSeo {
  path: string;
  title: string;
  description: string;
  /** sitemap priority, 0.0 – 1.0 */
  priority: number;
  changefreq: "weekly" | "monthly" | "yearly";
}

export const pages: PageSeo[] = [
  {
    path: "/",
    title: "Graphene Communication | Smart Classroom Solutions in Pakistan",
    description:
      "Graphene Communication builds smart classrooms across Pakistan — interactive displays, smart boards, projectors, tablets and STEM robotics for schools, colleges and universities. Free on-site demo in Lahore.",
    priority: 1.0,
    changefreq: "weekly",
  },
  {
    path: "/products",
    title: "Smart Classroom Products – Interactive Displays, Projectors & STEM | Graphene",
    description:
      "Browse interactive flat panels, laser projectors, direct-view LED walls, visualizers, charging carts and TTS Bee-Bot & Pro-Bot robots. Official TTS distributor in Pakistan, with warranty and on-site support.",
    priority: 0.9,
    changefreq: "weekly",
  },
  {
    path: "/smart-classrooms",
    title: "Smart Classroom Setup & Installation in Pakistan | Graphene Communication",
    description:
      "See how a traditional classroom becomes a smart classroom. Explore our virtual classroom tour, equipment layout and turnkey installation for schools, colleges and universities across Pakistan.",
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/about",
    title: "About Us – Educational Technology Experts Since 2014 | Graphene Communication",
    description:
      "Lahore-based Graphene Communication has been helping Pakistani schools, colleges and universities adopt smart classroom technology since 2014. Meet the team and our partners.",
    priority: 0.7,
    changefreq: "monthly",
  },
  {
    path: "/why-us",
    title: "Why Choose Graphene Communication for Smart Classrooms",
    description:
      "Authorized brand partner, PPRA tender compliance, 3-year warranty with SLA, teacher training and fast on-site support — why institutions across Pakistan choose Graphene Communication.",
    priority: 0.7,
    changefreq: "monthly",
  },
  {
    path: "/vision",
    title: "Our Vision & Mission | Graphene Communication",
    description:
      "Our vision is a smart, connected classroom for every student in Pakistan. Learn about the mission and values that guide Graphene Communication.",
    priority: 0.5,
    changefreq: "yearly",
  },
  {
    path: "/contact",
    title: "Contact Us & Book a Free Smart Classroom Demo | Graphene Communication",
    description:
      "Call 0324-4017722, WhatsApp us or send a message to book a free on-site smart classroom demo or request a quote. Office in DHA Phase 3, Lahore.",
    priority: 0.8,
    changefreq: "yearly",
  },
  {
    path: "/privacy",
    title: "Privacy Policy | Graphene Communication",
    description: "How Graphene Communication collects, uses and protects your information.",
    priority: 0.2,
    changefreq: "yearly",
  },
  {
    path: "/terms",
    title: "Terms of Service | Graphene Communication",
    description: "Terms and conditions for using the Graphene Communication website and services.",
    priority: 0.2,
    changefreq: "yearly",
  },
];

export const notFoundSeo = {
  title: "Page Not Found | Graphene Communication",
  description: "The page you are looking for does not exist.",
};

export function getPageSeo(pathname: string): PageSeo | undefined {
  const normalized = pathname !== "/" ? pathname.replace(/\/+$/, "") : pathname;
  return pages.find((p) => p.path === normalized);
}

export function canonicalUrl(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}
