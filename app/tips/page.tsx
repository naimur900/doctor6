// "use client";
import BreadCrum from "../components/Breadcrum";
import Tip from "../components/Tip";

const page = () => {
  return (
    <div className="min-h-screen bg-[#F7F3ED]">
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
