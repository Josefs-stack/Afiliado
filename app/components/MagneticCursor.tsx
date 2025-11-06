"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMagnetic } from "../context/MagnetiContext";

const MagneticCursor = () => {
  const { isMagnetic, magneticColor } = useMagnetic();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        backgroundColor: magneticColor,
      }}
      animate={{
        scale: isMagnetic ? 6 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      className="fixed top-0 left-0 w-5 h-5 rounded-full mix-blend-difference pointer-events-none z-[9999]"
    />
  );
};

export default MagneticCursor;
