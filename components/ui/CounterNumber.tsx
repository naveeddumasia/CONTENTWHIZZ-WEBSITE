"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  target: string; // e.g. "140+", "3.2B", "8 Yrs", "92%"
}

function parseTarget(s: string) {
  const num = parseFloat(s.replace(/[^0-9.]/g, ""));
  const suffix = s.replace(/[0-9.]/g, "");
  return { num, suffix };
}

export default function CounterNumber({ target }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");
  const { num, suffix } = parseTarget(target);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1600;
    const start = performance.now();

    function step(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = num * eased;
      setDisplay(
        Number.isInteger(num)
          ? Math.round(current).toString()
          : current.toFixed(1)
      );
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [isInView, num]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
