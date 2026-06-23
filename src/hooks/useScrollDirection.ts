import { useEffect, useState } from "react";

export function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 14);
      const delta = y - lastY;
      if (Math.abs(delta) > 6) {
        setDirection(delta > 0 ? "down" : "up");
        lastY = y;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { direction, scrolled };
}

