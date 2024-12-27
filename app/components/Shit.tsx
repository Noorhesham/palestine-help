"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedText = () => {
  const numRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Random appearance of numbers
    if (numRef.current) {
      gsap.to(numRef.current.querySelectorAll(".num"), {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: {
          amount: 0.5,
          from: "random", // Stagger randomly
        },
        ease: "power3.out",
      });
    }

    // Stroke and image mask animation
    if (textRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(
        textRef.current.querySelectorAll(".text-normal"),
        { clipPath: "inset(0 0 100% 0)", opacity: 0 },
        { clipPath: "inset(0 0 0% 0)", opacity: 1, duration: 1.5, ease: "power3.out" }
      )
        .fromTo(
          textRef.current.querySelectorAll(".text-stroke"),
          { clipPath: "inset(100% 0 0 0)", opacity: 0 },
          { clipPath: "inset(0% 0 0 0)", opacity: 1, duration: 1.5, ease: "power3.out" },
          "-=1.2"
        )
        .fromTo(
          textRef.current.querySelectorAll(".text-image"),
          { clipPath: "inset(100% 0 0 0)", opacity: 0 },
          { clipPath: "inset(0% 0 0 0)", opacity: 1, duration: 1.5, ease: "power3.out" },
          "-=1.2"
        );
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10">
      {/* Random appearing numbers */}
      <div ref={numRef} className="flex gap-2 text-red-800 text-7xl mt-5">
        {"1983".split("").map((char, index) => (
          <span key={index} className="num opacity-0 translate-y-10">
            {char}
          </span>
        ))}
      </div>

      {/* Text with stroke and image mask */}
      <div ref={textRef} className="relative w-full text-center">
        {/* Normal text */}
        <span className="text-normal text-6xl font-bold absolute inset-0 text-black">Palestine</span>
        {/* Stroke text */}
        <span
          className="text-stroke text-6xl font-bold absolute inset-0"
          style={{
            WebkitTextStroke: "2px white",
            WebkitTextFillColor: "transparent",
          }}
        >
          Palestine
        </span>
        {/* Image-text */}
        <span
          className="text-image text-6xl font-bold absolute inset-0"
          style={{
            background: "url(/masq.jpg)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Palestine
        </span>
      </div>
    </div>
  );
};

export default AnimatedText;
