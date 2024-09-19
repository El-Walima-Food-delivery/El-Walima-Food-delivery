import React from "react";
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
    { id: 9, text: "Facebook" },
    { id: 10, text: "Instagram" },
    { id: 11, text: "Twitter" },
    { id: 12, text: "Youtube" },
  ];

  return (
    <div className="flex pb-8">
      {/* logo  */}
      <div className="flex flex-grow">
        <Brand />
      </div>
      {/* footer links  */}
      <div className="flex space-x-12">
        {[0, 4, 8].map((startIndex) => (
          <div key={startIndex} className="flex flex-col space-y-2">
            {FooterLinks.slice(startIndex, startIndex + 4).map((item) => (
              <span className="text-white poppins" key={item.id}>
                {item.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainFooter;
