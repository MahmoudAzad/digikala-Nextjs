"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IProduct } from "@/types/product";
import { addToWishList } from "@/redux/features/wishListSlice";
import {
  HiHeart,
  HiOutlineBell,
  HiOutlineMenu,
  HiRefresh,
  HiShare,
} from "react-icons/hi";
import { addToAmazingInfo } from "@/redux/features/amazingInfoSlice";

interface Props {
  product: IProduct;
}

const SinglePro_iconsTooltip: React.FC<Props> = ({ product }) => {
  const [iconClick, setIconClick] = useState(false);
  const dispatch = useDispatch();

  const addToVishListHandler = () => {
    dispatch(addToWishList(product));
    setIconClick(!iconClick);
  };
  const addToAmazingInfoHandler = () => {
    dispatch(addToAmazingInfo(product));
  };

  return (
    <>
      <div className="group relative w-max flex items-center gap-x-2">
        <div>
          <HiHeart
            onClick={addToVishListHandler}
            className={`${iconClick ? "text-red-600" : ""}`}
          />
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
          <HiOutlineBell onClick={addToAmazingInfoHandler} />
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
