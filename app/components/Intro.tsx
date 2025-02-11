// "use client";
// import { motion } from "motion/react";
import Image from "next/image";
// import { introVariants } from "../motion";
import { introInfo } from "../utils/data";

const Intro = () => {
  return (
    <div
      //   variants={introVariants}
      id="intro"
      //   initial="hidden"
      //   animate="visible"
      className="flex flex-col-reverse items-center justify-center md:flex-row"
    >
      <div className="m-2 p-5 md:p-8 flex flex-col items-center drop-shadow-2xl rounded-3xl">
        <div>
          <h2 className="mb-2 font-bold text-red-600 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            {introInfo.name}
          </h2>
          <h2 className="mb-1 text-blue-600 text-base font-medium lg:text-baslge xl:text-xl 2xl:text-2xl">
            {introInfo.headline}
          </h2>
          <div className="flex flex-col gap-1 text-sm font-light lg:text-base xl:text-lg 2xl:text-xl">
            <p>{introInfo.desgnation}</p>
            <p>{introInfo.place}</p>
          </div>
        </div>
      </div>
      <figure className="object-cover overflow-hidden rounded-2xl shadow-2xl md:relative">
        <Image
          src={introInfo.imgURL}
          alt={introInfo.name}
          priority={true} // {false} | {true}
          height={400}
          width={400}
        />
      </figure>
    </div>
  );
};

export default Intro;
