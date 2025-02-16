import BreadCrum from "@/app/components/Breadcrum";
import ChamberInfo from "@/app/components/ChamberInfo";
import { chambers } from "@/app/utils/data";
import "../../app/main.css";

interface PageProps {
  params: {
    id: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params; // ✅ Await params before destructuring
  console.log("Chamber ID:", id);

  // ✅ Ensure id is a string (sometimes it's a number or undefined)
  if (!id || typeof id !== "string") {
    console.error("Invalid chamber ID");
    return (
      <div className="text-center text-gray-500 py-10">Invalid chamber ID</div>
    );
  }

  const chamber = chambers.find((chamber) => chamber.id === id);

  if (!chamber) {
    console.log("No chamber found");
    return <div>No chamber found</div>;
  }

  return (
    <div className="min-h-screen pb-24 pattern pattern-opacity-increase bg-dot-pattern">
      <BreadCrum />
      <main
        className={`container mx-auto px-10 sm:px-20 lg:px-32 xl:px-40 bg-opacity-5`}
      >
        <ChamberInfo chamber={chamber} useWhileInView={false} />
      </main>
    </div>
  );
};

export default Page;
