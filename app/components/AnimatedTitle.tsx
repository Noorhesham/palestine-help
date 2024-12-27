"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { MainContainer } from "../[locale]/page";
import { useSmoothScroll } from "../context/ScrollProviderContext";
import { ScrollTrigger } from "gsap/all";
import { createColorShineAnimation, createScrollTimeline } from "../utils/animationUtils";
import { useLocale } from "next-intl";

const AnimatedTitle = ({
  text,
  className,
  setScrolling,
}: {
  text: string;
  className?: string;
  setScrolling: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const locale = useLocale();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { locoScroll } = useSmoothScroll();
  useEffect(() => {
    const ctx = gsap.context(() => {
      let lastScrollY = 0;
      if (!containerRef.current) return;
      //shining effect
      const colorTl = createColorShineAnimation(Array.from(containerRef.current.querySelectorAll(".animated-word")));
      //second scene
      const scrollTl = createScrollTimeline({
        locoScroll,
        onComplete: () => {
          colorTl.play();
        },
        scroll: () => setScrolling(true),
      });
      //first scene
      gsap
        .timeline({
          onComplete: () => {
            colorTl.play();
            window.addEventListener("touchstart", () => scrollTl.play());
            locoScroll?.on("scroll", (e) => {
              const currentScrollY = e.scroll.y;
              if (currentScrollY > lastScrollY || currentScrollY === 0) {
                // Scrolling down
                scrollTl.play();
              } else {
                // Scrolling up
                // scrollTl
                //   .reverse()
                //   .duration(2)
                //   .to(".palestine-video", { opacity: 0 })
                //   .to(".rest", { display: "hidden" });
              }
              lastScrollY = currentScrollY;
            });
          },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            scroller: MainContainer,
            toggleActions: "play none none reverse",
          },
        })
        .to(containerRef.current?.querySelectorAll(".animated-word"), {
          opacity: 1,
          transform: `translateY(0)`,
          stagger: 0.03,
          ease: "none",
          color: "#E1BB80",
        })
        .to(".hero .paragraph span", { opacity: 1, stagger: { amount: 0.1 }, translateY: 0 }, "+=0.2")
        .to(".hero .img", { opacity: 1, scale: 1, ease: "none", duration: 0.7 });
    });
    return () => ctx.revert();
  }, [locoScroll]);

  return (
    <div ref={containerRef} className={` ${className} title animated-title`}>
      {text.split("<br/>").map((line, index) => (
        <div
          key={index}
          className="flex max-w-full md:flex-row flex-col items-center lg:my-0 my-4 flex-wrap lgap-4 px-10 md:gap-3"
        >
          {line.split(" ").map((word, i) =>
            locale === "en" ? (
              <span key={i} className="flex   lg:mx-auto items-center w-fit gap-1">
                {word.split("").map((char, j) => (
                  <span className="animated-word" key={j}>
                    {char}
                  </span>
                ))}
                {/* Insert a non-breaking space where spaces exist */}
                {i < line.split(" ").length - 1 && (
                  <span className=" lg:block hidden animated-word" dangerouslySetInnerHTML={{ __html: "&nbsp;" }} />
                )}
              </span>
            ) : (
              <span key={i} className="flex  m-auto  animated-word gap-1">
                {word}
              </span>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
