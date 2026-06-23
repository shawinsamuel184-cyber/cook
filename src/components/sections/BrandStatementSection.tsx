import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

type BrandStatementSectionProps = {
  word: string;
  image: string;
};

export default function BrandStatementSection({ word, image }: BrandStatementSectionProps) {
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    const img = imageRef.current;
    if (!root || !img) return;

    const ctx = gsap.context(() => {
      gsap.to(img, {
        yPercent: -6,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: { trigger: root, start: "top 80%", toggleActions: "play none none none", once: true },
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <Section className="bg-ivory">
      <section ref={rootRef} className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[34px] bg-charcoal px-6 py-20 sm:px-10">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/65 to-charcoal/90" />

        <div
          ref={imageRef}
          className="absolute -inset-[12%] opacity-90"
          style={{
            backgroundImage: `url("${image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-charcoal/70" />
        <div className="absolute inset-0 vignette opacity-80" />

        <div className="relative z-10">
          <Reveal>
            <div className="luxury-track text-[11px] text-ivory/70">Brand</div>
          </Reveal>

          <div className="mt-8 overflow-hidden">
            <div
              className="font-display text-[54px] leading-[0.8] text-ivory sm:text-[92px] lg:text-[140px]"
              style={{ letterSpacing: "-0.02em" }}
            >
              {word}
            </div>
          </div>

          <Reveal delay={0.12}>
            <div className="mt-10 max-w-[620px] text-[14px] leading-relaxed text-ivory/75">
              A coastal restaurant shaped by nature, defined by restraint, and designed to feel like cinema.
            </div>
          </Reveal>
        </div>
      </section>
    </Section>
  );
}
