import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main-content" className="pt-28 pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-10">
            Last updated: {new Date().getFullYear()}
          </p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Graphene Communication website, you
                accept and agree to be bound by these Terms of Service. If you
                do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">
                2. Use of Website
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This website is provided for informational purposes about
                Graphene Communication's products and services. You agree not
                to misuse the website, attempt to gain unauthorised access, or
                use it in any way that could damage or impair its availability.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">
                3. Products & Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All products and services listed on this website are subject to
                availability and quotation. Prices, specifications, and
                availability are subject to change without notice. Final pricing
                is confirmed through a formal quotation provided by our team.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">
                4. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website — including text, images, logos, and
                graphics — is the property of Graphene Communication and is
                protected by applicable copyright and intellectual property
                laws. You may not reproduce or distribute any content without
                prior written permission.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">
                5. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Graphene Communication shall not be liable for any indirect,
                incidental, or consequential damages arising from the use of
                this website or reliance on information contained herein.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">
                6. Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to update these Terms of Service at any
                time. Continued use of the website after changes are posted
                constitutes your acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">
                7. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For any questions regarding these terms, please contact us at{" "}
                <a
                  href="mailto:info@graphenecommunication.com"
                  className="text-primary hover:underline"
                >
                  info@graphenecommunication.com
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

export default Terms;
