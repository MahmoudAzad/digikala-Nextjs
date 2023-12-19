import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/types/product";
import { LuHistory, LuStar, LuTruck } from "react-icons/lu";

interface Props {
  products: IProduct[] | [];
}

const SearchProductsCards: React.FC<Props> = ({ products }) => {
  return (
    <div className="">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:mt-10 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {products?.map((item) => (
          <div
            key={item.id}
            className="flex items-center border-b px-2 py-5 sm:flex-col sm:px-5"
          >
            <Link href={`/product/${item.id}`}>
              <Image
                alt="دیجیکالا"
                src={item.productImage[0].image}
                width="200"
                height="100"
                className="w-1/3 sm:w-full"
              />
              <div className="text-xs leading-loose font-bold">
                <div className="rounded-lg  flex items-center gap-x-1 max-w-fit  bg-slate-100 p-1">
                  <LuTruck className="text-lg scale-x-[-1] text-red-600" />
                  <span className=" text-gray-600 text-xs">ارسال رایگان</span>
                </div>

                <p className="line-clamp-2 my-2">{item.name}</p>
                <div className="flex justify-between">
                  <div className="flex items-center gap-x-1">
                    <LuHistory className="text-blue-700 text-sm" />
                    <p>ارسال فردا</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <p>۴.۴</p>
                    <LuStar className="text-yellow-400 text-sm" />
                  </div>
                </div>
                <p className="text-end pe-1 text-sm mt-2">{item.price} تومان</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchProductsCards;
