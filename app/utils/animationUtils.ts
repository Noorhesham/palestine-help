// utils/animationUtils.ts
import gsap from "gsap";
import { MainContainer } from "../[locale]/page";
import { ScrollTrigger } from "gsap/all";

export const createAnimationTimeline = (config: {
  container: HTMLElement | null;
  animations: (timeline: gsap.core.Timeline) => void;
  scrollTrigger?: gsap.plugins.ScrollTriggerInstanceVars;
}) => {
  if (!config.container) return null;

  const { animations, scrollTrigger } = config;

  const timeline = gsap.timeline({
    scrollTrigger: scrollTrigger
      ? {
          trigger: config.container,
          ...scrollTrigger,
          scroller: MainContainer,
        }
      : undefined,
  });

  animations(timeline);

  return timeline;
};
export const createColorShineAnimation = (elements: HTMLElement[], options = {}) => {
  return gsap
    .timeline({
      paused: true,
      repeat: -1,
      repeatRefresh: true,
      repeatDelay: 0.2,
      ...options,
    })
    .from(elements, { color: "#F2E9BB", stagger: 0.03, ease: "bounce.inOut" })
    .to(elements, { color: "#E1BB80", stagger: 0.03, ease: "bounce.inOut" });
};
export const createScrollTimeline = (options: { locoScroll: any; onComplete?: () => void; scroll: () => void }) => {
  const { locoScroll, onComplete, scroll } = options;

  return gsap
    .timeline({
      paused: true,
      onComplete: () => {
        gsap.set(".rest", { display: "block" });
        scroll?.();
        locoScroll?.update();

        ScrollTrigger.refresh();
        onComplete?.();
      },
    })
    .to(".title", { opacity: 0, duration: 1, ease: "power3.inOut" })
    .to(".paragraph", { opacity: 0, duration: 1, ease: "power3.inOut" }, "<")
    .to(".img", { opacity: 0, duration: 1 })
    .to(
      ".palestine-video",
      { opacity: 1, duration: 2, scale: 1, onStart: () => document.querySelector(".palestine-video")?.play() },
      "<"
    )
    .to(".film-grain", { opacity: 0.77, duration: 1 }, "+=2")
    .to(".intro2", { opacity: 1, duration: 0.5 }, "<")
    .from(".intro2 span", {
      y: 100,
      skewY: 7,
      stagger: { amount: 0.3 },
    })
    .from(".nakba", { height: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" })
    .to(".second .paragraph2", { opacity: 1 }, "<")
    .to(".second .paragraph2 span", { opacity: 1, stagger: { amount: 0.8 }, translateY: 0 }, "+=0.2")
    .to(
      ".num",
      {
        opacity: 1,
        duration: 0.8,
        stagger: {
          amount: 0.5,
          from: "random",
        },
        ease: "power3.out",
      },
      "<"
    )
    .to(".nakba2", { opacity: 1, x: 0, duration: 0.5 }, "<0.2")
    .to(".nakba3", { y: 40, opacity: 1, duration: 0.5, rotate: 10 }, "<0.2");
};
