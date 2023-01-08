import React from "react";

const CarouselItem = ({ title, description }) => {
  return (
    <div className="flex flex-shrink-0 flex-col justify-between text-center w-1/3 min-h-[458px] p-10 shop-shadow rounded-3xl bg-white">
      <p className="mt-8 text-3xl">{title}</p>
      <p className="mt-8 text-lg leading-9 text-[#444A4A]">{description}</p>
      <button className="px-8 py-3 bg-[#2D635E] rounded-md text-white mt-8">
        Order now
      </button>
    </div>
  );
};

export default CarouselItem;
