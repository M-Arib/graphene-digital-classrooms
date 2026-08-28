import {
  Monitor,
  Tablet,
  Projector,
  Speaker,
  Bot,
  BatteryCharging,
  Microscope,
  Camera,
  Wifi,
  Lightbulb,
  Tv,
} from "lucide-react";
import smartBoardImg from "@/assets/smart-board.webp";
import tabletsImg from "@/assets/tablets-learning.webp";
import beebotImg from "@/assets/beebot.jpg";
import probotImg from "@/assets/probot.png";
import lightproImg from "@/assets/lightpro.png";
import quantumLaserImg from "@/assets/quantum-laser.png";
import quantumLedImg from "@/assets/quantum-led.jpg";
import screenplayImg from "@/assets/screenplay.png";
import dvledDirectViewImg from "@/assets/dvled-directview.png";
import dvledPosterImg from "@/assets/dvled-poster.png";
import dvledFoldableImg from "@/assets/dvled-foldable.png";
import jtouchPanelImg from "@/assets/jtouch-panel.png";
import chargingCartImg from "@/assets/charging-cart.jpg";
import sensediscImg from "@/assets/sensedisc.jpg";
import visualizerImg from "@/assets/visualizer.jpg";
import audioSystemImg from "@/assets/audio-system.jpg";
import wirelessSystemImg from "@/assets/wireless-system.jpg";
import smartLightingImg from "@/assets/smart-lighting.jpg";

export type ProductCategory = "projectors" | "displays" | "interactive" | "edtech";

export interface Product {
  id: string;
  category: ProductCategory;
  categoryLabel: string;
  name: string;
  type: string; // Sub-category / type
  description: string;
  icon: any;
  image: string | null;
  features: string[];
  badge?: string; // "Flagship", "New", "Premium", "STEM", "Innovation", etc.
  featured: boolean; // For home page showcase
  specs?: { label: string; value: string }[];
  productLink?: string;
}

export const productCategories: { id: ProductCategory; label: string; description: string; icon: any }[] = [
  {
    id: "projectors",
    label: "Projectors",
    description: "High-performance DLP, laser, LED, and ultra-short throw interactive projectors for classrooms and lecture halls.",
    icon: Projector,
  },
  {
    id: "displays",
    label: "DVLED Displays (3 Types)",
    description: "Premium DirectView LED video walls, vertical signage posters, and motorized foldable mobile displays.",
    icon: Tv,
  },
  {
    id: "interactive",
    label: "Interactive Flat Panels",
    description: "Flagship 4K UHD multi-touch interactive panels with zero-gap bonding, digital whiteboarding, and dual OS.",
    icon: Monitor,
  },
  {
    id: "edtech",
    label: "EdTech & Innovation Lab",
    description: "STEM robotics, Bee-Bot early coding, student tablets, charging carts, science sensors, and classroom AV.",
    icon: Bot,
  },
];

export const products: Product[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // CATEGORY 1: PROJECTORS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "lightpro-projector",
    category: "projectors",
    categoryLabel: "Projectors",
    name: "LightPro Series Projectors",
    type: "High-Performance DLP Projector",
    description: "Versatile High Performance DLP Projectors with 2xHDMI Ports. Models: IN0022SL, IN0024SL, IN0026SL, IN0028SL, IN0024ST, IN0026ST, IN119BB (2025).",
    icon: Projector,
    image: lightproImg,
    badge: "2025 Models",
    featured: true,
    productLink: "https://infocus.com/product/infocus-genesis-iv/",
    features: [
      "Versatile High Performance DLP Projectors with 2x HDMI Ports",
      "Supported Models: IN0022SL, IN0024SL, IN0026SL, IN0028SL, IN0024ST, IN0026ST, IN119BB (2025)",
      "4,000+ ANSI Lumens High Brightness for Well-Lit Classrooms",
      "Up to 15,000 Hours Long-Life SuperEco™ Lamp Technology",
    ],
    specs: [
      { label: "Supported Models", value: "IN0022SL, IN0024SL, IN0026SL, IN0028SL, IN0024ST, IN0026ST, IN119BB" },
      { label: "HDMI Ports", value: "2x HDMI High-Speed Inputs" },
      { label: "Display Technology", value: "Texas Instruments DLP®" },
      { label: "Brightness", value: "4,000 – 4,500 ANSI Lumens" },
    ],
  },
  {
    id: "quantum-laser-projector",
    category: "projectors",
    categoryLabel: "Projectors",
    name: "Quantum Laser Projector",
    type: "Solid-State Laser Display",
    description: "Flagship 4K laser projector delivering maintenance-free 30,000-hour solid-state illumination, ultra-high contrast, and instant power on/off for lecture halls.",
    icon: Projector,
    image: quantumLaserImg,
    badge: "Flagship",
    featured: true,
    features: [
      "30,000-Hour Maintenance-Free Solid-State Laser Light Engine",
      "5,500+ ANSI Lumens for Flawless Daylight Visibility",
      "360-Degree Orientation & Portrait Mode Flexibility",
      "IP5X Dust-Sealed Optical Architecture",
    ],
    specs: [
      { label: "Resolution", value: "4K UHD (3840x2160) / 1080p" },
      { label: "Laser Life", value: "30,000 Hours" },
      { label: "Brightness", value: "5,500 ANSI Lumens" },
      { label: "Contrast Ratio", value: "3,000,000:1" },
    ],
  },
  {
    id: "quantum-led-projector",
    category: "projectors",
    categoryLabel: "Projectors",
    name: "Quantum LED Projector",
    type: "Vibrant RGB LED Projector",
    description: "Energy-efficient RGB LED projector providing vibrant 125% Rec.709 color accuracy, mercury-free eco design, and whisper-quiet cooling for modern classrooms.",
    icon: Projector,
    image: quantumLedImg,
    badge: "Eco-Smart",
    featured: false,
    features: [
      "125% Rec.709 Cinematic Color Gamut Accuracy",
      "Mercury-Free Green Solid-State LED Light Engine",
      "Instant On/Off with Zero Warm-Up or Cool-Down Time",
      "Integrated High-Fidelity Stereo Acoustic Sound",
    ],
    specs: [
      { label: "Color Gamut", value: "125% Rec.709" },
      { label: "LED Lifespan", value: "30,000 Hours" },
      { label: "Resolution", value: "Full HD 1080p (1920x1080)" },
      { label: "Connectivity", value: "USB-C, HDMI, Wi-Fi Screen Mirroring" },
    ],
  },
  {
    id: "screenplay-ust-projector",
    category: "projectors",
    categoryLabel: "Projectors",
    name: "ScreenPlay Ultra Short Throw (UST)",
    type: "Interactive Touch UST Projector",
    description: "Ultra-short throw interactive projector casting a massive 100\" to 150\" touch-interactive display from just inches away, completely eliminating presenter shadows.",
    icon: Projector,
    image: screenplayImg,
    badge: "New",
    featured: false,
    features: [
      "Ultra-Short 0.23 Throw Ratio (Zero Presenter Shadow)",
      "Multi-Touch Interactive Finger & Stylus Input Module",
      "100\" to 150\" Scalable Widescreen Projection",
      "Wall-Mount Kit with Precision Micro-Adjustment Included",
    ],
    specs: [
      { label: "Throw Distance", value: "100\" from 24cm away" },
      { label: "Touch System", value: "10-Point Multi-Touch Interactive" },
      { label: "Brightness", value: "4,200 ANSI Lumens" },
      { label: "Aspect Ratio", value: "16:9 / 16:6 Ultrawide" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CATEGORY 2: DISPLAYS & SCREENS (3 DVLED TYPES)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "dvled-directview-stand",
    category: "displays",
    categoryLabel: "DVLED Displays",
    name: "DirectView DVLED Video Wall (Stand / Wall)",
    type: "Seamless Modular LED Video Wall",
    description: "Seamless bezel-free Direct-View LED video wall system offering breathtaking scale, modular wall and floor stand mounting, and fine pixel pitch for university auditoriums.",
    icon: Tv,
    image: dvledDirectViewImg,
    badge: "Flagship Wall",
    featured: false,
    features: [
      "100% Bezel-Free Seamless Viewing Canvas",
      "Heavy-Duty Mobile Floor Stand or Permanent Wall Mount",
      "Fine Pixel Pitch (P1.2 / P1.5 / P1.8) for Ultra-Sharp Text",
      "Front-Serviceable Magnetic Maintenance Modules",
    ],
    specs: [
      { label: "Available Sizes", value: "108\", 135\", 163\", 216\"+" },
      { label: "Pixel Pitch", value: "1.2mm to 1.8mm" },
      { label: "Brightness", value: "600–1000 cd/m²" },
      { label: "Refresh Rate", value: "3,840 Hz Ultra-Smooth" },
    ],
  },
  {
    id: "dvled-poster",
    category: "displays",
    categoryLabel: "DVLED Displays",
    name: "DirectView Poster Digital Signage",
    type: "Vertical Digital Signage Totem",
    description: "Ultra-slim freestanding vertical DVLED poster for university entrance lobbies, auditorium foyers, campus wayfinding, and live event announcements.",
    icon: Tv,
    image: dvledPosterImg,
    badge: "Vertical Signage",
    featured: false,
    features: [
      "Ultra-Slim Standalone Digital Poster Architecture",
      "Centralized Cloud-Based Content Management & Scheduling",
      "High-Brightness Daylight Visible LED Technology",
      "Multi-Unit Cascading & Video Splicing Support",
    ],
    specs: [
      { label: "Orientation", value: "Vertical (Portrait Totem)" },
      { label: "Panel Resolution", value: "High-Density Fine Pitch" },
      { label: "Connectivity", value: "Wi-Fi, Ethernet, USB Plug & Play, Cloud CMS" },
      { label: "Duty Cycle", value: "24/7 Commercial Continuous" },
    ],
  },
  {
    id: "dvled-foldable",
    category: "displays",
    categoryLabel: "DVLED Displays",
    name: "DirectView Foldable Mobile Display",
    type: "Motorized Foldable Mobile Screen",
    description: "All-in-one motorized folding DVLED display engineered into a mobile flight case for quick 5-minute setup across multiple campus venues, conferences, and auditoriums.",
    icon: Tv,
    image: dvledFoldableImg,
    badge: "Mobile Foldable",
    featured: false,
    features: [
      "Motorized Electric Lifting & Automatic Screen Unfolding",
      "Integrated Flight Case with Heavy-Duty Locking Casters",
      "5-Minute Rapid Setup with Zero Calibration Required",
      "Built-in High-Power Sound System and Wireless Casting",
    ],
    specs: [
      { label: "Screen Diagonal", value: "135\" / 163\" Foldable" },
      { label: "Mobility", value: "Built-in Flight Case Wheels" },
      { label: "Setup Time", value: "< 5 Minutes (Plug & Play)" },
      { label: "Audio", value: "Integrated 2x 30W High-Fidelity Speakers" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CATEGORY 3: INTERACTIVE FLAT PANELS (CONSOLIDATED GENERIC)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "jtouch-interactive-flat-panel",
    category: "interactive",
    categoryLabel: "Interactive Flat Panels",
    name: "JTouch Interactive Flat Panels & Smart Boards",
    type: "4K UHD Multi-Touch Interactive Screen",
    description: "Premier 4K Ultra-HD interactive touch display designed for modern smart classrooms. Combines 20-point multi-touch, zero-gap optical bonding, digital whiteboarding, and dual OS support.",
    icon: Monitor,
    image: jtouchPanelImg,
    badge: "Core Solution",
    featured: true,
    features: [
      "4K Ultra-HD Anti-Glare Display with 7H Hardness Toughened Glass",
      "20-Point High-Precision Multi-Touch with Natural Palm Rejection",
      "Dual OS Architecture (Built-in Android 13 + Windows 11 OPS PC Slot)",
      "Wireless Screen Sharing for up to 9 Student/Teacher Devices Simultaneously",
      "Digital Interactive Whiteboard Suite with Dual-Pen Differentiation",
      "Front USB-C Port with 65W Reverse Laptop Charging and Touch-Back",
    ],
    specs: [
      { label: "Available Screen Sizes", value: "65\", 75\", 86\", 98\"" },
      { label: "Touch Technology", value: "Infrared Optical Bonding (< 4ms response)" },
      { label: "Glass Protection", value: "4mm 7H Hardness Anti-Glare & Anti-Fingerprint" },
      { label: "Operating System", value: "Dual OS (Android 13.0 + Windows 11 Ready)" },
      { label: "Audio System", value: "Front-Facing 2x 15W High-Fidelity Stereo" },
      { label: "Warranty & Support", value: "3 Years Comprehensive On-Site SLA in Pakistan" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CATEGORY 4: EDTECH & INNOVATION LAB
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "educational-tablets",
    category: "edtech",
    categoryLabel: "EdTech & Innovation Lab",
    name: "Educational Tablets & Student Devices",
    type: "Student Learning Devices",
    description: "Drop-proof, kid-safe 10.1\" tablets preloaded with interactive curricula, centralized teacher monitoring console, and MDM kiosk security.",
    icon: Tablet,
    image: tabletsImg,
    badge: "Classroom Essential",
    featured: true,
    features: [
      "Military-Grade Drop & Spill Resistant Silicone Case",
      "Centralized Teacher Push & Screen Locking Console",
      "Blue Light Filtering Eye Comfort Certified Display",
      "All-Day 10-Hour Continuous Battery Life",
    ],
    specs: [
      { label: "Screen", value: "10.1\" IPS FHD (1920x1200)" },
      { label: "Processor", value: "Octa-Core 2.0GHz" },
      { label: "RAM / ROM", value: "4GB RAM / 64GB ROM" },
      { label: "Battery", value: "7,000 mAh" },
    ],
  },
  {
    id: "bee-bot",
    category: "edtech",
    categoryLabel: "EdTech & Innovation Lab",
    name: "Bee-Bot Programmable Floor Robot",
    type: "Early Childhood Coding & STEM",
    description: "The world's leading programmable floor robot for early childhood and primary STEM education. Introduces directional language, sequencing, algorithms, and computational thinking.",
    icon: Bot,
    image: beebotImg,
    badge: "STEM",
    featured: true,
    features: [
      "Precise 15cm Steps and 90-Degree Turns",
      "Memory of up to 200 Programming Steps",
      "Interactive Audio Recording & Playback Confirmation",
      "Docking Station Rechargeable USB Battery Hub",
    ],
    specs: [
      { label: "Target Age", value: "Ages 4 to 9 (Early Years & Primary)" },
      { label: "Controls", value: "Tactile directional top buttons" },
      { label: "Battery", value: "Rechargeable Lithium Polymer" },
      { label: "Accessories", value: "Alphabet, Math & World Activity Mats" },
    ],
  },
  {
    id: "pro-bot",
    category: "edtech",
    categoryLabel: "EdTech & Innovation Lab",
    name: "Pro-Bot Advanced Floor Robot",
    type: "Intermediate STEM & Robotics",
    description: "Advanced vehicle robot with built-in LCD screen and numeric keypad. Supports on-board Logo coding, route geometry drawing with felt pens, and light/bumper sensors.",
    icon: Bot,
    image: probotImg,
    badge: "Robotics",
    featured: false,
    features: [
      "On-Board LCD Screen & Tactile Programming Keypad",
      "Pen Mechanism for Geometric Shape Drawing",
      "Front and Rear Bumper Collision Sensors",
      "Programmable Headlights and Sound Synthesizer",
    ],
    specs: [
      { label: "Target Age", value: "Ages 8 to 14 (Middle School STEM)" },
      { label: "Programming", value: "Logo syntax & arrow button sequences" },
      { label: "Sensors", value: "Light sensor, sound sensor, dual bumpers" },
    ],
  },
  {
    id: "charging-storage-carts",
    category: "edtech",
    categoryLabel: "EdTech & Innovation Lab",
    name: "Smart Charging & Storage Carts",
    type: "Device Fleet Security & Power",
    description: "Heavy-duty steel mobile charging carts capable of safely charging and locking 32+ devices simultaneously with intelligent surge protection.",
    icon: BatteryCharging,
    image: chargingCartImg,
    badge: "Smart Power",
    featured: false,
    features: [
      "Simultaneous Smart Cycle Charging for 32+ Devices",
      "Heavy-Duty Steel Construction with Key & Padlock Security",
      "Smooth 360-Degree Swivel Caster Wheels with Foot Brakes",
      "Built-in Cable Management Clips and Overload Protectors",
    ],
    specs: [
      { label: "Capacity", value: "32–40 Units (Tablets, Laptops, Chromebooks)" },
      { label: "Power Output", value: "Smart USB-C Fast Charge / AC Outlets" },
      { label: "Cooling", value: "Ventilated Mesh with Quiet Fans" },
    ],
  },
  {
    id: "sensedisc-stem-lab",
    category: "edtech",
    categoryLabel: "EdTech & Innovation Lab",
    name: "SenseDisc All-in-One STEM Science Lab",
    type: "Digital Science Experimentation",
    description: "Compact, disc-shaped multi-sensor experimental system integrating physics, chemistry, biology, and environmental sensors for hands-on digital science labs.",
    icon: Microscope,
    image: sensediscImg,
    badge: "Innovation",
    featured: false,
    features: [
      "Integrated Sensor Array (Temp, Barometer, Accelerometer, GPS)",
      "Wireless Bluetooth Real-Time Data Streaming to Tablets & PCs",
      "Preloaded Experiments for Physics, Chemistry & Biology",
      "Instant Export to Excel, Graph Plotting, and Lab Report PDF",
    ],
    specs: [
      { label: "Sensors", value: "Up to 10 Built-in Sensors" },
      { label: "Sampling Rate", value: "Up to 100,000 samples/sec" },
      { label: "OS Compatibility", value: "Windows, Android, iOS, macOS" },
    ],
  },
  {
    id: "visualizer-camera",
    category: "edtech",
    categoryLabel: "EdTech & Innovation Lab",
    name: "4K Document Visualizer Camera Scanner",
    type: "Live Demonstration Camera",
    description: "High-resolution document camera with multi-joint flexible arm and LED lighting for projecting real-time book pages, handwritten notes, and 3D science specimens.",
    icon: Camera,
    image: visualizerImg,
    badge: "4K Clarity",
    featured: false,
    features: [
      "13MP Sony 4K Ultra-HD Sensor at 60 FPS",
      "Flexible Multi-Joint Mechanical Gooseneck Arm",
      "One-Touch Instant Auto-Focus with Touch LED Lamp",
      "Direct HDMI, USB, and VGA Output to Panels & Projectors",
    ],
    specs: [
      { label: "Sensor Resolution", value: "4K UHD (3840x2160)" },
      { label: "Shooting Area", value: "Up to A3 Size (420 x 297mm)" },
      { label: "Digital Zoom", value: "100x Total Zoom" },
    ],
  },
  {
    id: "audio-visual-systems",
    category: "edtech",
    categoryLabel: "EdTech & Innovation Lab",
    name: "Classroom Audio-Visual Systems",
    type: "Acoustic Tuning & Vocal Clarity",
    description: "Comprehensive sound systems combining wireless lightweight lapel mics, anti-feedback digital amplifiers, and balanced ceiling speakers for teacher vocal health.",
    icon: Speaker,
    image: audioSystemImg,
    badge: "Crystal Clear",
    featured: false,
    features: [
      "Zero-Feedback Acoustic Equalization",
      "UHF Wireless Teacher Lapel & Pendant Microphones",
      "Even Acoustic Sound Pressure Distribution",
      "Bluetooth, AUX, and Optical Digital Audio Inputs",
    ],
    specs: [
      { label: "Power Output", value: "60W - 120W RMS" },
      { label: "Wireless Range", value: "30 Meters" },
      { label: "Frequency Response", value: "50Hz - 20kHz" },
    ],
  },
  {
    id: "wireless-presentation-systems",
    category: "edtech",
    categoryLabel: "EdTech & Innovation Lab",
    name: "Wireless Presentation & Collaboration Systems",
    type: "Wireless Screen Mirroring",
    description: "Dongle-free and app-based wireless casting hubs allowing multiple students and teachers to share screens simultaneously with touch-back control.",
    icon: Wifi,
    image: wirelessSystemImg,
    badge: "Zero Cables",
    featured: false,
    features: [
      "Up to 4 Screen Split Simultaneous Display",
      "Touch-Back Control on Interactive Panels",
      "Supports AirPlay, Miracast, Google Cast, and USB Buttons",
      "Enterprise WPA2/WPA3 Network Security",
    ],
    specs: [
      { label: "Output Resolution", value: "4K UHD @ 60Hz" },
      { label: "Simultaneous Streams", value: "4 Screens (Split View)" },
      { label: "Latency", value: "< 100ms" },
    ],
  },
  {
    id: "smart-lighting-solutions",
    category: "edtech",
    categoryLabel: "EdTech & Innovation Lab",
    name: "Intelligent Smart Lighting Solutions",
    type: "Circadian Classroom Lighting",
    description: "Adaptive glare-free LED lighting systems that adjust color temperature and brightness according to natural sunlight and classroom activities.",
    icon: Lightbulb,
    image: smartLightingImg,
    badge: "Eye Comfort",
    featured: false,
    features: [
      "Circadian Rhythm Tuning (Exam Mode, Presentation Mode, Focus)",
      "Zero-Flicker & Low Blue Light RG0 Eye Safety Certified",
      "Daylight Harvesting Sensors for 60% Energy Savings",
      "Centralized Wall Touch Panel and App Control",
    ],
    specs: [
      { label: "CCT Range", value: "3,000K – 6,500K Tunable White" },
      { label: "CRI", value: "Ra > 90 High Color Accuracy" },
      { label: "UGR", value: "< 16 Anti-Glare Rating" },
    ],
  },
];