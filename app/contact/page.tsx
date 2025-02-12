// "use client";
import "../../app/main.css";

import BreadCrum from "../components/Breadcrum";
// import Image from "next/image";
import Chamber from "../components/Chamber";
// import ContactForm from "../components/ContactForm";

const page = () => {
  return (
    <div className="min-h-screen pattern pattern-opacity-increase bg-dot-pattern bg-gradient-to-b from-[#F7F3ED] to-blue-100">
      <BreadCrum />
      <main
        className={`container pb-24 mx-auto px-10 sm:px-20 lg:px-32 xl:px-40 bg-opacity-5`}
      >
        <Chamber useWhileInView={false} />
        {/* <div className="flex flex-col-reverse lg:flex-row justify-between mt-16 items-center">
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>
          <div>
            <Image
              src={"/images/formImage.png"}
              height={"400"}
              width={"400"}
              alt={"formImage"}
            ></Image>
          </div>
        </div> */}
      </main>
    </div>
  );
};

export default page;
