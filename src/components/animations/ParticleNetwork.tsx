import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  isLogoPart: boolean;
}

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const colors = ["#5B2A86", "#8A3BB8", "#E6398B", "#F0ABFC", "#C084FC"];
    const particleCount = 220;
    const particles: Particle[] = [];

    // Helper: generate points for a futuristic stylized "G" logo
    function getGLogoPoints(centerX: number, centerY: number, scale: number) {
      const points: { x: number; y: number }[] = [];
      const steps = 90;
      // Outer arc of G (from 45 deg to 315 deg)
      for (let i = 0; i < steps; i++) {
        const angle = (0.25 * Math.PI) + (i / steps) * (1.5 * Math.PI);
        const r = scale * (0.85 + Math.random() * 0.15);
        points.push({
          x: centerX + Math.cos(angle) * r,
          y: centerY + Math.sin(angle) * r,
        });
      }
      // Horizontal bar of G
      for (let i = 0; i < 30; i++) {
        const t = i / 30;
        points.push({
          x: centerX + (scale * 0.1) + t * (scale * 0.7),
          y: centerY + (Math.random() - 0.5) * 8,
        });
      }
      // Vertical bar of G
      for (let i = 0; i < 20; i++) {
        const t = i / 20;
        points.push({
          x: centerX + (scale * 0.8),
          y: centerY + t * (scale * 0.5),
        });
      }
      return points;
    }

    const gPoints = getGLogoPoints(width / 2, height / 2, Math.min(width, height) * 0.22);
    let morphTime = 0;
    const LOGO_HOLD_FRAMES = 120; // 2 seconds at 60fps
    const DISSOLVE_FRAMES = 180; // 3 seconds

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const isLogo = i < gPoints.length;
      const targetPoint = isLogo ? gPoints[i] : null;

      const randomX = Math.random() * width;
      const randomY = Math.random() * height;

      particles.push({
        x: targetPoint ? targetPoint.x + (Math.random() - 0.5) * 20 : randomX,
        y: targetPoint ? targetPoint.y + (Math.random() - 0.5) * 20 : randomY,
        originX: targetPoint ? targetPoint.x : randomX,
        originY: targetPoint ? targetPoint.y : randomY,
        targetX: targetPoint ? targetPoint.x : randomX,
        targetY: targetPoint ? targetPoint.y : randomY,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        radius: Math.random() * 2.2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.4,
        isLogoPart: !!targetPoint,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      morphTime++;

      const isFormingLogo = morphTime < LOGO_HOLD_FRAMES;
      const isDissolving = morphTime >= LOGO_HOLD_FRAMES && morphTime < DISSOLVE_FRAMES;

      // Draw particle connections
      const maxDistance = 110;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move particles
        if (isFormingLogo && p1.isLogoPart) {
          // Gently attract to G logo shape
          p1.x += (p1.originX - p1.x) * 0.08;
          p1.y += (p1.originY - p1.y) * 0.08;
        } else if (isDissolving && p1.isLogoPart) {
          // Dissolve smoothly outwards
          p1.x += p1.vx * 1.5;
          p1.y += p1.vy * 1.5;
        } else {
          // Normal ambient motion
          p1.x += p1.vx;
          p1.y += p1.vy;

          // Bounce off boundaries
          if (p1.x < 0 || p1.x > width) p1.vx *= -1;
          if (p1.y < 0 || p1.y > height) p1.vy *= -1;
        }

        // Mouse interaction (gravity + push)
        const dxMouse = mouse.x - p1.x;
        const dyMouse = mouse.y - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          const angle = Math.atan2(dyMouse, dxMouse);
          // Subtle attraction with slight repel if too close
          if (distMouse > 40) {
            p1.x += Math.cos(angle) * force * 3;
            p1.y += Math.sin(angle) * force * 3;
          } else {
            p1.x -= Math.cos(angle) * force * 4;
            p1.y -= Math.sin(angle) * force * 4;
          }

          // Connect line to mouse
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(230, 57, 139, ${force * 0.35})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Draw particle node with glow
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = p1.alpha;
        ctx.shadowColor = p1.color;
        ctx.shadowBlur = 10;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = alpha;
            ctx.shadowBlur = 0;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto z-0 opacity-80 dark:opacity-90 w-full h-full"
      style={{ willChange: "transform" }}
    />
  );
}
export default ParticleNetwork;
