import Image from "next/image";
import { faqCardsData } from "./data/cardsData";

const FaqCards = () => {
  return (
    <div className="flex flex-wrap justify-start items-start my-10 mx-3 ">
      {faqCardsData.map((item) => (
        <div
          key={item.id}
          className="w-1/3 border border-t-0 py-5 h-32 lg:w-1/6"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={100}
            height={100}
            className="w-12 flex justify-center items-center mx-auto "
          />
          <p className="text-[11px] text-center pt-3">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FaqCards;
