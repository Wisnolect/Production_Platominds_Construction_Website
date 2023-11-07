import React, { useEffect} from "react";
import "keen-slider/keen-slider.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const ImageSlider = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
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
          <div className="flex justify-start items-start lg:justify-center lg:items-center flex-col h-full slider1_bg" data-aos="zoom-out-up">
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
          <div className="flex justify-start items-start lg:justify-center lg:items-center flex-col h-full slider2_bg" data-aos="zoom-out-up">
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
          <div className="flex justify-start items-start lg:justify-center lg:items-center flex-col h-full slider3_bg" data-aos="zoom-out-up">
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
          <div className="flex justify-start items-start lg:justify-center lg:items-center flex-col h-full slider5_bg" data-aos="zoom-out-up">
            <motion.div
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="flex flex-col justify-center items-center mt-20">
              <h1 className="text-xl font-extralight text-white text-center" data-aos="fade-right">
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
          <div className="flex justify-start items-start lg:justify-center lg:items-center flex-col h-full slider6_bg" data-aos="zoom-out-up">
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
          <div className="flex justify-start items-start lg:justify-center lg:items-center flex-col h-full slider4_bg" data-aos="zoom-out-up">
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
