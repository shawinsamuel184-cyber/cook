import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { cn } from "@/lib/utils";

type EventCard = {
  title: string;
  body: string;
  image: string;
};

type EventsSectionProps = {
  heading: string;
  cards: EventCard[];
  onInquire?: () => void;
};

export default function EventsSection({ heading, cards, onInquire }: EventsSectionProps) {
  return (
    <Section id="events" className="bg-ivory">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <div className="luxury-track text-[11px] text-charcoal/60">{heading}</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-[44px] leading-[0.92] text-charcoal sm:text-[58px]">
            Gatherings designed like a campaign.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {cards.map((c, idx) => (
            <Reveal key={c.title} delay={0.08 + idx * 0.06}>
              <div
                className={cn(
                  "group relative overflow-hidden rounded-[28px] bg-charcoal",
                  "transition-transform duration-500 hover:-translate-y-1",
                )}
              >
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06] sm:h-[420px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-transparent" />
                <div className="absolute inset-0 vignette opacity-70" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-ivory sm:p-9">
                  <div className="overflow-hidden">
                    <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                      <div className="font-display text-[28px] leading-[1]">
                        {c.title}
                      </div>
                      <div className="mt-3 max-w-[520px] text-[13px] leading-relaxed text-ivory/75">
                        {c.body}
                      </div>
                    </div>
                  </div>
                  <div className="mt-7 inline-flex items-center rounded-full bg-ivory/10 px-5 py-2 text-[11px] font-semibold tracking-[0.18em] ring-1 ring-white/15">
                    <button type="button" onClick={onInquire} className="inline-flex items-center">
                      INQUIRE
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
