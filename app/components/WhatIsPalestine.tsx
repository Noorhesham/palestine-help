import React, { useEffect } from "react";
import ParagraphWrite from "./ParagraphWrite";
import Label from "./Label";
import Image from "next/image";
import gsap from "gsap";

const WhatIsPalestine = ({
  history: { paragraph, title },
  assignAnimations,
}: {
  history: { paragraph: string; title: string };
  assignAnimations: any;
}) => {
  useEffect(() => {
    if (!assignAnimations) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".p",
            scroller: ".main-container",
            start: "top 70%",
          },
        })
        .fromTo(
          ".img1container",
          { scale: 1.5, opacity: 0.4, rotate: 10 },
          {
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 0.4,
          }
        );
    });
    return () => ctx.revert();
  }, [assignAnimations]);
  return (
    <section className=" h-screen p flex items-center justify-center relative ">
      <div className="img1container absolute inset-0 w-full  h-full  ">
        <Image alt="section-1" src="/night.jpg" fill className=" object-cover w-full h-full" />
      </div>
      <div className=" relative z-20">
        <Label title={title} />
        <ParagraphWrite className="  paragraph3  relative z-30 max-w-md !text-center mx-auto mt-4" text={paragraph} />
      </div>
    </section>
  );
};

export default WhatIsPalestine;
