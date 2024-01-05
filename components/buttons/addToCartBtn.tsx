"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/features/cartSlice";
import { ICartRootState } from "@/types/cart";
import { IProduct } from "@/types/product";
import { TbMinus, TbPlus, TbTrash } from "react-icons/tb";

interface Props {
  product: IProduct;
}

const AddToCartBtn: React.FC<Props> = ({ product }) => {
  const [availableInCart, setAvailableInCart] = useState<boolean>();
  const [qty, setQty] = useState<number>(1);
  const dispatch = useDispatch();
  const getCart = useSelector((state: ICartRootState) => state.cart);

  useEffect(() => {
    const availableCartStatus = getCart?.ids.includes(product.id);
    setAvailableInCart(availableCartStatus);
  }, [getCart, availableInCart, qty]);

  return (
    <div className="flex flex-col gap-y-2 lg:mt-4 w-full">
      {availableInCart ? (
        <div className="lg:flex lg:items-center lg:gap-x-3">
          <div className="border-2 border-gray-200 text-xs font-bold rounded-lg py-3 w-full flex justify-between items-center px-2 text-red-500 lg:w-1/2">
            <TbPlus onClick={() => setQty(qty + 1)} className="text-xl" />
            <p className="text-lg">{qty}</p>

            {qty > 1 ? (
              <TbMinus onClick={() => setQty(qty - 1)} className="text-xl" />
            ) : (
              <TbTrash
                onClick={() => dispatch(removeFromCart(product))}
                className="n1 text-xl"
              />
            )}
          </div>
          <div className="hidden lg:block">
            <p className="text-sm">در سبد شما</p>
            <p className="text-xs">
              مشاهده{" "}
              <Link className="text-sky-500" href="/cart">
                سبد خرید
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => dispatch(addToCart(product))}
          className={`bg-rose-500 text-white text-xs font-bold rounded-lg py-3`}
        >
          افزودن به سبد خرید
        </button>
      )}
    </div>
  );
};

export default AddToCartBtn;
