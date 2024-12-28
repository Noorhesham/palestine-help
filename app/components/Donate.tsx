import React from "react";
import AnimatedImage from "./AnimatedImage";

const Donate = () => {
  return (
    <section className=" w-full h-screen p4  z-50 flex lg:px-32 lg:flex-row flex-col items-center justify-center  bg-gray-200  top-0 absolute green">
      <div className="flex lg:flex-row flex-col  items-center justify-between w-full h-full">
        <AnimatedImage data="animate1.json" className="w-[100%]" />
      </div>
      <div className="flex flex-col gap-3 px-8 max-w-2xl text-gray-800  items-end  justify-center  h-full">
        <h2 className=" text-2xl font-bold">نداء للمساعدة: دعمك يمكن أن يحدث فرقًا</h2>
        <p className=" text-right text-base">
          الشعب الفلسطيني يعاني من صعوبات لا يمكن تصورها منذ عقود، من التهجير وفقدان المنازل إلى العيش تحت وطأة الصراع
          والظلم المستمر. مع مرور كل يوم، آلاف العائلات في غزة والضفة الغربية ما زالت تعاني من العنف والفقر وافتقارها
          للأساسيات مثل الطعام والماء والرعاية الطبية.
        </p>
        <p className=" font-semibold text-amber-700">: تبرعك السخي يمكن أن يساعد في توفير </p>
        <ul className="flex flex-col  ">
          <li>الإمدادات الطبية الطارئة والمعدات</li>
          <li>الغذاء والمياه النظيفة</li>
          <li>الدعم السكني للعائلات المشردة</li>
          <li>التعليم والدعم النفسي للأطفال والعائلات المتأثرة بالصدمات</li>
        </ul>
      </div>
    </section>
  );
};

export default Donate;
