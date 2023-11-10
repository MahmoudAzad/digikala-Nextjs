import Image from "next/image";

const QuadrupleCards = ({ cards }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 ">
      {cards[0]?.map((card, index) => (
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
