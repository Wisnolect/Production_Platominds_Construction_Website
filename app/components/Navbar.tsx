"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "../../public/Navbar/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import Header from "./Header";

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isHeaderVisible, setHeaderVisibility] = useState(true); // Add state for header visibility
  const [isNavbarAtTop, setNavbarAtTop] = useState(false);

  const router = useRouter();
  const closeMenu = () => {
    setMenu(false);
  };
  const handleLinkClick = (link: any) => {
    closeMenu();
    router.push(link);
  };

  const navlinks = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Services",
      link: "/services",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  // Add an event listener to handle header visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHeaderVisibility(false);
        setNavbarAtTop(true);
      } else {
        setHeaderVisibility(true);
        setNavbarAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="pt-16">
      {isHeaderVisible && <Header />}{" "}
      {/* Show header only if isHeaderVisible is true */}
      <nav
        className={clsx(
          "flex justify-between px-8 items-center py-3 bg-white fixed w-full shadow-md z-[1000]",
          isNavbarAtTop ? "top-0" : "top-8"
        )}
      >
        <div className="">
          <Link href={"/"} className="text-4xl font-mono ml-auto">
            <Image
              src={logo}
              alt="logo"
              className="w-[80px] h-[70px] lg:w-[110px] lg:h-[70px]"
            />
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <section className="flex items-center sm:gap-[60vw] lg:gap-14 md:gap-[80vw] ">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {navlinks.map((d, i) => (
              <Link
                key={i}
                className="hidden lg:block text-black text-lg hover:text-orange-500 hover:transform transition duration-300 hover:scale-110"
                href={d.link}
              >
                {d.label}
              </Link>
            ))}
            {/* logo */}
          </section>
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
            <IoCloseOutline
              onClick={closeMenu}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {navlinks.map((d, i) => (
              <div
                key={i}
                className="font-bold"
                onClick={() => handleLinkClick(d.link)}
              >
                {d.label}
              </div>
            ))}
          </section>
        </div>
      </nav>
    </main>
  );
}
