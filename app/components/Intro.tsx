"use client";
import { motion } from "motion/react";
import Image from "next/image";
import "../../app/main.css";
import { introVariants } from "../motion";
import { introInfo } from "../utils/data";

const Intro = () => {
  return (
    <motion.div
      className="relative overflow-hidden z-10 bg-[#eeeae8] rounded-2xl drop-shadow-xl"
      variants={introVariants}
      id="intro"
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-7 mb-5 md:mb-0 ">
          <div className="flex flex-col items-center">
            <div className="space-y-2 w-5/6 pt-2">
              <h2 className="text-xl sm:text-2xl md:text-xl lg:text-3xl font-bold text-gray-900 leading-tight">
                {introInfo.name}
              </h2>
              <h3 className="text-base sm:text-lg md:text-base lg:text-xl text-blue-600 relative">
                {introInfo.headline}
                {/* <div className="absolute bottom-1 left-0 w-full h-1 bg-blue-600/20 rounded-full" /> */}
              </h3>
              <p className="text-base lg:text-lg text-gray-700">
                {introInfo.desgnation}
              </p>
              <p className="text-base lg:text-lg text-gray-700">
                {introInfo.place}
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 relative">
            <figure className="relative z-10">
              <Image
                src={introInfo.imgURL || "/placeholder.svg"}
                alt={introInfo.name}
                priority={true}
                width={600}
                height={600}
                className="object-contain"
              />
            </figure>
          </div>
        </div>
      </div>
      {/* bg-[#356BBB] */}
      {/* Stats */}
      <div className="bg-gradient-to-r from-[#3E5879] to-blue-400 py-3 rounded-b-2x">
        <div className="container mx-auto px-4">
          <div className="flex justify-around items-center text-white">
            <div className="text-center">
              <h3 className="text-xl md:text-3xl font-bold">27</h3>
              <p className="md:text-sm">Years of Experience</p>
            </div>
            {/* <div className="text-center">
              <h3 className="text-xl md:text-3xl font-bold">100+</h3>
              <p className="md:text-sm">Gastroenterologist </p>
            </div> */}
            <div className="text-center">
              <h3 className="text-xl md:text-3xl font-bold">100k</h3>
              <p className="md:text-sm">Active Patients</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;
