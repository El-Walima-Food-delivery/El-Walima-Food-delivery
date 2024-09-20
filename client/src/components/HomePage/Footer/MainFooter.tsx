import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Brand from "../../Form/Brand";

interface FooterLink {
  id: number;
  text: string;
}

const MainFooter: React.FC = () => {
  // footer links
  const FooterLinks: FooterLink[] = [
    { id: 1, text: "About Online Food" },
    { id: 2, text: "Read our blog" },
    { id: 3, text: "Sign up to deliver" },
    { id: 4, text: "Add your restaurant" },
    { id: 5, text: "Get Help" },
    { id: 6, text: "Ask any question" },
    { id: 7, text: "Order Now" },
    { id: 8, text: "Contact" },
  ];

  return (
    <div className="bg-[rgb(31_41_55_/var(--tw-bg-opacity))] text-white py-4 px-3 text-center">
      {/* Branding */}
      <div className="mb-3">
        <Brand />
      </div>

      {/* Footer links in two rows */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center mb-4">
        {FooterLinks.map((item) => (
          <span
            key={item.id}
            className="text-white text-xs hover:text-gray-400 transition-colors cursor-pointer"
          >
            {item.text}
          </span>
        ))}
      </div>

      {/* Social media icons */}
      <div className="flex justify-center space-x-2 mt-1">
        <FaFacebookF className="text-white text-xs hover:text-gray-400 transition-colors cursor-pointer" />
        <FaInstagram className="text-white text-xs hover:text-gray-400 transition-colors cursor-pointer" />
        <FaTwitter className="text-white text-xs hover:text-gray-400 transition-colors cursor-pointer" />
        <FaYoutube className="text-white text-xs hover:text-gray-400 transition-colors cursor-pointer" />
      </div>

      {/* Divider Line */}
      <div className="mt-2 w-full h-px bg-gray-400"></div>
    </div>
  );
};

export default MainFooter;
