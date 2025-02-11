"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HomeIcon } from "lucide-react";
// import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { breadCrumVariants } from "../motion";

const BreadCrum = () => {
  const pathname = usePathname();
  // console.log(pathname);
  const paths = pathname.split("/").filter((path) => path);
  // console.log(paths);

  //   // If we're on the home page, just return the home icon
  //   if (paths.length === 0) {
  //     return (
  //       <Breadcrumb>
  //         <BreadcrumbList>
  //           <BreadcrumbItem>
  //             <BreadcrumbPage>
  //               <HomeIcon className="h-4 w-4" />
  //             </BreadcrumbPage>
  //           </BreadcrumbItem>
  //         </BreadcrumbList>
  //       </Breadcrumb>
  //     );
  //   }
  return (
    <div
      //   variants={breadCrumVariants}
      //   initial="hidden"
      //   animate="visible"
      className="container mx-auto px-10 sm:px-20 lg:px-32 xl:px-40 py-8 md:py-10"
    >
      <Breadcrumb>
        <BreadcrumbList className="text-3xl">
          <BreadcrumbItem>
            <Link href={"/"}>
              <HomeIcon className="h-6 w-6 text-blue-700 font-bold" />
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-blue-700 font-extrabold" />
          {paths.map((path, index) => {
            const href = `/${paths.slice(0, index + 1).join("/")}`;
            const isLast = index === paths.length - 1;

            return (
              <BreadcrumbItem className="" key={path}>
                {isLast ? (
                  <BreadcrumbPage className="text-blue-700 font-bold capitalize">
                    {path.toLowerCase()}
                  </BreadcrumbPage>
                ) : (
                  <>
                    {/* <BreadcrumbLink href={href}>{path}</BreadcrumbLink> */}
                    <Link href={href}>{path}</Link>
                    <BreadcrumbSeparator />
                  </>
                )}
              </BreadcrumbItem>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrum;
