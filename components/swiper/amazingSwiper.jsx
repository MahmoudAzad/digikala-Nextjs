"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import AmazingSwiperImg from "../../public/assets/svg/amazingSwiperImg.svg";
import { useEffect, useRef } from "react";
import { HiArrowSmLeft, HiChevronLeft } from "react-icons/hi";
const AmazingSwiper = ({ products, color }) => {
  const amazingSwiperRef = useRef();

  useEffect(() => {
    amazingSwiperRef.current.style.background = color;
  }, []);
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
        preloadImages={false}
        className="mySwiper amazing-swiper h-auto w-full bg-transparent"
        modules={[Navigation]}
        navigation={true}
        loop={false}
      >
        <SwiperSlide>
          <div className="h-full text-center text-lg bg-transparent flex flex-col justify-center items-center cursor-pointer">
            <Image src={AmazingSwiperImg} width={92} height={77} />
            <Image
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
        {products.slice(0, 12).map((product) => (
          <SwiperSlide className="px-0.5">
            <div className="bg-white h-full flex flex-col justify-between px-2 py-6 cursor-pointer">
              <Image width="200" height="200" src={product.thumbnail} />

              <div className="flex flex-col gap-y-1 items-end mb-1">
                <div className="w-full mt-3 flex flex-wrap items-center justify-between">
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
