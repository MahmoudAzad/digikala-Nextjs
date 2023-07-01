const { default: Image } = require("next/image");
import { HiChevronLeft } from "react-icons/hi";

const BasedOnUserViewsCards = ({ categories, products }) => {
  return (
    <div className="lg:grid lg:grid-cols-4">
      {categories
        ?.map((category) => category.subCategory)
        .flatMap((sub) => sub)
        .slice(0, 4)
        .map((category) => {
          return (
            <div className=" border p-2">
              <h5 className="font-bold text-lg">{category.name}</h5>
              <span className="text-xs text-gray-600">
                بر اساس بازدیدهای شما
              </span>
              <div className="bg-[#e5e7eb] mt-3 grid grid-cols-2 grid-rows-2  gap-0.5">
                {products
                  .filter((product) => product.subCategory == category.name)
                  .slice(0, 4)
                  .map((pro) => (
                    <div className="p-5 bg-white flex justify-center">
                      <Image
                        src={pro.thumbnail}
                        width={120}
                        height={120}
                        className="w-1/2"
                      />
                    </div>
                  ))}
              </div>
              <div className="flex justify-center text-sky-500 mt-3">
                <h5 className="text-xs font-bold">مشاهده</h5>
                <HiChevronLeft />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BasedOnUserViewsCards;
