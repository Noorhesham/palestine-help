import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" px-20 py-10  gap-4 flex flex-col bg-[#1E1C16] items-center">
      <p className="text-nowrap  text-[3vw] ">
        {" "}
        وَلَا تَحْسَبَنَّ اللَّهَ غَافِلًا عَمَّا يَعْمَلُ الظَّالِمُونَ إِنَّمَا يُؤَخِّرُهُمْ لِيَوْمٍ تَشْخَصُ فِيهِ
        الْأَبْصَارُ
      </p>
      <span>
        By <Link target="_blank" className=" text-blue-600 underline" href="https://new-portfolio-noor-hesham.vercel.app/">Noor Hesham</Link>
      </span>
    </footer>
  );
};

export default Footer;
