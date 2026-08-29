import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["328/14 W Sector, DHA Phase 3", "Lahore, Pakistan"],
    href: "https://maps.google.com/?q=DHA+Phase+3+Lahore+Pakistan",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["0324-4017722"],
    href: "tel:+923244017722",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["0324-4017722"],
    href: "https://wa.me/923244017722",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["mohsen.alam@yellow-wombat-705667.hostingersite.com"],
    href: "mailto:mohsen.alam@yellow-wombat-705667.hostingersite.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday – Saturday: 9AM – 6PM", "Sunday: Closed"],
    href: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! ✓",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", institution: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Contact Us
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Let's Start a Conversation
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Have questions about our smart classroom solutions? Visit us in DHA Phase 3 Lahore,
                call, or WhatsApp us — we're ready to help transform your institution.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact Buttons */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
              <a
                href="tel:+923244017722"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-soft"
              >
                <Phone className="w-5 h-5" />
                Call: 0324-4017722
              </a>
              <a
                href="https://wa.me/923244017722"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors shadow-soft"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        {info.details.map((detail, i) =>
                          info.href ? (
                            <a
                              key={i}
                              href={info.href}
                              target={info.href.startsWith("http") ? "_blank" : undefined}
                              rel={
                                info.href.startsWith("http") ? "noopener noreferrer" : undefined
                              }
                              className="text-muted-foreground text-sm block hover:text-primary transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            <p key={i} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone / WhatsApp</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="03XX-XXXXXXX"
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="institution">Institution Name</Label>
                        <Input
                          id="institution"
                          name="institution"
                          value={formData.institution}
                          onChange={handleChange}
                          placeholder="School / College / University"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements — e.g. number of classrooms, products needed..."
                        required
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    <Button type="submit" variant="default" size="lg" className="w-full sm:w-auto">
                      Send Message
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="h-64 sm:h-80 md:h-[450px] bg-muted relative">
          <iframe
            title="Graphene Communication Location - DHA Phase 3, Lahore"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7437498862!2d74.3898!3d31.4697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904b8f65e5e91%3A0x4f77b83e5e04b1f1!2sDHA+Phase+3%2C+Lahore%2C+Punjab%2C+Pakistan!5e0!3m2!1sen!2s!4v1699000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
          <div className="absolute bottom-4 left-4 bg-white dark:bg-card rounded-xl p-4 shadow-medium z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display font-semibold text-foreground text-sm">
                  Graphene Communication
                </p>
                <p className="text-muted-foreground text-xs">
                  328/14 W Sector, DHA Phase 3, Lahore
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
