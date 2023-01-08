import React, { useState } from "react";
import Image from "next/image";
import CarouselItem from "./CarouselItem";

import ArrowRightNoTail from "../public/Arrow-right-no-tail.svg";
import ArrowLeftNoTail from "../public/Arrow-left-no-tail.svg";

const Carousel = () => {
  const COFFEE = [
    {
      title: "Mocha",
      description:
        "The name Latte (from Italian “milk”) speaks about the main ingredient of the drink. It is recommended to take fat milk - at least 3.2%. In addition to it, milk foam.",
    },
    {
      title: "Latte",
      description:
        "The name Latte (from Italian “milk”) speaks about the main ingredient of the drink. It is recommended to take fat milk - at least 3.2%. In addition to it, milk foam.",
    },
    {
      title: "Americano",
      description:
        "The name Latte (from Italian “milk”) speaks about the main ingredient of the drink. It is recommended to take fat milk - at least 3.2%. In addition to it, milk foam.",
    },
    {
      title: "Espresso",
      description:
        "Espresso - black coffee made in a coffee machine or a special coffee machine, where hot water is passed through pressed ground beans at a pressure.",
    },
    {
      title: "Cappucino",
      description:
        "Espresso - black coffee made in a coffee machine or a special coffee machine, where hot water is passed through pressed ground beans at a pressure.",
    },
    {
      title: "Cappucino",
      description:
        "Espresso - black coffee made in a coffee machine or a special coffee machine, where hot water is passed through pressed ground beans at a pressure.",
    },
    {
      title: "Cappucino",
      description:
        "Espresso - black coffee made in a coffee machine or a special coffee machine, where hot water is passed through pressed ground beans at a pressure.",
    },
    {
      title: "Cappucino",
      description:
        "Espresso - black coffee made in a coffee machine or a special coffee machine, where hot water is passed through pressed ground beans at a pressure.",
    },
    {
      title: "Cappucino",
      description:
        "Espresso - black coffee made in a coffee machine or a special coffee machine, where hot water is passed through pressed ground beans at a pressure.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextIndex = () => {
    const lastIndex = Math.ceil(COFFEE.length / 3);

    console.log(Math.ceil(COFFEE.length / 3));
    if (activeIndex === lastIndex) return;
    else setActiveIndex(activeIndex + 1);
  };

  const prevIndex = () => {
    if (activeIndex === 0) {
    } else setActiveIndex(activeIndex - 1);
  };
  return (
    <div className="flex flex-row justify-between space-x-8">
      <button className="block ">
        <Image
          src={ArrowLeftNoTail}
          height={64}
          width={64}
          alt="Button to move slider left"
          onClick={prevIndex}
          className={activeIndex === 0 ? "text-red-400" : "translate-x-0"}
        />
      </button>
      <div className="overflow-hidden">
        <div
          className=" flex flex-row transition-all px-10 py-20 gap-5 "
          style={{ transform: `translateX(-${activeIndex * 33.33333333}%)` }}
        >
          {COFFEE.map(({ title, description, idx }) => {
            return (
              <CarouselItem key={idx} title={title} description={description} />
            );
          })}
        </div>
      </div>
      <button className="block">
        <Image
          src={ArrowRightNoTail}
          height={64}
          width={64}
          alt="Button to move slider right"
          onClick={nextIndex}
          className
        />
      </button>
    </div>
  );
};

export default Carousel;
