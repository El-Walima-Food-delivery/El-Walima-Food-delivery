import React from 'react';

const Dashboard1: React.FC = () => {
  return (
    <div className="flex bg-gray-50">
      {/* Side Nav placeholder - adjust width as needed */}
      <div className="w-1/12 bg-red-900 min-h-screen">
        {/* Add your side nav content here */}
      </div>

      {/* Main content area */}
      <div className="w-11/12 px-8 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            <div className="xl:col-span-3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-red-600 text-white p-4">
                  <h2 className="text-2xl">Sales Statistics</h2>
                </div>
                <div className="p-4">
                  {/* Add your sales chart component here */}
                  <p>Sales chart placeholder</p>
                </div>
              </div>
            </div>
            <div className="xl:col-span-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-orange-500 text-white p-4">
                  <h2 className="text-2xl">Performance</h2>
                </div>
                <div className="p-4">
                  {/* Add your performance metrics here */}
                  <p>Performance metrics placeholder</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
            {['red', 'orange', 'yellow', 'amber'].map((color, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className={`bg-${color}-500 p-4 flex justify-center items-center`}>
                  <span className="text-white text-3xl">
                    {index === 0 && '↗'}
                    {index === 1 && '👥'}
                    {index === 2 && '🏪'}
                    {index === 3 && '📄'}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-gray-700">
                    {index === 0 && "Today's Revenue"}
                    {index === 1 && 'Total Customers'}
                    {index === 2 && 'Open Orders'}
                    {index === 3 && 'Pending Reviews'}
                  </h4>
                  <h2 className="text-2xl font-semibold text-gray-700">
                    {index === 0 && '$15,300'}
                    {index === 1 && '1,245'}
                    {index === 2 && '32'}
                    {index === 3 && '15'}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;