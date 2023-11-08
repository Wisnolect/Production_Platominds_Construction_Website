"use client";

import React, { useEffect } from "react";
import phone from "../../public/contact/phone.svg";
import address from "../../public/contact/address.svg";
import email from "../../public/contact/email.svg";
import Image from "next/image";
import AOS from "aos";
// import TAOS from "taos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:mb-4 mb-4">
        <div
          className=" w-72 h-28 bg-[url('https://cdn.pixabay.com/photo/2016/12/15/12/24/contact-us-1908762_1280.png')] mt-12 bg-cover bg-center  mb-3 "
          data-aos="fade-down"
        ></div>
        <p
          className="text-orange-600 font-semibold text-lg "
          data-aos="fade-up"
        >
          Contact Us
        </p>
        <hr className="w-[100px] mx-auto shadow-4xl" data-aos="fade-down"/>
        <h1 className="primaryText mt-3 text-center" data-aos="fade-up">
        Contact Us for Personalized Property Guidance
        </h1>
      </div>
      <div className="" data-aos="fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.577471647849!2d74.23307027435729!3d16.698014222300003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x82450a7992c81ca3%3A0x4ec9b89df48a48e1!2sVaradvinayak%20Park%20Kolhapur!5e0!3m2!1sen!2sin!4v1699077191152!5m2!1sen!2sin"
          width="100%"
          height="400"
          className="border-0"
          allowFullScreen
          loading="lazy"
          //   referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="lg:max-w[1028px] max-w[100%] lg:max-h-32 h-[450px] grid lg:grid-cols-3 grid-cols-1 mx-16 my-8 text-blue-700 justify-center items-center lg:gap-16 gap-6">
        <div
          className="bg-slate-100 lg:shadow-xl shadow-lg w-full h-full flex flex-col items-center justify-center lg:gap-2 gap-1"
          data-aos="zoom-in-up"
        >
          <div className="flex gap-2">
            <Image
              src={phone}
              alt="phone"
              className="lg:w-[2.1rem] lg:h-[2.1rem] w-[1.8rem] h-[1.8rem] "
            />
            <h1 className=" lg:text-3xl text-2xl font-bold">Phone</h1>
          </div>
          <div className="">+91 9874563210</div>
        </div>
        <div
          className="bg-slate-100 shadow-xl w-full h-full flex flex-col items-center justify-center gap-2"
          data-aos="zoom-in-up"
        >
          <div className="flex  gap-2">
            <Image
              src={email}
              alt="phone"
              className="lg:w-[2.1rem] lg:h-[2.1rem] w-[1.8rem] h-[1.8rem] "
            />
            <h1 className=" lg:text-3xl text-2xl font-bold">Email</h1>
          </div>
          <div className="">varadvinayakpark@gmail.com</div>
        </div>
        <div
          className="bg-slate-100 shadow-xl w-full h-full flex flex-col items-center justify-center gap-2"
          data-aos="zoom-in-up"
        >
          <div className="flex  gap-2">
            <Image
              src={address}
              alt="phone"
              className="lg:w-[2.1rem] lg:h-[2.1rem] w-[1.8rem] h-[1.8rem] "
            />
            <h1 className=" lg:text-3xl text-2xl font-bold">Address</h1>
          </div>
          <div className="">Kolhapur, Maharashtra, India</div>
        </div>
      </div>
    </>
  );
};

export default Banner;