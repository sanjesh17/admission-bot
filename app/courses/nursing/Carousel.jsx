"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    src: "https://www.sathyabama.ac.in/sites/default/files/inline-images/inag%202.jpg",
    alt: "Sathyabama College of Nursing celebrated the inaugural function of first batch of B.Sc Nursing Students (2019-2020) on 30th October 2019.",
  },
  {
    src: "https://www.sathyabama.ac.in/sites/default/files/inline-images/08_0.jpg",
    alt: "Online CNE on Essential Communication skills for Nurses during Covid 19-The Do's and Dont's",
  },
  {
    src: "https://www.sathyabama.ac.in/sites/default/files/inline-images/BATCHELOR%20OF%20NURSING%20GROUP%20PHOTO.jpg",
    alt: "Sathyabama College of Nursing organized a Basic Life Support Training programme at Sathyabama Simulation Centre by AHA Certified Instructors  ",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Main Image */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out
              ${current === index ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-6xl font-bold font-inter">
            
          </h2>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
      >
        →
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all
              ${current === index ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
