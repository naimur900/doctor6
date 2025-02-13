"use client";
import { chambers } from "@/app/utils/data";
import { Card } from "@/components/ui/card";
import { motion } from "motion/react";
import Image from "next/image";
import { FaHourglass, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { chamberVariants } from "../motion";
import ShowMoreButton from "./ShowMoreButton";

const Chamber = ({ useWhileInView }: any) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-7"
      variants={chamberVariants}
      initial="hidden"
      {...(useWhileInView
        ? { whileInView: "visible", viewport: { once: true, amount: 0.2 } }
        : { animate: "visible" })}
    >
      {chambers.map((chamber, index) => (
        <Card
          key={index}
          className="overflow-hidden bg-[#eeeae8] rounded-3xl transform transition-transform duration-300 hover:scale-105"
        >
          <div className="p-6 flex flex-col h-full gap-4">
            <div className="ounded-xl h-full p-5">
              <div className="mb-4">
                <span className="px-4 py-1 text-sm font-medium text-white bg-blue-400 rounded-full">
                  Active
                </span>
              </div>

              <h2 className="text-xl font-semibold text-red-600 mb-3">
                {chamber.name}
              </h2>

              <div className="space-y-3 text-base mb-6 flex-grow">
                <div className="flex items-center gap-2">
                  <FaLocationDot className="text-gray-600 flex-shrink-0" />
                  <p>{chamber.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaHourglass className="text-gray-600 flex-shrink-0" />
                  <p>{chamber.visiting}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhone className="text-gray-600 flex-shrink-0" />
                  <p>{chamber.contact}</p>
                </div>
              </div>
            </div>

            <div className="relative w-full aspect-[16/10] mt-auto">
              <Image
                src={chamber.imgURL || "/placeholder.svg"}
                alt={chamber.name}
                fill
                className="rounded-xl object-cover border-2 border-solid border-[#213555]"
              />
            </div>

            <div className="drop-shadow-xl">
              <ShowMoreButton
                text={"More..."}
                matchDirectory={`/${chamber.id}`}
              />
            </div>
          </div>
        </Card>
      ))}
    </motion.div>
  );
};

export default Chamber;
