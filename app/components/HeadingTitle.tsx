"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";
import { breadCrumVariants } from "../motion";

interface HeadingTitleProps {
  icon?: ReactNode;
  title: string;
  colorClass?: string;
}

const Headingtitle = ({
  icon,
  title,
  colorClass = "text-gray-900",
}: HeadingTitleProps) => {
  return (
    <motion.div
      className="relative mb-6 py-3"
      variants={breadCrumVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        className={`flex items-center justify-center gap-2 text-3xl md:text-4xl font-bold text-[#eeeae8]`}
      >
        {/* <div className="bg-orange-600 w-3 h-full"></div> */}

        {icon}
        <h2>{title}</h2>
      </div>
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500" /> */}
    </motion.div>
  );
};

export default Headingtitle;
