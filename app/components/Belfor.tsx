import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";

const Belfor = ({ locale, assignAnimations }: { locale: string; assignAnimations: any }) => {
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
            markers: true,
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
      className={` bg-[#1E1C16] ${
        locale === "ar" ? "lg:flex-row-reverse" : "lg:flex-row"
      }  flex-col-reverse belfor-section  h-screen p flex items-center justify-center relative `}
    >
      <div className=" w-full h-full absolute inset-0  blur z-20 backdrop-blur-sm	"></div>

      <div className="   absolute z-30  promise w-[27rem] h-[80%] ">
        <Image src="/Balfour_declaration 2.png" alt="section-1" fill className=" object-contain w-full h-full" />
      </div>

      <div className=" h-[80%] lg:h-full relative w-full lg:w-[60%]">
        <Image
          src={"/balfour-2no back 1.png"}
          alt="section-1"
          fill
          className="img-belfor object-contain object-center lg:object-right w-full h-full"
        />
      </div>
      <div className="flex py-5 px-2.5 w-full lg:items-end items-center  text-right flex-col gap-5">
        <div className="flex flex-row-reverse  text-main">
          <span className=" text-6xl font-bold">1917</span> <span className=" mt-auto">وعد بلفور</span>
        </div>
        <h2 className=" text-xl lg:text-3xl font-semibold">
          في الحرب العالمية الأولى <span className=" text-main">(1914-1918)</span>،
        </h2>
        <p className="paragraph3 max-w-5xl w-full text-[#EBE5D9] text-base  lg:text-end text-center lg:text-2xl">
          انهارت الإمبراطورية العثمانية واحتلت بريطانيا فلسطين. جاء <b>وعد بلفور</b> عام{" "}
          <span className=" text-main">1917</span> ليؤيد إقامة وطن قومي لليهود، مما فتح الباب أمام موجات هجرة يهودية
          مدعومة بريطانيًا. أصدرت بريطانيا وعد بلفور المشؤوم، الذي زرع بذور الاحتلال في أرض فلسطين. كان هذا الوعد بداية
          سلسلة من الأحداث التي غيرت ملامح البلاد إلى الأبد. ملايين الفلسطينيين تم تهجيرهم قسرًا من ديارهم، وحلّ مكانهم
          كيان استعماري قائم على القمع والتفرق
        </p>
      </div>
      <p className=" absolute bottom-10 right-[40%]">وزير الخارجية البريطاني -آرثر بلفور</p>
    </section>
  );
};

export default Belfor;
