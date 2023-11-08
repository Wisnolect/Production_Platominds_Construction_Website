"use client"

import React, {useEffect} from "react";
import Image from "next/image";
import profile_icon from "../../public/profile_icon.jpg";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import {AiFillEye} from "react-icons/ai"
import {BiBullseye} from "react-icons/bi"
import {BsFillBarChartFill} from "react-icons/bs"

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="flex flex-col items-center mt-24 mb-12">
      <p className="text-orange-600 font-semibold text-lg " data-aos="fade-up">
        About Us
      </p>
      <hr className="w-[110px] mx-auto shadow-4xl" data-aos="fade-down"/>
      <h1 className="primaryText mt-3 text-center" data-aos="fade-up">
        Turning Properties into Possibilities
      </h1>
      <div className="flex mt-5 p-2 flex-wrap justify-center ">
        <div className="flex flex-col p-2 w-[80vw] lg:w-[50vw] lg:mr-4">
          <h1 className="text-2xl font-extrabold " data-aos="fade-down">Who we are</h1>
          <p className="text-gray-500 mt-2" data-aos="zoom-in">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti natus rerum qui quaerat iusto possimus, eius necessitatibus voluptates sequi quibusdam id ad eaque nobis dolorum? Nobis exercitationem nihil fuga quasi?
            Ullam aspernatur labore excepturi necessitatibus sint illo ab, delectus soluta ex voluptate tempore autem placeat minima dolorem provident, quae dolorum quam quidem. Reprehenderit ex sed beatae provident, rerum mollitia accusantium.
            Voluptates dolores explicabo velit itaque et veritatis minima tenetur sunt atque, cum nemo consequatur iure doloremque maiores quae dolor magnam placeat reiciendis dolore reprehenderit modi enim. Vitae debitis doloremque consectetur.
            Ullam quasi possimus ducimus assumenda quos nihil totam dolorem. Aspernatur sit inventore, laborum in nisi quas itaque necessitatibus, officia ape
          </p>
          <Link href="/services" className="mt-3 w-[140px] h-[40px] p-3 rounded-l-full rounded-r-full bg-orange-500 hover:shadow-lg flex justify-center items-center" data-aos="zoom-in">Our Services</Link>
        </div>
        <div className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-t-full overflow-hidden mt-4 lg:mt-0" data-aos="zoom-out">
          <Image
            src="/value.jpg"
            alt="image"
            width={500}
            height={800}
            className="object-cover"
          />
        </div>
      </div>
      <div>
      <h1 className="primaryText text-center  p-2 border-b-2 border-orange-500" data-aos="fade-up">
        Highlights
      </h1>
      <div className="flex justify-center items-center mt-3 gap-8 flex-wrap">
        <div className="w-[300px] h-[250px] bg-gray-50 flex flex-col justify-center items-center gap-2 p-3 shadow-2xl shadow-orange-200 rounded-md hover:bg-gray-100" data-aos="zoom-in">
          <AiFillEye color="orange" size="3em"/>
          <h2 className="text-2xl font-extrabold text-blue-700">Our Vision</h2>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, commodi minus! Voluptas quaerat </p>
        </div>
        <div className="w-[300px] h-[250px] bg-gray-50 flex flex-col justify-center items-center gap-2 p-3 shadow-2xl shadow-orange-200 rounded-md hover:bg-gray-100" data-aos="zoom-in">
          <BiBullseye color="orange" size="3em"/>
          <h2 className="text-2xl font-extrabold text-blue-700">Our Mission</h2>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, commodi minus! Voluptas quaerat </p>
        </div>
        <div className="w-[300px] h-[250px] bg-gray-50 flex flex-col justify-center items-center gap-2 p-3 shadow-2xl shadow-orange-200 rounded-md hover:bg-gray-100" data-aos="zoom-in">
          <BsFillBarChartFill color="orange" size="3em"/>
          <h2 className="text-2xl font-extrabold text-blue-700">Our Value</h2>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, commodi minus! Voluptas quaerat </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
