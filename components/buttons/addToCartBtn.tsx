"use client";

import { addToCart, removeFromCart } from "@/redux/features/cartSlice";
import { ICartRootState } from "@/types/cart";
import { IProduct } from "@/types/product";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TbMinus, TbMoodNerd, TbPlus, TbTrash } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  product: IProduct;
  classes?: any;
}

const AddToCartBtn: React.FC<Props> = ({ product, classes }) => {
  const [availableInCart, setAvailableInCart] = useState<boolean>();
  const [qty, setQty] = useState<number>(1);
  const dispatch = useDispatch();
  const getCart = useSelector((state: ICartRootState) => state.cart);

  useEffect(() => {
    const availableCartStatus = getCart?.ids.includes(product.id);
    setAvailableInCart(availableCartStatus);
  }, [getCart, availableInCart, qty]);

  return (
    <>
      {availableInCart ? (
        <div className={`flex flex-col gap-y-2 ${classes}`}>
          {parseInt(product?.stock) < 5 && (
            <p className="text-red-500 text-xs font-bold">
              تنها {product.stock} عدد در انبار دیجی‌کالا باقی مانده
            </p>
          )}
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
        </div>
      ) : (
        <div className={`flex flex-col gap-y-2 ${classes}`}>
          {parseInt(product?.stock) < 5 && (
            <p className="text-red-500 text-xs font-bold">
              تنها {product.stock} عدد در انبار دیجی‌کالا باقی مانده
            </p>
          )}
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-rose-500 text-white text-xs font-bold rounded-lg py-3 w-full"
          >
            افزودن به سبد خرید
          </button>
        </div>
      )}
    </>
  );
};

export default AddToCartBtn;
