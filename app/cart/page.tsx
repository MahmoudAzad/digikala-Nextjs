"use client";

import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../loading";
import { IProduct } from "@/types/product";
import { ICartRootState } from "@/types/cart";
import { INextBuyState } from "@/types/nextBuy";
import CurrentCart from "./currentCart";
import NextCart from "./nextCart";

const CartPage: NextPage = () => {
  const [showCartPage, setShowCartPage] = useState(true);
  const [cart, setCart] = useState<IProduct[]>([]);
  const [cartLength, setCartLength] = useState<number>();
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

  if (cartLength === undefined) {
    return <Loading />;
  }
  return (
    <div className="lg:mx-8 xl:mx-24">
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
        <CurrentCart cartLength={cartLength} cart={getCart} />
      ) : (
        <NextCart nextBuy={nextBuy} />
      )}
    </div>
  );
};

export default CartPage;
