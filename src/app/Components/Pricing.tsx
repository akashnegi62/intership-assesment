"use client";

import React from "react";
import gsap from "gsap";

interface Plan {
  label: string;
  price: string;
  description: string;
  buttonText: string;
  buttonStyle: string;
  features: string[];
  border: string;
}

const plans: Plan[] = [
  {
    label: "Personal",
    price: "Free",
    description: "To discover our product and its features",
    buttonText: "Learn more",
    buttonStyle: "bg-gray-800 text-white hover:bg-gray-700",
    features: [
      "Unlimited Projects",
      "Share with 5 team members",
      "Sync across devices",
      "20GB individual data each user",
    ],
    border: "border-gray-700",
  },
  {
    label: "Personal Pro",
    price: "$20",
    description: "The best option for individual notetakers",
    buttonText: "Try for free",
    buttonStyle: "bg-yellow-400 text-black hover:bg-yellow-300",
    features: [
      "Unlimited Projects",
      "Share with 25 team members",
      "Sync across devices",
      "50GB individual data each user",
    ],
    border: "border-yellow-500",
  },
  {
    label: "Team",
    price: "$50",
    description: "Best suited for larger notetakers",
    buttonText: "Try for free",
    buttonStyle: "bg-white text-black hover:bg-gray-200",
    features: [
      "Unlimited Projects",
      "Unlimited team members",
      "Sync across devices",
      "Unlimited individual data each user",
    ],
    border: "border-gray-700",
  },
];

const cardEnter = (index: number) => {
  gsap.to(`.hover_card:nth-child(${index + 1})`, {
    scale: 1.1,
    duration: 0.2,
  });
};

const cardLeave = (index: number) => {
  gsap.to(`.hover_card:nth-child(${index + 1})`, {
    scale: 1,
    duration: 0.2,
  });
};

const Pricing: React.FC = () => {
  return (
    <div id="pricing" className="price min-h-[110vh] w-full bg-black py-5">
      <h1 className="text-[8vh] lg:text-[10vw] font-[Amer] text-white text-center">
        Pricing
      </h1>
      <section className="bg-black text-white py-10 px-6 text-center font-[fig]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-5 lg:mb-2">
            Choose the plan that fits your needs.
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Netus sagittis sapien sed montes condimentum. Eu eget ut cras
            viverra. Volutpat posuere ac nulla scelerisque.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              onMouseEnter={() => cardEnter(index)}
              onMouseLeave={() => cardLeave(index)}
              className={`hover_card min-h-[60vh] md:min-h-[50vh] border rounded-2xl p-6 ${plan.border} bg-black transition-transform duration-300 flex flex-col justify-between`}
            >
              <div className="text-sm px-3 py-1 rounded-full border border-gray-600 w-fit mb-4 text-gray-300">
                {plan.label}
              </div>
              <h3 className="text-3xl font-semibold text-start ml-5">
                {plan.price}
                {plan.price !== "Free" && (
                  <span className="text-base font-normal"> per month</span>
                )}
              </h3>
              <p className="text-sm text-gray-400 mt-1 mb-6 text-start ml-5">
                {plan.description}
              </p>

              <ul className="space-y-3 text-sm text-gray-300 mb-6 text-start ml-5">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-yellow-400">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full mt-10 py-2 rounded-lg font-medium ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
