"use client";
import React from "react";
import Label from "./Label";
import Link from "next/link";
import PalestineMap from "./PalestineMap";

const Map = () => {
  return (
    <section>
      <div className="flex flex-row-reverse w-full justify-between items-center px-10 py-5">
        <div className="flex flex-col  items-start gap-4">
          <Label title="شهداء 2024 " />
          <div className="">
            <p className=" flex items-center gap-2">
              يمكنك الاطلاع علي بيانات اكثر من موقع
              <Link href={"https://www.shireen.ps/"}>shireen</Link>
            </p>
          </div>
        </div>
        <div className=" ">
          {" "}
          <PalestineMap />
        </div>
      </div>
    </section>
  );
};

export default Map;
