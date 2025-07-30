import React, { useState } from "react";
const faqs = [
  {
    question: "What services does your advertising brand offer?",
    answer:
      "We provide digital marketing, social media management, branding, SEO, and campaign strategy services tailored to your business needs.",
  },
  {
    question: "Who can benefit from your services?",
    answer:
      "Our services are ideal for startups, small businesses, enterprises, and personal brands looking to grow their audience and increase visibility.",
  },
  {
    question: "How do I get started with your agency?",
    answer:
      "Simply contact us through our website or email, and we’ll schedule a free consultation to understand your goals and recommend a plan.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We’ve worked with clients across fashion, tech, real estate, health, food & beverage, and more. Our strategies are adaptable to any industry.",
  },
  {
    question: "How much do your advertising services cost?",
    answer:
      "Pricing varies depending on the scope and type of service. We offer customized packages to fit your budget and marketing goals.",
  },
  {
    question: "Can you help with social media advertising?",
    answer:
      "Absolutely! We specialize in running ad campaigns across platforms like Instagram, Facebook, LinkedIn, and TikTok.",
  },
  {
    question: "Do you provide monthly performance reports?",
    answer:
      "Yes, we offer detailed monthly reports to track campaign performance, engagement metrics, ROI, and more.",
  },
];

function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggle = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="price min-h-screen w-full bg-[#f4f5f4] py-5 font-[fig]">
      <h1 className="text-[8vh] lg:text-[10vw] font-[Amer] text-center">
        FAQS
      </h1>
      <section className="pb-16 px-4 bg-[#f4f5f4] rounded-3xl text-center rounded-b-[2vw]">
        <h2 className="text-4xl font-medium mb-4">
          Frequently Asked Questions
          <br />
          Everything You Need to Know!
        </h2>

        <div className="max-w-2xl mx-auto mt-10 space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-white transition-shadow shadow hover:shadow-md"
            >
              <button
                className="w-full p-5 flex justify-between items-center text-left font-medium"
                onClick={() => toggle(index)}
              >
                <span>{faq.question}</span>
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-5 pb-5 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FaqSection;
