import React, { useState } from "react";
import Image from "next/image";
import CarouselItem from "./CarouselItem";

import ArrowRightNoTail from "../public/Arrow-right-no-tail.svg";
import ArrowLeftNoTail from "../public/Arrow-left-no-tail.svg";

const Carousel = ({ activeIndex }) => {
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
  ];

  //   const [activeIndex, setActiveIndex] = useState(0);
  //   const [activeIndex, setActiveIndex] = useState(0);

  const nextIndex = () => {
    setActiveIndex(activeIndex + 1);
  };

  const prevIndex = () => {
    setActiveIndex(activeIndex - 1);
  };
  return (
    <div className="overflow-hidden">
      <div
        className=" flex flex-row transition-all"
        style={{ transform: `translateX(-${activeIndex * 33.33333333}%)` }}
      >
        {COFFEE.map(({ title, description, idx }) => {
          return (
            <CarouselItem key={idx} title={title} description={description} />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
