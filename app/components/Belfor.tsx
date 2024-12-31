import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";
import { useTranslations } from "next-intl";

const Belfor = ({ locale, assignAnimations }: { locale: string; assignAnimations: any }) => {
  const t = useTranslations("belfor");

  useEffect(() => {
    if (!assignAnimations) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            scroller: ".main-container",
            trigger: ".belfor-section",
            start: "top 50%",
            end: "50% 20%",
            scrub: true,
          },
        })
        .from(".img-belfor", { xPercent: 70 }, "<0.5");

      gsap
        .timeline({
          scrollTrigger: {
            scroller: ".main-container",
            trigger: ".img-belfor",
            start: "60% top",
            toggleActions: "play none none reverse",
          },
        })
        .from(".blur", { opacity: 0 })
        .from(".promise", { yPercent: -100, opacity: 0 });
    });

    return () => ctx.revert();
  }, [assignAnimations]);

  return (
    <section
      className={`bg-[#1E1C16] ${
        locale === "ar" ? "lg:flex-row-reverse" : "lg:flex-row"
      } flex-col-reverse belfor-section h-screen p flex items-center justify-center relative`}
    >
      <div className="w-full h-full absolute inset-0 blur z-20 backdrop-blur-sm"></div>

      <div className="absolute z-30 promise w-[27rem] h-[80%]">
        <Image src="/Balfour_declaration 2.png" alt={t("title")} fill className="object-contain w-full h-full" />
      </div>

      <div className="h-[80%] lg:h-full relative w-full lg:w-[60%]">
        <Image
          src="/balfour-2no back 1.png"
          alt={t("title")}
          fill
          className="img-belfor object-contain object-center lg:object-right w-full h-full"
        />
      </div>

      <div className="flex py-5 px-2.5 w-full lg:items-end items-center text-right flex-col gap-5">
        <div className="flex flex-row-reverse text-main">
          <span className="text-6xl font-bold">{t("year")}</span> <span className="mt-auto">{t("title")}</span>
        </div>
        <h2 className="text-xl lg:text-3xl font-semibold">{t("subtitle")}</h2>
        <p className="paragraph3 max-w-5xl w-full text-[#EBE5D9] text-base lg:text-end text-center lg:text-2xl">
          {t("description.part1")}
          <b>{t("description.highlight1")}</b>
          {t("description.part2")}
          <span className="text-main">{t("description.year")}</span>
          {t("description.part3")}
        </p>
      </div>

      <p className="absolute bottom-10 right-[40%]">{t("footer")}</p>
    </section>
  );
};

export default Belfor;
