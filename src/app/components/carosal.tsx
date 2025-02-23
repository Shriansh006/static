"use client";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 1750);

    return () => clearInterval(timer);
  }, [totalImages]);

  const getStyle = (offset: number) => {
    const translateX = offset * 100; // Offset-based positioning
    const scale = 1 - Math.abs(offset) * 0.2; // Scale down distant images
    const opacity = 1 - Math.abs(offset) * 0.3; // Reduce opacity for distant images
    const zIndex = 5 - Math.abs(offset); // Adjust z-index

    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

  return (
    <div id="gallery" className="relative h-96 my-12 overflow-hidden ">

      <button onClick={()=>setCurrentIndex((prev) => (prev - 1) % totalImages)} className="absolute size-10 rounded-full top-1/2 z-30 mx-4">
        <ArrowLeftCircleIcon className="size-10 opacity-60 hover:opacity-75 transition-opacity duration-200" />
      </button>

      <button onClick={()=>setCurrentIndex((prev) => (prev + 1) % totalImages)} className="absolute size-10 rounded-full top-1/2 z-30 mx-4 right-0">
        <ArrowRightCircleIcon className="size-10 opacity-60 hover:opacity-75 duration-200" />
      </button>

      <div className="relative flex h-full w-full items-center justify-center">
        {images.map((image, index) => {
          const offset = (index - currentIndex + totalImages) % totalImages;
          const adjustedOffset =
            offset > totalImages / 2 ? offset - totalImages : offset;

          return (
            <div
              key={index}
              className="absolute h-72 w-72 rounded-lg object-cover shadow-xl transition-all duration-700 ease-in-out"
              style={getStyle(adjustedOffset)}
            >
              <Image
                src={`/car/${image}`}
                alt={`Slide ${index + 1}`}
                className="h-full w-full rounded-lg object-cover"
                width={1024}
                height={1024}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
