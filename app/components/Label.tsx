import { useLocale } from "next-intl";
import React from "react";

const Label = ({
  title,
  className,
  backgroundColor,
}: {
  title: string;
  className?: String;
  backgroundColor?: string;
}) => {
  const locale = useLocale();
  return (
    <h2
      className={` ${className} text text-5xl lg:text-7xl flex gap-2 flex-col max-w-3xl text-center  leading-relaxed font-bold`}
    >
      {title.split("<br/>").map((line, index) => (
        <span className=" px-3 relative" key={index}>
          {locale === "ar" ? (
            <span key={index} className="char">
              {line}
            </span>
          ) : (
            line.split("").map((char, index) => (
              <span className="char" key={index}>
                {char}
              </span>
            ))
          )}
          <span
            className={`${
              backgroundColor ? backgroundColor : "bg-[#9d682b] "
            } text-bg absolute inset-0 w-full h-full z-[-1]`}
          ></span>
        </span>
      ))}
    </h2>
  );
};

export default Label;
