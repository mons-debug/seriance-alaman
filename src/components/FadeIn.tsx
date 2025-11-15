"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.4,
  className = "",
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      style={{ willChange: isInView ? "auto" : "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}

