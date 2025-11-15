"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScaleOnViewProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScaleOnView({
  children,
  delay = 0,
  duration = 0.3,
  className = "",
}: ScaleOnViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={
        isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
      }
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      style={{ willChange: isInView ? "auto" : "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}

