"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { MainContainer } from "../[locale]/page";

const TextEffect = ({ text, className }: { text: string; className?: string }) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            scroller: MainContainer,
            start: "top bottom",
          },
        })
        .from(textRef.current?.querySelectorAll("span") as NodeListOf<HTMLSpanElement>, {
          y: 100,
          delay: 1,
          skewY: 7,
          stagger: {
            amount: 0.3,
          },
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={textRef} className="overflow-hidden h-36 flex relative">
      {text.split("<br/>").map((line, index) => (
        <div key={index} className="flex max-w-full flex-wrap gap-2 px-10 md:gap-3">
          {line.split("").map((char, index) => (
            <span
              key={index}
              className={`${className || ""} ${
                char === " " ? "inline-block w-5" : ""
              } text-main w-fit relative huge-font`}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TextEffect;
