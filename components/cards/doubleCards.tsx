import Image from "next/image";
import { IGallery } from "@/types/category";

interface Props {
  cards: IGallery[];
}

const DoubleCards: React.FC<Props> = ({ cards }) => {
  return (
    <div className="grid grid-cols-2 w-full gap-5 my-14">
      {cards?.map((card, index) => (
        <Image
          key={index}
          alt="جشنواره دیجیکالا"
          src={card.image}
          width={1000}
          height={1000}
          className="rounded-xl"
        />
      ))}
    </div>
  );
};

export default DoubleCards;
