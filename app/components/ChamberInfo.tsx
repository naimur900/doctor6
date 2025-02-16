"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import Image from "next/image";
import { FaHourglass, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { chamberVariants } from "../motion";

interface Chamber {
  id: string;
  name: string;
  location: string;
  visiting: string;
  contact: string;
  imgURL?: string;
  mapSrc?: string;
}

interface ChamberInfoProps {
  chamber?: Chamber;
  useWhileInView?: boolean;
}

const ChamberInfo: React.FC<ChamberInfoProps> = ({ chamber }) => {
  // ✅ If chamber is undefined, show a fallback message
  if (!chamber) {
    return (
      <div className="text-center text-gray-500 py-10">
        No chamber data available.
      </div>
    );
  }

  return (
    <motion.div
      className="relative z-10"
      variants={chamberVariants}
      initial="hidden"
      animate="visible"
    >
      <Card className="flex flex-col gap-5 md:flex-row drop-shadow-xl p-6 bg-blue-100">
        <div className="md:w-5/12 flex flex-col items-center gap-4">
          <div className="w-full aspect-[4/3] relative">
            <Image
              src={chamber.imgURL || "/placeholder.svg"}
              alt={"hospital"}
              fill
              className="rounded-lg drop-shadow-xl object-cover"
            />
          </div>

          <div className="bg-[#F7F3ED] rounded-xl w-full drop-shadow-xl">
            <CardHeader>
              <CardTitle className="font-semibold text-lg text-red-600">
                {chamber.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div>
                  <FaLocationDot />
                </div>
                <div>
                  <p>{chamber.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <FaHourglass />
                </div>
                <div>
                  <p>{chamber.visiting}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <FaPhone />
                </div>
                <div>
                  <p>{chamber.contact}</p>
                </div>
              </div>
            </CardContent>
          </div>
        </div>

        {/** ✅ Only render iframe if `mapSrc` exists */}
        {chamber.mapSrc ? (
          <div className="md:w-7/12 relative w-full h-96 md:h-auto rounded-lg">
            <iframe
              src={chamber.mapSrc}
              width="100%"
              height="100%"
              style={{
                border: 0,
                position: "absolute",
                top: 0,
                left: 0,
                objectFit: "cover",
              }}
              className="drop-shadow-xl rounded-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        ) : (
          <div className="text-center text-gray-500 w-full md:w-7/12">
            No map available.
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default ChamberInfo;
