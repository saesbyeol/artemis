"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index?: number;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  index = 0,
  className,
}: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1] as const,
      }}
      whileHover={{
        transition: { duration: 0.2 },
      }}
      className={cn(
        "group relative bg-white p-8 transition-all duration-300",
        "hover:bg-graphite-50",
        className
      )}
    >
      {/* Icon */}
      <div className="mb-4 flex h-10 w-10 items-center justify-center bg-graphite-100">
        <Icon className="h-5 w-5 text-graphite-600" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-base font-semibold text-graphite-900">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-graphite-500">{description}</p>
    </motion.div>
  );
}
