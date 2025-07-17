"use client";
import React from "react";
import {
  FaBed,
  FaSnowflake,
  FaConciergeBell,
  FaParking,
  FaCreditCard,
  FaShuttleVan,
  FaBroom,
  FaAccessibleIcon,
  FaBan,
  FaBath,
  FaUtensils,
  FaUserTie,
} from "react-icons/fa";

const features = [
  { icon: <FaBed />, label: "Luxury Rooms" },
  { icon: <FaSnowflake />, label: "Air-Conditioning" },
  { icon: <FaConciergeBell />, label: "24 X 7 Front Desk" },
  { icon: <FaParking />, label: "Free Car Parking" },
  { icon: <FaCreditCard />, label: "Payment (Cash, Card, UPI)" },
  { icon: <FaShuttleVan />, label: "Airport Shuttle" },
  { icon: <FaBroom />, label: "Daily Housekeeping" },
  { icon: <FaAccessibleIcon />, label: "Wheelchair Access" },
  { icon: <FaBan />, label: "Easy Cancellations" },
  { icon: <FaUserTie />, label: "120 People Banquet Hall" },
  { icon: <FaBath />, label: "Modern Bathrooms" },
  { icon: <FaUtensils />, label: "In-House Kitchen" },
];

const Features = () => {
  const repeatedFeatures = [...features, ...features]; // Duplicate for smooth loop

  return (
    <div className="features_container bg-white py-20 w-full text-black flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-4xl font-semibold mb-4">Features</h1>
      <p className="text-center max-w-xl mb-10 text-gray-700">
        Spacious, well-appointed rooms and suites with high-end amenities and
        state-of-the-art entertainment systems.
      </p>

      {/* Infinite Scroll Wrapper */}
      <div className="overflow-hidden w-full">
        <div className="marquee gap-16 px-16">
          {repeatedFeatures.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center min-w-[200px] cursor-pointer"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <div className="text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
