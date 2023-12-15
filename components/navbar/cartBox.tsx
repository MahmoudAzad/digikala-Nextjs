"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICartRootState } from "@/types/cart";
import { IProduct } from "@/types/product";
import { removeFromCart } from "@/redux/features/cartSlice";
import {
  HiOutlineClock,
  HiOutlineInboxIn,
  HiOutlineShoppingBag,
  HiOutlineTrash,
  HiTruck,
} from "react-icons/hi";

const CartBox: React.FC = () => {
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

  return (
    <>
      {cartLength ? (
        <div className="relative mt-1">
          <div className="cart-dropdown">
            <HiOutlineShoppingBag className="text-2xl" />
            <div className="bg-red-500 text-white px-[6px] py-[1px] rounded-md absolute -bottom-2 right-0 transform translate-x-2 -translate-y-2 text-xs font-bold">
              {cartLength}
            </div>

            <div className="cart-dropdown-menu absolute hidden  w-[450px] -left-5 border rounded-lg shadow-2xl bg-white">
              <div className="rounded-t  py-2 px-4 block ">
                <p className="text-sm">{cartLength} کالا</p>
                <div
                  className={`max-h-80 ${
                    cart.length > 1 && "overflow-y-scroll"
                  }`}
                >
                  <div className="">
                    {cart.map((item) => (
                      <div key={item.id} className="flex border-b py-5">
                        <div className="w-1/4">
                          <Image
                            src={item.thumbnail}
                            alt={item.name}
                            width={100}
                            height={100}
                            className=""
                          />
                          <div
                            onClick={() => dispatch(removeFromCart(item))}
                            className="flex items-center justify-center border bg-red-600 text-white rounded-lg text-xs p-1 mt-2 w-fit mx-auto gap-x-1 cursor-pointer"
                          >
                            <HiOutlineTrash className="text-lg" />
                            <p>حذف کالا</p>
                          </div>
                        </div>
                        <div className="w-3/4">
                          <h1 className="text-sm font-bold leading-loose pb-2 line-clamp-2">
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
                          <p className="font-bold pt-3">{item.price} تومان</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="py-2">
                    <p className="text-xs text-gray-600">مبلغ قابل پرداخت</p>
                    <p className="text-lg font-bold">12000 تومان</p>
                  </div>
                  <div className="bg-red-500 text-white font-bold p-2 rounded-lg">
                    ثبت سفارش
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <HiOutlineShoppingBag className="text-2xl" />
      )}
    </>
  );
};

export default CartBox;
