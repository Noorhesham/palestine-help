import Image from "next/image";
import React from "react";
import ParagraphWrite from "./ParagraphWrite";
import { useLocale } from "next-intl";
import { useLoader } from "../context/LoaderContext";

const SecondScene = ({ text, text2 }: { text: string; text2: string }) => {
  const locale = useLocale();
  const { setLoadedVideos } = useLoader();

  return (
    <div className=" relative z-20 overflow-hidden   h-screen second">
      <video
        onLoadedData={() => {
          console.log("loaded");
          setLoadedVideos((prev) => prev + 1);
        }} preload="auto"
        src="/palestine.mp4"
        muted
        className=" scale-125 opacity-0 palestine-video absolute inset-0 w-full h-full object-cover"
      ></video>
      <div className="film-grain  absolute inset-0 w-full h-full opacity-0">
        <Image src={"/film-grain.gif"} fill alt="grain-old-film" />
      </div>
      <div
        className="flex w-full  gap-10 md:flex-row flex-col  px-5 lg:px-20 justify-between opacity-0   lg:py-10 left-10
       lg:left-44 top-20 intro2"
      >
        <div className=" flex-col flex w-full lg:w-[70%] h-full lg:pt-0 pt-20   flex-grow relative">
          {text2.split("<br/>").map((line, index) => (
            <div key={index} className="overflow-hidden h-12 md:h-16 lg:h-24 flex max-w-full  gap-2 lg:px-10">
              {locale === "ar" ? (
                <span className=" text-main w-fit relative  text-[5.5vw]">{line}</span>
              ) : (
                line.split("").map((char, index) => (
                  <span
                    key={index}
                    className={` ${char === " " ? "inline-block w-5" : ""} text-main w-fit relative  text-[5.5vw]`}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))
              )}
            </div>
          ))}
          <span className=" text-7xl mt-5 flex gap-2 text-red-800  ">
            {"1983".split("").map((char, index) => (
              <span className=" opacity-0 num" key={index}>
                {char}
              </span>
            ))}
          </span>
        </div>
        <div
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)" }}
          className="nakba w-full rounded-2xl overflow-hidden h-44 lg:h-72   relative"
        >
          <Image fill src="/nakba.jpg" className=" object-cover" alt="bleed" />
        </div>
      </div>

      <div className="flex px-5  gap-4 lg:gap-10 ml-3 lg:flex-row flex-col lg:ml-32 mt-4 lg:mt-10 relative w-full h-full">
        <ParagraphWrite className="  paragraph2  relative z-30 max-w-md !text-left" text={text} />
        <div className=" flex lg:flex-row flex-col gap-2">
          {" "}
          <div className="nakba2 translate-x-[-200px]  lg:mt-20 w-full  lg:w-96 opacity-0 rounded-2xl overflow-hidden relative  h-72   ">
            <Image src="/nakba.jpg" className=" object-cover" fill alt="bleed" />
          </div>
          <div className="nakba3 relative translate-y-[100px] rotate-3 rounded-2xl overflow-hidden  w-52 lg:w-96  opacity-0   lg:block hidden left-20    h-72   ">
            <Image src="/nakba.jpg" className=" object-cover" fill alt="bleed" />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default SecondScene;
