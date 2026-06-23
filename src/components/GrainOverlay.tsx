import { cn } from "@/lib/utils";

type GrainOverlayProps = {
  className?: string;
  opacity?: number;
};

export default function GrainOverlay({ className, opacity = 0.18 }: GrainOverlayProps) {
  const svg =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 mix-blend-overlay opacity-30 animate-grain-shift",
        className,
      )}
      style={{
        backgroundImage: `url("${svg}")`,
        backgroundSize: "220px 220px",
        opacity,
      }}
    />
  );
}

