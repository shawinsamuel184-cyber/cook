import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  blur?: number;
  y?: number;
} & MotionProps;

export default function Reveal({
  children,
  className,
  delay = 0,
  blur = 10,
  y = 22,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
