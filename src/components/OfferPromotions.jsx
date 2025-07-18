"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    title: "Festive Offers",
    subtitle: "Occasional Offers",
    buttonText: "Upto 15% Off",
    description:
      "Special Rates Complimentary Services Festive Decor and Ambiance Customized Packages Advance Booking Discounts Loyalty Rewards.",
    image: "/offer-images/festive.png",
  },
  {
    title: "Extended Stay Special",
    subtitle: "For Members Only",
    buttonText: "Upto 11% Off",
    description:
      "Discounted Rates Complimentary Breakfast Free Wi-Fi Access to Fitness Center & Swimming Pool Laundry Services Airport Transportation Flexible Booking Availability Ideal for Long-Term Stays",
    image: "/offer-images/stay.webp",
  },
  {
    title: "Weekend Escape",
    subtitle: "For Elite Members Only",
    buttonText: "Upto 16% Off",
    description:
      "Complimentary Breakfast Late Check-Out Free Wi-Fi Access Access to Hotel Amenities Flexible Booking Room Types Included in the Offer Ideal for Weekend Getaways",
    image: "/offer-images/weekend.jpeg",
  },
  {
    title: "Luxury Suite Upgrade",
    subtitle: "For Existing Members Only",
    buttonText: "Upto 7% Off",
    description:
      "Discounted Rates for Suite Upgrades Complimentary Breakfast Late Check-Out Free Wi-Fi Access Access to Hotel Amenities Flexible Booking Availability and Restrictions Ideal for Special Occasions or a Splurge",
    image: "/offer-images/modern-luxury.jpg",
  },
  {
    title: "Members Exclusive Offers",
    subtitle: "For Premium Members Only",
    buttonText: "Upto 20% Off",
    description:
      "Discounts on Room Rates Complimentary Breakfast Late Check-Out Free Wi-Fi Access Access to Hotel Amenities Loyalty Program Benefits Flexible Booking",
    image: "/offer-images/memberonly.jpeg",
  },
  {
    title: "Family Fun Package",
    subtitle: "For Group Members Only",
    buttonText: "Upto 10% Off",
    description:
      "Discounted Rates for Families Complimentary Breakfast for the Entire Family Late Check-Out Free Wi-Fi Access Access to Hotel Amenities for Children Family-Friendly Activities and Attractions Flexible Booking Availability and Restrictions",
    image: "/offer-images/fimaly.jpg",
  },
];

function OfferPromotions() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4000); // slower transitions

    return () => clearInterval(interval);
  }, []);

  const current = items[index];

  return (
    <div className="py-10 w-full flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row h-auto md:h-[24rem] w-full md:w-4/5 bg-white gap-6 md:gap-10 shadow-lg rounded-md overflow-hidden ">
        {/* Text Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.title + "-text"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-[30%] h-full p-6 flex flex-col justify-center text-center "
          >
            <h1 className="text-2xl md:text-2xl font-bold mb-2 text-black">
              {current.title}
            </h1>
            <h2 className="text-gray-600 mb-4">{current.subtitle}</h2>
            <button className="text-black transition py-2 rounded-md bg-yellow-300 mb-4">
              {current.buttonText}
            </button>
            <p className="text-gray-700">{current.description}</p>
          </motion.div>
        </AnimatePresence>

        {/* Image Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.image}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-[70%] overflow-hidden"
          >
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-64 md:h-[24rem] object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default OfferPromotions;
