// "use client";
import "../../app/main.css";
import BreadCrum from "../components/Breadcrum";
import Tip from "../components/Tip";

const page = () => {
  return (
    <div className="min-h-screen pattern pattern-opacity-increase bg-dot-pattern bg-gradient-to-b from-[#F7F3ED] to-blue-100">
      <BreadCrum />
      <main
        className={`container mx-auto px-10 sm:px-20 lg:px-32 xl:px-40 bg-opacity-5`}
      >
        <Tip />
      </main>
    </div>
  );
};

export default page;
