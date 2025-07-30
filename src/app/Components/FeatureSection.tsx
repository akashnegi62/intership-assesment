import React from "react";
import FeatureBlock from "@/app/Ui/FeatureBlock";

const features = [
  {
    title: "Targeted Campaigns",
    description:
      "Leverage audience data to deliver highly personalized ad experiences.",
    image:
      "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRhcmdldCUyMGF1ZGllbmNlfGVufDB8fDB8fHww",
  },
  {
    title: "Real-Time Analytics",
    description:
      "Monitor ad performance instantly and optimize for better ROI.",
    image:
      "https://plus.unsplash.com/premium_photo-1663050693144-6b5bc76d2214?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFJlYWwlMjBUaW1lJTIwQW5hbHl0aWNzfGVufDB8fDB8fHww",
  },
  {
    title: "Multi-Channel Delivery",
    description:
      "Distribute ads across social media, web, email, and search platforms.",
    image:
      "https://images.unsplash.com/photo-1744359678374-4769eacf44d6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
  },
  {
    title: "Automated Creative",
    description: "Generate and A/B test multiple ad variations effortlessly.",
    image:
      "https://plus.unsplash.com/premium_photo-1663050693144-6b5bc76d2214?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFJlYWwlMjBUaW1lJTIwQW5hbHl0aWNzfGVufDB8fDB8fHww",
  },
  {
    title: "Conversion Tracking",
    description: "Track user actions from impression to final sale or sign-up.",
    image:
      "https://images.unsplash.com/photo-1744359678374-4769eacf44d6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
  },
  {
    title: "Smart Budgeting",
    description: "Auto-adjust spending based on performance trends.",
    image:
      "https://plus.unsplash.com/premium_photo-1663050693144-6b5bc76d2214?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFJlYWwlMjBUaW1lJTIwQW5hbHl0aWNzfGVufDB8fDB8fHww",
  },
];

export default function FeatureSection() {
  return (
    <div id="features" className="FeatureParent w-full bg-[#f4f5f4] py-10">
      <section className="flex flex-col lg:flex-row text-gray-800 px-4 md:px-10 gap-10">
        {/* Left Side */}
        <div className="lg:w-[45%] lg:h-[80vh] lg:sticky top-10 self-start font-[Amer] border-t-2 border-black pt-6">
          <h1 className="text-[6.5vh] sm:text-[6vw] lg:text-[6vw] font-[Amer] font-medium leading-tight">
            Features
          </h1>
          <p className="text-[2.5vh] sm:text-xl md:text-2xl mt-4 font-[fig] font-medium">
            Discover the Difference. Explore the standout features that set our
            brand apart — designed with innovation, quality, and your lifestyle
            in mind.
          </p>
          <p className="text-xl font-thin sm:text-base md:text-xl lg:text-2xl lg:absolute lg:bottom-15 italic mt-10 lg:font-medium">
            Always Free. Subscribe Anytime.
          </p>
        </div>

        {/* Right Side */}
        <div className="lg:w-2/3 space-y-16 pb-15">
          {features.map((feature, index) => (
            <FeatureBlock
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
