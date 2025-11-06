"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMagnetic } from "../context/MagnetiContext";

export default function MagneticWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 10 });
  const springY = useSpring(y, { stiffness: 120, damping: 10 });

  const { setIsMagnetic, setMagneticColor } = useMagnetic();

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    x.set(offsetX * 0.3); // força do magnetismo → ajuste este valor
    y.set(offsetY * 0.3);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseEnter={() => {
        setIsMagnetic(true);
        setMagneticColor("#ffffffff");
      }}
      onMouseLeave={() => {
        setIsMagnetic(false);
        setMagneticColor("#ffffffff");
        x.set(0);
        y.set(0);
      }}
      onMouseMove={handleMove}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
