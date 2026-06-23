import { useEffect, useMemo, useRef } from "react";
import Lenis from "lenis";

export function useLenisScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  const api = useMemo(() => {
    return {
      scrollTo: (target: string | HTMLElement, opts?: { offset?: number }) => {
        const lenis = lenisRef.current;
        if (!lenis) return;
        lenis.scrollTo(target, {
          duration: 1.2,
          easing: (t) => 1 - Math.pow(1 - t, 4),
          offset: opts?.offset ?? -84,
        });
      },
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return api;
}
