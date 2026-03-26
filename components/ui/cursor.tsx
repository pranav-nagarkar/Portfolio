"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  if (isTouchDevice) return null; // ✅ NOW it's valid

  let mouseX = 0,
    mouseY = 0;
  let ringX = 0,
    ringY = 0;

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.left = ringX + "px";
        ringRef.current.style.top = ringY + "px";
      }

      requestAnimationFrame(animateRing);
    };

    document.addEventListener("mousemove", moveCursor);
    animateRing();

    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={ringRef}
      className="fixed top-0 left-0 w-9 h-9 border border-foreground rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 opacity-50"
    />
  );
}
