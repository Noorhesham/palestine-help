import React from "react";
import SwiperCards from "./SwiperCards";
import Label from "./Label";

const News = () => {  const slides = [
    {
      img: "/slide1.jpg",
      title: "عدد الشهداء في الضفة الغربية خلال النصف الأول من العام هو الأعلى منذ 20 عاماً",
      desc: "هذه الحصيلة هي الأعلى منذ العام 2003، كما تمثل هذه الحصيلة ارتفاعاً يزيد عن ضعف العدد المسجل خلال العام الماضي في ذات الفترة في الضفة الغربية. 0",
    },
    {
      img: "/slide2.jpg",
      title: "مرصد شيرين يعلن تضمين بيانات اكثر من 29 ألف شهيد من شهداء حرب الابادة",
      desc: "أتمت طواقم مرصد شيرين العمل على تضمين بيانات اكثر من 29 ألف شهيد من شهداء حرب الإبادة المستمرة في قطاع غزة والضفة الغربية، وتضمنت القوائم اكثر من 9,500 طفل و 6,300 امرأة و 2,400 مسن.",
    },
    {
      img: "/slide3.jpg",
      title: "100 شهيد خلال 100 يوم",
      desc: `منذ بداية العام 2023 حتى العاشر من نيسان/ابريل (أي خلال الـ100 يوم الأولى في العام) استشهد 100 فلسطيني على يد قوات الاحتلال وقطعان مستوطنيه، في حصيلة هي الأعلى في ذات الفترة من العام منذ عدوان "الرصاص المصبوب" على قطاع غزة في العام 2009.`,
    },
    {
      img: "/slide4.jpg",
      title: "دون تهمة، دون محاكمة: أكثر من 1000 أسير رهن الاعتقال الإداري",
      desc: `بحسب بيانات نادي الأسير الفلسطيني فإن عدد المعتقلين الإداريين في سجون الاحتلال الإسرائيلي، تجاوز حتى نهاية آذار/ مارس الماضي، (1016) معتقلا، من بينهم (6) أطفال، وأسيرة واحدة، تحت ذريعة وجود "ملف سري"، وهي النسبة الأعلى منذ عام 2003.`,
    },
  ];
  return (
    <section
      style={{
        backgroundImage: `url('/child-standing-war-torn-city-amidst-destruction-chaos-generative-ai-331966180.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className=" w-full h-screen p3 z-40 flex flex-col items-center py-10 px-20 justify-center   top-0 absolute  "
    >
      {" "}
      <div className=" flex flex-col gap-4  items-center"></div>
      <SwiperCards
        autoplay
        slidesPerView={1}
        items={slides.map((slide) => {
          return {
            card: (
              <div
                className=" h-96   rounded-2xl overflow-hidden  relative w-full "
                style={{
                  backgroundImage: `url(${slide.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="gradient w-full flex items-end h-full">
                  <div className=" self-end absolute bottom-10 right-10    ms-auto max-w-xl items-start text-right px-4 py-2 flex flex-col gap-4">
                    <h3 className=" text-2xl font-bold text-yellow-500">{slide.title}</h3>
                    <p>{slide.desc}</p>
                  </div>
                </div>
              </div>
            ),
          };
        })}
      />
      <Label className={"!text-6xl"} backgroundColor="bg-transparent" title="هؤلاء بشر  مثلنا , ذو احلام" />
      {/* <div className="flex flex-row-reverse w-full justify-between items-center px-10 py-5">
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
          </div> */}
    </section>
  );
};

export default News;
