import React, { useEffect } from "react";
import Label from "./Label";
import ParagraphWrite from "./ParagraphWrite";
import Image from "next/image";
import gsap from "gsap";
import { useTranslations } from "next-intl";

const NoGiveUp = ({
  history,
  assignAnimations,
}: {
  history: { title: string; paragraph: string }[];
  assignAnimations: any;
}) => {
  const t = useTranslations();
  useEffect(() => {
    if (!assignAnimations) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".pl", //
            scroller: ".main-container",
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        })
        .from(".free", { yPercent: 50 })
        .from(".giveup", { xPercent: 100 }, "<")
        .from(".black-overlay", { width: 0 })
        .to(
          ".title4 span",
          {
            stagger: { amount: 0.4 },
            opacity: 1,
          },
          "<"
        )
        .to(".paragraph4 span", { opacity: 1, stagger: { amount: 0.4 } }, "<");
    });
    return () => ctx.revert();
  }, [assignAnimations]);
  return (
    <>
      <div className="  bottom-0 lg:block hidden absolute right-0 max-w-lg text-gray-800 font-semibold yellow bg-yellow-200 py-4 px-8">
        {history[5].paragraph}
      </div>
      <div className=" h-full flex w-full lg:w-1/2 flex-col items-center black-overlay  bg-black/40">
        <div className="flex flex-col z-20 items-center my-auto">
          <Label
            backgroundColor=" label-4  bg-transparent"
            className="!text-[7vw] title4  self-center"
            title={history[4].title}
          />
          <ParagraphWrite
            className="  relative paragraph4  max-w-xl p-2 !text-center mx-auto mt-4"
            height="h-12"
            text={history[4].paragraph}
          />
        </div>
      </div>
      <span className="lg:block hidden  text-slate-800 absolute z-10 top-44 right-20 font-extrabold text-7xl giveup -rotate-90">
        {t("giveup")}
      </span>
      <div className=" free w-full h-full    absolute -bottom-14">
        <Image src={"/free.png"} fill className=" object-contain" alt="grave" />
      </div>
    </>
  );
};

export default NoGiveUp;
