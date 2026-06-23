import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

type GallerySectionProps = {
  items: string[];
};

export default function GallerySection({ items }: GallerySectionProps) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <Section id="gallery" className="bg-ivory">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <div className="luxury-track text-[11px] text-charcoal/60">Gallery</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-[44px] leading-[0.92] text-charcoal sm:text-[58px]">
            Atmosphere, texture, and light.
          </h2>
        </Reveal>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((src, idx) => (
            <button
              key={`${src}-${idx}`}
              type="button"
              onClick={() => setActive(src)}
              className={cn(
                "group relative mb-4 block w-full overflow-hidden rounded-[22px] bg-charcoal/5",
                "transition-transform duration-500 hover:-translate-y-1",
              )}
            >
              <img
                src={src}
                alt="Gallery image"
                loading="lazy"
                className="h-auto w-full transform-gpu transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[90] bg-charcoal/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              className="absolute right-4 top-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(null);
                }}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ivory/10 ring-1 ring-white/15"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-ivory" />
              </button>
            </motion.div>

            <motion.div
              className="grid h-full w-full place-items-center px-6 py-16"
              initial={{ scale: 1.02, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              exit={{ scale: 1.02, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={active}
                alt="Expanded gallery image"
                className="max-h-[78vh] w-auto max-w-[92vw] rounded-[24px] shadow-soft ring-1 ring-white/10"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
