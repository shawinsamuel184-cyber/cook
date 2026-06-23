import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

type StorySectionProps = {
  heading: string;
  body: string;
};

export default function StorySection({ heading, body }: StorySectionProps) {
  const words = body.split(" ");

  return (
    <Section id="about" className="bg-ivory">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <div className="luxury-track text-[11px] text-charcoal/60">
            The restaurant story
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-[980px] font-display text-[44px] leading-[0.92] text-charcoal sm:text-[58px] lg:text-[72px]">
            {heading}
          </h2>
        </Reveal>

        <motion.p
          className="mt-10 max-w-[900px] text-[15px] leading-relaxed text-charcoal/75 sm:text-[16px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.015, delayChildren: 0.15 } },
          }}
        >
          {words.map((w, idx) => (
            <motion.span
              key={`${w}-${idx}`}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, filter: "blur(10px)", y: 10 },
                show: {
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              {w}
              {" "}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </Section>
  );
}

