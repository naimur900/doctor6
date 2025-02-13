"use client";
import { reviews } from "@/app/utils/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";
import { FaQuoteRight } from "react-icons/fa";

import React from "react";
import { reviewVariants } from "../motion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Review = ({ useWhileInView }: any) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );
  return (
    <motion.div
      variants={reviewVariants}
      initial="hidden"
      {...(useWhileInView
        ? { whileInView: "visible", viewport: { once: true, amount: 0.6 } }
        : { animate: "visible" })}
      className="space-y-4"
    >
      <Carousel
        className="border p-12 rounded-3xl bg-[#F7F3ED] drop-shadow-xl"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {reviews.map((rev, index) => (
            <CarouselItem
              key={index}
              // className="md:basis-1/2 lg:basis-1/2 pl-2 md:pl-4"
              className="text-center"
            >
              <FaQuoteRight />
              <div className="flex flex-col gap-3">
                <p className="italic font-extralight text-lg">{rev.text}</p>
                <p className="text-sm">- {rev.person}</p>
                <p className="text-sm">{rev.star}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.div>
  );
};

export default Review;
