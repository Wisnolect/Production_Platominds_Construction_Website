"use client";

import React, { lazy, Suspense, useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";
import Chat from "./components/Chat";
import CategoriesSection from "./components/CategoriesSection";
import ValueSection from "./components/ValueSection.jsx";
import Testimonials from "./components/Testimonials";

const Videos = lazy(() => import("./components/Videos"));
const ImageSlider = lazy(() => import("./components/ImageSlider"));

export default function Home() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const splashScreenTimer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 1000);

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
          <Testimonials/>
          <Chat />
        </>
      )}
    </section>
  );
}
