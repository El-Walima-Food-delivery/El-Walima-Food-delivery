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
    <div className="max-w-screen-xl mx-auto my-12 px-6">
      <h1 className="text-4xl poppins pb-4">Why you choose us</h1>
      <p className="text-gray-500 text-sm poppins w-2/4">
        Barton waited twenty always repair in within we do. AN delighted
        offending curiosity my is dashwoods at. Boy prosperous increasing
        surrounded.
      </p>

      {/* Uncomment and adjust if you decide to use the AboutItem component /}
            {/ <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                {aboutData.map(item => (
                    <AboutItem key={item.id} {...item} />
                ))}
            </div> */}
    </div>
  );
};

export default AboutUs;
