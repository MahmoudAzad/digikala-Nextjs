"use client";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IWishListRootState } from "@/types/wishList";
import { IProduct } from "@/types/product";
import RemoveFromListModal from "@/components/modals/removeFromListModal";
import EmptyPage from "@/components/emptyPage";

const WishListPage: NextPage = () => {
  const [favoriteProducts, setFavoriteProducts] = useState<IProduct[]>([]);
  const WishList = useSelector(
    (state: IWishListRootState) => state.wishList.entities
  );

  useEffect(() => {
    setFavoriteProducts(Object.values(WishList));
  }, [WishList]);

  return (
    <>
      {favoriteProducts.length > 0 ? (
        <div className="lg:grid lg:grid-cols-2">
          {favoriteProducts?.map((item) => (
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
              <div className="flex gap-x-4 ">
                <RemoveFromListModal product={item} title="علاقه‌مندی‌ها" />
                <div className="border border-red-500 rounded-lg flex items-center justify-center py-1 text-red-500  w-full gap-x-2 ">
                  <HiOutlineShoppingCart className="text-2xl" />
                  <p className="text-sm font-bold">اضافه به سبد خرید</p>
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
          title="لیست علاقه‌مندی‌های"
        />
      )}
    </>
  );
};

export default WishListPage;
