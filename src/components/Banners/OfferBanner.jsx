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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 leading-snug">
            The more you stay,
            <br /> the less you pay.
          </h2>
          <p className="text-[#6b5604] pt-4 text-sm hidden xl:block md:text-base max-w-md mx-auto md:mx-0">
            A loyalty program designed for our most committed guests — like you,
            who stay with us wherever they go.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="bg-white py-5 px-6 sm:px-10 rounded-xl border-2 border-amber-400 w-full max-w-sm">
            <img src="/logo-yellow.svg" alt="logo" className="h-5 w-auto" />
            <img
              src="/unlock-member.svg"
              alt="unlock member"
              className="underline mt-2"
            />
            <div className="flex items-center pt-5 relative">
              <h4 className="text-[#959595] font-bold text-base sm:text-lg md:text-xl pl-1">
                Unlock Member Rates
              </h4>
              <span className="absolute left-0 -bottom-1 w-4/5 h-[2px] bg-amber-400"></span>
              <img
                src="/caret-right.svg"
                alt="caret"
                className="ml-2 h-4 w-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferBanner;
