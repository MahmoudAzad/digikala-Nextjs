"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

interface Props {
  slidesPerView: any;
  breakpoints: any;
  modules: any;
  navigation: boolean;
  loop: boolean;
  swiperData: any;
  swiperClass: any;
}

const DynamicSwiper: React.FC<Props> = ({
  slidesPerView,
  breakpoints,
  modules,
  navigation,
  loop,
  swiperData,
  swiperClass,
}) => {
  const swiperBreakpoints = breakpoints ? { breakpoints } : {};
  return (
    <Swiper
      {...swiperBreakpoints}
      slidesPerView={slidesPerView}
      // breakpoints={breakpoints}
      modules={modules}
      navigation={navigation}
      loop={loop}
    >
      {swiperData}
    </Swiper>
  );
};

export default DynamicSwiper;
