"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeOneQtyFromCart } from "@/redux/features/cartSlice";
import { ICartRootState } from "@/types/cart";
import { IProduct } from "@/types/product";
import { TbMinus, TbPlus, TbTrash } from "react-icons/tb";

interface Props {
  product: IProduct;
}

const AddToCartBtn: React.FC<Props> = ({ product }) => {
  const [availableInCart, setAvailableInCart] = useState<boolean>();
  const getCart = useSelector((state: ICartRootState) => state.cart);
  const productQty = getCart.entities[product.id]?.quantity;
  const dispatch = useDispatch();

  useEffect(() => {
    const availableCartStatus = getCart?.ids.includes(product.id);
    setAvailableInCart(availableCartStatus);
  }, [getCart, availableInCart]);

  return (
    <div className="flex flex-col gap-y-2 lg:mt-4 w-full">
      {availableInCart ? (
        <div className="lg:flex lg:items-center lg:gap-x-3">
          <div className="border-2 border-gray-200 text-xs font-bold rounded-lg py-3 w-full flex justify-between items-center px-2 text-red-500 h-12">
            <TbPlus
              onClick={() => dispatch(addToCart(product))}
              className={`text-xl ${
                productQty === parseInt(product.stock) && "disabled-button"
              }`}
            />
            <div className="flex flex-col justify-center items-center">
              <p className="text-lg">{productQty}</p>
              <p
                className={`${
                  productQty === parseInt(product.stock)
                    ? "block disabled-button"
                    : "hidden"
                }`}
              >
                حداکثر
              </p>
            </div>

            {productQty > 1 ? (
              <TbMinus
                onClick={() => dispatch(removeOneQtyFromCart(product))}
                className="text-xl"
              />
            ) : (
              <TbTrash
                onClick={() => dispatch(removeOneQtyFromCart(product))}
                className="n1 text-xl"
              />
            )}
          </div>
        </div>
      ) : (
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-rose-500 text-white text-xs font-bold rounded-lg py-3"
        >
          افزودن به سبد خرید
        </button>
      )}
    </div>
  );
};

export default AddToCartBtn;
