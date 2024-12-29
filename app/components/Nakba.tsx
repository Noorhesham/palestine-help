import Image from "next/image";
import React, { useEffect } from "react";
import Label from "./Label";
import ParagraphWrite from "./ParagraphWrite";
import gsap from "gsap";

const Nakba = ({
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
            trigger: ".nakba-section",
            scroller: ".main-container",
            start: "top 30%",
            toggleActions: "play none none reverse",
          },
        })
        .from(".nakbaTitle", { skewX: 10, opacity: 0 })
        .fromTo(
          ".nakbapara span",
          { opacity: 0, y: -100 },
          { stagger: { amount: 0.2 }, opacity: 1, y: 0, ease: "none" }
        );
    });
    return () => ctx.revert();
  }, [assignAnimations]);
  return (
    <section className=" h-screen  lg:flex-row flex-col nakba-section p flex items-center justify-center  relative ">
      <div className=" absolute inset-0 w-full h-full">
        <Image src={"/296045.jpg"} alt="section-1" fill className=" object-cover w-full h-full grayscale	" />
      </div>
      <div className="film-grain  absolute inset-0 w-full h-full  opacity-50">
        <Image src={"/film-grain.gif"} fill alt="grain-old-film" />
      </div>
      <div className=" w-96 h-[80%] relative rounded-xl overflow-hidden grayscale shadow-lg">
        <Image src={"/destruction1.webp"} alt="section-1" fill className=" object-cover w-full h-full" />{" "}
      </div>
      <div>
        <Label backgroundColor=" bg-red-700" className="nakbaTitle" title={title} />
        <ParagraphWrite
          className="nakbapara  relative z-30 max-w-md !text-center mx-auto mt-4"
          height="h-12"
          text={paragraph}
        />
      </div>
    </section>
  );
};

export default Nakba;
