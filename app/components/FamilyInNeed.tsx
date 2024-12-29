import Image from "next/image";
import Link from "next/link";
import React from "react";

const FamilyInNeed = () => {
  return (
    <section className="p5 bg-black/40  w-full h-screen z-50 flex items-center justify-center   top-0 absolute">
      <div className=" flex bg-yellow-50 px-5 w-full lg:w-[70%] rounded-2xl overflow-hidden flex-col gap-4">
        <div className=" h-44 lg:h-64 w-full relative ">
          <Image src={"/save.webp"} alt="family" fill className={" object-cover"} />
        </div>
        <h2 className="section-title text-3xl font-bold text-center text-gray-800 mt-2 lg:mt-8 mb-4">A Cry for Help</h2>

        {/* Description */}
        <p className="description text-lg text-gray-700 leading-relaxed tracking-wide">
          Hello, my name is Billa, and I am 19 years old from Gaza. I have never asked for help before, but our
          situation here is beyond bearable. Everything I had has been taken away. I dreamed of a future, studying
          computer programming and multimedia, but after just two months at university, it was destroyed. Our three
          homes were bombed, and we have been displaced six times. During this, we’ve been bombed again and again. Now,
          I’m the one who has to care for my family. We are 10 people, and my father can no longer support us. Prices
          are too high, and the situation is getting worse. Among us are children who watch bombing and destruction
          every day. My one-year-old sister was so ill after our house was bombed, she couldn’t walk for a week, and we
          couldn’t get her the medical help she desperately needed. We are stuck with nothing, in constant danger, and I
          can only hope that through this fundraiser, we can survive, and maybe, rebuild a small part of our broken
          lives.
        </p>
        <button className=" mx-auto w-fit my-5 py-3 px-6 rounded-full bg-blue-500">
          <Link href="https://www.gofundme.com/f/aiutateci-ad-evacuare-questa-famiglia-da-gaza?attribution_id=sl:5bbd1591-3a5e-4b7d-972c-36c0211b1a67&utm_campaign=man_ss_icons&utm_medium=customer&utm_source=copy_link">
            HELP ME
          </Link>{" "}
        </button>
      </div>
    </section>
  );
};

export default FamilyInNeed;
