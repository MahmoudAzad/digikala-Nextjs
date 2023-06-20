"use client";

// Import Swiper React components
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper";
import Image from "next/image";

const SuggestionSwiper = ({ allProducts }) => {
  return (
    // <div className="w-full h-80 cursor-pointer mb-5">
    <Swiper
      // slidesPerView="auto"
      className=" w-full h-full rounded-2xl border"
      breakpoints={{
        0: {
          slidesPerView: 3,
          grid: {
            rows: 2,
          },
        },
        640: {
          slidesPerView: 5,
          grid: {
            rows: 2,
          },
        },
        1200: {
          slidesPerView: 7,
          grid: {
            rows: 2,
          },
        },
      }}
      modules={[Grid, Navigation]}
      navigation={true}
    >
      {allProducts
        .filter((products) => products.isSuggest == true)
        .slice(0, 14)
        .map((product) => (
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center w-full text-center border ">
              <Image src={product.thumbnail} width={100} height={100} />
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
    // </div>
  );
};

export default SuggestionSwiper;
