import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Monitor, Tablet, Sparkles, Wifi, Cpu, Layers } from "lucide-react";
import smartBoardImg from "@/assets/smart-board.webp";
import tabletsImg from "@/assets/tablets-learning.webp";

export function Floating3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt physics using Framer Motion springs
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    x.set(clientX / width - 0.5);
    y.set(clientY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-xl mx-auto h-[480px] lg:h-[540px] flex items-center justify-center perspective-1000 select-none"
    >
      {/* Background ambient glow */}
      <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-[#5B2A86]/40 via-[#E6398B]/30 to-[#F0ABFC]/20 blur-3xl -z-10 animate-pulse-ring" />

      {/* Main 3D Tilted Scene container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* ── 1. Central 3D Smart Board Display ── */}
        <motion.div
          animate={{
            y: [-8, 8, -8],
            rotateZ: [-1, 1, -1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transform: "translateZ(40px)" }}
          className="relative z-20 w-[320px] sm:w-[400px] md:w-[460px] rounded-2xl p-2 bg-gradient-to-b from-white/20 via-white/5 to-white/10 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/30 dark:border-[#F0ABFC]/20 shadow-strong overflow-hidden"
        >
          {/* Top bezel with camera & LED */}
          <div className="flex items-center justify-between px-3 py-1 bg-black/40 rounded-t-xl mb-1 text-[10px] text-white/70">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono">G-OS 4K Interactive</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="w-3 h-3 text-[#E6398B]" />
              <span className="font-mono">Active</span>
            </div>
          </div>

          {/* Screen Content */}
          <div className="relative rounded-lg overflow-hidden bg-slate-950 aspect-[16/10] group">
            <img
              src={smartBoardImg}
              alt="4K Smart Interactive Display"
              className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Interactive Screen UI Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-[#E6398B]/80 text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-md">
                  4K Multi-Touch
                </span>
                <span className="text-white/90 text-xs font-semibold">
                  Classroom AI Assistant Active
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 2. Floating 3D Educational Tablet ── */}
        <motion.div
          animate={{
            y: [12, -12, 12],
            rotateZ: [2, -3, 2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          style={{ transform: "translateZ(90px) translateX(-110px) translateY(70px)" }}
          className="absolute left-0 bottom-8 z-30 w-44 sm:w-52 rounded-xl p-1.5 bg-gradient-to-br from-white/30 to-white/10 dark:from-[#5B2A86]/60 dark:to-[#E6398B]/30 backdrop-blur-2xl border border-white/40 dark:border-[#F0ABFC]/30 shadow-glow-pink"
        >
          <div className="relative rounded-lg overflow-hidden bg-black/60 aspect-[4/3]">
            <img
              src={tabletsImg}
              alt="Student Smart Tablet"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-1.5 left-2 right-2 bg-black/60 backdrop-blur-md rounded px-2 py-0.5 text-[9px] font-bold text-[#F0ABFC] flex items-center justify-between">
              <span>Interactive STEM</span>
              <span>100%</span>
            </div>
          </div>
        </motion.div>

        {/* ── 3. Floating 3D Data Badge / AI Core ── */}
        <motion.div
          animate={{
            y: [-15, 10, -15],
            rotateZ: [-4, 4, -4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{ transform: "translateZ(110px) translateX(120px) translateY(-80px)" }}
          className="absolute right-0 top-6 z-30 rounded-2xl p-3.5 bg-card/90 dark:bg-[#0F0F1A]/90 backdrop-blur-xl border border-[#E6398B]/40 shadow-glow-purple flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5B2A86] to-[#E6398B] flex items-center justify-center shadow-md">
            <Sparkles className="w-5 h-5 text-white animate-spin" style={{ animationDuration: "10s" }} />
          </div>
          <div>
            <div className="text-[11px] font-bold text-foreground">150+ Schools</div>
            <div className="text-[9px] text-[#E6398B] font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Smart Class Ready
            </div>
          </div>
        </motion.div>

        {/* ── 4. Orbiting Mini Particle Nodes ── */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 pointer-events-none -z-5 flex items-center justify-center"
        >
          <div className="absolute top-4 left-1/4 w-3 h-3 rounded-full bg-[#E6398B] shadow-glow-pink animate-ping" />
          <div className="absolute bottom-6 right-1/4 w-2.5 h-2.5 rounded-full bg-[#5B2A86] shadow-glow-purple" />
          <div className="absolute top-1/2 -right-2 w-3.5 h-3.5 rounded-full bg-[#F0ABFC] shadow-glow" />
        </motion.div>
      </motion.div>
    </div>
  );
}
export default Floating3D;
