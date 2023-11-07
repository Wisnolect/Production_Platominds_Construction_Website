"use client";

import React, { useEffect, useState } from "react";
import insta from "../../public/Header/insta.svg";
import location from "../../public/Header/location.svg";
import twitter from "../../public/Header/twitter.svg";
import email from "../../public/Header/email.svg";
import Image from "next/image";
import clsx from "clsx";

const Header = () => {
  //   const [isHeaderVisible, setHeaderVisible] = useState(true);

  //   useEffect(() => {
  //     let prevScrollPos = window.pageYOffset;

  //     const handleScroll = () => {
  //       const currentScrollPos = window.pageYOffset;
  //       const isScrolledDown = prevScrollPos < currentScrollPos;

  //       setHeaderVisible(!isScrolledDown);

  //       prevScrollPos = currentScrollPos;
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <header
    //   className={clsx(
    //     "fixed top-0 left-0 w-full bg-white py-3 transition-all",
    //     !isHeaderVisible && "transform -translate-y-full"
    //   )}
    >
      <div className="flex justify-end gap-4 lg:gap-8 items-center bg-black/80 fixed top-0  w-full z-[1000] px-5">
        <div className="">
          <Image
            src={insta}
            alt="insta"
            className="w-10 h-8 p-1 hover:bg-orange-400 transform transition duration-500 hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="">
          <Image
            src={twitter}
            alt="twitter"
            className="w-10 h-8 p-1 hover:bg-orange-400 transform transition duration-500 hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="">
          <Image
            src={email}
            alt="email"
            className="w-10 h-8 p-1 hover:bg-orange-400 transform transition duration-500 hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="">
          <Image
            src={location}
            alt="location"
            className="w-10 h-8 p-1 hover:bg-orange-400 transform transition duration-500 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;