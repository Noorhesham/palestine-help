"use client";
import { getTranslations } from "next-intl/server";
import Maps from "../components/GoogeleMaps";
import Heroes from "../components/Heroes";
import Intro from "../components/Intro";
import LayeredPinning from "../components/LayeredPinning";
import PalestineMap from "../components/PalestineMap";
import Shohadaa from "../components/Shohadaa";
import ThirdScene from "../components/ThirdScene";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
export const MainContainer = ".main-container";
// روح الروح
export default function Home() {
  const locale = useLocale();
  const t = useTranslations();
  const [scrolling, setScrolling] = useState(false);
  console.log(scrolling);
  return (
    <main className={` ${locale === "ar" ? "rtl  !text-right" : "ltr !text-left"} `}>
      <Intro setScrolling={setScrolling} />

      <div className="rest  relative hidden min-h-screen">
        <ThirdScene />
        <Shohadaa scrolling={scrolling} videoSrc="/movingold.mp4" text={t("heroes")} />
        <Heroes />
        <LayeredPinning scrolling={scrolling} />
      </div>

      {/* <PalestineMap/> */}
    </main>
  );
}
