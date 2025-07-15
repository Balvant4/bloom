"use client";
import { useEffect, useState } from "react";
import MainButton from "../Buttons/MainButton";

const cities = ["Srinagar", "Goa", "Mumbai", "Delhi"];

export default function HeroContent() {
  const [cityIndex, setCityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCityIndex((prev) => (prev + 1) % cities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-10 lg:px-20 max-w-2xl">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
        Hotel Limon,
      </h1>
      <h5 className="text-lg sm:text-2xl mb-6 text-white drop-shadow-md">
        Banquet Hall Near Sec 29, Gurgaon
      </h5>
      {/* <input
        type="text"
        placeholder={`Book a Bloom in ${cities[cityIndex]}...`}
        className="w-full p-3 rounded bg-white/90 text-black placeholder:text-gray-600 shadow"
      /> */}
      <MainButton href="/book-now" text="Book Now" />
    </div>
  );
}
