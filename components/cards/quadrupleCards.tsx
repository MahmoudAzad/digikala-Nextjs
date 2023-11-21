import { IGallery } from "@/types/category";
import Image from "next/image";

interface Props {
  cards: IGallery[];
}

const QuadrupleCards: React.FC<Props> = ({ cards }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 ">
      {cards?.map((card: IGallery, index: number) => (
        <div key={index}>
          <Image
            alt="دیجیکالا"
            src={card.image}
            width={500}
            height={500}
            className="rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
};

export default QuadrupleCards;
