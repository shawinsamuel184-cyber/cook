import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { cn } from "@/lib/utils";

type Hours = { label: string; value: string };

type ContactFooterSectionProps = {
  address: string;
  phone: string;
  email: string;
  hours: Hours[];
  brand: string;
  onReserve: () => void;
};

export default function ContactFooterSection({
  address,
  phone,
  email,
  hours,
  brand,
  onReserve,
}: ContactFooterSectionProps) {
  return (
    <Section id="contact" className="bg-ivory pb-16">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <div className="luxury-track text-[11px] text-charcoal/60">Contact</div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <Reveal className="lg:col-span-5">
            <div className="rounded-[28px] bg-ivory ring-1 ring-charcoal/10 shadow-soft">
              <div className="p-8 sm:p-10">
                <div className="font-display text-[42px] leading-[0.92] text-charcoal">
                  Visit the coast.
                </div>
                <div className="mt-6 grid gap-4 text-[14px] text-charcoal/75">
                  <InfoRow icon={<MapPin className="h-4 w-4" />} label="Address" value={address} />
                  <InfoRow icon={<Phone className="h-4 w-4" />} label="Phone" value={phone} />
                  <InfoRow icon={<Mail className="h-4 w-4" />} label="Email" value={email} />
                </div>

                <div className="mt-8 border-t border-charcoal/10 pt-8">
                  <div className="luxury-track text-[11px] text-charcoal/60">
                    Opening hours
                  </div>
                  <div className="mt-4 grid gap-3">
                    {hours.map((h) => (
                      <div key={h.label} className="flex items-center justify-between gap-6 text-[13px] text-charcoal/75">
                        <div className="font-semibold tracking-[0.08em]">{h.label}</div>
                        <div>{h.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[28px] bg-charcoal shadow-soft">
              <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_20%,rgba(168,184,154,0.35)_0%,rgba(27,27,27,0.9)_55%,rgba(27,27,27,1)_100%)]" />
              <div className="absolute inset-0 vignette opacity-70" />

              <div className="relative z-10 grid h-full content-between gap-10 p-8 text-ivory sm:p-10">
                <div>
                  <div className="luxury-track text-[11px] text-ivory/70">Map</div>
                  <div className="mt-5 max-w-[520px] font-display text-[34px] leading-[0.95]">
                    A dark map treatment—quiet, precise, and cinematic.
                  </div>
                  <div className="mt-5 max-w-[560px] text-[14px] leading-relaxed text-ivory/70">
                    Replace this panel with a real map embed when you’re ready. For now, it preserves the brand mood and avoids loading heavy third-party scripts.
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[18px] bg-ivory/10 p-5 ring-1 ring-white/15 backdrop-blur-xl">
                    <div className="luxury-track text-[10px] text-ivory/70">Newsletter</div>
                    <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <input
                        placeholder="Email address"
                        className={cn(
                          "h-11 w-full rounded-full bg-ivory/10 px-5 text-[13px] text-ivory ring-1 ring-white/15",
                          "focus:outline-none focus:ring-2 focus:ring-terracotta/50",
                        )}
                      />
                      <button
                        type="button"
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-ivory px-6 text-[12px] font-semibold tracking-[0.18em] text-charcoal"
                      >
                        SUBMIT <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-3 text-[12px] text-ivory/60">
                    <div className="font-display tracking-[0.14em]">{brand}</div>
                    <div className="luxury-track">Instagram · Journal · Press</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-charcoal/10 pt-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="font-display text-[22px] tracking-[0.14em] text-charcoal">
                {brand}
              </div>
              <div className="mt-2 text-[12px] text-charcoal/60">
                Minimal luxury hospitality experience.
              </div>
            </div>
            <button
              type="button"
              onClick={onReserve}
              className="inline-flex items-center justify-center rounded-full bg-charcoal px-7 py-3 text-[12px] font-semibold tracking-[0.18em] text-ivory transition-transform duration-300 hover:-translate-y-0.5"
            >
              RESERVE NOW
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-charcoal/55">{icon}</div>
      <div>
        <div className="luxury-track text-[10px] text-charcoal/55">{label}</div>
        <div className="mt-1">{value}</div>
      </div>
    </div>
  );
}
