import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/useScrollDirection";

type NavItem = { label: string; href: string };

type NavigationProps = {
  brand: string;
  items: NavItem[];
  onNavigate: (href: string) => void;
  onReserve: () => void;
};

export default function Navigation({
  brand,
  items,
  onNavigate,
  onReserve,
}: NavigationProps) {
  const { direction, scrolled } = useScrollDirection();
  const [open, setOpen] = useState(false);

  const containerCls = useMemo(() => {
    const base =
      "fixed left-0 top-0 z-[70] w-full px-6 py-5 sm:px-10 lg:px-14";
    const shell = scrolled
      ? "bg-ivory/70 backdrop-blur-xl hairline"
      : "bg-transparent";
    const hidden = direction === "down" && scrolled && !open ? "-translate-y-full" : "translate-y-0";
    return cn(base, shell, "transition-transform duration-500 ease-out", hidden);
  }, [direction, open, scrolled]);

  const onClick = (href: string) => {
    setOpen(false);
    onNavigate(href);
  };

  return (
    <>
      <motion.header
        className={containerCls}
        initial={{ opacity: 0, filter: "blur(12px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto grid max-w-[1240px] grid-cols-3 items-center">
          <nav className="hidden items-center gap-6 text-[13px] font-medium tracking-[0.16em] text-charcoal/80 lg:flex">
            {items.slice(0, 3).map((i) => (
              <button
                key={i.href}
                type="button"
                onClick={() => onClick(i.href)}
                className="transition-colors hover:text-charcoal"
              >
                {i.label.toUpperCase()}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => onClick("#top")}
            className="justify-self-center font-display text-[22px] tracking-[0.12em] text-charcoal"
            aria-label={brand}
          >
            {brand}
          </button>

          <div className="flex items-center justify-end gap-3">
            <nav className="hidden items-center gap-6 text-[13px] font-medium tracking-[0.16em] text-charcoal/80 lg:flex">
              {items.slice(3).map((i) => (
                <button
                  key={i.href}
                  type="button"
                  onClick={() => onClick(i.href)}
                  className="transition-colors hover:text-charcoal"
                >
                  {i.label.toUpperCase()}
                </button>
              ))}
            </nav>

            <button
              type="button"
              onClick={onReserve}
              className="hidden rounded-full bg-charcoal px-5 py-2 text-[12px] font-semibold tracking-[0.18em] text-ivory transition-transform duration-300 hover:-translate-y-0.5 lg:inline-flex"
            >
              RESERVATIONS
            </button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ivory/60 backdrop-blur-xl hairline lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 text-charcoal" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[75] bg-charcoal/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute right-4 top-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ivory/10 ring-1 ring-white/15"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-ivory" />
              </button>
            </motion.div>

            <motion.div
              className="mx-auto flex h-full max-w-[640px] flex-col justify-center px-8"
              initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 18, filter: "blur(12px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="font-display text-[40px] leading-[0.95] text-ivory">
                {brand}
              </div>
              <div className="mt-2 text-xs luxury-track text-ivory/70">
                Coastal dining, editorial calm
              </div>

              <div className="mt-10 grid gap-4">
                {items.map((i) => (
                  <button
                    key={i.href}
                    type="button"
                    onClick={() => onClick(i.href)}
                    className="text-left font-display text-[28px] text-ivory transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    {i.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onReserve();
                }}
                className="mt-12 inline-flex items-center justify-center rounded-full bg-ivory px-6 py-3 text-[12px] font-semibold tracking-[0.18em] text-charcoal"
              >
                RESERVE A TABLE
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

