"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import AmazingSwiperImg from "../../public/assets/svg/amazingSwiperImg.svg";
import { useEffect, useRef } from "react";
import { HiArrowSmLeft, HiChevronLeft } from "react-icons/hi";
import Link from "next/link";
import { IProduct } from "@/types/product";

interface Props {
  products: IProduct[];
  color: string;
}

const AmazingSwiper: React.FC<Props> = ({ products, color }) => {
  const amazingSwiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (amazingSwiperRef.current) {
      amazingSwiperRef.current.style.background = color;
    }
  }, [color]);
  return (
    <div ref={amazingSwiperRef} className="rounded-2xl py-5 px-2 mb-4 mt-4">
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
        <SwiperSlide>
          <div className="h-full text-center text-lg bg-transparent flex flex-col justify-center items-center cursor-pointer">
            <Image
              alt="پیشنهاد شگفت انگیز"
              src={AmazingSwiperImg}
              width={92}
              height={77}
            />
            <Image
              alt="پیشنهاد شگفت انگیز"
              src="https://www.digikala.com/statics/img/png/specialCarousel/box.png"
              width={120}
              height={120}
            />
            <div className="flex items-center">
              <span className="text-base text-white">مشاهده همه</span>
              <HiChevronLeft className="text-white" />
            </div>
          </div>
        </SwiperSlide>
        {products?.slice(0, 12).map((product, index) => (
          <SwiperSlide key={index} className="px-[0.75px]">
            <Link href={`/product/${product.id}`}>
              <div className="bg-white h-full flex flex-col justify-between px-2 py-6 cursor-pointer">
                <Image
                  alt="محصول شگفت انگیز"
                  width="200"
                  height="200"
                  src={product.thumbnail}
                />

                <div className="flex flex-col gap-y-1 items-end mb-1">
                  <div className="w-full mt-3 flex flex-wrap items-center justify-between">
                    <span className="bg-[#ef394e]  text-xs text-white rounded-xl  py-0 px-1">
                      {product.offer}%
                    </span>
                    <div className="flex flex-wrap items-center">
                      <span className="text-sm lg:text-base text-[#424750] font-bold">
                        {Number(product.price).toLocaleString()}
                      </span>

                      <span className="text-[8px] text-[#424750] font-bold mr-1">
                        تومان
                      </span>
                    </div>
                  </div>
                  <div>
                    <del className="text-xs lg:text-sm text-gray-400 ml-2 mt-1">
                      {Math.round(
                        Number(product.price) /
                          (1 - Number(product.offer) / 100)
                      ).toLocaleString()}
                    </del>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className="h-full text-center text-lg bg-white rounded-tl-lg rounded-bl-lg w-full flex flex-col justify-center items-center cursor-pointer">
            <div className="w-12 h-12 border rounded-full mt-6 mb-4  flex justify-center items-center">
              <HiArrowSmLeft className="w-6 h-6 fill-[#19bfd3]" />
            </div>
            <span className="text-xs lg:text-sm text-[#424750]">
              مشاهده همه
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AmazingSwiper;
