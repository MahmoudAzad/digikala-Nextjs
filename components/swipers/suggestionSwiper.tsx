"use client";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/types/product";
// Import Swiper React components
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper";

interface Props {
  allProducts: IProduct[];
}

const SuggestionSwiper: React.FC<Props> = ({ allProducts }) => {
  return (
    <>
      <p className="text-center text-xl font-bold mb-5">پیشنهاد دیجی‌کالا</p>
      <div className="h-80 cursor-pointer mb-5">
        <Swiper
          slidesPerView="auto"
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
          className="suggestionSwiper w-full h-full rounded-2xl border"
        >
          {allProducts
            ?.filter((products: IProduct) => products.isSuggest == true)
            .slice(0, 14)
            .map((product, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link href={`/product/${product.id}`}>
                    <div className="flex flex-col justify-center items-center w-full text-center border ">
                      <Image
                        src={product.thumbnail}
                        alt={product.name}
                        width={80}
                        height={80}
                      />
                      <span className="font-bold lg:text-xs line-clamp-1 pt-2">
                        {product.name}
                      </span>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
};

export default SuggestionSwiper;
