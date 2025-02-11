import BreadCrum from "@/app/components/Breadcrum";
import ChamberInfo from "@/app/components/ChamberInfo";
import { chambers } from "@/app/utils/data";
// Generate static paths for all chambers
export async function generateStaticParams() {
  return chambers.map((chamber) => ({
    id: chamber.id,
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page = async ({ params }: any) => {
  const { id } = await params;
  console.log(id);

  const chamber = chambers.find((chamber) => chamber.id === id);

  if (!chamber) {
    console.log("No chamber found");
    return <div>No chamber found</div>;
  }

  return (
    <div className="min-h-screen pb-24 bg-[#F7F3ED]">
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
