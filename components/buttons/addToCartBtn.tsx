"use client";

import { addToCart } from "@/redux/features/cartSlice";
import { IProduct } from "@/types/product";
import { useDispatch } from "react-redux";

interface Props {
  product: IProduct;
  classes?: any;
}

const AddToCartBtn: React.FC<Props> = ({ product, classes }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(addToCart(product))}
      className={`bg-rose-500 text-white text-xs font-bold rounded-lg py-3 ${classes}`}
    >
      افزودن به سبد خرید
    </button>
  );
};

export default AddToCartBtn;
