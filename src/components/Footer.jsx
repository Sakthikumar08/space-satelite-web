import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-800 w-full z-50 relative overflow-hidden">
      <section className="max-w-[1200px] mx-auto text-white overflow-visible">
        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 px-5">
          {/* First column */}
          <div>
            <h1 className="text-3xl font-bold mb-3">
              Be Ready To Grow
            </h1>
            <p className="text-gray-400">
              Get exclusive{" "}
              <span className="text-white font-bold">best updates</span> straight
              to your inbox.
            </p>
            <div className="flex mt-4">
              <input
                className="py-2 px-3 w-full bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                type="text"
                placeholder="Email"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2">
                Ok
              </button>
            </div>
          </div>

          {/* Second column */}
          <div>
            <h1 className="text-xl font-bold mb-3">
              Important Links
            </h1>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:underline">Home</li>
              <li className="cursor-pointer hover:underline">About</li>
              <li className="cursor-pointer hover:underline">Services</li>
              <li className="cursor-pointer hover:underline">Login</li>
            </ul>
          </div>

          {/* Third column */}
          <div>
            <h1 className="text-xl font-bold mb-3">
              Contact Us
            </h1>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <HiLocationMarker />
                <span>Noida, Uttar Pradesh</span>
              </li>
              <li className="flex items-center gap-2">
                <MdMessage />
                <span>abc@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MdCall />
                <span>+91 123456789</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="border-t border-gray-700 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between px-5">
            <span className="text-gray-400 text-sm">
              &copy; 2024 Travery || Dilshad
            </span>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
            <ul className="flex space-x-4 mt-4 md:mt-0 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
