const { default: Image } = require("next/image");

const DoubleCards = ({ cards }) => {
  return (
    <div className="grid grid-cols-2 w-full gap-5 my-14">
      {cards.map((card) => (
        <Image
          key={card.id}
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
