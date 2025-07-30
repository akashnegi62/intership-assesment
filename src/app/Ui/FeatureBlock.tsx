import React from "react";
import Image from "next/image";

interface FeatureBlockProps {
  title: string;
  description: string;
  image: string;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div>
      <div className="h-[30vh] lg:h-[60vh] w-full overflow-hidden shadow-lg bg-white lg:rounded-none rounded-2xl relative">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="mt-5 lg:px-0 px-1 md:px-2">
        <h2 className="text-[5vh] font-medium sm:text-4xl lg:text-[3vw] font-[Amer] lg:font-medium text-start uppercase">
          {title}
        </h2>
        <p className="text-xl sm:text-lg md:text-xl mt-2 text-start font-[fig] font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureBlock;
