"use client";
import React from "react";
import { useTranslations } from "next-intl";

import FirstScene from "./FirstScene";
import SecondScene from "./SecondScene";

const Intro = ({setScrolling}:{setScrolling:React.Dispatch<React.SetStateAction<boolean>>}) => {
  const t = useTranslations("intro");
  const t2 = useTranslations("second");
  return (
    <section className="relative hero w-full max-w-screen h-screen">
      <FirstScene setScrolling={setScrolling} text2={t("text")} text={t("text2")} />
      <SecondScene text={t2("text")} text2={t2("text2")} />
    </section>
  );
};

export default Intro;
