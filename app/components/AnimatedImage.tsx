"use client";

import dynamic from "next/dynamic"; // Import dynamic for client-side loading
import Image from "next/image";
import React, { useEffect, useState } from "react";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const animationMap: { [key: string]: any } = {
  "animate1.json": () => import("../../public/dontation.json"),
};

const AnimatedImage = ({ data = "animate1.json", className }: { data?: string; className?: string }) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  // Only run this effect on the client-side
  useEffect(() => {
    setIsClient(true);

    // Dynamically load the animation data
    if (animationMap[data]) {
      animationMap[data]().then((mod) => setAnimationData(mod.default));
    }
  }, [data]);

  // If not in the client environment or animation data is unavailable
  if (!isClient || !animationData) {
    return <Image width={2000} height={2000} alt="animation" src="/placeholder.png" />;
  }

  return (
    <div className={`${className || "max-w-[50%]"}`}>
      <Lottie animationData={animationData} />
    </div>
  );
};

export default AnimatedImage;
