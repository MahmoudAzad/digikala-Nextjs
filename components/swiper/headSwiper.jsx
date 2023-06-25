"use client";

import Image from "next/image";
// Import Swiper React components
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const HeadSwiper = ({ carousels }) => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper header-swiper"
    >
      {carousels[0].map((slide) => (
        <SwiperSlide key={slide.id}>
          <Image
            alt="digikala banners"
            src={slide.image}
            width={5000}
            height={300}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default HeadSwiper;
