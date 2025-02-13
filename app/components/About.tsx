"use client";
import { about } from "@/app/utils/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";
import { aboutVariants } from "../motion";

const Content = ({ items }: { items: typeof about }) => {
  return (
    <ul className="">
      {items.map((info, index) => (
        <li key={index} className="">
          <div
            className={`bg-[#F7F3ED] md:text-${info.titlePos} p-5 drop-shadow-xl rounded-3xl`}
          >
            <time className="text-base md:text-xl font-semibold text-red-600">
              {info.title}
            </time>
            <div className="font-light text-base md:text-lg">
              <ul className="list-disc pl-6">
                {info.content.split("\n").map((item, i) => (
                  <li key={i}>{item.trim()}</li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
        </li>
      ))}
    </ul>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const About = ({ useWhileInView }: any) => {
  // Filter about data into categories
  const categories = {
    Concentration: about.filter(
      (item) =>
        item.title === "Concentration" || item.title.includes("Concentration")
    ),
    Experience: about.filter(
      (item) => item.title === "Experience" || item.title.includes("Experience")
    ),
    Specialization: about.filter(
      (item) =>
        item.title === "Specialization" || item.title.includes("Specialization")
    ),
    Education: about.filter(
      (item) => item.title === "Education" || item.title.includes("Education")
    ),
  };

  const firstCategory = Object.keys(categories)[0];

  return (
    <motion.div
      variants={aboutVariants}
      initial="hidden"
      {...(useWhileInView
        ? { whileInView: "visible", viewport: { once: true, amount: 0.4 } }
        : { animate: "visible" })}
    >
      <Tabs defaultValue={firstCategory} className="relative z-10">
        <TabsList className="w-full h-auto flex flex-wrap gap-2 p-2 bg-gradient-to-r from-[#3E5879] to-blue-400 rounded-2xl">
          {Object.keys(categories).map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="flex-1 min-w-[120px] data-[state=active]:bg-[#F7F3ED] data-[state=active]:text-slate-900 text-white text-lg md:text-xl rounded-xl"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(categories).map(([category, items]) => (
          <TabsContent key={category} value={category} className="">
            <Content items={items} />
          </TabsContent>
        ))}
      </Tabs>
    </motion.div>
  );
};

export default About;
