import React from "react";
import { FaHeart } from "react-icons/fa";

const BottomFooter: React.FC = () => {
  return (
    <div className="bg-[#ced4da] text-gray-800 py-4 px-12 flex items-center justify-between">
      {/* Developed by */}
      <div className="flex items-center">
        <span className="poppins text-gray-600 mr-2">Developed by</span>
        <FaHeart className="text-red-500" />
      </div>

      {/* Links */}
      <div className="flex space-x-6">
        <span className="poppins text-gray-600 hover:text-gray-800 cursor-pointer">
          Privacy Policy
        </span>
        <span className="poppins text-gray-600 hover:text-gray-800 cursor-pointer">
          Terms of Use
        </span>
        <span className="poppins text-gray-600 hover:text-gray-800 cursor-pointer">
          Pricing
        </span>
      </div>
    </div>
  );
};

export default BottomFooter;
