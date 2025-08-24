"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Cursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Outer bubble */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] rounded-full border-2 border-blue-500 pointer-events-none"
        style={{
          width: isClicking ? 80 : 40,
          height: isClicking ? 80 : 40,
        }}
        animate={{
          x: mousePos.x - (isClicking ? 40 : 20),
          y: mousePos.y - (isClicking ? 40 : 20),
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] h-3 w-3 rounded-full bg-blue-500 pointer-events-none"
        animate={{
          x: mousePos.x - 6,
          y: mousePos.y - 6,
          scale: isClicking ? 0.7 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </>
  );
}
