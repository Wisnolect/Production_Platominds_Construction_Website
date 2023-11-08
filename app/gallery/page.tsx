"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const imageNames = [
    "g1.jpg",
    "g2.jpg",
    "g3.jpg",
    "g4.jpg",
    "g5.jpg",
    "g6.jpg",
    "g7.jpg",
    "g8.jpg",
    "g9.jpg",
    "g10.jpg",
    "g11.jpg",
    "g12.jpg",
    "g13.jpg",
    "g14.jpg",
    "g15.jpg",
  ];

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <section className="mt-32">
      <p className="text-orange-600 font-semibold text-lg text-center" data-aos="fade-up">
        Gallery
      </p>
      <hr className="w-[100px] mx-auto shadow-4xl" data-aos="fade-down"/>
      <h1 className="primaryText mt-3 text-center" data-aos="fade-up">
      A Visual Tour of Exclusive Real Estate
      </h1>
      
      <div className="flex flex-wrap justify-center group mt-6 ">
        {imageNames.map((imageName, index) => (
          <div
            key={index}
            className="m-2 lg:w-auto flex justify-center lg:hover:scale-150 border-2 border-orange-300 lg:hover:z-10"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={`/galleryImages/${imageName}`}
              alt={`Image ${index + 1}`}
              width={300}
              height={300}
              className={` ${
                hoveredIndex !== -1 &&
                hoveredIndex !== index &&
                "md:filter md:blur-sm "
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
