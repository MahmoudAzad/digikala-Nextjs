import Image from "next/image";

const CategoriesCards = ({ cards }) => {
  return (
    <div className="mt-10">
      <h1 className="text-center font-bold text-xl">دسته‌بندی‌های دیجی‌کالا</h1>
      <div className="w-full h-auto gap-y-16 flex flex-wrap justify-center mt-2">
        {cards.map((card) => (
          <div className="w-1/2 sm:w-1/3 lg:w-1/5 flex justify-center flex-col items-center">
            <div className="text-center w-[90px] lg:w-[170px] h-[90px] lg:h-[170px]">
              <Image src={card.thumbnail} width={170} height={170} />
            </div>
            <p className="text-xs font-bold mt-3">{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesCards;
