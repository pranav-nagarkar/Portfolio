"use client";

import { useEffect, useRef } from "react";
export function Cursor() {
  const isTouchDevice = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
  
  if (isTouchDevice) return null;

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  let mouseX = 0,
    mouseY = 0;
  let ringX = 0,
    ringY = 0;

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = mouseX + "px";
        cursorRef.current.style.top = mouseY + "px";
      }
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

    const hoverables = document.querySelectorAll("a, button");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (cursorRef.current)
          cursorRef.current.style.transform =
            "translate(-50%, -50%) scale(2.5)";
        if (ringRef.current) ringRef.current.style.opacity = "0";
      });
      el.addEventListener("mouseleave", () => {
        if (cursorRef.current)
          cursorRef.current.style.transform = "translate(-50%, -50%) scale(1)";
        if (ringRef.current) ringRef.current.style.opacity = "0.5";
      });
    });

    // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-foreground rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-150"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 border border-foreground rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 opacity-50"
      />
    </>
  );
