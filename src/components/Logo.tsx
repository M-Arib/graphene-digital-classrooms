import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "full" | "mark";
  /** When true, swaps to high-contrast colors that pop on dark surfaces (footer). */
  onDark?: boolean;
};

/**
 * Inline SVG recreation of the Graphene Communication wordmark.
 * Scales cleanly, theme-aware, ~1KB vs the 12KB JPEG it replaces.
 */
export function Logo({ className, variant = "full", onDark = false }: LogoProps) {
  const purple = onDark ? "#c4b5fd" : "#5b2a86";
  const pink = onDark ? "#f0abfc" : "#e6398b";
  const accent = onDark ? "#f0abfc" : "#e6398b";

  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Graphene Communication"
        className={cn("select-none", className)}
      >
        <defs>
          <linearGradient id="gc-mark-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={purple} />
            <stop offset="100%" stopColor={pink} />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gc-mark-grad)" />
        <path
          d="M32 16 L48 46 L40 46 L36.5 38.5 L27.5 38.5 L24 46 L16 46 Z M30.5 32 L33.5 32 L32 28 Z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 320 90"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Graphene Communication"
      className={cn("select-none", className)}
    >
      <g
        fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif"
        fontWeight="800"
      >
        {/* GRAPHENE — letters around the triangle accent on A */}
        <text x="0" y="44" fontSize="42" letterSpacing="1" fill={purple}>
          GR
        </text>
        <text x="76" y="44" fontSize="42" letterSpacing="1" fill={purple}>
          PHENE
        </text>
        {/* The "A" rendered as a magenta triangle accent */}
        <path d="M62 44 L78 14 L94 44 L86 44 L78 28 L70 44 Z" fill={accent} />

        {/* COMMUNICATION subtitle */}
        <text
          x="0"
          y="78"
          fontSize="22"
          letterSpacing="3.5"
          fill={pink}
          fontWeight="700"
        >
          COMMUNICATION
        </text>

        {/* Two play-style triangles after COMMUNICATION */}
        <path d="M252 62 L266 70 L252 78 Z" fill={pink} />
        <path d="M270 62 L284 70 L270 78 Z" fill={accent} />
      </g>
    </svg>
  );
}
