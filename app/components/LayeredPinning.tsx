"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
const history = [
  {
    title: "فلسطين.. أرض الأنبياء والمقدسات",
    paragraph: `فلسطين ليست مجرد قطعة أرض، إنها موطن الأنبياء ومهد الرسالات السماوية. من القدس حيث أُسري بالنبي محمد ﷺ، إلى بيت لحم حيث وُلد المسيح عليه السلام، تروي أرض فلسطين قصصًا من التاريخ الإنساني المقدس. لطالما كانت فلسطين رمزًا للوحدة والروحانية، حيث تتشابك أرواح الأديان الثلاثة في تناغم فريد. لكن هذا السلام الذي عاشته لقرون طويلة أصبح اليوم مجرد ذكرى تحت وطأة الاحتلال.`,
  },
  {
    title: " وعد بلفور: بداية النكبة",
    paragraph:
      "في عام 1917، أصدرت بريطانيا وعد بلفور المشؤوم، الذي زرع بذور الاحتلال في أرض فلسطين. كان هذا الوعد بداية سلسلة من الأحداث التي غيرت ملامح البلاد إلى الأبد. ملايين الفلسطينيين تم تهجيرهم قسرًا من ديارهم، وحلّ مكانهم كيان استعماري قائم على القمع والتفرقة.",
  },
  {
    title: "نكبة 1948.. بداية المعاناة",
    paragraph: `عام 1948 كان بداية الجرح الفلسطيني الذي لا يزال ينزف حتى اليوم. حينما هُجّر أكثر من 700,000 فلسطيني من ديارهم تحت قوة السلاح والقمع الإسرائيلي. مدنٌ بأكملها دُمّرت، وقرى تحوّلت إلى أطلال، وأحلام أجيال تحطمت على صخور النكبة. منذ ذلك الحين، أصبحت كلمة "لاجئ" جزءًا لا يتجزأ من الهوية الفلسطينية، حيث وُلد جيل وراء جيل في المخيمات يحمل مفتاح العودة إلى وطن أُجبر على مغادرته`,
  },
  {
    title: "الاحتلال العسكري.. آلة الدمار الإسرائيلية",
    paragraph:
      " قامت إسرائيل باحتلال الضفة الغربية وقطاع غزة، مستخدمة آلة عسكرية لا تعرف الرحمة. من تدمير المنازل وقلع الأشجار إلى بناء المستوطنات غير القانونية، لا تزال إسرائيل تفرض واقعًا قاسيًا على الأرض. الحواجز العسكرية، الجدار العازل، والاعتقالات الجماعية كلها أدوات تُستخدم لإذلال الفلسطينيين وتجريدهم من حقوقهم الأساسية. الاحتلال ليس فقط اعتداءً على الأرض، بل هو اعتداء على الإنسانية بأكملها. منذ عام 1948 وحتى اليوم، يعيش الفلسطينيون تحت احتلال لا يرحم. الجدران العازلة التي تفصل العائلات، الحواجز العسكرية التي تحول الحياة اليومية إلى معاناة، والقصف الذي لا يفرق بين طفل وشيخ. الاحتلال الإسرائيلي لم يترك مجالًا للأمل، بل استهدف كل جوانب الحياة.",
  },
  {
    title: "غزة.. رمز الصمود",
    paragraph: `رغم الحصار الذي يخنق غزة منذ أكثر من 15 عامًا، ورغم القصف المتكرر الذي حوّل المدينة إلى أنقاض، إلا أن غزة ما زالت تقف شامخة. أهلها، بكرامتهم وإيمانهم بعدالة قضيتهم، يواصلون الحياة في ظل ظروف مستحيلة. غزة ليست فقط مكانًا جغرافيًا، بل هي رمز للصمود الفلسطيني، حيث يُثبت الإنسان قدرته على البقاء حتى في وجه أقسى الظروف.
`,
  },
  {
    title: "القدس.. قلب الصراع",
    paragraph: `لقدس، تلك المدينة التي تحتضن قبة الصخرة والمسجد الأقصى، تتعرض لمحاولات تهويد مستمرة تهدف إلى طمس هويتها العربية والإسلامية. من تهجير أهلها الأصليين إلى اقتحامات المستوطنين المتكررة، تحاول إسرائيل تغيير ملامح المدينة المقدسة. لكن القدس تقف بثبات، بشوارعها، بحجارتها، وبأهلها الذين يرفضون التخلي عن هويتهم رغم كل شيء.`,
  },
  {
    title: "مدينة تحت الحصار، لكنها لا تنكسر",
    paragraph:
      "غزة، التي تعيش تحت حصار خانق منذ أكثر من 15 عامًا، أصبحت عنوانًا للصمود والمقاومة. رغم القصف المتكرر، ونقص الغذاء والدواء، يواصل سكان غزة حياتهم بشجاعة لا مثيل لها. كل قنبلة تسقط، وكل بيت يُهدم، يزيد من إصرار الفلسطينيين على استعادة حقوقهم.",
  },
  {
    title: "سالة إلى العالم: فلسطين تناديكم",
    pargraph: `فلسطين اليوم ليست فقط قضية شعب يعيش تحت الاحتلال، إنها اختبار لإنسانية العالم بأسره. القهر الذي يتعرض له الفلسطينيون يوميًا يستدعي منا جميعًا موقفًا أخلاقيًا. يجب أن تكون فلسطين في قلوبنا وفي أفعالنا. فالصمت عن الظلم هو مشاركة فيه، والوقوف مع فلسطين هو وقوف مع الحق والعدالة.`,
  },
];
const LayeredPinning = () => {
  useEffect(() => {
    const panels = gsap.utils.toArray(".p");
    ScrollTrigger.create({
      trigger: ".panel",
      scroller: ".main-container",
      pin: true,
      markers: true,
      end: `+=800`,
      scrub: true,
      animation: gsap.timeline().fromTo(".title3", { scale: 1 }, { y: 100, scale: 4.4, opacity: 1 }),
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: panels[0],
          scroller: ".main-container",
          markers: true,
          start: "top 70%",
        },
      })
      .fromTo(
        ".img1container",
        { scale: 1.5, opacity: 0.4, rotate: 10 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 0.4,
        }
      ),
      panels.forEach((panel, index) => {
        ScrollTrigger.create({
          trigger: panel,
          scroller: ".main-container",
          pin: true,
          start: "top top",
          end: "+=800",
          markers: true,
        });
      });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".pl",
          scroller: ".main-container",
          pin: true,
          markers: true,
          scrub: true,
          end: "+=4000",
          start: "top top",
          anticipatePin: 1,
        },
      })
      .from(".p2", { yPercent: 100 })
      .from(".p3", { xPercent: -100 })
      .from(".p4", { xPercent: 100 });
  }, []);
  return (
    <div>
      <div className="description panel relative h-screen blue">
        <video src="/history.mp4" loop autoPlay muted className="absolute inset-0 w-full h-full object-cover"></video>
        <div className="w-full h-full bg-black  z-10 mix-blend-multiply    absolute inset-0 flex  items-center justify-center">
          {" "}
          <h2
            className="text-[7vw] title3 text-white title2 text-center  z-50  font-bold absolute top-20 left-[50%] -translate-x-1/2  text-transparent"
            style={{
              mixBlendMode: "normal", // Ensure no blending affects the result
            }}
          >
            WHAT HAPPENED IN HISTORY !?
            <br />
            KNOW THE TRUTH
          </h2>
        </div>
      </div>

      <section className=" h-screen p flex items-center justify-center relative red">
        <div className="img1container absolute inset-0 w-full  h-full  ">
          <Image alt="section-1" src="/night.jpg" fill className=" object-cover w-full h-full" />
        </div>
        <div className=" relative z-20">
          <h2  className=" text-7xl font-bold">{history[0].title}</h2>
        </div>
      </section>
      <section className=" h-screen p flex items-center justify-center bg-orange-400 relative orange">TWO</section>
      <section className=" h-screen p flex items-center justify-center bg-purple-400 relative purple">THREE</section>
      <section className=" h-screen pl  items-center justify-center bg-green-500 relative green">
        FOUR
        <section className=" w-full h-screen p2 flex items-center justify-center bg-blue-500  top-0 absolute green">
          Five
        </section>
        <section className=" w-full h-screen p3 flex items-center justify-center bg-violet-500  top-0 absolute green">
          Six
        </section>
        <section className=" w-full h-screen p4 flex items-center justify-center bg-pink-500  top-0 absolute green">
          seven
        </section>
      </section>
    </div>
  );
};

export default LayeredPinning;
