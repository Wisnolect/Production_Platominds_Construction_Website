"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaRegComments } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  const [slidesPerView, setSlidesPerView] = useState(getInitialSlidesPerView);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    // Function to update slidesPerView based on window width
    function handleResize() {
      setSlidesPerView(getInitialSlidesPerView);
    }

    // Add window resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to calculate slidesPerView based on window width
  function getInitialSlidesPerView() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 768) {
      return 1;
    } else if (windowWidth <= 1024) {
      return 2;
    } else {
      return 3;
    }
  }

  return (
    <section className="flex flex-col justify-center items-center mt-10 mb-10">
      <p
        className="text-orange-600 font-semibold text-lg "
        data-aos="fade-down"
      >
        Varadvinayak's Happy Customers
      </p>
      <h1 className="primaryText mt-3" data-aos="fade-up">
        Know from our customers
      </h1>
      <div className="flex w-[80vw] mt-4">
        <Swiper
          spaceBetween={30}
          slidesPerView={slidesPerView}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="flex flex-col justify-center items-center w-[300px] h-[280px]  bg-orange-50 rounded-full p-2 rounded-bl-none "
              data-aos="zoom-in"
            >
              <Image
                src="/profile_icon.jpg"
                alt=""
                width={70}
                height={70}
                className="rounded-full border-2 border-orange-600"
              />
              <h1 className="mt-2 font-bold text-blue-700">Smith Williams</h1>
              <div className="p-3 flex">
                <div className="-mt-5">
                  <FaRegComments size="1.5em" color="blue" />
                </div>
                <p className="text-sm justify-start  rounded-xl rounded-tl-none overflow-hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque aliquid debitis numquam fugit nostrum similique
                  doloribus nam incidunt
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="flex flex-col justify-center items-center w-[300px] h-[280px]  bg-orange-50 rounded-full p-2 rounded-bl-none "
              data-aos="zoom-in"
            >
              <Image
                src="/profile_icon.jpg"
                alt=""
                width={70}
                height={70}
                className="rounded-full border-2 border-orange-600"
              />
              <h1 className="mt-2 font-bold text-blue-700">Smith Williams</h1>
              <div className="p-3 flex">
                <div className="-mt-5">
                  <FaRegComments size="1.5em" color="blue" />
                </div>
                <p className="text-sm justify-start  rounded-xl rounded-tl-none overflow-hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque aliquid debitis numquam fugit nostrum similique
                  doloribus nam incidunt
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="flex flex-col justify-center items-center w-[300px] h-[280px]  bg-orange-50 rounded-full p-2 rounded-bl-none "
              data-aos="zoom-in"
            >
              <Image
                src="/profile_icon.jpg"
                alt=""
                width={70}
                height={70}
                className="rounded-full border-2 border-orange-600"
              />
              <h1 className="mt-2 font-bold text-blue-700">Smith Williams</h1>
              <div className="p-3 flex">
                <div className="-mt-5">
                  <FaRegComments size="1.5em" color="blue" />
                </div>
                <p className="text-sm justify-start  rounded-xl rounded-tl-none overflow-hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque aliquid debitis numquam fugit nostrum similique
                  doloribus nam incidunt
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="flex flex-col justify-center items-center w-[300px] h-[280px]  bg-orange-50 rounded-full p-2 rounded-bl-none "
              data-aos="zoom-in"
            >
              <Image
                src="/profile_icon.jpg"
                alt=""
                width={70}
                height={70}
                className="rounded-full border-2 border-orange-600"
              />
              <h1 className="mt-2 font-bold text-blue-700">Smith Williams</h1>
              <div className="p-3 flex">
                <div className="-mt-5">
                  <FaRegComments size="1.5em" color="blue" />
                </div>
                <p className="text-sm justify-start  rounded-xl rounded-tl-none overflow-hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque aliquid debitis numquam fugit nostrum similique
                  doloribus nam incidunt
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="flex flex-col justify-center items-center w-[300px] h-[280px]  bg-orange-50 rounded-full p-2 rounded-bl-none "
              data-aos="zoom-in"
            >
              <Image
                src="/profile_icon.jpg"
                alt=""
                width={70}
                height={70}
                className="rounded-full border-2 border-orange-600"
              />
              <h1 className="mt-2 font-bold text-blue-700">Smith Williams</h1>
              <div className="p-3 flex">
                <div className="-mt-5">
                  <FaRegComments size="1.5em" color="blue" />
                </div>
                <p className="text-sm justify-start  rounded-xl rounded-tl-none overflow-hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque aliquid debitis numquam fugit nostrum similique
                  doloribus nam incidunt
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="flex flex-col justify-center items-center w-[300px] h-[280px]  bg-orange-50 rounded-full p-2 rounded-bl-none "
              data-aos="zoom-in"
            >
              <Image
                src="/profile_icon.jpg"
                alt=""
                width={70}
                height={70}
                className="rounded-full border-2 border-orange-600"
              />
              <h1 className="mt-2 font-bold text-blue-700">Smith Williams</h1>
              <div className="p-3 flex">
                <div className="-mt-5">
                  <FaRegComments size="1.5em" color="blue" />
                </div>
                <p className="text-sm justify-start  rounded-xl rounded-tl-none overflow-hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque aliquid debitis numquam fugit nostrum similique
                  doloribus nam incidunt
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="flex flex-col justify-center items-center w-[300px] h-[280px]  bg-orange-50 rounded-full p-2 rounded-bl-none "
              data-aos="zoom-in"
            >
              <Image
                src="/profile_icon.jpg"
                alt=""
                width={70}
                height={70}
                className="rounded-full border-2 border-orange-600"
              />
              <h1 className="mt-2 font-bold text-blue-700">Smith Williams</h1>
              <div className="p-3 flex">
                <div className="-mt-5">
                  <FaRegComments size="1.5em" color="blue" />
                </div>
                <p className="text-sm justify-start  rounded-xl rounded-tl-none overflow-hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque aliquid debitis numquam fugit nostrum similique
                  doloribus nam incidunt
                </p>
              </div>
            </div>
          </SwiperSlide>{" "}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
