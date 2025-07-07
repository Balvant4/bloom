"use client";
import { useEffect, useState } from "react";

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
    <div className="relative z-10 px-6 sm:px-10 lg:px-20 pt-32 md:pt-60 pb-20  max-w-2xl ml-2 md:ml-20">
      <div className="">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
          Fresh Travel,
          <br /> Hello Bloom.
        </h1>
        <h5 className="text-lg sm:text-2xl mb-6 text-white drop-shadow-md">
          A platform for a new generation of hotels for intelligent travellers,
          at the best locations & rates.
        </h5>
        <input
          type="text"
          placeholder={`Book a Bloom in ${cities[cityIndex]}...`}
          className="w-full p-3 rounded bg-white/90 text-black placeholder:text-gray-600 shadow"
        />
        <h5 className="text-lg sm:text-xl mt-4 text-white drop-shadow-md">
          Book Direct for Lowest Prices!
        </h5>
      </div>
    </div>
  );
}
