import { cn } from "@/lib/utils";
import { useScrollProgress } from "@/hooks/useScrollProgress";

type ScrollProgressProps = {
  className?: string;
};

export default function ScrollProgress({ className }: ScrollProgressProps) {
  const progress = useScrollProgress();

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-[80] h-[2px] w-full bg-transparent",
        className,
      )}
      aria-hidden="true"
    >
      <div
        className="h-full bg-charcoal/70"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

