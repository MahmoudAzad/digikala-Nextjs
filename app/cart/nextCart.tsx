import Image from "next/image";
import { useDispatch } from "react-redux";
import { addMultipleToCart, addToCart } from "@/redux/features/cartSlice";
import EmptyPage from "@/components/emptyPage";
import SimilarProductsSwiper from "@/components/swipers/similarProductsSwiper";
import { IProduct } from "@/types/product";
import {
  removeAllFromNextBuy,
  removeFromNextBuy,
} from "@/redux/features/nextBuySlice";
import {
  HiChevronLeft,
  HiOutlineClock,
  HiOutlineInboxIn,
  HiOutlineShoppingCart,
  HiOutlineTrash,
  HiTruck,
} from "react-icons/hi";

interface Props {
  nextBuy: IProduct[];
}

const NextCart: React.FC<Props> = ({ nextBuy }) => {
  const dispatch = useDispatch();
  const addToCartHandler = (item: IProduct) => {
    dispatch(removeFromNextBuy(item));
    dispatch(addToCart(item));
  };
  const addAllToCartHandler = () => {
    dispatch(removeAllFromNextBuy(nextBuy));
    dispatch(addMultipleToCart(nextBuy));
  };
  return (
    <>
      {nextBuy.length > 0 ? (
        <>
          <div className="p-4 lg:flex lg:gap-x-2 lg:items-start ">
            <div className="lg:border lg:p-4 lg:rounded-lg lg:w-2/3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-bold">لیست خرید بعدی شما</p>
                  <p className="text-xs text-gray-700 pt-2">
                    {nextBuy.length} کالا
                  </p>
                </div>
                <div
                  onClick={addAllToCartHandler}
                  className="flex items-center text-sky-500 cursor-pointer"
                >
                  <p className="text-xs font-bold">انتقال همه به سبد خرید</p>
                  <HiChevronLeft />
                </div>
              </div>
              {nextBuy.map((item) => (
                <div key={item.id} className="border-b py-5">
                  <div className="flex pt-10">
                    <div className="w-2/4  flex flex-col justify-center items-center sm:w-1/4">
                      <Image
                        src={item.thumbnail}
                        alt={item.name}
                        width="100"
                        height="100"
                        className=""
                      />
                    </div>

                    <div className="w-2/4 sm:w-full">
                      <p className="text-xs font-bold line-clamp-3 lg:text-sm">
                        {item.name}
                      </p>
                      <div className="flex items-center gap-x-1 py-1 pt-3">
                        <HiOutlineInboxIn className="text-sky-400 text-lg" />
                        <p className="text-xs font-bold text-gray-600">
                          موجود در انبار دیجی‌کالا
                        </p>
                      </div>
                      <div className="flex items-center gap-x-1 py-1">
                        <HiTruck className="text-red-600 text-lg scale-x-[-1]" />
                        <p className="text-xs font-bold text-gray-600">
                          ارسال دیجی‌کالا
                        </p>
                      </div>
                      <div className="flex items-center gap-x-1 py-1">
                        <HiOutlineClock className="text-blue-700 text-lg" />
                        <p className="text-xs font-bold text-gray-600">
                          ارسال امروز
                        </p>
                      </div>
                      <p className="font-bold pt-3">
                        {Number(item.price).toLocaleString()} تومان
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-start mt-5 mr-5">
                    <div
                      onClick={() => dispatch(removeFromNextBuy(item))}
                      className="flex items-center  flex-nowrap border text-gray-600  rounded-lg text-sm p-3  w-fit  gap-x-2 cursor-pointer"
                    >
                      <HiOutlineTrash className="text-xl" />
                      <p>حذف</p>
                    </div>
                    <div className="flex items-center gap-x-2 p-3 text-red-500 border rounded-lg border-red-500 mr-5">
                      <HiOutlineShoppingCart className="text-xl" />
                      <button
                        onClick={() => addToCartHandler(item)}
                        className="text-xs font-bold"
                      >
                        افزودن به سبد
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:block w-1/3 border rounded-lg p-5">
              <div className="flex justify-center ">
                <p className="text-sm">{nextBuy.length} کالا</p>
              </div>

              <div
                onClick={addAllToCartHandler}
                className="border border-red-500 text-red-500 p-3 rounded-lg text-center flex items-center justify-center gap-x-2 mt-2 cursor-pointer"
              >
                <HiOutlineShoppingCart className="text-xl" />
                <p>انتقال همه به سبد خرید</p>
              </div>
            </div>
          </div>
          <SimilarProductsSwiper />
        </>
      ) : (
        <EmptyPage
          imgSrc={"https://www.digikala.com/statics/img/png/empty-sfl.webp"}
          title={"لیست خرید بعدی"}
        />
      )}
    </>
  );
};

export default NextCart;
