import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type ExperienceBlock = {
  title: string;
  body: string;
  image: string;
};

type ExperienceSectionProps = {
  heading: string;
  blocks: ExperienceBlock[];
};

export default function ExperienceSection({ heading, blocks }: ExperienceSectionProps) {
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    if (!root) return;
    const imgs = Array.from(root.querySelectorAll<HTMLElement>("[data-parallax-img='1']"));

    const ctx = gsap.context(() => {
      imgs.forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <Section id="experience" className="bg-ivory">
      <div ref={rootRef} className="mx-auto max-w-[1240px]">
        <Reveal>
          <div className="luxury-track text-[11px] text-charcoal/60">{heading}</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-[44px] leading-[0.92] text-charcoal sm:text-[58px]">
            The coast, interpreted in courses.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:gap-16">
          {blocks.map((b, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <div
                key={b.title}
                className={cn(
                  "grid items-center gap-8 lg:grid-cols-12 lg:gap-12",
                  reversed ? "lg:[&>*:first-child]:order-2" : "",
                )}
              >
                <Reveal className="lg:col-span-7">
                  <div className="group relative overflow-hidden rounded-[30px] bg-charcoal/5">
                    <motion.div
                      className="absolute inset-0"
                      initial={{ clipPath: "inset(0 100% 0 0 round 30px)" }}
                      whileInView={{ clipPath: "inset(0 0% 0 0 round 30px)" }}
                      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div
                        data-parallax-img="1"
                        className="absolute -inset-[8%] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                        style={{ backgroundImage: `url("${b.image}")` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-transparent" />
                    </motion.div>
                    <div className="relative h-[420px] w-full sm:h-[520px]" />
                  </div>
                </Reveal>

                <div className="lg:col-span-5">
                  <Reveal>
                    <div className="luxury-track text-[11px] text-charcoal/55">
                      Experience {String(idx + 1).padStart(2, "0")}
                    </div>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <div className="mt-4 font-display text-[34px] leading-[0.98] text-charcoal sm:text-[42px]">
                      {b.title}
                    </div>
                  </Reveal>
                  <Reveal delay={0.18}>
                    <div className="mt-5 text-[15px] leading-relaxed text-charcoal/75">
                      {b.body}
                    </div>
                  </Reveal>
                  <Reveal delay={0.28}>
                    <button
                      type="button"
                      className="mt-8 inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-3 text-[12px] font-semibold tracking-[0.18em] text-ivory transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      DISCOVER
                    </button>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
