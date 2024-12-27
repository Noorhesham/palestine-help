"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import ParagraphWrite from "./ParagraphWrite";
import { useLocale } from "next-intl";
const imagePaths = [
  {
    img: "/2 (1).jpg",
    date: "2022-11-08",
    title: {
      ar: "ليان الشاعر",
      en: "Layan Al-Shaer",
    },
    paragraph: {
      ar: "اسمي ليان الشاعر، عمري 9 أعوام، قتلتني غارة اسرائيلية أثناء توجهي للمرح واللعب على شاطئ البحر برفقة أمي وأخواتي.",
      en: "My name is Layan Al-Shaer, I am 9 years old. I was killed in an Israeli airstrike while I was heading to have fun and play on the beach with my mother and sisters.",
    },
  },
  {
    img: "/3.jpg",
    date: "2022/6/1",
    title: {
      ar: "الشيخ سليمان الهذالين",
      en: "Sheikh Suleiman Al-Hathaleen",
    },
    paragraph: {
      ar: "أنا الشيخ سليمان الهذالين، أبلغ من العمر 70 عاماً، قتلتني شاحنة تابعة للشرطة الاسرائيلية دهساً أثناء التصدي لاحدى محاولاتهم لهدم ومصادرة ممتلكاتنا في مسافر يطا، رغم انني كنت أعزلاً.",
      en: "I am Sheikh Suleiman Al-Hathaleen, 70 years old. I was killed by an Israeli police truck, run over while trying to prevent their attempt to demolish and seize our property in Masafer Yatta, even though I was unarmed.",
    },
  },
  {
    img: "/4.jpg",
    date: "2020-12-04",
    title: {
      ar: "علي أيمن أبو عليا",
      en: "Ali Ayman Abu Alia",
    },
    paragraph: {
      ar: "أنا علي أيمن أبو عليا، قتلني جندي اسرائيلي في يوم عيد ميلادي الخامس عشر، أثناء احتجاجي ورفاقي ضد المستوطنات التي تسرق أرض أهلنا وأجدادنا يوماً بعد يوم.",
      en: "I am Ali Ayman Abu Alia, I was killed by an Israeli soldier on my 15th birthday while protesting with my friends against the settlements that steal the land of our people and ancestors day by day.",
    },
  },
  {
    img: "/shahid1.jpg",
    date: "2024-12-21",
    title: {
      en: "Mohammed Yasser Ali Rashaida",
      ar: "محمد ياسر علي رشايدة",
    },
    paragraph: {
      en: "While herding sheep in the Wadi Al-Karas area east of Al-Rashaydah, Mohammed discovered a suspicious object. Tragically, it exploded upon contact. The area had been used by the occupation forces for military training, leaving behind deadly remnants.",
      ar: "أثناء رعي الأغنام في منطقة وادي الكراس شرق الرشايدة، عثر محمد على جسم غريب. وللأسف، انفجر بمجرد لمسه. كانت المنطقة تستخدمها قوات الاحتلال للتدريب العسكري، ما ترك وراءه بقايا مميتة.",
    },
  },

  {
    img: "/WTmBO.webp",
    date: "2024-17-09",
    title: {
      ar: "تسنيم ورنا باسل حمدان",
      en: "Tasneem and Rana Basel Hamdan",
    },
    paragraph: {
      ar: "رنا باسل حمدان، زوجة الشهيد وأم الشهيدة، تحكي عن اللحظات الأخيرة التي عاشتها تحت الأنقاض بعد القصف، وكيف أن الخمسة عشر دقيقة التي استغرقتها عملية الإنقاذ كانت بالنسبة لها كأنها سنوات. كانت تحتضن جثة طفلتها تسنيم التي كانت قد بلغت من العمر ستة أشهر فقط. استشهد زوجها في نفس اللحظة التي صعدت فيها روح طفلتها إلى السماء. قصة مأساوية عن فقدان الأمل والحياة.",
      en: "Rana Basel Hamdan, the wife of the martyr and mother of the martyr, recalls the last moments she lived under the rubble after the bombing. The fifteen minutes it took for the rescue operation felt like years to her. She was holding her six-month-old daughter Tasneem's lifeless body. Her husband was martyred at the same moment that their daughter's soul ascended to the sky. A heartbreaking story of loss and hopelessness.",
    },
  },
  {
    img: "/9.jpg",
    date: "2024-12-26",
    title: {
      ar: "محمد دعدس",
      en: "Mohammad Daads",
    },
    paragraph: {
      ar: "أنا محمد دعدس، عمري 15 عاماً، أعيش في مخيم عسكر للاجئين، قتلني أحد جنود الاحتلال انتقاماً لإصابته بحجر ألقاه شبان أثناء المواجهات قرب قرية دير الحطب، رغم أني لم أكن مشاركاً في المواجهات وكنت أقف وأشاهد من بعيد.",
      en: "I am Mohammad Daads, 15 years old, living in the Askar refugee camp. I was killed by an Israeli soldier in retaliation for being hit by a stone thrown by youth during clashes near the village of Deir al-Hatab, even though I was not participating in the clashes and was standing by, watching from a distance.",
    },
  },
  {
    img: "/8.jpg",
    date: "2024-12-27",
    title: {
      ar: "علي دوابشة",
      en: "Ali Dawabsha",
    },
    paragraph: {
      ar: "اسمي علي دوابشة، عمري 18 شهراً، وهذه أمي وهذا أبي معي في الصورة، هاجم المستوطنون منزلنا في قرية دوما ليلاً ونحن نيام، وأشعلوه بالنيران التي حاصرتنا، فقتلوني وأبي وأمي حرقاً ونحن أحياء، ونجى أخي الوحيد أحمد مصاباً بحروق بالغة.",
      en: "My name is Ali Dawabsha, I am 18 months old, and this is my mother and father in the picture with me. Settlers attacked our home in the village of Duma at night while we were asleep, setting it on fire, trapping us inside. My mother, father, and I were burned alive, while my only brother, Ahmed, survived with severe burns.",
    },
  },
];

const HeroesPhone = () => {
  const slideShow = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const locale = useLocale();
  // Function to handle touch start
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Function to handle touch end and calculate direction
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (deltaX > 50 && currentIndex > 0) {
      // Swipe Right
      setCurrentIndex(currentIndex - 1);
    } else if (deltaX < -50 && currentIndex < imagePaths.length - 1) {
      // Swipe Left
      setCurrentIndex(currentIndex + 1);
    }
    touchStartX.current = null;
  };

  // Adjust translateX for the slideshow
  useEffect(() => {
    if (slideShow.current) {
      slideShow.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <section className="heroes w-full relative flex items-center justify-center min-h-screen">
      {/* Background overlay and video */}
      <div className="absolute inset-0 bg-black/40 w-full h-full"></div>
      <video src="/movingold.mp4" autoPlay loop muted className="absolute inset-0 w-full h-full object-cover"></video>

      {/* Slider */}
      <div
        ref={slideShow}
        className="flex w-full transition-transform duration-500 ease-in-out"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {imagePaths.map((item, index) => (
          <div key={index} className="flex  flex-col slide w-full items-center">
            <div
              style={{ zIndex: imagePaths.length - index, marginTop: -index * 50 }}
              className={`  w-64 rounded-t-xl   overflow-hidden  h-64 aspect-square relative `} // mt increases with each index
            >
              <Image className="object-cover" src={item.img} fill alt={`shahid ${index + 1}`} />
            </div>
            <div className=" opacity-0 py-2 px-4 flex flex-col rounded-b-xl  items-center bg-black/50 h-0 para">
              <h2
                className={`${
                  locale === "ar" && "flex-row-reverse "
                } text-center text-main text-base items-start flex font-bold`}
              >
                {item.title[locale]}
              </h2>
              <ParagraphWrite
                className="flex-grow      text-left !text-[12px] leading-4 w-auto max-w-2xl"
                text={item.paragraph[locale]}
              />
              <span className=" text-[8px]  p-2 text-nowrap  font-semibold  text-red-400 self-end  ">
                ({item.date})
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 flex gap-4">
        {imagePaths.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-500"}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroesPhone;
