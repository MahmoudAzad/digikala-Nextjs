"use client";

import Image from "next/image";
// Import Swiper React components
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

interface IProps {
  id: number;
  image: string;
  slug: string;
}

const MainPageSwiper: React.FC<{ carousels: IProps[] }> = ({ carousels }) => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper header-swiper"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {carousels?.map((slide, index) => (
        <SwiperSlide key={index}>
          <Image alt="دیجی کالا" src={slide.image} width={5000} height={300} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default MainPageSwiper;
