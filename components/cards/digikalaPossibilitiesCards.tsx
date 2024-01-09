import Image from "next/image";
import React from "react";
import { digikalaPossibilitiesCardsData } from "./data/cardsData";

const DigikalaPossibilitiesCards = () => {
  return (
    <div className="flex flex-wrap gap-y-2 gap-x-1 lg:gap-0 lg:flex-nowrap justify-around bg-white my-5 pt-3 pb-6 px-3 border-t border-b ">
      {digikalaPossibilitiesCardsData.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          <Image src={item.image} alt={item.name} width={50} height={50} />
          <p className="text-xs text-gray-500">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default DigikalaPossibilitiesCards;
