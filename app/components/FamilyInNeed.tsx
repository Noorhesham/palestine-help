import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const FamilyInNeed = () => {
  const t = useTranslations("familyInNeed");

  return (
    <section className="p5 bg-black/40 w-full h-screen z-50 flex items-center justify-center top-0 absolute">
      <div className="flex bg-yellow-50 px-5 w-full lg:w-[70%] rounded-2xl overflow-hidden flex-col gap-4">
        <div className="h-44 lg:h-64 w-full relative">
          <Image src="/save.webp" alt="family" fill className="object-cover" />
        </div>
        <h2 className="section-title text-3xl font-bold text-center text-gray-800 mt-2 lg:mt-8 mb-4">{t("title")}</h2>
        <p className="description text-lg text-gray-700 leading-relaxed tracking-wide">{t("description")}</p>
        <button className="mx-auto w-fit my-5 py-3 px-6 rounded-full bg-blue-500">
          <Link href="https://www.gofundme.com/f/aiutateci-ad-evacuare-questa-famiglia-da-gaza?attribution_id=sl:5bbd1591-3a5e-4b7d-972c-36c0211b1a67&utm_campaign=man_ss_icons&utm_medium=customer&utm_source=copy_link">
            {t("buttonText")}
          </Link>
        </button>
      </div>
    </section>
  );
};

export default FamilyInNeed;
