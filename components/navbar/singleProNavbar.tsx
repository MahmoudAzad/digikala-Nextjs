"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import {
  addToWishList,
  removeFromWishList,
} from "@/redux/features/wishListSlice";
import { ICartRootState } from "@/types/cart";
import { IProduct } from "@/types/product";
import { IWishListRootState } from "@/types/wishList";
import {
  HiArrowRight,
  HiHeart,
  HiOutlineDotsVertical,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi";

interface Props {
  singleProData: IProduct;
}
const SingleProNavbar: React.FC<Props> = ({ singleProData }) => {
  const [cartLength, setCartLength] = useState<number>(0);
  const [isWished, setIsWished] = useState<boolean>();
  const dispatch = useDispatch();
  const getCartLength = useSelector(
    (state: ICartRootState) => Object.values(state.cart.entities).length
  );
  const getWishlist = useSelector(
    (state: IWishListRootState) => state.wishList
  );
  useEffect(() => {
    setCartLength(getCartLength);
    const isWishedStatus = getWishlist.ids.includes(singleProData.id);
    setIsWished(isWishedStatus);
  }, [getCartLength, getWishlist]);

  return (
    <div className="fixed w-full z-50 h-14 flex justify-between items-center bg-white px-5">
      <div className="flex items-center gap-x-2">
        <HiArrowRight className="text-xl" />
        <Image
          src="https://www.digikala.com/statics/img/svg/digi.svg"
          width="1000"
          height="1000"
          alt="دیجیکالا"
          className="w-16"
        />
      </div>
      <div className="flex items-center gap-x-4 relative">
        <Link href="/cart">
          <HiOutlineShoppingCart className="text-2xl" />
          {cartLength > 0 ? (
            <div className="bg-red-500 text-white px-[6px] py-[1px] rounded-md absolute -bottom-2 right-0 transform translate-x-2 -translate-y-2 text-xs font-bold">
              {cartLength}
            </div>
          ) : null}
        </Link>
        {isWished ? (
          <HiHeart
            onClick={() => dispatch(removeFromWishList(singleProData))}
            className="text-red-600 text-2xl"
          />
        ) : (
          <HiOutlineHeart
            onClick={() => dispatch(addToWishList(singleProData))}
            className="text-2xl"
          />
        )}
        <HiOutlineDotsVertical className="text-2xl" />
      </div>
    </div>
  );
};

export default SingleProNavbar;
