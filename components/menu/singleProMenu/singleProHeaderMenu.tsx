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
  TbArrowRight,
  TbBellRinging,
  TbHeart,
  TbHeartFilled,
  TbShoppingCart,
} from "react-icons/tb";
import { IAmazingInfoRootState } from "@/types/amazingInfo";
import {
  addToAmazingInfo,
  removeFromAmazingInfo,
} from "@/redux/features/amazingInfoSlice";
import MoreOptionsProModal from "@/components/modals/moreOptionsProModal";

interface Props {
  singleProData: IProduct;
}
const SingleProHeaderMenu: React.FC<Props> = ({ singleProData }) => {
  const [cartLength, setCartLength] = useState<number>(0);
  const [isWished, setIsWished] = useState<boolean>();
  const [isAmazingInfo, setIsAmazingInfo] = useState<boolean>();
  const dispatch = useDispatch();

  const getCartLength = useSelector(
    (state: ICartRootState) => Object.values(state.cart.entities).length
  );
  const getWishlist = useSelector(
    (state: IWishListRootState) => state.wishList
  );
  const getAmazingInfo = useSelector(
    (state: IAmazingInfoRootState) => state.amazingInfo
  );
  useEffect(() => {
    setCartLength(getCartLength);
    const isWishedStatus = getWishlist.ids.includes(singleProData.id);
    const isAmazingStatus = getAmazingInfo.ids.includes(singleProData.id);
    setIsAmazingInfo(isAmazingStatus);
    setIsWished(isWishedStatus);
  }, [getCartLength, getWishlist, getAmazingInfo]);

  const addToAmazingInfoHandler = () => {
    if (isAmazingInfo) {
      dispatch(removeFromAmazingInfo(singleProData));
    } else {
      dispatch(addToAmazingInfo(singleProData));
    }
  };
  return (
    <div className="fixed w-full z-50 h-14 flex justify-between items-center bg-white px-5">
      <div className="flex items-center gap-x-2">
        <TbArrowRight className="text-xl" />
        <Image
          src="https://www.digikala.com/statics/img/svg/digi.svg"
          width="1000"
          height="1000"
          alt="دیجیکالا"
          className="w-16"
        />
      </div>
      <div className="flex items-center gap-x-5 relative">
        <Link href="/cart">
          <TbShoppingCart className="text-2xl" />
          {cartLength > 0 ? (
            <div className="bg-red-500 text-white px-[6px] py-[1px] rounded-md absolute -bottom-2 right-0 transform translate-x-2 -translate-y-2 text-xs font-bold">
              {cartLength}
            </div>
          ) : null}
        </Link>
        {isWished ? (
          <TbHeartFilled
            onClick={() => dispatch(removeFromWishList(singleProData))}
            className="text-red-600 text-2xl"
          />
        ) : (
          <TbHeart
            onClick={() => dispatch(addToWishList(singleProData))}
            className="text-2xl"
          />
        )}
        {/* <TbBellRinging
          onClick={addToAmazingInfoHandler}
          className={`text-2xl ${isAmazingInfo ? "text-red-500" : ""}`}
        /> */}
        <MoreOptionsProModal />
      </div>
    </div>
  );
};

export default SingleProHeaderMenu;
