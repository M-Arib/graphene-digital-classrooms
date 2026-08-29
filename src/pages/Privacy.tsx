import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main-content" className="pt-28 pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-10">
            Last updated: {new Date().getFullYear()}
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                When you contact us through our website, we may collect personal
                information such as your name, email address, phone number, and
                institution name. We only collect information that you
                voluntarily provide to us.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information you provide to respond to your enquiries,
                arrange site visits or demonstrations, send you information
                about our products and services (only if you have opted in), and
                improve our website and customer service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">
                3. Data Sharing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or transfer your personal information to
                third parties. Your information remains strictly within Graphene
                Communication and is used solely for the purposes described
                above.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">
                4. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organisational measures
                to protect your personal information against unauthorised
                access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">
                5. Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may use cookies to enhance your browsing experience.
                You can choose to disable cookies through your browser settings,
                though this may affect some functionality of the site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">
                6. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <a
                  href="mailto:mohsen.alam@yellow-wombat-705667.hostingersite.com"
                  className="text-primary hover:underline"
                >
                  mohsen.alam@yellow-wombat-705667.hostingersite.com
                </a>{" "}
                or call{" "}
                <a
                  href="tel:+923244017722"
                  className="text-primary hover:underline"
                >
                  0324-4017722
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
