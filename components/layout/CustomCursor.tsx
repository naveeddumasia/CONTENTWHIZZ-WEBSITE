"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });
  const hoverRef = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      hoverRef.current = !!el.closest("a,button,[role=button],input,textarea,select,label");
      if (dotRef.current) dotRef.current.dataset.hover = String(hoverRef.current);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, [x, y]);

  return (
    <motion.div
      ref={dotRef}
      className="fixed top-0 left-0 z-[99999] pointer-events-none"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        className="rounded-full"
        style={{
          width: 12, height: 12,
          background: "linear-gradient(135deg,#6C47FF,#00C2FF)",
          mixBlendMode: "multiply",
        }}
        whileHover={{ scale: 3.5 }}
        data-hover-scale
      />
    </motion.div>
  );
}
