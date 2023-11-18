"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { fetching } from "@/services/services";
import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/types/product";

const SimilarProductsSwiper = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const fetchProducts = await fetching("/product");
      setProducts(fetchProducts);
    };
    fetchData();
  }, [products]);
  return (
    <div className="rounded-2xl py-5 px-2 mb-4 mt-4 border">
      <p className="font-bold mr-12 my-5 pb-2 w-28 text-center border-b-2 border-red-600 ">
        کالاهای مشابه
      </p>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          420: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 7,
          },
        }}
        className="mySwiper amazing-swiper h-auto w-full bg-transparent"
        modules={[Navigation]}
        navigation={true}
        loop={false}
      >
        {products?.slice(0, 12).map((product, index) => (
          <SwiperSlide key={index} className="px-[0.75px]">
            <Link href={`/product/${product.id}`}>
              <div className="bg-white h-full flex flex-col justify-between items-center px-2 py-6 cursor-pointer">
                <Image
                  alt="محصول شگفت انگیز"
                  width="150"
                  height="150"
                  src={product.thumbnail}
                />

                <div className="flex flex-col gap-y-1 items-end mb-1">
                  <div className="w-full mt-3 flex flex-wrap items-center  gap-x-4">
                    <span className="bg-[#ef394e]  text-xs text-white rounded-xl  py-0 px-1">
                      {product.offer}%
                    </span>
                    <div className="flex flex-wrap items-center">
                      <span className="text-sm lg:text-base text-[#424750] font-bold">
                        {Math.round(
                          (Number(product.price) *
                            (100 - Number(product.offer))) /
                            100
                        ).toLocaleString("fa-IR")}
                      </span>

                      <span className="text-[8px] text-[#424750] font-bold mr-1">
                        تومان
                      </span>
                    </div>
                  </div>
                  <div>
                    <del className="text-xs lg:text-sm text-gray-400 ml-2 mt-1">
                      {Number(product.price).toLocaleString("fa-IR")}
                    </del>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimilarProductsSwiper;
