import React from "react";
import { FaHeart } from "react-icons/fa";

const BottomFooter: React.FC = () => {
  return (
    <div className="bg-[rgb(31_41_55_/var(--tw-bg-opacity))] text-white py-2 px-2 flex flex-col items-center text-center">
      {/* Developed by with heart */}
      <div className="mb-1 text-xs">
        <span className="font-semibold">Developed with </span>
        <FaHeart className="inline-block text-red-400 mx-1" />
        {/* <span className="font-semibold"> by Your Team</span> */}
      </div>

      {/* Links */}
      <div className="flex space-x-3 mt-1">
        {["Privacy Policy", "Terms of Use", "Pricing"].map((link, index) => (
          <span
            key={index}
            className="text-white text-xs hover:text-gray-400 transition-colors cursor-pointer"
          >
            {link}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BottomFooter;
