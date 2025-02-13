// "use client";
import "../../app/main.css";
import BreadCrum from "../components/Breadcrum";
import Service from "../components/Service";
import { services } from "../utils/data";

const page = () => {
  return (
    <div className="min-h-screen pattern pattern-opacity-increase bg-dot-pattern ">
      <BreadCrum />
      <main
        className={`container mx-auto pb-24 px-10 sm:px-20 lg:px-32 xl:px-40 bg-opacity-5`}
      >
        <Service
          numberOfServices={services.length}
          useWhileInView={false}
          showMore={false}
        />
      </main>
    </div>
  );
};

export default page;
