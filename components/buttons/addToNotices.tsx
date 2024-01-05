"use client";

import {
  addToAmazingInfo,
  removeFromAmazingInfo,
} from "@/redux/features/amazingInfoSlice";
import { IAmazingInfoRootState } from "@/types/amazingInfo";
import { IProduct } from "@/types/product";
import { useEffect, useState } from "react";
import { TbBellRinging } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  singleProData: IProduct;
}

const AddToNotices: React.FC<Props> = ({ singleProData }) => {
  const [availableInNotices, setAvailableInNotices] = useState<boolean>();
  const dispatch = useDispatch();
  const getNotices = useSelector(
    (state: IAmazingInfoRootState) => state.amazingInfo
  );

  useEffect(() => {
    const availableNoticesStatus = getNotices?.ids.includes(singleProData.id);
    setAvailableInNotices(availableNoticesStatus);
  }, [getNotices, availableInNotices]);

  return (
    <>
      {availableInNotices ? (
        <div>
          <p className="hidden lg:flex text-gray-700 text-sm text-justify">
            این کالا فعلا موجود نیست اما میتوانید زنگوله را بزنید تا به محض موجو
            شدن به شما خبر دهیم.
          </p>
          <button
            onClick={() => dispatch(removeFromAmazingInfo(singleProData))}
            className="flex justify-center items-center gap-x-2 border rounded-md text-red-500 border-red-500 w-full py-2 mt-1"
          >
            <TbBellRinging className="text-lg" />
            <p className="text-xs">دیگه لازم نیست خبرم کنید</p>
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-y-1 justify-center">
          <div className="text-xs flex flex-col justify-center items-center sm:flex-col">
            <p className="hidden text-justify sm:flex lg:text-sm lg:text-gray-700">
              این کالا فعلا موجود نیست اما میتوانید زنگوله را بزنید تا به محض
              موجو شدن به شما خبر دهیم.
            </p>
            <div className="flex flex-col justify-center items-center sm:hidden">
              <p>این کالا فعلا موجود نیست</p>
              <p>زنگوله رو بزنی موجود شه خبرت میکنم</p>
            </div>
          </div>
          <button
            onClick={() => dispatch(addToAmazingInfo(singleProData))}
            className="flex justify-center items-center gap-x-2 border rounded-md bg-red-500 text-white py-2"
          >
            <TbBellRinging className="text-lg" />
            <p className="text-xs">خبرم کنید</p>
          </button>
        </div>
      )}
    </>
  );
};

export default AddToNotices;
