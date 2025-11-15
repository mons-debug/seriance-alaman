"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        (ref.current as HTMLSpanElement).textContent =
          Math.floor(latest).toLocaleString() + suffix;
      }
    });

    return () => unsubscribe();
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

