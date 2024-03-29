"use client";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { HiOutlineBell } from "react-icons/hi";
import { IProduct } from "@/types/product";
import { IAmazingInfoRootState } from "@/types/amazingInfo";
import RemoveFromListModal from "@/components/modals/removeFromListModal";
import EmptyPage from "@/components/emptyPage";

const AmazingInformation: NextPage = () => {
  const [amazingInfoProducts, setAmazingInfoProducts] = useState<IProduct[]>(
    []
  );

  const amazingInfoList = useSelector(
    (state: IAmazingInfoRootState) => state.amazingInfo.entities
  );

  useEffect(() => {
    setAmazingInfoProducts(Object.values(amazingInfoList));
  }, [amazingInfoList]);

  return (
    <>
      {amazingInfoProducts.length > 0 ? (
        <div className="lg:grid lg:grid-cols-2">
          {amazingInfoProducts?.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer px-3 border-b pb-2 hover:border-2 hover:border-gray-100 hover:shadow-xl "
            >
              <Link href={`/product/${item.id}`} key={item.id}>
                <div className="flex items-center gap-x-4 pt-8  lg:flex-col">
                  <Image
                    alt={item.name}
                    src={item.thumbnail}
                    width={100}
                    height={100}
                    className="lg:w-40 lg:py-5"
                  />
                  <p className="text-xs font-bold">{item.name}</p>
                </div>
              </Link>
              <p className="text-left text-sm font-bold py-2">
                {item.price} تومان
              </p>
              <div className="flex gap-x-4 justify-between">
                <RemoveFromListModal product={item} title="اطلاع‌رسانی‌ها" />
                <div className="flex items-center justify-center py-1 gap-x-2 text-gray-500">
                  <p className="text-sm font-bold">شگفت‌انگیز شدن</p>
                  <HiOutlineBell className="text-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyPage
          imgSrc={
            "https://www.digikala.com/statics/img/svg/favorites-list-empty.svg"
          }
          title="لیست اطلاع‌رسانی‌های"
        />
      )}
    </>
  );
};

export default AmazingInformation;
