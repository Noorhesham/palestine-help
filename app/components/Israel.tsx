import Image from "next/image";
import React, { useEffect } from "react";
import Label from "./Label";
import ParagraphWrite from "./ParagraphWrite";
import gsap from "gsap";

const Israel = ({
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
            trigger: ".israel-shit",
            scroller: ".main-container",
            start: "top 30%",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        })
        .fromTo(".israel span", { opacity: 0 }, { opacity: 1, stagger: { amount: 0.1 } })
        .fromTo(".skulls", { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: "none" })
        .fromTo(".city", { scale: 1.3 }, { scale: 1, y: -10 }, "<");
    });
    return () => ctx.revert();
  }, [assignAnimations]);
  return (
    <section className=" h-screen p flex israel-shit items-center justify-center relative">
      <div className=" w-full h-44 skulls z-20   absolute bottom-0">
        <Image src={"/grave.png"} fill className=" object-cover" alt="grave" />
      </div>
      <div className=" flex items-center flex-col z-30 gap-4 absolute w-full left-1/2 -translate-x-1/2">
        <Label
          className={"   !text-blue-600"}
          backgroundColor=" bg-transparent"
          title="حضارة  اسرائيل مبنية علي الدماء"
        />
        <ParagraphWrite
          className="israel  relative z-30 max-w-3xl bg-black/40 p-2 !text-center mx-auto mt-4"
          height="h-12"
          text={paragraph}
        />
      </div>
      <div className=" w-full city h-full absolute inset-0">
        <Image src={"/building.png"} fill className=" object-cover" alt="grave" />
      </div>
    </section>
  );
};

export default Israel;
