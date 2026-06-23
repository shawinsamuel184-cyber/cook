import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { cn } from "@/lib/utils";

type MenuItem = { name: string; detail: string };
type MenuCategory = { key: string; label: string; items: MenuItem[] };

type MenuShowcaseSectionProps = {
  heading: string;
  categories: MenuCategory[];
};

export default function MenuShowcaseSection({
  heading,
  categories,
}: MenuShowcaseSectionProps) {
  const [active, setActive] = useState(categories[0]?.key ?? "");

  const current = useMemo(() => {
    return categories.find((c) => c.key === active) ?? categories[0];
  }, [active, categories]);

  return (
    <Section id="menu" className="bg-ivory">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <div className="luxury-track text-[11px] text-charcoal/60">{heading}</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-[44px] leading-[0.92] text-charcoal sm:text-[58px]">
            A preview of the tide.
          </h2>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((c) => {
              const selected = c.key === active;
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setActive(c.key)}
                  className={cn(
                    "rounded-full px-5 py-2 text-[12px] font-semibold tracking-[0.14em]",
                    selected
                      ? "bg-charcoal text-ivory"
                      : "bg-ivory ring-1 ring-charcoal/15 text-charcoal/75 hover:text-charcoal",
                    "transition-colors duration-300",
                  )}
                >
                  {c.label.toUpperCase()}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="rounded-[28px] bg-charcoal p-8 text-ivory sm:p-10">
                <div className="luxury-track text-[11px] text-ivory/70">
                  Seasonal selection
                </div>
                <div className="mt-5 font-display text-[34px] leading-[0.95]">
                  {current?.label}
                </div>
                <div className="mt-6 text-[14px] leading-relaxed text-ivory/75">
                  A curated preview designed to evoke the coastline in each course. The full menu evolves daily with harvest and tide.
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[28px] bg-ivory ring-1 ring-charcoal/10 shadow-soft">
              <div className="px-7 py-8 sm:px-10 sm:py-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current?.key}
                    initial={{ opacity: 0, y: 12, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 12, filter: "blur(10px)" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="grid gap-6">
                      {current?.items.map((i) => (
                        <div key={i.name} className="border-b border-charcoal/10 pb-6 last:border-b-0 last:pb-0">
                          <div className="flex items-baseline justify-between gap-6">
                            <div className="font-display text-[22px] text-charcoal">
                              {i.name}
                            </div>
                            <div className="luxury-track text-[10px] text-charcoal/55">
                              {current.label}
                            </div>
                          </div>
                          <div className="mt-2 text-[13px] text-charcoal/65">
                            {i.detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

