import { useMemo, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { cn } from "@/lib/utils";

type ReservationSectionProps = {
  onSubmitted?: () => void;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
};

export default function ReservationSection({ onSubmitted }: ReservationSectionProps) {
  const [state, setState] = useState<FormState>(initialState);
  const [sent, setSent] = useState(false);

  const canSubmit = useMemo(() => {
    return (
      state.name.trim().length > 1 &&
      state.email.includes("@") &&
      state.phone.trim().length > 6 &&
      Boolean(state.date) &&
      Boolean(state.time) &&
      Number(state.guests) > 0
    );
  }, [state]);

  const onChange = (key: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setState((s) => ({ ...s, [key]: e.target.value }));
    setSent(false);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSent(true);
    onSubmitted?.();
  };

  return (
    <Section id="reservations" className="bg-sage text-charcoal">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="luxury-track text-[11px] text-charcoal/70">
                Reservations
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-[44px] leading-[0.92] sm:text-[58px]">
                Reserve an evening by the tide.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-[520px] text-[15px] leading-relaxed text-charcoal/80">
                Request a table and we’ll confirm by email. For private dining or events, include a note after submission and our team will follow up.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <form
                onSubmit={onSubmit}
                className="relative overflow-hidden rounded-[30px] bg-ivory/65 p-8 shadow-soft ring-1 ring-charcoal/15 backdrop-blur-xl sm:p-10"
              >
                <div className="pointer-events-none absolute -right-20 -top-24 h-[340px] w-[340px] rounded-full bg-terracotta/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full bg-charcoal/10 blur-3xl" />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name">
                    <input
                      value={state.name}
                      onChange={onChange("name")}
                      className={inputCls}
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      value={state.email}
                      onChange={onChange("email")}
                      className={inputCls}
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </Field>
                  <Field label="Phone">
                    <input
                      value={state.phone}
                      onChange={onChange("phone")}
                      className={inputCls}
                      placeholder="+1 (555) 000-0000"
                      autoComplete="tel"
                    />
                  </Field>
                  <Field label="Guests">
                    <select value={state.guests} onChange={onChange("guests")} className={inputCls}>
                      {Array.from({ length: 10 }).map((_, i) => (
                        <option key={i + 1} value={String(i + 1)}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Date">
                    <input value={state.date} onChange={onChange("date")} className={inputCls} type="date" />
                  </Field>
                  <Field label="Time">
                    <input value={state.time} onChange={onChange("time")} className={inputCls} type="time" />
                  </Field>
                </div>

                <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className={cn(
                      "inline-flex items-center justify-center rounded-full bg-charcoal px-7 py-3 text-[12px] font-semibold tracking-[0.18em] text-ivory",
                      "transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0",
                    )}
                  >
                    RESERVE EXPERIENCE
                  </button>

                  <div className="text-[12px] text-charcoal/70">
                    {sent
                      ? "Request received. We’ll confirm shortly."
                      : "Complete the details to request a table."}
                  </div>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-[11px] font-semibold tracking-[0.16em] text-charcoal/70">
        {label.toUpperCase()}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  "h-11 w-full rounded-xl bg-ivory px-4 text-[14px] text-charcoal ring-1 ring-charcoal/15 transition-shadow focus:outline-none focus:ring-2 focus:ring-terracotta/50";
