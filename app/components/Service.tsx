"use client";
import { Card } from "@/components/ui/card";
import { motion } from "motion/react";
import Image from "next/image";
import { serviceVariants } from "../motion";
import { services } from "../utils/data";
import ShowMoreButton from "./ShowMoreButton";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Service = ({ numberOfServices, useWhileInView, showMore }: any) => {
  return (
    <motion.div
      variants={serviceVariants}
      initial="hidden"
      {...(useWhileInView
        ? { whileInView: "visible", viewport: { once: true, amount: 0.2 } }
        : { animate: "visible" })}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.slice(0, numberOfServices).map((service, index) => (
          <Card
            key={index}
            className="overflow-hidden bg-[#eeeae8] rounded-3xl drop-shadow-xl transform transition-transform duration-300 hover:scale-105"
          >
            <div className="p-5 flex flex-col h-full gap-4">
              <div className="p-3 rounded-xl h-full">
                <div className="mb-4">
                  <span className="px-4 py-1 text-sm font-medium text-white bg-blue-400 rounded-full">
                    Valuable
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  {service.title}
                </h2>

                <p className="text-gray-600 flex-grow">{service.description}</p>
              </div>

              <div className="relative w-full aspect-[16/10] mt-auto">
                <Image
                  src={"/images/place-holder-image.png"}
                  alt={service.title}
                  fill
                  className="rounded-xl object-cover border-2 border-solid border-[#213555]"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
      {showMore && (
        <div>
          <ShowMoreButton matchDirectory={"/services"} text={"More Services"} />
        </div>
      )}
    </motion.div>
  );
};

export default Service;
