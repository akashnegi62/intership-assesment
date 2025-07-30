"use client";
import React from "react";
import Header from "./Shared/Header";
import HeroImg from "../assets/images/HeroImg.jpg";
import HeroMessage from "./Ui/HeroMessage";
import CurvedLoop from "./Ui/CurvedLoop";
import FeatureSection from "./Components/FeatureSection";
import Pricing from "./Components/Pricing";
import Testimonial from "./Components/Testimonial";
import FaqSection from "./Components/FaqSection";
import Image from "next/image";
import Footer from "./Shared/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#f3f3f0] pt-[15vh]">
      <Header />

      {/* HERO TEXT */}
      <div className="h-[70vh] text px-5 leading-[10vh] lg:leading-[12vw] relative">
        {/* Boxes for small screens */}
        <div className="small">
          <div className="lg:hidden boxParent pt-2 h-[15vh] w-[15vh] bg-white flex justify-center items-start absolute left-[30vw] top-[0vw] -rotate-12 z-2">
            <div className="Image h-[14vh] w-[14vh] bg-red-200">
              <Image
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1559613671-dfe2fb6a7680?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWR2ZXJ0aXNlbWVudHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Polaroid 1"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="lg:hidden boxParent pt-2 h-[15vh] w-[15vh] bg-white flex justify-center items-start absolute left-[55vw] top-[50vw] rotate-12 z-2">
            <div className="Image h-[14vh] w-[14vh] bg-red-200">
              <Image
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1579677917230-8a938ffc0279?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QWR2ZXJ0aXNlbWVudHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Polaroid 2"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>

        {/* Boxes for large screens */}
        <div className="large">
          <div className="hidden boxParent pt-2 h-[25vh] w-[24vh] bg-white lg:flex justify-center items-start absolute left-[19vw] -rotate-12 z-1">
            <div className="Image h-[20vh] w-[22vh] bg-red-200">
              <Image
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1559613671-dfe2fb6a7680?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWR2ZXJ0aXNlbWVudHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Polaroid 3"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="hidden boxParent pt-2 h-[25vh] w-[24vh] bg-white lg:flex justify-center items-start absolute left-[55vw] top-[12vw] rotate-12 z-4">
            <div className="Image h-[20vh] w-[22vh] bg-red-200">
              <Image
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1579677917230-8a938ffc0279?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QWR2ZXJ0aXNlbWVudHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Polaroid 4"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="small text-[12vh]">
          <h1 className="lg:hidden font-[Amer] relative z-2">
            AN <br />
            EARNED-LED
          </h1>
          <h1 className="lg:hidden font-[Amer] relative z-5">CULTURE</h1>
          <h1 className="lg:hidden font-[Amer]">AGENCY</h1>
        </div>

        <div className="large">
          <h1 className="hidden lg:block text-[15vw] text-center font-[Amer] relative z-2">
            AN &nbsp; &nbsp; &nbsp; &nbsp; EARNED-LED
          </h1>
          <h1 className="hidden lg:block text-[15vw] font-[Amer] relative z-2">
            &nbsp; &nbsp; &nbsp; CULTURE
          </h1>
          <h1 className="hidden lg:block text-[15vw] font-[Amer]">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            AGENCY
          </h1>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="ImageParent px-2 relative">
        <div className="Image h-[80vh] lg:h-screen w-full bg-black rounded-xl overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src={HeroImg}
            alt="Hero"
            width={1920}
            height={1080}
          />
        </div>
        <CurvedLoop
          marqueeText="Where ✦ Ideas ✦ Become ✦ Influence"
          curveAmount={500}
          direction="left"
          interactive={true}
          className="custom-text-style"
        />
      </div>

      {/* MESSAGE SECTION */}
      <HeroMessage />
      <FeatureSection />
      <Pricing />
      <Testimonial />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Home;
