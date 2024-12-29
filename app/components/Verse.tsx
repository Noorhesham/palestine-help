import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { MainContainer } from "../[locale]/page";
import Image from "next/image";

const Verse = () => {
  const audioRef = useRef<HTMLAudioElement>(null); // Reference to the audio element
  const [hasPlayed, setHasPlayed] = useState(false); // Track if the audio has been played

  useEffect(() => {
    const ctx = gsap.context(() => {
      const verseElement = document.querySelector(".verse") as HTMLElement;
      const totalWidth = verseElement.offsetWidth;
      if (!verseElement) return;
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".verse-section",
            scroller: MainContainer,
            start: "top 100%",
            end: "+=800",
            onEnter: () => {
              if (!hasPlayed && audioRef.current) {
                audioRef.current.play();
                setHasPlayed(true); // Mark the audio as played
              }
            },
          },
        })
        .to(".verse", {
          xPercent: `${totalWidth}`,
          duration: 10, // Adjust the duration based on how fast you want the text to move
          ease: "linear",
          repeat: -1, // Repeat infinitely
          repeatDelay: 0, // No delay between loops
        });
    });

    return () => ctx.revert();
  }, [hasPlayed]); // Dependency on `hasPlayed` to prevent replaying

  return (
    <section
      style={{
        backgroundImage: "url(/pngtree-islamic-background-with-holy-quran-image_15640618.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="verse-section relative h-69"
    >
      <audio
        ref={audioRef}
        src="/ولا تحسبن الله غافلا عما يعمل الظالمون - القارئ إسلام صبحي [PQ62BH2bYjg].mp3"
        preload="auto"
      />
      <p className="text-nowrap verse -translate-x-[100%] text-[5vw]">
        {" "}
        وَلَا تَحْسَبَنَّ اللَّهَ غَافِلًا عَمَّا يَعْمَلُ الظَّالِمُونَ إِنَّمَا يُؤَخِّرُهُمْ لِيَوْمٍ تَشْخَصُ فِيهِ
        الْأَبْصَارُ
      </p>
    </section>
  );
};

export default Verse;
