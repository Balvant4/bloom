import React from "react";
import Testimonials from "./Testimonials";

function BloomAccrossIndia() {
  return (
    <div className="bg-white text-black px-4 sm:px-6 md:px-16 lg:px-32 py-12">
      <div>
        <h2 className="text-4xl font-bold mb-4 text-[#ffcc09]">
          Blooming across India
        </h2>
        <p className="text-2xl  w-full xl:w-1/2  text-[#999999]">
          In top locations including - Mumbai, Bengaluru, Delhi, Gurugram, Pune,
          Goa, Udaipur, Srinagar & Rishikesh!
        </p>
      </div>
      <div>
        <div>
          <Testimonials />
        </div>
      </div>
    </div>
  );
}

export default BloomAccrossIndia;
