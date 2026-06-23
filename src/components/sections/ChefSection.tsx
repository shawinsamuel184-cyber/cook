import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

type ChefSectionProps = {
  heading: string;
  name: string;
  title: string;
  quote: string;
  image: string;
};

export default function ChefSection({ heading, name, title, quote, image }: ChefSectionProps) {
  return (
    <Section id="chef" className="bg-ivory">
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-[32px] bg-charcoal/5">
            <div className="relative h-[420px] w-full sm:h-[520px]">
              <img
                src={image}
                alt={name}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-6">
          <Reveal>
            <div className="luxury-track text-[11px] text-charcoal/60">{heading}</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-[44px] leading-[0.92] text-charcoal sm:text-[58px]">
              {name}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-4 text-[13px] font-semibold tracking-[0.18em] text-charcoal/55">
              {title}
            </div>
          </Reveal>
          <Reveal delay={0.22}>
            <blockquote className="mt-10 text-[16px] leading-relaxed text-charcoal/75 sm:text-[18px]">
              “{quote}”
            </blockquote>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

