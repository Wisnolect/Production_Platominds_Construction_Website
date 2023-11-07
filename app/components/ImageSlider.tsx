import Image from "next/image";
import React from "react";
import Image1 from "../../public/sliderImages/1.jpg";
import Image2 from "../../public/sliderImages/2.jpg";
import Image3 from "../../public/sliderImages/3.jpg";
import Image4 from "../../public/sliderImages/4.jpg";
import Image5 from "../../public/sliderImages/5.jpg";
import Image6 from "../../public/sliderImages/6.jpg";
import "keen-slider/keen-slider.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
const sliderImages = [Image1, Image2, Image3, Image4];

const ImageSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[50vh] lg:h-[80vh]"
      >
        <SwiperSlide>
          <div className="flex justify-start items-start lg:justify-center lg:items-center flex-col h-full slider1_bg">
            <motion.div
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="flex flex-col justify-center items-center mt-20">
              <h1 className="text-xl font-extralight text-white text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h1>
              <Link
                href="/services"
                className="w-[120px] h-[40px] rounded-md bg-orange-400 flex justify-center items-center p-2 mt-4 cursor-pointer hover:bg-orange-600"
              >
                Explore More
              </Link>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-start items-start lg:justify-center lg:items-center flex-col h-full slider2_bg">
            <motion.div
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="flex flex-col justify-center items-center mt-20">
              <h1 className="text-xl font-extralight text-white text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h1>
              <Link
                href="/services"
                className="w-[120px] h-[40px] rounded-md bg-orange-400 flex justify-center items-center p-2 mt-4 cursor-pointer hover:bg-orange-600"
              >
                Explore More
              </Link>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-start items-start lg:justify-center lg:items-center flex-col h-full slider3_bg">
            <motion.div
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="flex flex-col justify-center items-center mt-20">
              <h1 className="text-xl font-extralight text-white text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h1>
              <Link
                href="/services"
                className="w-[120px] h-[40px] rounded-md bg-orange-400 flex justify-center items-center p-2 mt-4 cursor-pointer hover:bg-orange-600"
              >
                Explore More
              </Link>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-start items-start lg:justify-center lg:items-center flex-col h-full slider5_bg">
            <motion.div
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="flex flex-col justify-center items-center mt-20">
              <h1 className="text-xl font-extralight text-white text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h1>
              <Link
                href="/services"
                className="w-[120px] h-[40px] rounded-md bg-orange-400 flex justify-center items-center p-2 mt-4 cursor-pointer hover:bg-orange-600"
              >
                Explore More
              </Link>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-start items-start lg:justify-center lg:items-center flex-col h-full slider6_bg">
            <motion.div
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="flex flex-col justify-center items-center mt-20">
              <h1 className="text-xl font-extralight text-white text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h1>
              <Link
                href="/services"
                className="w-[120px] h-[40px] rounded-md bg-orange-400 flex justify-center items-center p-2 mt-4 cursor-pointer hover:bg-orange-600"
              >
                Explore More
              </Link>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-start items-start lg:justify-center lg:items-center flex-col h-full slider4_bg">
            <motion.div
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="flex flex-col justify-center items-center mt-20">
              <h1 className="text-xl font-extralight text-white text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h1>
              <Link
                href="/services"
                className="w-[120px] h-[40px] rounded-md bg-orange-400 flex justify-center items-center p-2 mt-4 cursor-pointer hover:bg-orange-600"
              >
                Explore More
              </Link>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
