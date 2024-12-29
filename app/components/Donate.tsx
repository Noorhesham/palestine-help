import React from "react";
import AnimatedImage from "./AnimatedImage";
import DonationLink from "./DontationLink";
import SwiperCards from "./SwiperCards";
import Image from "next/image";
import Link from "next/link";

// Define the organizations
const organizations = [
  {
    name: "الأونروا",
    link: "https://donate.unrwa.org/-landing-page/en_EN",
    icon: "/path/to/unrwa-icon.svg", // Add icon path here
  },
  {
    name: "Palestine Children Relief Fund",
    link: "https://www.pcrf.net/",
    icon: "/path/to/pcrf-icon.svg",
  },
  {
    name: "الهلال الاحمر الفلسطيني",
    link: "https://www.palestinercs.org/ar",
    icon: "/path/to/red-crescent-icon.svg",
  },
  {
    name: "Medical Aid For Palestinians",
    link: "https://www.map.org.uk/",
    icon: "/path/to/map-icon.svg",
  },
  // Add other organizations with icons here
];

const Donate = () => {
  return (
    <section className="w-full h-screen  p-4 z-50 flex lg:px-32 lg:flex-row flex-col items-center justify-center bg-gray-200 top-0  green">
      <div className="flex lg:flex-row flex-col items-center justify-between w-full h-full">
        <AnimatedImage data="animate1.json" className="w-[100%]" />
      </div>

      <div className="flex flex-col gap-3 px-8 max-w-2xl text-gray-800 items-end justify-center ">
        <h2 className="text-2xl font-bold">نداء للمساعدة: دعمك يمكن أن يحدث فرقًا</h2>
        <p className="text-right text-base">
          الشعب الفلسطيني يعاني من صعوبات لا يمكن تصورها منذ عقود، من التهجير وفقدان المنازل إلى العيش تحت وطأة الصراع
          والظلم المستمر. مع مرور كل يوم، آلاف العائلات في غزة والضفة الغربية ما زالت تعاني من العنف والفقر وافتقارها
          للأساسيات مثل الطعام والماء والرعاية الطبية.
        </p>
        <p className="font-semibold text-amber-700">: تبرعك السخي يمكن أن يساعد في توفير </p>

        {/* Swiper Slider for organizations */}
        <SwiperCards
          autoplay className=" my-5"
          items={organizations.map((o, i) => {
            return {
              card: (
                <div className="flex  flex-col gap-2">
                  <Link href={o.link} target="_blank" key={i} className=" rounded-full overflow-hidden w-32 h-32 relative">
                    <Image src={o.icon} alt={o.name} fill />
                  </Link>
                  <Link href={o.link} target="_blank" className=" text-blue-500 underline text-xs text-center">
                    {o.name}
                  </Link>
                </div>
              ),
            };
          })}
        />
      </div>
    </section>
  );
};

export default Donate;
