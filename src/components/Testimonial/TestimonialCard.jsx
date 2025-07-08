import React from "react";

const TestimonialCard = ({ image, name, location, price }) => {
  return (
    <div className="bg-white   shadow-md  rounded-xl ">
      <img
        src={image}
        alt={name}
        className="w-full h-48  mb-3 object-cover rounded-t-xl"
      />
      <div className=" px-4 pb-4">
        <h6 className="   text-[#696965]">{name}</h6>
        <div className=" flex items-center justify-between ">
          <p className="text-sm text-[#999999] ">{location}</p>
          <p className=" text-[#09976d] font-bold">From {price}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
