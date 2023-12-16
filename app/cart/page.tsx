"use client";
import { removeFromCart } from "@/redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { ICartRootState } from "@/types/cart";
import { IProduct } from "@/types/product";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import SimilarProductsSwiper from "@/components/swipers/similarProductsSwiper";
import Loading from "../loading";
import EmptyPage from "../../components/emptyPage";
import {
  HiChevronLeft,
  HiOutlineClock,
  HiOutlineInboxIn,
  HiOutlineTrash,
  HiTruck,
} from "react-icons/hi";

const CartPage: NextPage = () => {
  const [showCartPage, setShowCartPage] = useState(true);
  const [cart, setCart] = useState<IProduct[]>([]);
  const [cartLength, setCartLength] = useState<number>();
  const dispatch = useDispatch();

  const getCart = useSelector((state: ICartRootState) =>
    Object.values(state.cart.entities)
  );
  const getCartLength = useSelector(
    (state: ICartRootState) => Object.values(state.cart.entities).length
  );

  useEffect(() => {
    setCartLength(getCartLength);
    setCart(getCart);
  }, [getCartLength]);

  if (cartLength === undefined) {
    return <Loading />;
  }
  return (
    <div className="lg:mx-24">
      <div className="flex items-center  text-gray-600 font-bold lg:pt-32 ">
        <div
          onClick={() => setShowCartPage(true)}
          className={`w-1/2 border-b py-4 flex justify-center gap-x-2  ${
            showCartPage && "text-red-600 border-b-4 border-red-600"
          }`}
        >
          <button>سبد خرید</button>
          {cartLength ? (
            <p className="text-white bg-red-600 px-2 rounded-md text-xs flex items-center">
              {cartLength}
            </p>
          ) : null}
        </div>

        <button
          onClick={() => setShowCartPage(false)}
          className={`w-1/2 text-center border-b py-4  ${
            !showCartPage && "text-red-600 border-b-4 border-red-600"
          }`}
        >
          خرید بعدی
        </button>
      </div>
      {showCartPage ? (
        <>
          {cartLength ? (
            <>
              <div className="p-4 lg:flex lg:gap-x-2 lg:items-start ">
                <div className="lg:border lg:p-4 lg:rounded-lg lg:w-2/3">
                  <p className="text-sm font-bold">سبد خرید شما</p>
                  <p className="text-xs text-gray-700 pt-2">
                    {cartLength} کالا
                  </p>
                  {cart.map((item) => (
                    <div key={item.id} className="border-b">
                      <div className="flex pt-10">
                        <div className="w-2/4  flex flex-col justify-center items-center sm:w-1/4">
                          <Image
                            src={item.thumbnail}
                            alt={item.name}
                            width="100"
                            height="100"
                            className=""
                          />
                          <div
                            onClick={() => dispatch(removeFromCart(item))}
                            className="flex items-center justify-center flex-nowrap border bg-red-600 text-white rounded-lg text-xs p-1 mt-2 w-fit mx-auto gap-x-1 cursor-pointer"
                          >
                            <HiOutlineTrash className="text-lg" />
                            <p>حذف کالا</p>
                          </div>
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
                          <p className="font-bold pt-3">{item.price} تومان</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-end text-sky-500 gap-x-2 py-5 ">
                        <p className="text-xs font-bold">انتقال به خرید بعدی</p>
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

                <div className="flex justify-between items-center px-5 py-4 fixed bottom-0 bg-white w-full border-t border-2 shadow-2xl lg:hidden">
                  <p className="bg-red-500 text-white w-1/2 p-3 rounded-lg text-center">
                    ثبت سفارش
                  </p>
                  <div className="pe-5">
                    <p className="text-xs">جمع سبد خرید</p>
                    <p className="text-sm font-bold">۲۰۰۰۰۰ تومان</p>
                  </div>
                </div>
              </div>
              <SimilarProductsSwiper />
            </>
          ) : (
            <EmptyPage
              imgSrc="https://www.digikala.com/statics/img/svg/empty-cart.svg"
              title="سبد خرید"
            />
          )}
        </>
      ) : (
        <EmptyPage
          imgSrc={"https://www.digikala.com/statics/img/png/empty-sfl.webp"}
          title={"لیست خرید بعدی"}
        />
      )}
    </div>
  );
};

export default CartPage;
