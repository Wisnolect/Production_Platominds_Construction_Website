import Image from "next/image";
import Link from "next/link";
import React from "react";
import ResidentialIcon from "../../public/icons/residential_icon.png";
import CommercialIcon from "../../public/icons/commercial_icon.png";
import OpenPlotIcon from "../../public/icons/open_plots.png";
import IndustrialIcon from "../../public/icons/industrial_icon.png";

const CategoriesSection = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-10">
      <p className="text-orange-600 font-semibold text-lg ">Varadvinayak Categories</p>
      <h1 className="primaryText mt-4">Explore Our Categories</h1>
      <div className="flex flex-wrap gap-4 lg:gap-0 lg:w-[80vw] lg:justify-between mt-12 justify-center items-center">
        <Link href="/" className="h-[170px] w-[170px] bg-gray-100 flex flex-col justify-center items-center cursor-pointer hover:bg-orange-400 rounded-md ">
          <div className="flex flex-col justify-center items-center">
            <Image src={ResidentialIcon} alt="icon" />
            <p className="text-lg font-bold mt-2">Residential Plots</p>
          </div>
        </Link>
        <Link href="/" className="h-[170px] w-[170px] bg-gray-100 flex flex-col justify-center items-center cursor-pointer hover:bg-orange-400 rounded-md">
          <div className="flex flex-col justify-center items-center">
            <Image src={CommercialIcon} alt="icon" />
            <p className="text-lg font-bold mt-2">Commercial Plots</p>
          </div>
        </Link>
        <Link href="/" className="h-[170px] w-[170px] bg-gray-100 flex flex-col justify-center items-center cursor-pointer hover:bg-orange-400 rounded-md">
          <div className="flex flex-col justify-center items-center">
            <Image src={IndustrialIcon} alt="icon" />
            <p className="text-lg font-bold mt-2">Industrial Plots</p>
          </div>
        </Link>
        <Link href="/" className="h-[170px] w-[170px] bg-gray-100 flex flex-col justify-center items-center cursor-pointer hover:bg-orange-400 rounded-md">
          <div className="flex flex-col justify-center items-center">
            <Image src={ResidentialIcon} alt="icon" />
            <p className="text-lg font-bold mt-2">Open Plots</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CategoriesSection;
