"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef } from "react";
import { IProduct } from "@/types/product";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper";
import type { Swiper as SwiperType } from "swiper";

import {
  HiSparkles,
  HiArrowLeft,
  HiArrowRight,
  HiChevronLeft,
} from "react-icons/hi";

import "swiper/css";
import "swiper/css/grid";

interface Props {
  allProducts: IProduct[];
}

const SuggestionSwiper: React.FC<Props> = ({ allProducts }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const suggestedProducts = useMemo(
    () =>
      (allProducts ?? [])
        .filter((product) => product.isSuggest === true)
        .slice(0, 14),
    [allProducts],
  );

  if (suggestedProducts.length === 0) return null;

  return (
    <section
      dir="rtl"
      className="relative my-10 overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-4 shadow-[0_8px_40px_-24px_rgba(15,23,42,0.18)] sm:p-6 lg:p-8"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 h-64 w-64 rounded-full bg-cyan-100/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-sky-100/40 blur-3xl"
      />

      {/* Header */}
      <div className="relative mb-7 flex flex-col gap-5 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-700">
            <HiSparkles size={16} />
            منتخب امروز
          </div>

          <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
            پیشنهادهای ویژه برای تو
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">
            محصولاتی که ارزش دیدن دارند؛ انتخاب‌هایی برای خرید بهتر.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-3 sm:justify-end">
          <span className="text-xs font-medium text-slate-400 sm:text-sm">
            {suggestedProducts.length} محصول منتخب
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="محصولات قبلی"
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors duration-200 hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-700 active:scale-95"
            >
              <HiArrowRight size={20} />
            </button>

            <button
              type="button"
              aria-label="محصولات بعدی"
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors duration-200 hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-700 active:scale-95"
            >
              <HiArrowLeft size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Products slider */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Grid]}
        slidesPerView={2}
        spaceBetween={12}
        watchOverflow
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 18,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        className="suggestionSwiper !overflow-visible"
      >
        {suggestedProducts.map((product) => (
          <SwiperSlide key={product.id} className="h-auto">
            <Link
              href={`/product/${product.id}`}
              className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_12px_32px_-16px_rgba(8,145,178,0.25)] sm:p-4"
            >
              {/* Image */}
              <div className="relative mb-4 flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-slate-50 p-3 sm:p-4">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-transparent to-cyan-50/60"
                />

                <Image
                  src={product.thumbnail}
                  alt={product.name}
                  width={240}
                  height={240}
                  sizes="(max-width: 479px) 42vw, (max-width: 899px) 28vw, (max-width: 1199px) 20vw, 16vw"
                  className="relative z-10 h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />

                <span className="absolute right-2 top-2 z-20 inline-flex items-center gap-1 rounded-full border border-cyan-100 bg-white/90 px-2 py-1 text-[10px] font-bold text-cyan-700 shadow-sm backdrop-blur-sm sm:text-xs">
                  <HiSparkles size={13} />
                  منتخب
                </span>
              </div>

              {/* Product information */}
              <div className="flex flex-1 flex-col">
                <h3 className="line-clamp-2 min-h-10 text-xs font-semibold leading-5 text-slate-700 transition-colors group-hover:text-cyan-700 sm:text-sm sm:leading-6">
                  {product.name}
                </h3>

                <div className="mt-auto pt-4">
                  <div className="flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
                    <span className="text-[11px] text-slate-400 sm:text-xs">
                      مشاهده محصول
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-700 transition-colors duration-200 group-hover:bg-cyan-600 group-hover:text-white">
                      <HiChevronLeft size={19} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SuggestionSwiper;
