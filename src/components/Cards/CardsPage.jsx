import React from "react";
import OfferCard from "./OfferCard";
import Link from "next/link";

function CardsPage() {
  return (
    <div className=" pb-36  bg-white text-black">
      <div className="px-4 sm:px-6 md:px-16 lg:px-28 py-12">
        <Link href="/" className=" cursor-pointer">
          <OfferCard />
        </Link>
      </div>
      <div>
        <img
          src="/1749027022278-WEB_KR_1440 by 381.webp"
          alt="kriti"
          className=" w-full"
        />
      </div>
    </div>
  );
}

export default CardsPage;
