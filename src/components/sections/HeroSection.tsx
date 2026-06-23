import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import GrainOverlay from "@/components/GrainOverlay";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type HeroSectionProps = {
  posterImage: string;
  videoSrc?: string;
  headline: string[];
  subheading: string;
  onExploreMenu: () => void;
  onReserve: () => void;
};

export default function HeroSection({
  posterImage,
  videoSrc,
  headline,
  subheading,
  onExploreMenu,
  onReserve,
}: HeroSectionProps) {
  const reduced = usePrefersReducedMotion();
  const bgRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (reduced) return;
    const bg = bgRef.current;
    const root = rootRef.current;
    if (!bg || !root) return;

    const ctx = gsap.context(() => {
      gsap.to(bg, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="top" ref={rootRef} className="relative min-h-screen w-full overflow-hidden">
      <motion.div
        ref={bgRef}
        className="absolute -inset-[10%]"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          backgroundImage: `url("${posterImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {videoSrc ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={videoSrc}
            poster={posterImage}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : null}
      </motion.div>

      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 vignette" />
      <GrainOverlay opacity={0.22} />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-24 pt-24 sm:px-10 sm:pt-28 lg:px-14">
        <div className="w-full max-w-[1100px] text-center text-ivory">
          <div className="mx-auto max-w-[920px]">
            <div className="luxury-track text-[11px] text-ivory/70">
              Oceanfront dining experience
            </div>

            <div className="mt-6 font-display text-[38px] leading-[0.92] sm:text-[64px] lg:text-[92px]">
              {headline.map((line, idx) => (
                <motion.div
                  key={line}
                  className="overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.01, delay: 0 }}
                >
                  <motion.div
                    initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.35 + idx * 0.22,
                    }}
                  >
                    {line}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="mx-auto mt-8 max-w-[720px] text-[14px] leading-relaxed text-ivory/80 sm:text-[16px]"
              initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
            >
              {subheading}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
            >
              <button
                type="button"
                onClick={onExploreMenu}
                className={cn(
                  "inline-flex w-full max-w-[320px] items-center justify-center rounded-full bg-ivory px-7 py-3 text-[12px] font-semibold tracking-[0.18em] text-charcoal sm:w-auto sm:max-w-none",
                  "transition-transform duration-300 hover:-translate-y-0.5",
                )}
              >
                EXPLORE MENU
              </button>
              <button
                type="button"
                onClick={onReserve}
                className={cn(
                  "inline-flex w-full max-w-[320px] items-center justify-center rounded-full bg-transparent px-7 py-3 text-[12px] font-semibold tracking-[0.18em] text-ivory ring-1 ring-white/25 sm:w-auto sm:max-w-none",
                  "transition-transform duration-300 hover:-translate-y-0.5",
                )}
              >
                RESERVE TABLE
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col items-center gap-2 text-ivory/65">
          <div className="h-10 w-[1px] bg-ivory/30" />
          <ChevronDown className="h-4 w-4 animate-float-y" />
        </div>
      </motion.div>
    </section>
  );
}
