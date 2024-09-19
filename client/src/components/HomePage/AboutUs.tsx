import React, { useState } from "react";
// import AboutItem from './AboutItem';

interface AboutItemData {
  id: string;
  // Add other properties as needed
}

const AboutUs: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutItemData[]>([]);

  // Uncomment and adjust types if you decide to use this effect
  // useEffect(() => {
  //     fetch('/aboutus.json')
  //         .then(res => res.json())
  //         .then((data: AboutItemData[]) => setAboutData(data))
  // }, []);

  return (
    <div className="max-w-screen-xl mx-auto my-12 px-6 bg-gray-50 shadow-lg rounded-lg p-10">
      <div className="text-center">
        <h1
          className="text-5xl font-extrabold poppins pb-4 leading-tight"
          style={{ color: "#adb5bd" }}
        >
          A Journey of Trust and Togetherness
        </h1>
        <p className="text-gray-600 text-lg poppins w-full md:w-3/4 mx-auto mt-4">
          We believe in more than just services; we believe in creating
          meaningful connections. Every step we take is for you, to make your
          life easier, brighter, and full of care. Because for us, you are not
          just a client—you are family.
        </p>
      </div>

      {/* Uncomment and adjust if you decide to use the AboutItem component */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {aboutData.map(item => (
              <AboutItem key={item.id} {...item} />
          ))} 
      </div> */}

      {/* Add a decorative element below */}
      <div className="mt-12 flex justify-center">
        <div
          className="h-1 w-20 rounded"
          style={{ backgroundColor: "#adb5bd" }} // Calming teal color
        ></div>
      </div>
    </div>
  );
};

export default AboutUs;
