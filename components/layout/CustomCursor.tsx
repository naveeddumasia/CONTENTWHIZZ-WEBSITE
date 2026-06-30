"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springX = useSpring(dotX, { stiffness: 500, damping: 40 });
  const springY = useSpring(dotY, { stiffness: 500, damping: 40 });

  const isHovering = useRef(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (
        el.closest("a, button, [role=button], input, textarea, select, label, [data-cursor-hover]")
      ) {
        isHovering.current = true;
        cursorRef.current?.setAttribute("data-hover", "true");
      } else {
        isHovering.current = false;
        cursorRef.current?.removeAttribute("data-hover");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [dotX, dotY]);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[99999] pointer-events-none mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        className="rounded-full bg-white"
        animate={{ width: isHovering.current ? 40 : 12, height: isHovering.current ? 40 : 12 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ width: 12, height: 12 }}
      />
    </motion.div>
  );
}
