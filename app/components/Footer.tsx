// "use client";
// import { motion } from "motion/react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaVoicemail } from "react-icons/fa";
// import { footerVariants } from "../motion";

const Footer = () => {
  return (
    <div
      //   variants={footerVariants}
      //   initial="hidden"
      //   animate="visible"
      className="bg-[#356BBB]   text-gray-200"
    >
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {/* Contact Information */}
          <div className="text-sm">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">
              House# 48, Road# 9A, Dhanmondi R/A, 28, Dhaka 1209
            </p>
            <p className="mb-2">Phone: 09611530530</p>
            <p>Email: info@drmasudakhatun.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-300 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-300 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:info@doctorportfolio.com" aria-label="Email">
                <FaVoicemail />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          {/* &copy; {new Date().getFullYear()} All Right Reserved - Powered By */}
          &copy; 2025 All Right Reserved - Powered By
          <Link href="https://www.eminencesoftware.com" target="_blank">
            <p className="text-purple-200 hover:underline">
              Eminence Software Limited.
            </p>
          </Link>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
