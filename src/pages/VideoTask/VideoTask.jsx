import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoTask({
  gridSize = 40,
  cellSize = 60,
  rectCount = 16,
  frameDelay = 700,
}) {
  const [rects, setRects] = useState([]);

  function getRandomRects() {
    const spots = new Set();
    while (spots.size < rectCount) {
      const row = Math.floor(Math.random() * gridSize);
      const col = Math.floor(Math.random() * gridSize);
      spots.add(`${row},${col}`);
    }
    return Array.from(spots).map((s) => {
      const [row, col] = s.split(",").map(Number);
      return { row, col };
    });
  }

  useEffect(() => {
    setRects(getRandomRects());
    const interval = setInterval(() => {
      setRects(getRandomRects());
    }, frameDelay);
    return () => clearInterval(interval);
  }, [gridSize, rectCount, frameDelay]);

  const gridLines = [];
  for (let i = 1; i < gridSize; i++) {
    gridLines.push(
      // Vertical
      <div
        key={`v-${i}`}
        style={{
          position: "absolute",
          top: 0,
          left: i * cellSize,
          width: 1,
          height: gridSize * cellSize,
          background: "rgba(124, 58, 237, 0.08)",
          pointerEvents: "none",
        }}
      />,
      // Horizontal
      <div
        key={`h-${i}`}
        style={{
          position: "absolute",
          left: 0,
          top: i * cellSize,
          height: 1,
          width: gridSize * cellSize,
          background: "rgba(124, 58, 237, 0.08)",
          pointerEvents: "none",
        }}
      />
    );
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        overflow: "hidden",
        borderRadius: "0.5rem",
        boxShadow: "0 2px 12px 0 rgba(16,30,54,0.08)",
        margin: "0 auto",
        width: gridSize * cellSize,
        height: gridSize * cellSize,
        minWidth: 320,
        minHeight: 320,
      }}
    >

      {gridLines}
      <AnimatePresence>
        {rects.map(({ row, col }) => (
          <motion.div
            key={`${row}-${col}`}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            style={{
              position: "absolute",
              borderRadius: "0.25rem",
              background: "#7c3aed", 
              width: cellSize,
              height: cellSize,
              left: col * cellSize,
              top: row * cellSize,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

