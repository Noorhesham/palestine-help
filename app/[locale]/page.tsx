"use client";
import Heroes from "../components/Heroes";
import Intro from "../components/Intro";
import LayeredPinning from "../components/LayeredPinning";
import Shohadaa from "../components/Shohadaa";
import ThirdScene from "../components/ThirdScene";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import VideoGallery from "../components/VideoGallery";

import Footer from "../components/Footer";
import { useLoader } from "../context/LoaderContext";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";
export const MainContainer = ".main-container";
// روح الروح
export default function Home() {
  const locale = useLocale();
  const t = useTranslations();
  const [scrolling, setScrolling] = useState(false);
  const { isLoading } = useLoader();
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [scrolling]);
  if (isLoading) {
    return (
      <section className="flex justify-center items-center w-full h-screen bg-black">
        <div className="w-80 h-80 relative">
          <Image src="/loader.gif" fill alt="loading" />
        </div>
      </section>
    );
  }
  return (
    <main className={` ${locale === "ar" ? "rtl  !text-right" : "ltr !text-left"} `}>
      <Intro setScrolling={setScrolling} />
      <div className="rest hidden  relative  min-h-screen">
        <ThirdScene />
        <Shohadaa scrolling={scrolling} videoSrc="/movingold.mp4" text={t("heroes")} />
        <Heroes />
        <LayeredPinning scrolling={scrolling} />
        <VideoGallery />
        <Footer />
      </div>
    </main>
  );
}
