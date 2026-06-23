import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type LoadingScreenProps = {
  visible: boolean;
  className?: string;
  label?: string;
};

export default function LoadingScreen({
  visible,
  className,
  label = "BALLENA",
}: LoadingScreenProps) {
  if (!visible) return null;

  return (
    <motion.div
      className={cn(
        "fixed inset-0 z-[100] grid place-items-center bg-ivory",
        className,
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative w-full max-w-[520px] px-8 text-center">
        <motion.div
          className="font-display text-[48px] leading-none text-charcoal sm:text-[64px]"
          initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {label}
        </motion.div>
        <motion.div
          className="mt-4 text-xs luxury-track text-charcoal/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Shaped by sea, grounded in land
        </motion.div>
        <div className="mt-10 h-[2px] w-full overflow-hidden bg-charcoal/10">
          <motion.div
            className="h-full bg-charcoal/60"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
          />
        </div>
      </div>
    </motion.div>
  );
}

