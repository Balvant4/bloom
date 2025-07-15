import React from "react";

function OfferBanner() {
  return (
    <div className="bg-[#ffcc09] p-6 md:p-16 rounded-xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start">
            <img
              src="/bolt-icon-green.svg"
              alt="bolt icon"
              className="h-6 w-auto"
            />
            <h5 className="text-[#009368] font-bold ml-2 text-sm md:text-base">
              Get up to 15% off extra on your stays!
            </h5>
          </div>
          <h2 className="  text-xl text-white mt-4 leading-snug">
            Hotel Limon Gurugram is located in the center of India's financial
            and technological “Millennium City”, approximately 15 kilometers
            from the airport. With 40 opulent rooms and Suites, the startingly
            modern business hotel in Gurgaon overlooks Sector 29, the city's
            liveliest district.
          </h2>
          <p className="text-[#6b5604] pt-4 text-sm hidden xl:block md:text-base max-w-md mx-auto md:mx-0">
            A loyalty program designed for our most committed guests — like you,
            who stay with us wherever they go.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="rounded-xl border-2 border-amber-400 w-full max-w-sm overflow-hidden">
            <img
              src="/bedroom.jpg"
              alt="bedroom"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferBanner;
