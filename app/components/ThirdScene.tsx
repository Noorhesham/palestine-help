"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import { MainContainer } from "../[locale]/page";

const ThirdScene = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        scroller: MainContainer,
        trigger: ".third",
        pin: true,
        start: "top top",
        end: "+=1800",
        scrub: true,
        invalidateOnRefresh: true,
        animation: gsap
          .timeline()
          .to(".cloud", { opacity: 0 })
          .to(".soldier", { x: 100, rotate: 20 }, "<")
          .fromTo(".soldier2", { x: -400, rotate: 20 }, { x: -100, rotate: 180 }, "<")
          .to(".kid", { scale: 0.7 }, "<")
          .to(".video-car", { scale: 1 }),
      });
      ScrollTrigger.create({
        scroller: MainContainer,
        trigger: ".second",
        start: "10% top",
        end: "+=800",
        scrub: true,
        animation: gsap
          .timeline()
          .to(".nakba", { yPercent: -100 })
          .to(".nakba3", { opacity: 0, yPercent: -100 })
          .to(".nakba2", { opacity: 0, xPercent: -100 })
          .to(".palestine-video", { scale: 1.4 }),
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className=" h-screen  relative w-full third ">
      <div className=" z-30 cloud absolute -left-40 -top-44 w-full h-full">
        <img src="/smoke.png" alt="nakba3" />
      </div>

      <div className=" z-30 cloud absolute right-1/2 lg:right-[-50%] -top-44 w-full h-full">
        <img src="/smoke.png" alt="nakba3" />
      </div>
      <div className=" z-30 cloud absolute right-1/2 lg:right-[-50%] -bottom-52 w-full h-full">
        <img src="/smoke.png" alt="nakba3" />
      </div>
      <div className=" z-30 cloud absolute  -left-40 -bottom-52 w-full h-full">
        <img src="/smoke.png" alt="nakba3" />
      </div>
      <div className=" absolute soldier z-20 rotate-12 top-1/2 left-20 lg:left-44 w-80">
        <img src="/soldiers.png" className="" />
      </div>
      <div className="absolute soldier z-20 left-20 lg:left-44 w-80">
        <img src="/soldiers.png" className=" " />
      </div>
      <div className="absolute soldier2 z-20 right-20 lg:right-44 rotate-180 w-80">
        <img src="/soldiers.png" className=" " />
      </div>
      <div className="absolute soldier2 z-20 right-20 lg:right-44 bottom-40 rotate-180 w-80">
        <img src="/soldiers.png" className=" " />
      </div>
      <div className=" z-30 w-44  kid absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2">
        <img src="/kid.png" alt="nakba3" />
      </div>
      <video
        src="/car.mp4"
        loop
        muted
        autoPlay
        className="video-car  scale-125 absolute inset-0 w-full h-full object-cover"
      ></video>
    </div>
  );
};

export default ThirdScene;
