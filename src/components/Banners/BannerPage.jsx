import React from "react";
import Link from "next/link";
import OfferBanner from "./OfferBanner";

function BannerPage() {
  return (
    <div className="   bg-white text-black">
      <div className=" py-12">
        <Link href="/" className=" cursor-pointer">
          <OfferBanner />
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

export default BannerPage;
