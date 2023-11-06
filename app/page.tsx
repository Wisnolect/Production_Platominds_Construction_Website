"use client";

import React, { lazy, Suspense, useState, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { FadeLoader } from "react-spinners";
import Chat from "./components/Chat";
import CategoriesSection from "./components/CategoriesSection";
import ValueSection from "./components/ValueSection";

const Videos = lazy(() => import("./components/Videos"));
const ImageSlider = lazy(() => import("./components/ImageSlider"));

export default function Home() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  // Use useEffect to hide the splash screen after 2 seconds
  useEffect(() => {
    const splashScreenTimer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000); // 2000 milliseconds (2 seconds)

    return () => {
      clearTimeout(splashScreenTimer);
    };
  }, []);

  return (
    <section className="pt-10">
      {showSplashScreen ? (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-white z-50">
          {/* You can customize the splash screen content here */}
          <div className="animate-pulse">
            <FadeLoader color="#ff9718" />
          </div>
        </div>
      ) : (
        <>
          <Suspense
            fallback={
              <div className="h-[80vh] w-full flex justify-center items-center animate-pulse">
                <FadeLoader color="#ff9718" />
              </div>
            }
          >
            <ImageSlider />
          </Suspense>

          <CategoriesSection />
          <Videos/>
          <ValueSection />

          {/* <div className="flex flex-col items-center">
        <h1 className="mt-[5rem] mb-2 text-center capitalize text-4xl font-bold text-orange-600">
          Our Mission
        </h1>
        <div className="w-5/6 p-2 rounded-md my-5 bg-gray-200 shadow-lg">
          <p>
            At{" "}
            <span className="font-semibold">
              Varadvinayak Real Infra Pvt. Ltd.
            </span>
            , our mission is to transform dreams into reality. We are dedicated
            to providing top-tier services in land acquisition, development, and
            construction. With a commitment to excellence, innovation, and
            sustainability, we aim to create thriving communities and lasting
            value for our clients. We believe in the power of collaboration and
            integrity, and we're driven to build a better future, one project at
            a time.
          </p>
        </div>
      </div> */}
          <Chat />
        </>
      )}
    </section>
  );
}
