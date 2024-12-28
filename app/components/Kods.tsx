import Image from "next/image";
import React from "react";
import Label from "./Label";
import ParagraphWrite from "./ParagraphWrite";

const Kods = ({ history: { title, paragraph } }: { history: { title: string; paragraph: string } }) => {
  return (
    <section className=" w-full h-screen z-30 p2 flex items-center justify-center   top-0 absolute green">
      <div className=" w-full h-full absolute inset-0">
        <Image src={"/kods.jpg"} alt="kods" fill className={" object-cover"} />
      </div>
      <div className=" flex flex-col items-center">
        <div className=" w-96 relative h-96 ">
          <Image src={"/masq.png"} alt="masq" fill className={" object-cover"} />
        </div>
        <Label backgroundColor=" label-4  bg-transparent" className=" title4  self-center" title={title} />
        <ParagraphWrite text={paragraph} className="mt-4 z-30" visible />
      </div>
    </section>
  );
};

export default Kods;
