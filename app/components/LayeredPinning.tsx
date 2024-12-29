"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLocale, useTranslations } from "next-intl";
import Donate from "./Donate";
import News from "./News";
import WhatIsPalestine from "./WhatIsPalestine";
import Belfor from "./Belfor";
import Nakba from "./Nakba";
import Israel from "./Israel";
import Kods from "./Kods";
import NoGiveUp from "./NoGiveUp";
import FamilyInNeed from "./FamilyInNeed";

const LayeredPinning = ({ scrolling }: { scrolling?: boolean }) => {
  const locale = useLocale();
  const t = useTranslations("history");
  const [assignAnimations, setAssignAnimations] = React.useState(false);
  const history = [
    {
      title: t("0.title"),
      paragraph: t("0.paragraph"),
    },
    {
      title: t("1.title"),
      paragraph: t("1.paragraph"),
    },
    {
      title: t("2.title"),
      paragraph: t("2.paragraph"),
    },
    {
      title: t("3.title"),
      paragraph: t("3.paragraph"),
    },
    {
      title: t("4.title"),
      paragraph: t("4.paragraph"),
    },
    {
      title: t("5.title"),
      paragraph: t("5.paragraph"),
    },
    {
      title: t("6.title"),
      paragraph: t("6.paragraph"),
    },
    {
      title: t("7.title"),
      paragraph: t("7.paragraph"),
    },
  ];

  useEffect(() => {
    if (!scrolling) return;
    // choosing all the panels that will be pinned and animated
    const panels = gsap.utils.toArray(".p");
    //creating a scroll triggerfor the history title
    ScrollTrigger.create({
      trigger: ".panel",
      scroller: ".main-container",
      pin: true,
      anticipatePin: 1,
      end: `+=800`,
      scrub: true,
      animation: gsap.timeline().fromTo(".title3", { scale: 1 }, { y: 100, scale: 4.4, opacity: 1 }),
    });

    const animationTl = gsap
      .timeline()
      .from(".char", { stagger: { amount: 0.1, from: "random" }, opacity: 0 })
      .from(".text-bg", { width: 0, stagger: { amount: 0.1, from: "random" }, ease: "none" }, "<")
      .to(".paragraph3", { opacity: 1 }, "<")
      .to(".paragraph3 span", { y: 0, stagger: { amount: 0.1, from: "random" }, opacity: 1, ease: "none" }, "<");

    panels.forEach((panel: any, index) => {
      index === 0
        ? ScrollTrigger.create({
            trigger: panel,
            scroller: ".main-container",
            pin: true,
            anticipatePin: 1,

            start: "top top",
            end: "+=800",
            animation: animationTl,
            toggleActions: "play none none reverse",
          })
        : ScrollTrigger.create({
            trigger: panel,
            scroller: ".main-container",
            pin: true,
            anticipatePin: 1,

            start: "top top",
            end: "+=800",
          });
    });
    setAssignAnimations(true);
    ScrollTrigger.refresh();
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".pl",
          scroller: ".main-container",
          pin: true,
          anticipatePin: 1,

          scrub: true,
          end: "+=4900",
          start: "top top",
        },
      })
      .to(".giveup", { y: -400 })
      .to(".yellow", { y: -100 }, "<")
      .from(".p2", { yPercent: 100 })
      .from(".p3", { xPercent: -100 })
      .from(".p4", { xPercent: 100 })
      .from(".p5", { yPercent: window.innerWidth < 768 ? 150 : 100 });
  }, [scrolling]);
  return (
    <div>
      <div className="description panel relative h-screen blue">
        <video src="/history.mp4" loop autoPlay muted className="absolute inset-0 w-full h-full object-cover"></video>
        <div className="w-full h-full bg-black  z-10 mix-blend-multiply    absolute inset-0 flex  items-center justify-center">
          {" "}
          <h2
            className="text-[7vw] title3 text-white title2 text-center  z-50  font-bold absolute top-20 left-[50%] -translate-x-1/2  text-transparent"
            style={{
              mixBlendMode: "normal",
            }}
          >
            WHAT IS THE HISTORY !?
          </h2>
        </div>
      </div>

      <WhatIsPalestine assignAnimations={assignAnimations} history={history[0]} />
      <Belfor assignAnimations={assignAnimations} locale={locale} />
      <Nakba assignAnimations={assignAnimations} history={history[2]} />
      <Israel assignAnimations={assignAnimations} history={history[3]} />
      <section className=" h-screen pl  items-center justify-center bg-[#eee9d7] relative ">
        <NoGiveUp assignAnimations={assignAnimations} history={history} />
        <Kods history={history[6]} />
        <News />
        <Donate />
        <FamilyInNeed />
      </section>
    </div>
  );
};

export default LayeredPinning;
