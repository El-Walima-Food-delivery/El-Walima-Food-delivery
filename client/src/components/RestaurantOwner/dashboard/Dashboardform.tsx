import React from "react";
import Heading from "../Heading";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", revenue: 4000, customers: 2400 },
  { name: "Feb", revenue: 3000, customers: 1398 },
  { name: "Mar", revenue: 2000, customers: 9800 },
  { name: "Apr", revenue: 2780, customers: 3908 },
  { name: "May", revenue: 1890, customers: 4800 },
  { name: "Jun", revenue: 2390, customers: 3800 },
  { name: "Jul", revenue: 3490, customers: 4300 },
];

const Dashboard1: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 p-8  min-h-screen mr-10">
      <Heading text="Dashboard" />
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-3">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6">
              <h2 className="text-2xl font-semibold">Sales Statistics</h2>
            </div>
            <div className="p-6">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#ff6384"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="customers" stroke="#36a2eb" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-400 text-white p-6">
              <h2 className="text-2xl font-semibold">Performance</h2>
            </div>
            <div className="p-6">
              <p>Performance metrics placeholder</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
        {[
          {
            color: "blue",
            icon: "↗",
            title: "Today's Revenue",
            value: "$15,300",
          },
          {
            color: "green",
            icon: "👥",
            title: "Total Customers",
            value: "1,245",
          },
          { color: "red", icon: "🏪", title: "Open Orders", value: "32" },
          {
            color: "yellow",
            icon: "📄",
            title: "Pending Reviews",
            value: "15",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div
              className={`bg-gradient-to-r from-${item.color}-600 to-${item.color}-400 p-6 flex justify-center items-center`}
            >
              <span className="text-white text-3xl">{item.icon}</span>
            </div>
            <div className="p-6">
              <h4 className="font-medium text-gray-700">{item.title}</h4>
              <h2 className="text-2xl font-semibold text-gray-700">
                {item.value}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard1;
