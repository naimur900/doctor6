"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ShowMoreButton = ({ matchDirectory, text }: any) => {
  const pathname = usePathname();

  return (
    <>
      {pathname != matchDirectory && (
        <Link href={matchDirectory} passHref className="relative z-10">
          <button className="bg-orange-600 hover:bg-red-400 text-white w-20 p-2 rounded-lg font-semibold text-center my-5">
            {text}
          </button>
        </Link>
      )}
    </>
  );
};

export default ShowMoreButton;
