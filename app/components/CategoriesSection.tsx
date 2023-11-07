import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import FamilyHouse from "../../public/propertyTypes/h1.png";
import HouseVilla from "../../public/propertyTypes/h2.png";
import Apartment from "../../public/propertyTypes/h3.png";
import OfficeStudio from "../../public/propertyTypes/h4.png";
import VillaCondo from "../../public/propertyTypes/h1.png";
import AOS from "aos";
import "aos/dist/aos.css";

const CategoriesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="flex flex-col justify-center items-center mt-10">
      <p className="text-orange-600 font-semibold text-lg " data-aos="fade-up">
        Varadvinayak Properties
      </p>
      <h1 className="primaryText mt-3" data-aos="fade-up">
        Explore Our Property Types
      </h1>
      <div className="flex flex-wrap gap-4 lg:gap-0 lg:w-[80vw] lg:justify-between mt-12 justify-center items-center">
        <div
          className="h-[170px] w-[170px] bg-gray-100 flex flex-col justify-center items-center cursor-pointer rounded-md   hover:shadow-orange-200 drop-shadow-lg hover:drop-shadow-none hover:shadow-lg hover:-translate-y-3"
          data-aos="zoom-in"
        >
          <div className="flex flex-col justify-center items-center">
            <Image src={FamilyHouse} alt="icon" width={80} height={80} />
            <p className="text-lg font-bold mt-2">Family House</p>
          </div>
        </div>
        <div
          className="h-[170px] w-[170px] bg-gray-100 flex flex-col justify-center items-center cursor-pointer rounded-md   hover:shadow-orange-200 drop-shadow-lg hover:drop-shadow-none hover:shadow-lg hover:-translate-y-3"
          data-aos="zoom-in"
        >
          <div className="flex flex-col justify-center items-center">
            <Image src={HouseVilla} alt="icon" width={80} height={80} />
            <p className="text-lg font-bold mt-2">House and Villa</p>
          </div>
        </div>
        <div
          className="h-[170px] w-[170px] bg-gray-100 flex flex-col justify-center items-center cursor-pointer rounded-md   hover:shadow-orange-200 drop-shadow-lg hover:drop-shadow-none hover:shadow-lg hover:-translate-y-3"
          data-aos="zoom-in"
        >
          <div className="flex flex-col justify-center items-center">
            <Image src={Apartment} alt="icon" width={80} height={80} />
            <p className="text-lg font-bold mt-2">Apartment</p>
          </div>
        </div>
        <div
          className="h-[170px] w-[170px] bg-gray-100 flex flex-col justify-center items-center cursor-pointer rounded-md   hover:shadow-orange-200 drop-shadow-lg hover:drop-shadow-none hover:shadow-lg hover:-translate-y-3"
          data-aos="zoom-in"
        >
          <div className="flex flex-col justify-center items-center">
            <Image src={OfficeStudio} alt="icon" width={80} height={80} />
            <p className="text-lg font-bold mt-2">Office and Studio</p>
          </div>
        </div>
        <div
          className="h-[170px] w-[170px] bg-gray-100 flex flex-col justify-center items-center cursor-pointer rounded-md   hover:shadow-orange-200 drop-shadow-lg hover:drop-shadow-none hover:shadow-lg hover:-translate-y-3"
          data-aos="zoom-in"
        >
          <div className="flex flex-col justify-center items-center">
            <Image src={VillaCondo} alt="icon" width={80} height={80} />
            <p className="text-lg font-bold mt-2">Villa and Condo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
