
import React from "react";
import Image from "next/image";
interface ImageBetweenWordsProps {
  src: string;
  alt?: string;
  prop?: string;
}

const ImageBetweenWords: React.FC<ImageBetweenWordsProps> = ({
  src,
  alt = "image",
  prop = "",
}) => {

  return (
    <span
      className={`inline-block w-18 h-18 md:w-[20vh] md:h-[20vh] mx-2 align-middle ${prop}`}
    >
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        className="w-full h-full object-cover rounded-full"
      />
    </span>
  );
};

export default ImageBetweenWords;
