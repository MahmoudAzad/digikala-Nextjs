"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { IBrand } from "@/types/brand";

interface Props {
  brands: IBrand[];
}
const PopularBrandsSwiper: React.FC<Props> = ({ brands }) => {
  return (
    <div className="border rounded-2xl py-8">
      <h1 className="text-xl font-bold text-center mb-4">محبوب‌ترین برندها</h1>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 9,
          },
        }}
      >
        {brands?.map((brand, index) => (
          <SwiperSlide key={index}>
            <Image
              src={brand.image}
              alt="برند محبوب"
              width={200}
              height={200}
              className="border-r border-l px-5 cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularBrandsSwiper;
