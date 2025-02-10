"use client";

// import { menuItemVariants, menuVariants } from "@/app/motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
// import { aboutVariants } from "../motion";
import { introInfo, navItems } from "@/app/utils/data";

export default function Navbar() {
  // const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 20);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);        <Navbar />

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="bg-gradient-to-r py-4 from-blue-950 to-red-800 shadow-lg"
      //   variants={aboutVariants}
      //   initial="hidden"
      //   animate="visible"
    >
      <div className="mx-auto px-4 md:max-w-3xl md:px-8 lg:max-w-6xl z-50 text-gray-200">
        <div className="flex justify-between items-center pb-3 md:pb-0">
          <Link href={"/"}>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src={introInfo.imgAvatarUrl}
                  alt={introInfo.nameEng}
                />
                <AvatarFallback>
                  <FaUser />
                </AvatarFallback>
              </Avatar>
              <span className="font-semibold text-lg">{introInfo.nameEng}</span>
            </div>
          </Link>

          {/* Animated Hamburger menu for mobile */}
          <button
            className="md:hidden text-gray-200 focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg width="23" height="23" viewBox="0 0 23 23">
              <path
                fill="transparent"
                strokeWidth="3"
                stroke="currentColor"
                strokeLinecap="round"
                // variants={{
                //   closed: { d: "M 2 2.5 L 20 2.5" },
                //   open: { d: "M 3 16.5 L 17 2.5" },
                // }}
                // initial="closed"
                // animate={isMenuOpen ? "open" : "closed"}
              />
              <path
                fill="transparent"
                strokeWidth="3"
                stroke="currentColor"
                strokeLinecap="round"
                d="M 2 9.423 L 20 9.423"
                // variants={{
                //   closed: { opacity: 1 },
                //   open: { opacity: 0 },
                // }}
                // transition={{ duration: 0.1 }}
                // initial="closed"
                // animate={isMenuOpen ? "open" : "closed"}
              />
              <path
                fill="transparent"
                strokeWidth="3"
                stroke="currentColor"
                strokeLinecap="round"
                // variants={{
                //   closed: { d: "M 2 16.346 L 20 16.346" },
                //   open: { d: "M 3 2.5 L 17 16.346" },
                // }}
                // initial="closed"
                // animate={isMenuOpen ? "open" : "closed"}
              />
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-4 items-center">
            {navItems.map(({ id, label }) => (
              <li key={label}>
                <Link
                  href={id}
                  prefetch={true}
                  className="flex items-center hover:text-white transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        {/* <AnimatePresence> */}
        {isMenuOpen && (
          <ul
            className="md:hidden space-y-2 overflow-hidden"
            //   variants={menuVariants}
            //   initial="hidden"
            //   animate="visible"
            //   exit="hidden"
          >
            {navItems.map(({ id, label }) => (
              <li
                key={label}
                // variants={menuItemVariants}
              >
                <Link
                  href={id}
                  className="flex items-center hover:text-white transition-colors duration-300"
                  prefetch={true}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {/* </AnimatePresence> */}
      </div>
    </nav>
  );
}
