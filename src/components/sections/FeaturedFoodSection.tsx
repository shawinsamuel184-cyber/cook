import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type FeaturedFoodSectionProps = {
  heading: string;
  body: string;
  image: string;
};

export default function FeaturedFoodSection({
  heading,
  body,
  image,
}: FeaturedFoodSectionProps) {
  const reduced = usePrefersReducedMotion();
  const imageRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduced) return;
    const el = imageRef.current;
    const root = rootRef.current;
    if (!el || !root) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: 1.08 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <Section className="bg-ivory" >
      <div ref={rootRef} className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-2 lg:items-stretch">
        <div className="group relative overflow-hidden rounded-[28px] bg-charcoal/5">
          <div
            ref={imageRef}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-transform duration-700",
              "group-hover:scale-[1.03]",
            )}
            style={{ backgroundImage: `url("${image}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-charcoal/10 to-transparent" />
          <div className="relative h-[520px] w-full lg:h-[640px]" />
        </div>

        <div className="relative overflow-hidden rounded-[28px] bg-terracotta px-8 py-12 text-ivory sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-20 -top-24 h-[360px] w-[360px] rounded-full bg-ivory/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-24 h-[420px] w-[420px] rounded-full bg-charcoal/10 blur-3xl" />

          <Reveal>
            <div className="luxury-track text-[11px] text-ivory/70">
              Culinary philosophy
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <h2 className="mt-5 font-display text-[40px] leading-[0.95] sm:text-[52px]">
              {heading}
            </h2>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed text-ivory/85">
              {body}
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <button
              type="button"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-ivory px-7 py-3 text-[12px] font-semibold tracking-[0.18em] text-charcoal transition-transform duration-300 hover:-translate-y-0.5"
            >
              VIEW SEASONAL HIGHLIGHTS
            </button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
