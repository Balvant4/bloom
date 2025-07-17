import React from "react";
import Link from "next/link";
import OfferBanner from "./OfferBanner";

function BannerPage() {
  return (
    <div className="   bg-white text-black py-5">
      <div className=" ">
        <Link href="/" className=" cursor-pointer">
          <OfferBanner />
        </Link>
      </div>
    </div>
  );
}

export default BannerPage;
