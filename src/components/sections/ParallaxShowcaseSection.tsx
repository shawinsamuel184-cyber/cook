import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import GrainOverlay from "@/components/GrainOverlay";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type Card = { title: string; body: string };

type ParallaxShowcaseSectionProps = {
  image: string;
  cards: Card[];
};

export default function ParallaxShowcaseSection({
  image,
  cards,
}: ParallaxShowcaseSectionProps) {
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    const img = imageRef.current;
    const cardWrap = cardsRef.current;
    if (!root || !img || !cardWrap) return;

    const ctx = gsap.context(() => {
      gsap.to(img, {
        yPercent: 16,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: true },
      });

      gsap.to(cardWrap, {
        y: -24,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top center", end: "bottom center", scrub: true },
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <Section className="bg-ivory">
      <section ref={rootRef} className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[32px]">
        <div className="absolute inset-0 bg-charcoal" />
        <div
          ref={imageRef}
          className="absolute -inset-[12%] bg-cover bg-center opacity-95"
          style={{ backgroundImage: `url("${image}")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-charcoal/60" />
        <div className="absolute inset-0 vignette" />
        <GrainOverlay opacity={0.2} />

        <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20">
          <Reveal>
            <div className="luxury-track text-[11px] text-ivory/70">
              Immersive perspective
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="mt-5 max-w-[820px] font-display text-[42px] leading-[0.92] text-ivory sm:text-[56px]">
              A coastline rendered in light, stone, and fire.
            </h2>
          </Reveal>

          <div ref={cardsRef} className="mt-14 grid gap-4 lg:grid-cols-3">
            {cards.map((c) => (
              <div
                key={c.title}
                className={cn(
                  "rounded-[22px] bg-ivory/10 p-7 text-ivory backdrop-blur-xl",
                  "ring-1 ring-white/15",
                )}
              >
                <div className="font-display text-[22px]">{c.title}</div>
                <div className="mt-3 text-[13px] leading-relaxed text-ivory/75">
                  {c.body}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[140px]" />
      </section>
    </Section>
  );
}
