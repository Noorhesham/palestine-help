"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";

const Language = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const currentLocale = useLocale();
  const pathName = usePathname();

  const handleSelect = (value: string) => {
    if (value === currentLocale) return;

    startTransition(() => {
      let newPathName = pathName;

      if (pathName.startsWith(`/${currentLocale}`)) {
        // Replace the existing locale
        newPathName = pathName.replace(`/${currentLocale}`, `/${value}`);
      } else {
        // Prepend the new locale if none exists
        newPathName = `/${value}${pathName}`;
      }

      window.location.href = newPathName;
    });
  };

  return (
    <div className=" flex gap-2 fixed items-center top-10 right-10 z-50 font-bold">
      <span onClick={() => handleSelect("en")} className=" cursor-pointer font-cinzel">
        EN
      </span>
      <span onClick={() => handleSelect("ar")} className=" cursor-pointer font-cairo">
        العربية
      </span>
    </div>
  );
};

export default Language;
