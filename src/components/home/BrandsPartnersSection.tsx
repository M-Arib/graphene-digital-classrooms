import { Handshake, Award } from "lucide-react";

// ─── Inline SVG Logos ───────────────────────────────────────────────────────

function CiscoLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 108 57" role="img">
      <title>Cisco.com Worldwide</title>
      <defs>
        <path d="M0 22.769a2.348 2.348 0 0 0 3.935 1.545c.434-.403.7-.955.744-1.545v-5.2a2.34 2.34 0 0 0-4.679 0v5.2" id="bar_short" className="bar" />
        <path d="M12.95 22.769a2.349 2.349 0 0 0 2.34 2.171 2.346 2.346 0 0 0 2.339-2.171V11.112a2.341 2.341 0 0 0-4.679 0V22.77" id="bar_tall" className="bar" />
        <path d="M25.832 27.464a2.345 2.345 0 0 0 4.678 0V2.249a2.342 2.342 0 0 0-4.678 0v25.215" id="bar_grande" className="bar" />
        <path d="M24.026 56.277v-5.002l-.098.043a9.253 9.253 0 0 1-3.605.915 5.303 5.303 0 0 1-3.63-1.07 4.644 4.644 0 0 1-1.58-2.244 5.395 5.395 0 0 1-.106-3 4.6 4.6 0 0 1 1.609-2.566 4.823 4.823 0 0 1 2.528-1.09 8.332 8.332 0 0 1 4.774.895l.108.056v-5.03l-.228-.061a12.78 12.78 0 0 0-4.552-.596 10.534 10.534 0 0 0-4.065.93 9.29 9.29 0 0 0-3.329 2.572 10.014 10.014 0 0 0-.182 12.18 9.546 9.546 0 0 0 5.292 3.403c2.211.538 4.528.456 6.697-.234l.367-.101" id="cisco_c" />
      </defs>
      <g fill="#02C8FF" fillRule="evenodd">
        <use href="#cisco_c" />
        <use href="#cisco_c" x="49.5" />
        <path d="M41.69 52.125l-.019 4.308.315.054c.989.185 1.987.313 2.99.385a18.1 18.1 0 0 0 2.642.051c.842-.06 1.675-.218 2.48-.468a6.862 6.862 0 0 0 2.573-1.371 5.19 5.19 0 0 0 1.498-2.148 5.912 5.912 0 0 0-.03-4.324 4.852 4.852 0 0 0-1.343-1.862 5.568 5.568 0 0 0-1.97-1.147l-3.25-1.206a1.742 1.742 0 0 1-.887-.845 1.107 1.107 0 0 1 .036-.986 1.29 1.29 0 0 1 .217-.291 1.75 1.75 0 0 1 .48-.347c.363-.18.755-.293 1.158-.337a6.76 6.76 0 0 1 2.072.022c.81.088 1.613.231 2.402.43l.168.037v-3.974l-.31-.067a21.14 21.14 0 0 0-2.444-.435 12.545 12.545 0 0 0-3.213-.014 6.945 6.945 0 0 0-3.699 1.488 4.908 4.908 0 0 0-1.58 2.178 5.984 5.984 0 0 0-.003 4.05c.242.65.63 1.237 1.136 1.714.437.422.932.78 1.47 1.065.708.38 1.458.675 2.235.878.257.077.512.158.766.243l.385.141.11.045c.38.136.726.35 1.018.628.202.19.358.423.455.683.06.237.061.485.003.723a1.536 1.536 0 0 1-.744.892 3.691 3.691 0 0 1-1.239.387 9 9 0 0 1-1.92.097 21.973 21.973 0 0 1-2.507-.334c-.433-.09-.864-.19-1.291-.303l-.16-.04zM30.546 56.607h4.73V37.846h-4.73zM85.305 43.386a4.934 4.934 0 1 1 6.157 7.711 4.934 4.934 0 0 1-6.157-7.71m-6.867 3.848A9.87 9.87 0 0 0 90.44 56.72a9.629 9.629 0 0 0 3.157-17.729 9.934 9.934 0 0 0-15.16 8.244" />
        <use href="#bar_short" x="0" />
        <use href="#bar_tall" x="0" />
        <use href="#bar_grande" x="0" />
        <use href="#bar_tall" x="25.875" />
        <use href="#bar_short" x="51.75" />
        <use href="#bar_tall" x="51.75" />
        <use href="#bar_grande" x="51.75" />
        <use href="#bar_tall" x="77.625" />
        <use href="#bar_short" x="103.375" />
      </g>
    </svg>
  );
}

function XiaomiLogo({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 112 112" version="1.1">
      <g fill="#ff6900">
        <path d="M100.326,11.702 C89.76,1.176 74.566,0 56,0 C37.41,0 22.194,1.19 11.632,11.744 C1.072,22.294 0,37.486 0,56.054 C0,74.626 1.072,89.822 11.636,100.376 C22.198,110.932 37.412,112 56,112 C74.588,112 89.8,110.932 100.362,100.376 C110.926,89.82 112,74.626 112,56.054 C112,37.462 110.914,22.254 100.326,11.702 L100.326,11.702 Z" />
      </g>
      <g fill="#ffffff">
        <path d="M57.8054292,26.743366 L57.931608,26.8782679 L81.3680343,53.7784796 C82.7703315,55.3874915 81.6885448,57.872013 79.5991142,57.9952335 L79.4364262,58 L76,58 L76,71.3345882 C76,75.0164706 72.9809524,78 69.2552381,78 L42.7447619,78 C39.0190476,78 36,75.0164706 36,71.3345882 L36,58 L32.5635738,58 C30.4234399,58 29.2530924,55.5557037 30.5289714,53.903922 L30.6319657,53.7784796 L54.068392,26.8782679 C55.0457355,25.754085 56.766743,25.7091177 57.8054292,26.743366 Z M200.6006,34.56 C200.9866,34.56 201.3066,34.87 201.3066,35.252 L201.3066,76.754 C201.3066,77.13 200.9866,77.442 200.6006,77.442 L191.5066,77.442 C191.1166,77.442 190.8006,77.13 190.8006,76.754 L190.8006,35.252 C190.8006,34.87 191.1166,34.56 191.5066,34.56 L200.6006,34.56 Z M161.1406,34.56 C168.0006,34.56 175.1726,34.874 178.7086,38.414 C182.188558,41.897875 182.564028,48.8333125 182.578162,55.5684076 L182.5786,76.754 C182.5786,77.13 182.2626,77.442 181.8726,77.442 L172.7826,77.442 C172.3926,77.442 172.0746,77.13 172.0746,76.754 L172.0746,55.204 C172.0646,51.442 171.8486,47.576 169.9086,45.63 C168.2386,43.956 165.1226,43.572 161.8826,43.492 L145.4026,43.492 C145.0146,43.492 144.6986,43.804 144.6986,44.18 L144.6986,76.754 C144.6986,77.13 144.3786,77.442 143.9906,77.442 L134.8926,77.442 C134.5046,77.442 134.1906,77.13 134.1906,76.754 L134.1906,35.252 C134.1906,34.87 134.5046,34.56 134.8926,34.56 L161.1406,34.56 Z M163.1766,51.088 C163.5626,51.088 163.8766,51.398 163.8766,51.776 L163.8766,76.754 C163.8766,77.13 163.5626,77.442 163.1766,77.442 L153.6246,77.442 C153.2326,77.442 152.9166,77.13 152.9166,76.754 L152.9166,51.776 C152.9166,51.398 153.2326,51.088 153.6246,51.088 L163.1766,51.088 Z M59.2999404,54 L52.6952892,54 C51.2597451,54 50.0896172,55.1942589 50.0049103,56.6981405 L50,56.872989 L50,63.127011 C50,64.6534011 51.1169596,65.9041929 52.530874,65.9947504 L52.6952892,66 L59.2999404,66 C60.7354844,66 61.910036,64.8057411 61.9950706,63.3018595 L62,63.127011 L62,56.872989 C62,55.2878916 60.7906977,54 59.2999404,54 Z" />
      </g>
    </svg>
  );
}

function VivitekLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1603 425" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <title>Vivitek</title>
      <path d="M.1 161.9V.1h532.5c1.1 1.9 3.1.5 4.6 1.1.1 0 .2-.1.3-.2 0 .1 0 .2-.1.5-1 .1-2.1.4-3.1.4-7.5.1-14.9 1.2-22.3 2.4-12.1 1.8-24.1 4.3-36 7.6-28.4 7.7-55.3 18.8-80.1 34.7-22 14-41.2 30.9-56.5 52.2-7.2 10-12.4 20.9-17.4 32-1.6 3.5-1.7 3.5 2.2 3.5h65c5 0 10.3.8 12-5.9 0-.1.2-.1.3-.2 9.5-8.5 18.5-17.4 29-25 18.7-13.6 38.8-23.7 60.7-30.5 8.1-2.6 16.5-4.1 24.9-5.8 9.3-1.9 18.4-3.4 27.9-3.9 4.4-.2 8.9-.1 13.4-.9 3.6-.6 7.5-1.5 11.2-.8 7 1.4 14 .9 21 1.6 8.2.9 16.4 1.6 24.4 3.2 15.1 3.1 30 7 44.4 12.8 28.8 11.6 53.5 28.8 74 52 2.1 2.4 4.2 3.4 7.4 3.4l62-.1c1 0 2 0 3 .2 1.4.3 2.9.8 4-.5 1-1.3.2-2.7-.3-3.9-2.6-6-5-12-8.3-17.6-6.7-11.5-14.3-22.3-23.4-31.9-19-20.1-41.6-35.4-66.2-47.8-15.1-7.5-30.8-13.4-47-18.3-10.8-3.3-21.8-5.9-32.8-8.1-9.2-1.8-18.5-3.1-27.9-3.8-2.8-.2-5.8-.2-9-1.2 2-.8 3.9.4 5.3-1.2h1.3c.1.2.1.4.2.4.3.1.6 0 .5-.4L1600 0c2.5 0 3.1.6 3.1 3v418.5c0 2.5-.6 3-3.1 3-532.1-.1-1064.2-.1-1596.3 0-2.5 0-3.1-.6-3.1-3l.1-258.4c.9.2 1.1 1 1.3 1.7 1.1 3.1 2.2 6.3 3.5 9.4L21 213.4 41.6 266 61 315.9l14.1 35.9 8.5 22c4.7 11.3 8.9 22.8 13.5 34.1 1 2.5 1.9 3.4 4.6 3.4l95.3-.1h4.7c1 0 1.8-.1 2.2-1.4l28.2-73.4c6-16.1 12.7-32 18.9-48l23.8-61.1 23.5-60.3c2.3-5.8 2.3-5.8-4.1-5.8-26.8 0-53.5-.1-80.3-.1-4.9 0-5.7.5-6.8 5.5-2.2 10-5.8 19.5-8.7 29.2l-18.8 59.9-7 21.7c-2.8 9.1-6.3 18-8.6 27.2-2.2 8.7-6 16.9-7.7 25.7-.2 1-.1 2.5-1.5 3-.5-1.5-1.3-2.9-1.6-4.4-3.7-15.7-9-30.9-13-46.4-1.7-6.6-4.2-13.3-6.2-19.9l-11.5-39.4-8.4-28.9-8.5-29.6c-.7-2.7-1.8-3.4-4.5-3.4l-79.3.1c-7.5 0-14.6.3-21.7.5zm310.2-.2c-1.2 0-2.2.5-1.6 1.7.9 1.7.5 3.5.5 5.2V408c0 2.7.6 3.4 3.4 3.4l85.3-.1c7.7 0 7.7 0 7.6-7.8v-1V244l.1-78.9c0-2.1-.1-4.1-3.5-3.8-4.4.4-8.9.1-13.3.1l-77.3.2c.3-.7 0-.9-.7-.9-.5.1-.7.4-.5 1zM723.2 198c0 1.4-1.2 2.8-.1 4.2.1.8.3 1.5.3 2.3v113.1c0 .9.2 1.8-.4 2.6-.1.1-.2.1-.2.2h.2c.7 1.1.3 2.4.3 3.6l.1 84.9c0 2.2.6 2.7 2.8 2.7h91.3c2.3 0 2.9-.6 2.9-3V165.2c0-2.6-.4-3.7-3.4-3.7h-89.3c-2.7 0-5 0-5.1 3.6-.1.9-.4 1.9.2 2.8.8 5.5.6 10.9.3 16.4-.9 2.5-.8 5-.1 7.4.6 1.9.5 4.1.2 6.3zm143.1 106.2c-.7-.3-.9.1-.9.7 0 .5.1 1 .9.7v7.9h-.7c.2 0 .5 0 .7.1l.1 43.4c0 3.7-.3 7.5.5 11.1 1.5 7.4 3.7 14.8 7.6 21.4 2.3 3.8 4.5 8 8 10.6 4.9 3.7 9.8 7.5 15.7 10 9 3.7 18.2 5.8 27.7 7.1 6 .8 12 1.1 18 1.5 8.6.6 17.1.4 25.7 0 10.6-.4 21.2-.9 31.8-2.1l19.5-2.1c1.6-.2 2.9-1 2.9-3.2v-53.7c0-2.1-1.4-3.1-2.7-2.6-3.5 1.3-7 .3-10.5.4-10.4.2-20.8 1.1-31.2-.5-8.4-1.3-17.2-5.9-19.6-16.8-1.2-5.3-1.5-10.6-1.5-15.9V220.4c0-2.1-.1-4.2-.1-6.3v-.1c.2-.8.8-.9 1.5-.9 3.1-.1 6.2-.4 9.3-.4h43c3.8 0 7.5.2 11.3.3 1.2 0 2.7-.1 2.3-1.6-1.2-3.6 0-7.1 0-10.6l.1-34.8c0-3.1-.7-4.1-4-4l-59.6.1c-2.3 0-3.2-.3-3.2-3l.1-101.4c0-3.5-.3-3.7-3.5-2.5l-31.1 12.1-56.7 21.8c-1.1.4-1.2.9-1.3 1.8-.1 0-.2.1-.2.1 0 .1.1.3.1.4v8.9l-.1 189.4.1 14.5zM625.7 160.8c-.5-.3-1.1-.5-1.5.2-3.6 1.8-3.2 5.9-3.8 8.7-1.6 6.7-4 13.2-6 19.8l-16.4 52-15.4 49.4-11.6 36.3c-.6 1.8-1.2 3.6-2.6 5.2.2-3.1-1.6-5.4-2.3-8.1l-8.5-28.7-13.4-45.6-13.3-46.1-11.3-40.1c-.4-1.5-1.1-2.3-2.7-2.4-1-.1-2 .3-2.9-.4-.7-.6-1.5-.6-2.2 0-1.1.8-2.4.4-3.6.4h-77.3l-16.3.1-.1-.1v.2c-.8 2 1.4 2.8 1.8 4.3 2 7.5 5.8 14.2 8.3 21.5 2.3 6.7 5 13.2 7.7 19.8 2.1 5 4 10.1 5.9 15.2 2 5.5 4.7 10.7 6.6 16.3 2.1 6.4 4.9 12.4 7.2 18.6 2.6 6.8 5.5 13.4 7.6 20.4.9 3 2.9 5.6 3.8 8.6 1.8 6.3 4.9 12 7.1 18.1 3.6 9.8 7.6 19.4 11.5 29l12.9 33.4c5.8 13.8 11.2 27.8 16.5 41.8.9 2.5 2.2 2.9 4.5 2.8l92.6-.1c8.4 0 8.5.1 11.5-7.6l14.8-38.2 23.7-61 12.3-31.2 20.6-52.9 9.3-24.6 12.6-31.2c1.3-3.3 1.2-3.4-2.4-3.4-27.2 0-54.4 0-81.6-.1-1.3.2-2.6.7-3.6-.3zm769.9 111.1c-.3-.2-.6-.3-.9-.5v-17.9V73.8c0-2.9-.4-6 0-8.7.3-2.1-.4-1.9-1.6-2.4-1-.4-2-.2-2.9-.3h-81.6c-2.2 0-4.8-.9-6.5.4-1.9 1.5-.1 4.1-.1 6.2v247.4l.1 94.8c0 1.8.1 2.8 2.4 2.8h88c1.8 0 2.4-.7 2.4-2.2 0-2.2-.1-4.4-.1-6.6l.1-116.1c0-3.9-.8-7.7-.1-11.7 1.3.1 2.2.6 2.8 1.6l5.6 8.5 35.9 55.3 24.2 37c6.6 10.1 13.6 20 19.8 30.5.8 1.4 1.6 3.6 4.5 3.6l109.3-.1c.8 0 1.9.6 2.3-.6.4-1-.3-1.6-.8-2.4l-31.3-45.8-21.1-30.8-43.5-63.5c-1.1-1.5-1.4-2.7.1-4.3l21.1-24.1 28-31.5 20.2-23.4c6.4-7.5 12.8-15.1 19.8-22.1.5-.5 1.2-1.4.7-2.4-.4-.7-1.2-.4-1.8-.4-33.3 0-66.6 0-100-.1-1.9 0-3.4.7-4.7 2.3l-24.4 28.9-20.8 24.8-35.9 43-9.2 10.5zM1197.9 308v.3h88.3c2.3 0 2.9-1 2.8-2.9-.2-6 0-12.1-.6-18.1-1-10.5-.9-21.1-2.6-31.6-1.4-8.7-3.2-17.3-6.2-25.5a129.08 129.08 0 0 0-8-17.8c-7.8-14.3-17.9-26.6-31.5-35.9-12.9-9-27-14.9-42.5-18.1-11.2-2.3-22.5-3.7-33.9-4.4-11.6-.7-23.1-.2-34.7 1.1-14.3 1.7-28.1 5.1-41.3 10.7-16.2 6.8-29.9 17-40.8 30.6-6.3 7.8-11.6 16.3-15.6 25.5-2.2 5-4.6 10.1-5.8 15.4-1.3 5.7-3 11.3-3.9 17.1-1.2 8-2.7 16-2.9 24-.2 12.6-.4 25.2 1.1 37.9 1 8.5 3 16.7 4.7 25 1.1 5.2 4.2 10.3 6.6 15.4 6.9 14.3 16.3 26.6 28.9 36.4 12.1 9.4 25.7 15.6 40.2 20.1 7.6 2.4 15.5 3.7 23.4 5 8.2 1.3 16.6 2.2 24.8 2.2 15.8 0 31.5-.8 47.1-3.7 9.7-1.8 19.2-4.1 28.4-7.8 12.3-4.9 24.2-10.8 34.3-19.7 8.3-7.3 15-15.8 20.1-25.6 4.8-9.3 7.4-19.2 9.1-29.4.3-1.8.9-2.5-1.5-2.5h-85c-1.6 0-2.1.5-2.5 2.1-1.5 5.2-2.6 10.6-5.2 15.5-3.6 6.7-8.9 11.7-15.8 15-8.9 4.3-18.3 4.7-27.9 4.5-7.9-.2-15-3-21.4-7-6.2-3.9-10.9-9.6-14.2-16.3-5-10-6.7-20.7-7.2-31.7-.3-5.8 0-5.8 5.7-5.9l85.5.1z" />
    </svg>
  );
}

// ─── Brand & Partner Data ───────────────────────────────────────────────────

interface BrandItem {
  name: string;
  type: "svg" | "img" | "text";
  logo?: React.ComponentType<{ className?: string }>;
  logoUrl?: string;
  website: string;
  brandColor?: string;
  imgClassName?: string;
}

const brands: BrandItem[] = [
  {
    name: "InFocus",
    type: "img",
    logoUrl: "https://www.infocus.com/_nuxt/logo.-2GIhSCv.webp",
    website: "https://www.infocus.com",
  },
  {
    name: "ViewSonic",
    type: "img",
    logoUrl: "https://www.viewsonic.com/vsAssetFile/pk/img/resize/common/logo.webp",
    website: "https://www.viewsonic.com",
  },
  {
    name: "Vivitek",
    type: "svg",
    logo: VivitekLogo,
    website: "https://www.vivitek.com",
  },
  {
    name: "Mi",
    type: "svg",
    logo: XiaomiLogo,
    website: "https://www.mi.com/pk/",
  },
  {
    name: "Oway",
    type: "text",
    website: "https://www.owayboard.com",
    brandColor: "#0066cc",
  },
];

const partners: BrandItem[] = [
  {
    name: "Cisco",
    type: "svg",
    logo: CiscoLogo,
    website: "https://www.cisco.com",
  },
  {
    name: "Corvit",
    type: "img",
    logoUrl: "https://corvit.com/systems/wp-content/uploads/2023/03/logo.png",
    website: "https://corvit.com/systems/",
    imgClassName: "dark:brightness-0 dark:invert",
  },
];

// ─── Logo Card Component (Clickable → opens company website) ────────────────

function LogoCard({ brand }: { brand: BrandItem }) {
  const content = (() => {
    if (brand.type === "svg" && brand.logo) {
      const SvgLogo = brand.logo;
      return (
        <SvgLogo className="h-10 w-auto max-w-[130px] transition-all duration-300 group-hover:scale-105" />
      );
    }
    if (brand.type === "img" && brand.logoUrl) {
      return (
        <img
          src={brand.logoUrl}
          alt={`${brand.name} logo`}
          className={`h-10 max-w-[130px] object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 ${brand.imgClassName || ""}`}
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent) {
              const fallback = document.createElement("span");
              fallback.className = "font-bold text-xl text-muted-foreground";
              fallback.textContent = brand.name;
              parent.appendChild(fallback);
            }
          }}
        />
      );
    }
    // Text fallback
    return (
      <span className="font-display font-bold text-xl tracking-tight text-muted-foreground group-hover:text-primary transition-colors duration-300 select-none">
        {brand.name}
      </span>
    );
  })();

  return (
    <a
      href={brand.website}
      target="_blank"
      rel="noopener noreferrer"
      title={`Visit ${brand.name}`}
      className="flex-shrink-0 flex items-center justify-center h-20 w-44 rounded-xl bg-card border border-border shadow-soft hover:shadow-medium hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group px-4 cursor-pointer"
    >
      {content}
    </a>
  );
}

// ─── Scrolling Marquee ──────────────────────────────────────────────────────

function LogoMarquee({ items }: { items: BrandItem[] }) {
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="flex gap-6 animate-marquee w-max">
        {duplicated.map((brand, index) => (
          <LogoCard key={`${brand.name}-${index}`} brand={brand} />
        ))}
      </div>
    </div>
  );
}

// ─── Static Logo Grid (for Partners) ────────────────────────────────────────

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

// ─── Main Section ───────────────────────────────────────────────────────────

export function BrandsPartnersSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* ── Brands We Carry ── */}
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

        {/* ── Divider ── */}
        <div className="flex items-center gap-4 max-w-xs mx-auto mb-16">
          <div className="flex-1 h-px bg-border" />
          <span className="text-muted-foreground text-xs uppercase tracking-widest font-medium">
            &amp;
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* ── Partners ── */}
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
