import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type LuxuryCursorProps = {
  className?: string;
};

function canUseFinePointer() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: fine)").matches;
}

export default function LuxuryCursor({ className }: LuxuryCursorProps) {
  const [enabled, setEnabled] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setEnabled(canUseFinePointer());
    const mql = window.matchMedia("(pointer: fine)");
    const onChange = () => setEnabled(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.style.cursor = "none";
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "pointer-events-none fixed left-0 top-0 z-[90] -translate-x-1/2 -translate-y-1/2",
        className,
      )}
      aria-hidden="true"
    >
      <div className="h-10 w-10 rounded-full bg-charcoal/10 backdrop-blur-md shadow-soft ring-1 ring-white/15" />
      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-charcoal/60" />
    </div>
  );
}

