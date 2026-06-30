"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function ParallaxBlobs() {
  const { scrollY } = useScroll();

  const y0 = useTransform(scrollY, [0, 6000], [0,  -780]);
  const y1 = useTransform(scrollY, [0, 6000], [0, -1380]);
  const y2 = useTransform(scrollY, [0, 6000], [0,  -680]);
  const y3 = useTransform(scrollY, [0, 6000], [0, -1980]);
  const y4 = useTransform(scrollY, [0, 6000], [0, -1080]);
  const y5 = useTransform(scrollY, [0, 6000], [0, -1680]);

  const base: React.CSSProperties = {
    position: "absolute",
    borderRadius: "50%",
    willChange: "transform",
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }} aria-hidden="true">
      <motion.div style={{ ...base, width: 700, height: 700, top: -150, left: -200,
        background: "rgba(255,255,255,0.028)", filter: "blur(100px)", y: y0 }} />
      <motion.div style={{ ...base, width: 520, height: 520, top: "28vh", right: -150,
        background: "rgba(255,255,255,0.022)", filter: "blur(80px)", y: y1 }} />
      <motion.div style={{ ...base, width: 440, height: 440, top: "52vh", left: "36%",
        background: "rgba(255,255,255,0.018)", filter: "blur(70px)", y: y2 }} />
      <motion.div style={{ ...base, width: 700, height: 700, top: "80vh", left: -220,
        background: "rgba(255,255,255,0.030)", filter: "blur(110px)", y: y3 }} />
      <motion.div style={{ ...base, width: 480, height: 480, top: "110vh", right: -90,
        background: "rgba(255,255,255,0.024)", filter: "blur(85px)", y: y4 }} />
      <motion.div style={{ ...base, width: 580, height: 580, top: "158vh", left: "22%",
        background: "rgba(255,255,255,0.026)", filter: "blur(95px)", y: y5 }} />
    </div>
  );
}
