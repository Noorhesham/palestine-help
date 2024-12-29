import { useLocale } from "next-intl";
import AnimatedTitle from "./AnimatedTitle";
import { useLoader } from "../context/LoaderContext";

const FirstScene = ({
  text,
  text2,
  setScrolling,
}: {
  text: string;
  text2: string;
  setScrolling: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const locale = useLocale();
  const { setLoadedVideos } = useLoader();

  return (
    <div className="first">
      <img src="/masq.jpg" className="img opacity-0 scale-125 absolute  inset-0 w-full h-full object-cover" alt="" />
      <video
        preload="auto"
        onLoadedData={(event) => {
          console.log("onLoadedData event fired", event);
          setLoadedVideos((prev) => prev + 1);
        }}
        src="/particels .mp4"
        loop
        muted
        autoPlay
        className=" opacity-55 absolute inset-0 w-full h-full object-cover"
      ></video>{" "}
      <div
        className={`${
          locale === "ar" ? "items-center gap-5 " : ""
        } flex !items-center w-full flex-col gap-4 lg:gap-20  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <AnimatedTitle
          setScrolling={setScrolling}
          className={` text-main huge-font !text-center flex flex-col items-center ${
            locale === "ar" ? " gap-5 !lg:gap-20" : "gap-5"
          }  font-bold`}
          text={text}
        />
        <p className="paragraph  max-w-3xl text-base md:text-xl text-center">
          {text2.split("").map((char, index) =>
            char === " " ? (
              <span key={index} className=" whitespace-nowrap">
                {char}
              </span>
            ) : (
              <span key={index} className=" opacity-0 translate-y-1">
                {char}
              </span>
            )
          )}
        </p>
      </div>
    </div>
  );
};

export default FirstScene;
