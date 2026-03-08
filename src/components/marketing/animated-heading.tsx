"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: HeadingLevel;
  delay?: number;
}

const headingSizes: Record<HeadingLevel, string> = {
  h1: "text-4xl sm:text-5xl lg:text-6xl",
  h2: "text-3xl sm:text-4xl lg:text-5xl",
  h3: "text-2xl sm:text-3xl",
  h4: "text-xl sm:text-2xl",
};

export function AnimatedHeading({
  children,
  className,
  as: Tag = "h2",
  delay = 0,
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Tag ref={ref} className={cn("relative", className)}>
      <motion.span
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.25, 0.1, 0.25, 1] as const,
        }}
        className={cn(
          "block font-semibold tracking-tight",
          headingSizes[Tag]
        )}
      >
        {children}
      </motion.span>
    </Tag>
  );
}
