import React, { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { usePathname, useRouter } from "next/navigation";

const useLocoScroll = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [locoScroll, setLocoScroll] = useState(null);
  const [progress, setProgress] = useState(0);

  const pathname = usePathname();
  console.log(pathname);
  useLayoutEffect(() => {
    if (typeof window === "undefined" || typeof global.document === "undefined") return;
    const LocomotiveScroll = require("locomotive-scroll").default;
    const scrollEl = global?.window?.document?.querySelector(".main-container");

    const locoScrollInstance = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      //@ts-ignore
      mobile: {
        smooth: true,
      },
      multiplier: 1.5,
    });
    setLocoScroll(locoScrollInstance);

    locoScrollInstance.on("scroll", ScrollTrigger.update);
    locoScrollInstance.on("scroll", (args) => setProgress(args.scroll.y));

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length ? locoScrollInstance.scrollTo(value, 0) : locoScrollInstance.scroll.instance.scroll.y;
      },
      scrollLeft(value) {
        return arguments.length ? locoScrollInstance.scrollTo(value, 0) : locoScrollInstance.scroll.instance.scroll.x;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl?.style.transform ? "transform" : "fixed",
    });



    const lsUpdate = () => locoScrollInstance.update();
    // if (window.innerWidth < 768) ScrollTrigger.normalizeScroll(true);
    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();
    // Cleanup on component unmount
    return () => {
      if (locoScrollInstance) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
        locoScrollInstance.destroy(); // Destroy Locomotive Scroll instance
      }
    };
  }, [pathname]);

  return { locoScroll, progress };
};

export default useLocoScroll;
