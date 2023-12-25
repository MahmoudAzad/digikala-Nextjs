import Image from "next/image";
import { gifCardsData } from "./data/cardsData";

const GiftBanners = () => {
  return (
    <div className="grid grid-col-1 gap-y-5 gap-x-5 my-14 sm:mx-20 lg:mx-0 lg:grid-cols-2">
      {gifCardsData.banners.map((gifBanner) => (
        <Image
          key={gifBanner.id}
          src={gifBanner.image}
          width={1000}
          height={1000}
          alt={"کارت هدیه"}
          className="w-full rounded-lg"
        />
      ))}
    </div>
  );
};

export default GiftBanners;
