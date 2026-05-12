import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { faqs } from "@/data/faqs";

export function FAQSection() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
                        <HelpCircle className="w-4 h-4" />
                        FAQ
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground">
                        Everything you need to know about our smart classroom solutions
                    </p>
                </div>

                {/* Accordion */}
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-3">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={faq.question}
                                value={`item-${index}`}
                                className="border border-border rounded-xl px-6 bg-card hover:border-primary/30 transition-colors duration-300 shadow-soft"
                            >
                                <AccordionTrigger className="font-display font-semibold text-foreground text-left py-5 hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
