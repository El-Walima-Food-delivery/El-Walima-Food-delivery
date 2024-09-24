import React from "react";
import { FaSearch, FaUtensils, FaTruck } from "react-icons/fa";

const steps = [
  {
    icon: FaSearch,
    title: "Choose Your Food",
    description: "Browse our wide selection of delicious meals",
  },
  {
    icon: FaUtensils,
    title: "Place Your Order",
    description: "Customize your order and proceed to checkout",
  },
  {
    icon: FaTruck,
    title: "Fast Delivery",
    description: "Enjoy your meal delivered right to your doorstep",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-full p-6 inline-block mb-4">
                <step.icon className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
