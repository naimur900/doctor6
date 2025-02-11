// "use client";
// import { motion } from "motion/react";
import { ReactNode } from "react";
// import { breadCrumVariants } from "../motion";

interface HeadingTitleProps {
  icon: ReactNode;
  title: string;
  colorClass: string;
}

const Headingtitle = ({ icon, title, colorClass }: HeadingTitleProps) => {
  return (
    <div
      //   variants={breadCrumVariants}
      //   initial="hidden"
      //   whileInView="visible"
      //   viewport={{ once: true, amount: 0.2 }}
      className="divider divider-start divider-error mb-8 md:mb-10 mt-10"
    >
      <div
        className={`flex items-center gap-2 text-2xl md:text-3xl  ${colorClass} font-bold `}
      >
        {icon}
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Headingtitle;
