import { FaHospitalAlt } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdHomeRepairService, MdOutlineRateReview } from "react-icons/md";
import { SiGooglescholar } from "react-icons/si";
import "../app/main.css";
import About from "./components/About";
import Chamber from "./components/Chamber";
import Headingtitle from "./components/HeadingTitle";
import Intro from "./components/Intro";
import Publication from "./components/Publication";
import Review from "./components/Review";
import Service from "./components/Service";
import Tip from "./components/Tip";
import Wrapper from "./components/Wrapper";

// bg-[#F7F3ED]
export default function Home() {
  return (
    <main>
      <div className="pattern pattern-opacity-increase bg-dot-pattern">
        <div className="py-10 md:py-12 ">
          <Wrapper>
            <Intro />
          </Wrapper>
        </div>
        {/* my-10 md:my-12  */}

        <div className="pb-16">
          <Wrapper>
            <Headingtitle
              icon={<MdHomeRepairService className="text-blue-700" />}
              title={"Services"}
              colorClass={"text-blue-700"}
            />
            <Service
              numberOfServices={3}
              useWhileInView={true}
              showMore={true}
            />
          </Wrapper>
        </div>
      </div>

      <div className="pattern pattern-opacity-decrease bg-dot-pattern ">
        <div className="pb-16">
          <Wrapper>
            <Headingtitle
              icon={<FcAbout />}
              title={"About"}
              colorClass={"text-blue-700"}
            />
            <About useWhileInView={true} />
          </Wrapper>
        </div>
        <div className="pb-16">
          <Wrapper>
            <Headingtitle
              icon={<FaHospitalAlt className="text-blue-700" />}
              title={"Chamber and timing"}
              colorClass={"text-blue-700"}
            />
            <Chamber useWhileInView={true} />
          </Wrapper>
        </div>
      </div>

      <div className="pattern pattern-opacity-increase bg-dot-pattern pb-16">
        <div>
          <Wrapper>
            <Headingtitle
              icon={<SiGooglescholar className="text-blue-700" />}
              title={"Journals / Publications"}
              colorClass={"text-blue-700"}
            />
            <Publication useWhileInView={true} />
          </Wrapper>
        </div>
      </div>

      <div className="pattern pattern-opacity-decrease bg-dot-pattern ">
        <div className="pb-16">
          <Wrapper>
            <Headingtitle
              icon={<SiGooglescholar className="text-blue-700" />}
              title={"Tips"}
              colorClass={"text-blue-700"}
            />
            <Tip />
          </Wrapper>
        </div>
        <div className="pb-28">
          <Wrapper>
            <Headingtitle
              icon={<MdOutlineRateReview className="text-blue-700" />}
              title={"Reviews"}
              colorClass={"text-blue-700"}
            />
            <Review useWhileInView={true} />
          </Wrapper>
        </div>
      </div>
    </main>
  );
}
