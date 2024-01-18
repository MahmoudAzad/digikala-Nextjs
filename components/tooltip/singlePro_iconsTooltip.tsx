"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "@/types/product";
import {
  addToWishList,
  removeFromWishList,
} from "@/redux/features/wishListSlice";

import {
  addToAmazingInfo,
  removeFromAmazingInfo,
} from "@/redux/features/amazingInfoSlice";
import { IWishListRootState } from "@/types/wishList";
import {
  TbBellRinging,
  TbGitCompare,
  TbPlaylistAdd,
  TbShare,
  TbHeartFilled,
  TbHeart,
} from "react-icons/tb";
import { IAmazingInfoRootState } from "@/types/amazingInfo";
import ShareLinkLgModal from "../modals/shareLinkLgModal";

interface Props {
  product: IProduct;
}

const SinglePro_iconsTooltip: React.FC<Props> = ({ product }) => {
  const [isWished, setIsWished] = useState<boolean>();
  const [isAmazingInfo, setIsAmazingInfo] = useState<boolean>();
  const dispatch = useDispatch();

  const getWishlist = useSelector(
    (state: IWishListRootState) => state.wishList
  );
  const getAmazingInfo = useSelector(
    (state: IAmazingInfoRootState) => state.amazingInfo
  );

  useEffect(() => {
    const isWishedStatus = getWishlist.ids.includes(product.id);
    const isAmazingStatus = getAmazingInfo.ids.includes(product.id);
    setIsWished(isWishedStatus);
    setIsAmazingInfo(isAmazingStatus);
  }, [getWishlist, getAmazingInfo]);

  const addToAmazingInfoHandler = () => {
    if (isAmazingInfo) {
      dispatch(removeFromAmazingInfo(product));
    } else {
      dispatch(addToAmazingInfo(product));
    }
  };

  return (
    <>
      <div className="group relative w-max flex items-center gap-x-2">
        <div>
          {isWished ? (
            <TbHeartFilled
              onClick={() => dispatch(removeFromWishList(product))}
              className="text-red-500 text-2xl"
            />
          ) : (
            <TbHeart
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
        <ShareLinkLgModal />
      </div>
      <div className="group relative w-max flex items-center gap-x-2">
        <div>
          <TbBellRinging
            onClick={addToAmazingInfoHandler}
            className={`${isAmazingInfo ? "text-red-500" : ""}`}
          />
          <span className="pointer-events-none text-white text-xs font-bold p-3 rounded-md absolute w-max right-0 top-0 mr-7 opacity-0 group-hover:opacity-100 bg-slate-700">
            اطلاع‌رسانی شگفت‌انگیز
          </span>
        </div>
      </div>
      <div className="group relative w-max flex items-center gap-x-2">
        <div>
          <TbGitCompare />
          <span className="pointer-events-none text-white text-xs font-bold p-3 rounded-md absolute w-max right-0 top-0 mr-7 opacity-0 group-hover:opacity-100 bg-slate-700">
            مقایسه کالا
          </span>
        </div>
      </div>
      <div className="group relative w-max flex items-center gap-x-2">
        <div>
          <TbPlaylistAdd />
          <span className="pointer-events-none text-white text-xs font-bold p-3 rounded-md absolute w-max right-0 top-0 mr-7 opacity-0 group-hover:opacity-100 bg-slate-700">
            افزودن به لیست
          </span>
        </div>
      </div>
    </>
  );
};

export default SinglePro_iconsTooltip;
