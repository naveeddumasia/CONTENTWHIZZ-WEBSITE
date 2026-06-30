"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function ParallaxBlobs() {
  const { scrollY } = useScroll();

  // Each blob drifts at a different fraction of scroll speed.
  // Content = 1x · blobs = 0.12–0.33x → cards visibly slide OVER the blobs.
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

      {/* top-left — slowest, sits behind hero + services */}
      <motion.div style={{ ...base, width: 680, height: 680, top: -120, left: -180,
        background: "rgba(0,0,0,0.075)", filter: "blur(90px)", y: y0 }} />

      {/* right-centre */}
      <motion.div style={{ ...base, width: 520, height: 520, top: "28vh", right: -140,
        background: "rgba(0,0,0,0.06)", filter: "blur(72px)", y: y1 }} />

      {/* centre — very slow, always partially visible */}
      <motion.div style={{ ...base, width: 440, height: 440, top: "52vh", left: "36%",
        background: "rgba(0,0,0,0.05)", filter: "blur(65px)", y: y2 }} />

      {/* bottom-left — fastest → strongest parallax feel */}
      <motion.div style={{ ...base, width: 700, height: 700, top: "80vh", left: -200,
        background: "rgba(0,0,0,0.082)", filter: "blur(100px)", y: y3 }} />

      {/* bottom-right */}
      <motion.div style={{ ...base, width: 480, height: 480, top: "110vh", right: -80,
        background: "rgba(0,0,0,0.065)", filter: "blur(70px)", y: y4 }} />

      {/* deep — only visible after significant scroll */}
      <motion.div style={{ ...base, width: 580, height: 580, top: "158vh", left: "22%",
        background: "rgba(0,0,0,0.078)", filter: "blur(85px)", y: y5 }} />

    </div>
  );
}
