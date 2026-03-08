"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface GridBackgroundProps {
  className?: string;
  /** Number of columns in the grid */
  columns?: number;
  /** Number of rows in the grid */
  rows?: number;
}

export function GridBackground({
  className,
  columns = 12,
  rows = 8,
}: GridBackgroundProps) {
  const reduced = useReducedMotion();

  const cellWidth = 100 / columns;
  const cellHeight = 100 / rows;

  // Generate intersection points for glow dots
  const intersections: { x: number; y: number; delay: number }[] = [];
  for (let row = 0; row <= rows; row++) {
    for (let col = 0; col <= columns; col++) {
      // Only render a subset of dots to keep it subtle
      if ((row + col) % 3 === 0) {
        intersections.push({
          x: col * cellWidth,
          y: row * cellHeight,
          delay: (row * columns + col) * 0.15,
        });
      }
    }
  }

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className ?? ""}`}
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        {/* Vertical grid lines */}
        {Array.from({ length: columns + 1 }, (_, i) => (
          <line
            key={`v-${i}`}
            x1={i * cellWidth}
            y1={0}
            x2={i * cellWidth}
            y2={100}
            stroke="currentColor"
            strokeWidth={0.08}
            className="text-graphite-300/20"
          />
        ))}

        {/* Horizontal grid lines */}
        {Array.from({ length: rows + 1 }, (_, i) => (
          <line
            key={`h-${i}`}
            x1={0}
            y1={i * cellHeight}
            x2={100}
            y2={i * cellHeight}
            stroke="currentColor"
            strokeWidth={0.08}
            className="text-graphite-300/20"
          />
        ))}

        {/* Glow intersection points */}
        {intersections.map((point, i) =>
          reduced ? (
            <circle
              key={i}
              cx={point.x}
              cy={point.y}
              r={0.15}
              className="fill-graphite-400/15"
            />
          ) : (
            <motion.circle
              key={i}
              cx={point.x}
              cy={point.y}
              r={0.15}
              className="fill-graphite-400/15"
              initial={{ opacity: 0.1 }}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                r: [0.12, 0.2, 0.12],
              }}
              transition={{
                duration: 4,
                delay: point.delay % 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )
        )}
      </svg>

      {/* Subtle radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />
    </div>
  );
}
