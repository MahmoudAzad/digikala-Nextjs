"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "@/types/product";
import {
  addToWishList,
  removeFromWishList,
} from "@/redux/features/wishListSlice";
import {
  HiHeart,
  HiOutlineBell,
  HiOutlineHeart,
  HiOutlineMenu,
  HiRefresh,
  HiShare,
} from "react-icons/hi";
import { addToAmazingInfo } from "@/redux/features/amazingInfoSlice";
import { IWishListRootState } from "@/types/wishList";

interface Props {
  product: IProduct;
}

const SinglePro_iconsTooltip: React.FC<Props> = ({ product }) => {
  const [isWished, setIsWished] = useState<boolean>();
  const dispatch = useDispatch();
  const getWishlist = useSelector(
    (state: IWishListRootState) => state.wishList
  );
  useEffect(() => {
    const isWishedStatus = getWishlist.ids.includes(product.id);
    setIsWished(isWishedStatus);
  }, [getWishlist]);

  return (
    <>
      <div className="group relative w-max flex items-center gap-x-2">
        <div>
          {isWished ? (
            <HiHeart
              onClick={() => dispatch(removeFromWishList(product))}
              className="text-red-600 text-2xl"
            />
          ) : (
            <HiOutlineHeart
              onClick={() => dispatch(addToWishList(product))}
              className="text-2xl"
            />
          )}
          <span className="pointer-events-none text-white text-xs font-bold p-3 rounded-md absolute w-max right-0 top-0 mr-7 opacity-0 group-hover:opacity-100 bg-slate-700">
            اضافه به علاقه‌مندی
          </span>
        </div>
      </div>
      <div className="group relative w-max flex items-center gap-x-2">
        <div>
          <HiShare />
          <span className="pointer-events-none text-white text-xs font-bold p-3 rounded-md absolute w-max right-0 top-0 mr-7 opacity-0 group-hover:opacity-100 bg-slate-700">
            به اشتراک‌گذاری کالا
          </span>
        </div>
      </div>
      <div className="group relative w-max flex items-center gap-x-2">
        <div>
          <HiOutlineBell onClick={() => dispatch(addToAmazingInfo(product))} />
          <span className="pointer-events-none text-white text-xs font-bold p-3 rounded-md absolute w-max right-0 top-0 mr-7 opacity-0 group-hover:opacity-100 bg-slate-700">
            اطلاع‌رسانی شگفت‌انگیز
          </span>
        </div>
      </div>
      <div className="group relative w-max flex items-center gap-x-2">
        <div>
          <HiRefresh />
          <span className="pointer-events-none text-white text-xs font-bold p-3 rounded-md absolute w-max right-0 top-0 mr-7 opacity-0 group-hover:opacity-100 bg-slate-700">
            مقایسه کالا
          </span>
        </div>
      </div>
      <div
        className="group relative w-max flex items-center gap-x-2"
        //
      >
        <div>
          <HiOutlineMenu />
          <span className="pointer-events-none text-white text-xs font-bold p-3 rounded-md absolute w-max right-0 top-0 mr-7 opacity-0 group-hover:opacity-100 bg-slate-700">
            افزودن به لیست
          </span>
        </div>
      </div>
    </>
  );
};

export default SinglePro_iconsTooltip;
