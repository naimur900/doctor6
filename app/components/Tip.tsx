"use client";

import { tips } from "@/app/utils/data";
import { motion } from "motion/react";
import { aboutCardVariants } from "../motion";

const Advice = () => {
  return (
    <motion.div
      className="bg-[#eeeae8] rounded-3xl drop-shadow-xl relative z-10"
      variants={aboutCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.7 }}
    >
      <ul className="flex flex-col justify-start gap-5 px-6 py-10">
        {tips.map((tip, index) => (
          <li key={index} className="flex space-x-6 items-center ">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              {tip.icon}
            </div>
            <p className="text-sm md:text-base transform transition-transform duration-300 hover:scale-105">
              {tip.tip}
            </p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Advice;
