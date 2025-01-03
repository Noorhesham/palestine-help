"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import { MainContainer } from "../[locale]/page";

const Shohadaa = ({ text, videoSrc, scrolling }: { text: string; videoSrc: string; scrolling?: boolean }) => {
  useEffect(() => {
    if (!scrolling) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".intro-hero",
        scroller: MainContainer,
        start: `top top`,
        end: "+=1000",
        pin: true,
        anticipatePin: 1,

        pinSpacing: false,
        scrub: true,
        invalidateOnRefresh: true,
        animation: gsap
          .timeline()
          .fromTo(".title2", { scale: 1 }, { y: 100, scale: 3.8, opacity: 1 })
          .to(".title2", { opacity: 0 }),
      });
    });

    return () => ctx.revert();
  }, [scrolling]);
  return (
    <section className="intro-hero w-full relative flex items-center justify-center h-screen bg-black">
      {/* Video */}
      <div className=" w-full absolute h-full">
        <video src={videoSrc} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-10"></video>
      </div>

      {/* Text with video visible only through it */}
      <div className="w-full h-full bg-black  z-10 mix-blend-multiply    absolute inset-0 flex  items-center justify-center">
        {" "}
        <h2
          className="text-[11vw] text-white title2 text-center  z-50  font-bold absolute top-20 left-[55%] -translate-x-1/2  text-transparent"
          style={{
            mixBlendMode: "normal", // Ensure no blending affects the result
          }}
        >
          {text}
        </h2>
      </div>
    </section>
  );
};

export default Shohadaa;
