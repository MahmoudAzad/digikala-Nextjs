import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/image";
const SingleProductSwiper = ({ singleProData, images }) => {
  return (
    <div className="bg-white">
      <p className="text-xs text-gray-500 m-5">
        دیجی کالا / {singleProData.category} / {singleProData.subCategory}
      </p>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper singleProduct-swiper"
      >
        {images?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <Image
                alt={singleProData.name}
                src={slide.image}
                width={5000}
                height={300}
                className="w-2/3 md:w-1/2"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SingleProductSwiper;
