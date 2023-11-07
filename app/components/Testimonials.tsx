import Image from "next/image";
import React from "react";
import { FaRegCommentDots, FaRegComments } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-10 mb-10">
      <p className="text-orange-600 font-semibold text-lg ">
        Varadvinayak's Happy Customers
      </p>
      <h1 className="primaryText mt-3">Know from our customers</h1>
      <div className="flex w-[80vw] mt-4">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
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
            <div className="flex flex-col justify-center items-center w-[300px] h-[280px]  bg-orange-50 rounded-[3rem] p-2 rounded-tl-none ">
              <Image
                src="/profile_icon.jpg"
                alt=""
                width={70}
                height={70}
                className="rounded-full"
              />
              <h1 className="mt-2 font-bold text-blue-700">Smith Williams</h1>
              <div className="p-3 flex">
                <div className="-mt-5">
                  <FaRegComments size="1.5em" color="blue" />
                </div>
                <p className="text-sm justify-start bg-orange-100 rounded-xl rounded-tl-none p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque aliquid debitis numquam fugit nostrum similique
                  doloribus nam incidunt nesciunt at error eum, ab non qu
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center w-[300px] h-[280px]  bg-orange-50 rounded-[3rem] p-2 rounded-tl-none ">
              <Image
                src="/profile_icon.jpg"
                alt=""
                width={70}
                height={70}
                className="rounded-full"
              />
              <h1 className="mt-2 font-bold text-blue-700">Smith Williams</h1>
              <div className="p-3 flex">
                <div className="-mt-5">
                  <FaRegComments size="1.5em" color="blue" />
                </div>
                <p className="text-sm justify-start bg-orange-100 rounded-xl rounded-tl-none p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque aliquid debitis numquam fugit nostrum similique
                  doloribus nam incidunt nesciunt at error eum, ab non qu
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center w-[300px] h-[280px]  bg-orange-50 rounded-[3rem] p-2 rounded-tl-none ">
              <Image
                src="/profile_icon.jpg"
                alt=""
                width={70}
                height={70}
                className="rounded-full"
              />
              <h1 className="mt-2 font-bold text-blue-700">Smith Williams</h1>
              <div className="p-3 flex">
                <div className="-mt-5">
                  <FaRegComments size="1.5em" color="blue" />
                </div>
                <p className="text-sm justify-start bg-orange-100 rounded-xl rounded-tl-none p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque aliquid debitis numquam fugit nostrum similique
                  doloribus nam incidunt nesciunt at error eum, ab non qu
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center w-[300px] h-[280px]  bg-orange-50 rounded-[3rem] p-2 rounded-tl-none ">
              <Image
                src="/profile_icon.jpg"
                alt=""
                width={70}
                height={70}
                className="rounded-full"
              />
              <h1 className="mt-2 font-bold text-blue-700">Smith Williams</h1>
              <div className="p-3 flex">
                <div className="-mt-5">
                  <FaRegComments size="1.5em" color="blue" />
                </div>
                <p className="text-sm justify-start bg-orange-100 rounded-xl rounded-tl-none p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque aliquid debitis numquam fugit nostrum similique
                  doloribus nam incidunt nesciunt at error eum, ab non qu
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center w-[300px] h-[280px]  bg-orange-50 rounded-[3rem] p-2 rounded-tl-none ">
              <Image
                src="/profile_icon.jpg"
                alt=""
                width={70}
                height={70}
                className="rounded-full"
              />
              <h1 className="mt-2 font-bold text-blue-700">Smith Williams</h1>
              <div className="p-3 flex">
                <div className="-mt-5">
                  <FaRegComments size="1.5em" color="blue" />
                </div>
                <p className="text-sm justify-start bg-orange-100 rounded-xl rounded-tl-none p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque aliquid debitis numquam fugit nostrum similique
                  doloribus nam incidunt nesciunt at error eum, ab non qu
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center w-[300px] h-[280px]  bg-orange-50 rounded-[3rem] p-2 rounded-tl-none ">
              <Image
                src="/profile_icon.jpg"
                alt=""
                width={70}
                height={70}
                className="rounded-full"
              />
              <h1 className="mt-2 font-bold text-blue-700">Smith Williams</h1>
              <div className="p-3 flex">
                <div className="-mt-5">
                  <FaRegComments size="1.5em" color="blue" />
                </div>
                <p className="text-sm justify-start bg-orange-100 rounded-xl rounded-tl-none p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque aliquid debitis numquam fugit nostrum similique
                  doloribus nam incidunt nesciunt at error eum, ab non qu
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center w-[300px] h-[280px]  bg-orange-50 rounded-[3rem] p-2 rounded-tl-none ">
              <Image
                src="/profile_icon.jpg"
                alt=""
                width={70}
                height={70}
                className="rounded-full"
              />
              <h1 className="mt-2 font-bold text-blue-700">Smith Williams</h1>
              <div className="p-3 flex">
                <div className="-mt-5">
                  <FaRegComments size="1.5em" color="blue" />
                </div>
                <p className="text-sm justify-start bg-orange-100 rounded-xl rounded-tl-none p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque aliquid debitis numquam fugit nostrum similique
                  doloribus nam incidunt nesciunt at error eum, ab non qu
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
