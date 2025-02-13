// "use client";
import BreadCrum from "../components/Breadcrum";
import Publication from "../components/Publication";

const page = () => {
  return (
    <div className="min-h-screen pattern pattern-opacity-increase bg-dot-pattern">
      <BreadCrum />
      <main
        className={`container mx-auto px-10 sm:px-20 lg:px-32 xl:px-40 bg-opacity-5`}
      >
        <Publication useWhileInView={false} />
      </main>
    </div>
  );
};

export default page;
