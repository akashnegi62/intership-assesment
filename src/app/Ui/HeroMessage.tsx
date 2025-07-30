import gsap from "gsap";
import ImageBetweenWords from "./ImageBetweenWords";
import React from "react";

const HeroMessage: React.FC = () => {
  const hoverEnter = () => {
    gsap.to(".hoverimage1", {
      y: "-140%",
      x: "-10%",
      scale: 1.1,
      duration: 2.5,
      ease: "elastic.out(1, 0.3)",
    });

    gsap.to(".hoverimage2", {
      y: "-100%",
      x: "-150%",
      scale: 1.1,
      duration: 2.5,
      ease: "elastic.out(1, 0.3)",
    });

    gsap.to(".hoverimage3", {
      y: "-100%",
      x: "150%",
      scale: 1.1,
      duration: 2.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  const hoverLeave = () => {
    gsap.to([".hoverimage1", ".hoverimage2", ".hoverimage3"], {
      y: "0%",
      x: "0%",
      scale: 1,
      duration: 2.5,
      ease: "elastic.out(1, 1)",
    });
  };

  const secondHoverEnter = () => {
    gsap.to(".hoverimage4", {
      y: "-140%",
      x: "-10%",
      scale: 1.1,
      duration: 2.5,
      ease: "elastic.out(1, 0.3)",
    });

    gsap.to(".hoverimage5", {
      y: "-100%",
      x: "-150%",
      scale: 1.1,
      duration: 2.5,
      ease: "elastic.out(1, 0.3)",
    });

    gsap.to(".hoverimage6", {
      y: "-100%",
      x: "150%",
      scale: 1.1,
      duration: 2.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  const secondHoverLeave = () => {
    gsap.to([".hoverimage4", ".hoverimage5", ".hoverimage6"], {
      y: "0%",
      x: "0%",
      scale: 1,
      duration: 2.5,
      ease: "elastic.out(1, 1)",
    });
  };

  return (
    <div className="bg-neutral-100 text-center px-6 py-20 text-black text-[4.5vh] leading-[6vh] md:text-[6vw] lg:text-[6vw] lg:leading-[8vw] font-normal tracking-wide">
      <p>
        At the crossroads of consulting <br /> & advertising, we design
      </p>

      <p onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
        <span className="inline-block underline underline-offset-10 leading-0 bg-pink-200">
          cultural
        </span>
        <ImageBetweenWords
          prop="absolute hoverimage1"
          src="https://images.unsplash.com/photo-1753549724481-d146eaa3f0f0?w=900&auto=format&fit=crop&q=60"
        />
        <ImageBetweenWords
          prop="absolute hoverimage2"
          src="https://images.unsplash.com/photo-1753660679272-0ad31d0de6a1?w=900&auto=format&fit=crop&q=60"
        />
        <ImageBetweenWords
          prop="hoverimage3"
          src="https://images.unsplash.com/photo-1753764403695-f43eb7cbead4?w=900&auto=format&fit=crop&q=60"
        />
        <span className="inline-block underline underline-offset-10 leading-0">
          innovations
        </span>
      </p>

      <p>that create value and</p>

      <p onMouseEnter={secondHoverEnter} onMouseLeave={secondHoverLeave}>
        <span className="underline underline-offset-10 leading-0">
          cross channel
        </span>
        <ImageBetweenWords
          prop="absolute hoverimage4"
          src="https://plus.unsplash.com/premium_photo-1751667124857-32b5a1c63d8a?w=900&auto=format&fit=crop&q=60"
        />
        <ImageBetweenWords
          prop="absolute hoverimage5"
          src="https://images.unsplash.com/photo-1753559721606-7b2d5530087c?w=900&auto=format&fit=crop&q=60"
        />
        <ImageBetweenWords
          prop="hoverimage6"
          src="https://images.unsplash.com/photo-1753545057755-aa9a7673b78f?w=900&auto=format&fit=crop&q=60"
        />
      </p>

      <p>
        <span className="comm inline-block underline underline-offset-10 leading-0">
          communications
        </span>
      </p>

      <p>that spark conversations.</p>
    </div>
  );
};

export default HeroMessage;
