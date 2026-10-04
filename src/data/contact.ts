// Single place for the company's contact details — update here and it changes site-wide.
export const CONTACT = {
  phoneDisplay: "0324-4017722",
  phoneHref: "tel:+923244017722",
  whatsappNumber: "923244017722",
  whatsappHref: "https://wa.me/923244017722",
  email: "info@graphene.com.pk",
  addressLine1: "328/14 W Sector, DHA Phase 3",
  addressLine2: "Lahore, Pakistan",
  mapsQuery: "328/14 W Sector, DHA Phase 3, Lahore, Pakistan",
};

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.mapsQuery)}`;
export const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}&z=15&output=embed`;
