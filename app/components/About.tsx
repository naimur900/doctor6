"use client";

import { about } from "@/app/utils/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Content = ({ items }: { items: typeof about }) => {
  return (
    <ul className="">
      {items.map((info, index) => (
        <li key={index}>
          <div
            className={`bg-[#F7F3ED] my-4 md:my-1 md:text-${info.titlePos} p-5 shadow-xl rounded-2xl`}
          >
            <time className="text-base md:text-lg font-semibold text-red-600">
              {info.title}
            </time>
            <div className="font-light text-base">
              <ul className="list-disc pl-6 rounded-2xl">
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

  // Get the first category key
  const firstCategory = Object.keys(categories)[0];

  return (
    <Tabs defaultValue={firstCategory} className="">
      <TabsList className="w-full h-auto flex flex-wrap gap-2 p-2 bg-[#356BBB] rounded-lg">
        {Object.keys(categories).map((category) => (
          <TabsTrigger
            key={category}
            value={category}
            className="flex-1 min-w-[120px] data-[state=active]:bg-[#F7F3ED] data-[state=active]:text-slate-900 text-white text-lg"
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
  );
};

export default About;
