"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ServicesApi from "../api/ServicesApi";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const router = useRouter();
  const [ServicesData, setServicesData] = useState(ServicesApi);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section>
        <div className="flex flex-col items-center mt-24 mb-8">
          <p
            className="text-orange-600 font-semibold text-lg "
            data-aos="fade-up"
          >
            Our Services
          </p>
          <hr className="w-[120px] mx-auto shadow-4xl" data-aos="fade-down"/>
          <h1 className="primaryText mt-3 text-center" data-aos="fade-up">
          Our Services, Your Satisfaction
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 justify-items-center mt-10">
          {ServicesData.map((currElem: any, index) => {
            const { image, title, description, url } = currElem;
            return (
              <div key={`services_${index}`} data-aos="zoom-in">
                <div className="py-10">
                  <div className="rounded overflow-hidden shadow-lg max-w-sm">
                    <img src={image} />
                    <div className="px-6 py-4">
                      <div className="font-bold tetx-xl mb-2">{title}</div>
                      <p className="text-gray-600 ">{description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-5 pb-2 px-6">
                      <button
                        className="bg-orange-300 rounded-full px-3 py-1 font-base mb-2"
                        onClick={() => {
                          router.push(url);
                        }}
                      >
                        Know More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;