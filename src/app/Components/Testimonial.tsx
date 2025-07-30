"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

import User1 from "@/assets/images/user1.jpg";
import User2 from "@/assets/images/user2.jpg";
import User3 from "@/assets/images/user3.jpg";
gsap.registerPlugin(ScrollTrigger);

interface TestimonialData {
  name: string;
  username: string;
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
}

const testimonials: TestimonialData[] = [
  {
    name: "Hikmet Atçeken",
    username: "@hiatceken",
    text: "Pulsefy’s our daily tool to bypass averages and reveal true insights, for the whole team!",
    image: User1,
  },
  {
    name: "Arda Guler",
    username: "@ardaguler_",
    text: "Pulsefy levels the analytics field for our team, enabling both beginners and pros to easily bypass average data and uncover the actionable insights that truly shape our marketing strategies.",
    image: User2,
  },
  {
    name: "Maria Ancelotti",
    username: "@maria_ancelotti",
    text: "From novice to pro, Pulsefy helps our team uncover the extraordinary in our marketing data!",
    image: User3,
  },
  {
    name: "Ragip Diler",
    username: "@rgdiler",
    text: "Pulsefy empowers our whole team, techies or not, to dive into marketing analytics and spot the insights that really matter—no more average data!",
    image: User3,
  },
  {
    name: "Jenny Wilson",
    username: "@wilson_jenny.19",
    text: "Pulsefy’s user-friendly analytics let our whole team, regardless of skill, bypass averages to unearth and act on true, game-changing marketing insights every day.",
    image: User2,
  },
  {
    name: "Guy Hawkins",
    username: "@ghawkins",
    text: "Pulsefy is a game-changer for our team—easy for beginners and powerful for digging beyond average data. It’s our daily ally in unearthing those pivotal marketing insights that really drive strategy!",
    image: User1,
  },
  {
    name: "Ragip Diler",
    username: "@rgdiler",
    text: "Pulsefy empowers our whole team, techies or not, to dive into marketing analytics and spot the insights that really matter—no more average data!",
    image: User3,
  },
  {
    name: "Jenny Wilson",
    username: "@wilson_jenny.19",
    text: "Pulsefy’s user-friendly analytics let our whole team, regardless of skill, bypass averages to unearth and act on true, game-changing marketing insights every day.",
    image: User2,
  },
  {
    name: "Guy Hawkins",
    username: "@ghawkins",
    text: "Pulsefy is a game-changer for our team—easy for beginners and powerful for digging beyond average data. It’s our daily ally in unearthing those pivotal marketing insights that really drive strategy!",
    image: User1,
  },
  {
    name: "Hikmet Atçeken",
    username: "@hiatceken",
    text: "Pulsefy’s our daily tool to bypass averages and reveal true insights, for the whole team!",
    image: User1,
  },
  {
    name: "Arda Guler",
    username: "@ardaguler_",
    text: "Pulsefy levels the analytics field for our team, enabling both beginners and pros to easily bypass average data and uncover the actionable insights that truly shape our marketing strategies.",
    image: User2,
  },
  {
    name: "Maria Ancelotti",
    username: "@maria_ancelotti",
    text: "From novice to pro, Pulsefy helps our team uncover the extraordinary in our marketing data!",
    image: User3,
  },
  {
    name: "Ragip Diler",
    username: "@rgdiler",
    text: "Pulsefy empowers our whole team, techies or not, to dive into marketing analytics and spot the insights that really matter—no more average data!",
    image: User3,
  },
  {
    name: "Jenny Wilson",
    username: "@wilson_jenny.19",
    text: "Pulsefy’s user-friendly analytics let our whole team, regardless of skill, bypass averages to unearth and act on true, game-changing marketing insights every day.",
    image: User2,
  },
  {
    name: "Guy Hawkins",
    username: "@ghawkins",
    text: "Pulsefy is a game-changer for our team—easy for beginners and powerful for digging beyond average data. It’s our daily ally in unearthing those pivotal marketing insights that really drive strategy!",
    image: User1,
  },
  {
    name: "Ragip Diler",
    username: "@rgdiler",
    text: "Pulsefy empowers our whole team, techies or not, to dive into marketing analytics and spot the insights that really matter—no more average data!",
    image: User3,
  },
  {
    name: "Jenny Wilson",
    username: "@wilson_jenny.19",
    text: "Pulsefy’s user-friendly analytics let our whole team, regardless of skill, bypass averages to unearth and act on true, game-changing marketing insights every day.",
    image: User2,
  },
  {
    name: "Guy Hawkins",
    username: "@ghawkins",
    text: "Pulsefy is a game-changer for our team—easy for beginners and powerful for digging beyond average data. It’s our daily ally in unearthing those pivotal marketing insights that really drive strategy!",
    image: User1,
  },
  {
    name: "Hikmet Atçeken",
    username: "@hiatceken",
    text: "Pulsefy’s our daily tool to bypass averages and reveal true insights, for the whole team!",
    image: User1,
  },
  {
    name: "Arda Guler",
    username: "@ardaguler_",
    text: "Pulsefy levels the analytics field for our team, enabling both beginners and pros to easily bypass average data and uncover the actionable insights that truly shape our marketing strategies.",
    image: User2,
  },
  {
    name: "Maria Ancelotti",
    username: "@maria_ancelotti",
    text: "From novice to pro, Pulsefy helps our team uncover the extraordinary in our marketing data!",
    image: User3,
  },
  {
    name: "Ragip Diler",
    username: "@rgdiler",
    text: "Pulsefy empowers our whole team, techies or not, to dive into marketing analytics and spot the insights that really matter—no more average data!",
    image: User3,
  },
  {
    name: "Jenny Wilson",
    username: "@wilson_jenny.19",
    text: "Pulsefy’s user-friendly analytics let our whole team, regardless of skill, bypass averages to unearth and act on true, game-changing marketing insights every day.",
    image: User2,
  },
  {
    name: "Guy Hawkins",
    username: "@ghawkins",
    text: "Pulsefy is a game-changer for our team—easy for beginners and powerful for digging beyond average data. It’s our daily ally in unearthing those pivotal marketing insights that really drive strategy!",
    image: User1,
  },
  {
    name: "Ragip Diler",
    username: "@rgdiler",
    text: "Pulsefy empowers our whole team, techies or not, to dive into marketing analytics and spot the insights that really matter—no more average data!",
    image: User3,
  },
  {
    name: "Jenny Wilson",
    username: "@wilson_jenny.19",
    text: "Pulsefy’s user-friendly analytics let our whole team, regardless of skill, bypass averages to unearth and act on true, game-changing marketing insights every day.",
    image: User2,
  },
  {
    name: "Guy Hawkins",
    username: "@ghawkins",
    text: "Pulsefy is a game-changer for our team—easy for beginners and powerful for digging beyond average data. It’s our daily ally in unearthing those pivotal marketing insights that really drive strategy!",
    image: User1,
  },
  // ...add more or slice if needed
];

const Testimonial: React.FC = () => {
  const moveRef1 = useRef<HTMLDivElement>(null);
  const moveRef2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (moveRef1.current) {
      gsap.from(moveRef1.current, {
        x: "-100%",
        ease: "power1.out",
        scrollTrigger: {
          trigger: moveRef1.current,
          start: "top 80%",
          end: "top 0%",
          scrub: 1,
        },
      });
    }

    if (moveRef2.current) {
      gsap.from(moveRef2.current, {
        x: "100%",
        ease: "power1.out",
        scrollTrigger: {
          trigger: moveRef2.current,
          start: "top 80%",
          end: "top 0%",
          scrub: 1,
        },
      });
    }
  }, []);

  const handleHover = (index: number, className: string, scale: number) => {
    gsap.to(`.${className}:nth-child(${index + 1})`, {
      scale,
      duration: 0.1,
      ease: "power1.out",
    });
  };

  return (
    <div className="min-h-[50vh] lg:min-h-screen w-full bg-[#f4f5f4] py-10 font-[fig]">
      <h1 className="text-[8vh] lg:text-[10vw] md:text-[6vw] font-[Amer] text-center">
        Testimonial
      </h1>

      <h2 className="text-xl lg:text-3xl sm:text-2xl md:text-3xl font-bold mb-2 text-center">
        Public Cheers for Us!
      </h2>
      <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
        Find out how our users are spreading the word!
      </p>

      {/* Section 1 */}
      <div className="px-4">
        <div className="py-4 overflow-x-hidden scrollbar-hide">
          <div ref={moveRef1} className="move1 flex space-x-4">
            {testimonials.map((t, index) => (
              <div
                key={`move1-${index}`}
                onMouseEnter={() => handleHover(index, "hover_card", 1.03)}
                onMouseLeave={() => handleHover(index, "hover_card", 1)}
                className="hover_card lg:h-[25vh] w-[85%] sm:w-[45%] md:w-[30%] lg:w-[25%] h-auto flex-shrink-0 bg-white rounded-2xl p-4 shadow hover:shadow-md transition duration-300"
              >
                <div className="flex items-center mb-3">
                  <Image
                    src={t.image}
                    alt={t.name}
                    className="rounded-full object-cover"
                    width={50}
                    height={50}
                  />
                  <div className="ml-3">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.username}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm text-left">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="px-4">
        <div className="py-4 overflow-x-hidden scrollbar-hide">
          <div ref={moveRef2} className="move2 flex space-x-4">
            {testimonials.map((t, index) => (
              <div
                key={`move2-${index}`}
                onMouseEnter={() => handleHover(index, "hover_card2", 1.03)}
                onMouseLeave={() => handleHover(index, "hover_card2", 1)}
                className="hover_card2 lg:h-[25vh] w-[85%] sm:w-[45%] md:w-[30%] lg:w-[25%] h-auto flex-shrink-0 bg-white rounded-2xl p-4 shadow hover:shadow-md translate-x-[-100%] lg:translate-x-[-500%]"
              >
                <div className="flex items-center mb-3">
                  <Image
                    src={t.image}
                    alt={t.name}
                    className="rounded-full object-cover"
                    width={50}
                    height={50}
                  />
                  <div className="ml-3">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.username}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm text-left">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
