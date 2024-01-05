import AddToCartBtn from "@/components/buttons/addToCartBtn";
import EmptyPage from "@/components/emptyPage";
import MobileMenu from "@/components/menu/mobileMenu";
import SimilarProductsSwiper from "@/components/swipers/similarProductsSwiper";
import { removeFromCart } from "@/redux/features/cartSlice";
import { addToNextBuy } from "@/redux/features/nextBuySlice";
import { IProduct } from "@/types/product";
import Image from "next/image";
import {
  HiChevronLeft,
  HiOutlineClock,
  HiOutlineInboxIn,
  HiTruck,
} from "react-icons/hi";
import { useDispatch } from "react-redux";

interface Props {
  cartLength: number;
  cart: IProduct[];
}

const CurrentCart: React.FC<Props> = ({ cartLength, cart }) => {
  const dispatch = useDispatch();

  const addToNextBuyHandler = (item: IProduct) => {
    dispatch(removeFromCart(item));
    dispatch(addToNextBuy(item));
  };

  return (
    <>
      {cartLength ? (
        <>
          <div className=" lg:flex lg:gap-x-2 lg:items-start ">
            <div className="p-4 lg:border lg:p-4 lg:rounded-lg lg:w-2/3 ">
              <p className="text-sm font-bold">سبد خرید شما</p>
              <p className="text-xs text-gray-700 pt-2">{cartLength} کالا</p>
              {cart.map((item) => (
                <div key={item.id} className="border-b">
                  <div className="flex gap-x-2 pt-10">
                    <div className="w-2/4  flex flex-col justify-center items-center sm:w-1/4">
                      <Image
                        src={item.thumbnail}
                        alt={item.name}
                        width="100"
                        height="100"
                        className=""
                      />
                      <AddToCartBtn product={item} />
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
                      <p className="font-bold pt-3">{item.price}dd تومان</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end text-sky-500 gap-x-2 py-5 ">
                    <button
                      onClick={() => addToNextBuyHandler(item)}
                      className="text-xs font-bold"
                    >
                      انتقال به خرید بعدی
                    </button>
                    <HiChevronLeft className="text-lg" />
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:block w-1/3 border rounded-lg p-5">
              <div className="flex justify-between px-2">
                <p className="text-sm">قیمت کالاها</p>
                <p>۱۲۳۴۰۰۰ تومان</p>
              </div>
              <div className="flex justify-between px-2 py-4">
                <p className="text-sm">جمع سبد خرید</p>
                <p>۱۲۳۴۰۰۰ تومان</p>
              </div>
              <p className="bg-red-500 text-white p-3 rounded-lg text-center">
                ثبت سفارش
              </p>
            </div>
          </div>
          <SimilarProductsSwiper />
          <div className="flex justify-between items-center px-5 py-4 fixed z-49 bottom-14 bg-white w-full border-t border-2 shadow-2xl lg:hidden mt-10">
            <p className="bg-red-500 text-white w-1/2 p-3 rounded-lg text-center">
              ثبت سفارش
            </p>
            <div className="pe-5">
              <p className="text-xs">جمع سبد خرید</p>
              <p className="text-sm font-bold">۲۰۰۰۰۰ تومان</p>
            </div>
          </div>
          <MobileMenu />
        </>
      ) : (
        <EmptyPage
          imgSrc="https://www.digikala.com/statics/img/svg/empty-cart.svg"
          title="سبد خرید"
        />
      )}
    </>
  );
};

export default CurrentCart;
