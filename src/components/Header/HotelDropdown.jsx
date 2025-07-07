"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cities from "@/data/cities";

export default function HotelDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative hidden md:inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="transition px-2 py-1 font-bold cursor-pointer flex items-center gap-1 ">
        Hotels
        <span className="transform transition-transform duration-300">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-md w-64 z-50 overflow-hidden">
          {cities.map((city) => (
            <Link
              href={`/${city.slug}`}
              key={city.slug}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition"
            >
              <Image
                src={city.image}
                alt={city.name}
                width={40}
                height={40}
                className="rounded-md object-cover"
              />
              <span className="font-medium">{city.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
