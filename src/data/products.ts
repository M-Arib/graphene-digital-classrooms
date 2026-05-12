import { Monitor, Tablet, Projector, Speaker } from "lucide-react";
import smartBoardImg from "@/assets/smart-board.webp";
import displayPanelImg from "@/assets/display-panel.webp";
import tabletsImg from "@/assets/tablets-learning.webp";

export const products = [
  {
    title: "Smart Boards & Interactive Displays",
    description:
      "Transform teaching with touch-enabled displays that make learning interactive and engaging.",
    icon: Monitor,
    image: smartBoardImg,
  },
  {
    title: "LED/LCD Display Systems",
    description:
      "High-resolution display panels for classrooms, auditoriums, and presentation spaces.",
    icon: Projector,
    image: displayPanelImg,
  },
  {
    title: "Educational Tablets & Devices",
    description:
      "Kid-friendly tablets and learning devices designed for interactive education.",
    icon: Tablet,
    image: tabletsImg,
  },
  {
    title: "Audio-Visual Equipment",
    description:
      "Complete AV solutions for classrooms, labs, and auditoriums with crystal-clear sound.",
    icon: Speaker,
    image: null,
  },
];
