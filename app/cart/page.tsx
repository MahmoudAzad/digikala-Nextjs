"use client";

import Image from "next/image";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimilarProductsSwiper from "@/components/swipers/similarProductsSwiper";
import Loading from "../loading";
import EmptyPage from "../../components/emptyPage";
import { IProduct } from "@/types/product";
import { ICartRootState } from "@/types/cart";
import { INextBuyState } from "@/types/nextBuy";
import {
  addToNextBuy,
  removeAllFromNextBuy,
  removeFromNextBuy,
} from "@/redux/features/nextBuySlice";
import {
  addMultipleToCart,
  addToCart,
  removeFromCart,
} from "@/redux/features/cartSlice";
import {
  HiChevronLeft,
  HiOutlineClock,
  HiOutlineInboxIn,
  HiOutlineShoppingCart,
  HiOutlineTrash,
  HiTruck,
} from "react-icons/hi";
import MobileMenu from "@/components/menu/mobileMenu";

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

  const nextBuy = useSelector((state: INextBuyState) =>
    Object.values(state.nextBuy.entities)
  );

  useEffect(() => {
    setCartLength(getCartLength);
    setCart(getCart);
  }, [getCartLength]);

  const addToNextBuyHandler = (item: IProduct) => {
    dispatch(removeFromCart(item));
    dispatch(addToNextBuy(item));
  };

  const addToCartHandler = (item: IProduct) => {
    dispatch(removeFromNextBuy(item));
    dispatch(addToCart(item));
  };

  const addAllToCartHandler = () => {
    dispatch(removeAllFromNextBuy(nextBuy));
    dispatch(addMultipleToCart(nextBuy));
  };

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
            <p
              className={`text-white px-2 rounded-md text-xs flex items-center ${
                showCartPage ? "bg-red-600" : "bg-gray-500 "
              }`}
            >
              {cartLength}
            </p>
          ) : null}
        </div>

        <div
          onClick={() => setShowCartPage(false)}
          className={`w-1/2 border-b py-4 flex justify-center gap-x-2  ${
            !showCartPage && "text-red-600 border-b-4 border-red-600"
          }`}
        >
          <button>خرید بعدی</button>
          {nextBuy.length > 0 ? (
            <p
              className={`text-white px-2 rounded-md text-xs flex items-center ${
                !showCartPage ? "bg-red-600" : "bg-gray-500 "
              }`}
            >
              {nextBuy.length}
            </p>
          ) : null}
        </div>
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

                <div className="flex justify-between items-center px-5 py-4 fixed z-50 bottom-14 bg-white w-full border-t border-2 shadow-2xl lg:hidden">
                  <p className="bg-red-500 text-white w-1/2 p-3 rounded-lg text-center">
                    ثبت سفارش
                  </p>
                  <div className="pe-5">
                    <p className="text-xs">جمع سبد خرید</p>
                    <p className="text-sm font-bold">۲۰۰۰۰۰ تومان</p>
                  </div>
                </div>
                <MobileMenu />
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
                      <p className="text-xs font-bold">
                        انتقال همه به سبد خرید
                      </p>
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
                          <p className="font-bold pt-3">{item.price} تومان</p>
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
      )}
    </div>
  );
};

export default CartPage;
