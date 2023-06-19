import Image from "next/image";

const QuadrupleCards = ({ cards }) => {
  return (
    <div className="flex justify-between gap-4">
      {cards[0].map((card) => (
        <div>
          <Image
            src={card.image}
            width={400}
            height={400}
            className="rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
};

export default QuadrupleCards;
