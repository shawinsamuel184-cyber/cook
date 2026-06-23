import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full px-6 py-24 sm:px-10 lg:px-14 lg:py-32",
        className,
      )}
    >
      {children}
    </section>
  );
}
