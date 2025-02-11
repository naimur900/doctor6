// "use client";
import About from "../components/About";
import BreadCrum from "../components/Breadcrum";

const page = () => {
  return (
    <div className="min-h-screen bg-blue-100">
      <BreadCrum />
      <main
        className={`container mx-auto px-10 sm:px-20 lg:px-32 xl:px-40 bg-opacity-5`}
      >
        <About useWhileInView={false} />
      </main>
    </div>
  );
};

export default page;
