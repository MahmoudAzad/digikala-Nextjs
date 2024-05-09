import Image from "next/image";
import { gifCardsData } from "./data/cardsData";

const GiftCards = () => {
  return (
    <div className="grid grid-cols-2 gap-x-4 lg:grid-cols-4">
      {gifCardsData.cards?.map((gifCard) => (
        <Image
          key={gifCard.id}
          src={gifCard.image}
          alt={"کارت هدیه مناسبتی"}
          width={1000}
          height={1000}
          className="w-full rounded-lg"
        />
      ))}
    </div>
  );
};

export default GiftCards;
