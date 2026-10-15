"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ICartRootState } from "@/types/cart";
import { IProduct } from "@/types/product";
import AddToCartBtn from "../buttons/addToCartBtn";
import {
  HiOutlineClock,
  HiOutlineInboxIn,
  HiOutlineShoppingBag,
  HiTruck,
} from "react-icons/hi";
import { usePathname } from "next/navigation";

const CartMenuDropdown: React.FC = () => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [cartTotal, setCartTotal] = useState(0);

  const getCart = useSelector((state: ICartRootState) => state.cart.entities);
  console.log("get cart is=> ", getCart);
  const cartPath = usePathname().includes("cart");
  const total = cart.reduce((acc, item) => {
    return acc + item.quantity * parseInt(item.price);
  }, 0);
  const totalQuantity = cart.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0,
  );

  useEffect(() => {
    setCart(Object.values(getCart));
    setCartTotal(total);
  }, [getCart, total]);
  return (
    <>
      {cart?.length ? (
        <div className="relative mt-1">
          <div className="cart-dropdown">
            <Link href="/cart">
              <HiOutlineShoppingBag className="text-2xl" />
              <div className="bg-red-500 text-white px-[6px] py-[1px] rounded-md absolute -bottom-2 right-0 transform translate-x-2 -translate-y-2 text-xs font-bold">
                {totalQuantity}
              </div>
            </Link>
            {!cartPath && (
              <div className="cart-dropdown-menu absolute hidden  w-[450px] -left-5 border rounded-lg shadow-2xl bg-white">
                <div className="rounded-t py-2 px-4 block ">
                  <div className="flex items-center gap-2 py-2 shadow-[0_4px_6px_-6px_rgba(0,0,0,0.5)]">
                    <p className="font-bold">خلاصه سبد خرید شما</p>
                    <p className="text-sm text-gray-700">
                      {totalQuantity} کالا
                    </p>
                  </div>

                  <div
                    className={`max-h-80 ${
                      cart.length > 1 && "overflow-y-scroll"
                    }`}
                  >
                    <div className="">
                      {cart?.map((item) => (
                        <div
                          key={item.id}
                          className="flex gap-x-2 border-b py-5"
                        >
                          <div className="w-1/4">
                            <Image
                              src={item.thumbnail}
                              alt={item.name}
                              width={100}
                              height={100}
                              className=""
                            />
                            <AddToCartBtn product={item} />
                          </div>
                          <div className="w-3/4">
                            <h1 className="text-xs font-bold leading-loose pb-2 line-clamp-2">
                              {item.name}
                            </h1>
                            <div className="flex items-center gap-x-1 py-1">
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
                            <div className="text-left">
                              <span className="bg-[#ef394e]  text-xs text-white rounded-xl  py-0 px-1">
                                {item.offer}%
                              </span>

                              <del className="text-xs lg:text-sm text-gray-400 ml-2 mt-1">
                                {Math.round(
                                  Number(item.price) /
                                    (1 - Number(item.offer) / 100),
                                ).toLocaleString()}
                              </del>

                              <p className="font-bold pt-3 px-2">
                                {Number(item.price).toLocaleString()} تومان
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="py-2">
                      <p className="text-xs text-gray-600">مبلغ قابل پرداخت</p>
                      <p className="text-lg font-bold">
                        {cartTotal.toLocaleString()} تومان
                      </p>
                    </div>
                    <Link
                      href="/cart"
                      className="bg-red-500 text-white font-bold p-2 rounded-lg"
                    >
                      ثبت سفارش
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Link href="/cart">
          <HiOutlineShoppingBag className="text-2xl" />
        </Link>
      )}
    </>
  );
};

export default CartMenuDropdown;
