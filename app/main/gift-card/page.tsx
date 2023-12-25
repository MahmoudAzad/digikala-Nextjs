import { NextPage } from "next";
import Image from "next/image";
import GiftCards from "@/components/cards/giftCards";
import GiftBanners from "@/components/cards/giftBanners";

const GiftCardPage: NextPage = async () => {
  return (
    <div className="mx-2 lg:pt-32">
      <div className="flex flex-wrap gap-y-5 gap-x-5 my-5 sm:mx-20 lg:flex-nowrap lg:mx-0">
        <Image
          alt="کارت هدیه الکترونیکی"
          src="https://dkstatics-public.digikala.com/digikala-static/917113fa7cf76ee611b40f80c851947b735814b2_1682423402.jpg"
          width={1000}
          height={1000}
          className="w-full rounded-lg lg:w-1/2"
        />
        <Image
          src="https://dkstatics-public.digikala.com/digikala-static/15749102b571b3f24e3ad3d66150121dfbad38c2_1683707162.jpg"
          alt="خرید سازمانی کارت هدیه"
          width={1000}
          height={100}
          className="w-full rounded-lg lg:w-1/2"
        />
      </div>
      <div>
        <p className="text-center font-bold text-2xl leading-relaxed py-10">
          می‌دونستید دیجی‌کالا برای هرکسی و هرمناسبتی کارت هدیه داره؟
        </p>
        <GiftCards />
      </div>
      <div className="sm:mx-20">
        <p className="text-2xl font-bold text-center pt-16 pb-8">
          خرید بر‌اساس دسته‌بندی
        </p>
        <div className="flex flex-wrap justify-center items-center w-full gap-y-5 sm:flex-nowrap">
          <div className="flex flex-col justify-center items-center gap-y-3 w-1/2 ">
            <Image
              src="https://dkstatics-public.digikala.com/digikala-static/bfb63ab32cafe236c924adcccf3f4961b7b7b67f_1677655251.jpg"
              alt="کارت هدیه الکترونیکی دیجی‌کالا"
              width={1000}
              height={1000}
              className="w-1/2 sm:w-1/3"
            />
            <p className="text-xs font-bold line-clamp-1">
              کارت هدیه الکترونیکی دیجی‌کالا
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-3 w-1/2">
            <Image
              src="https://dkstatics-public.digikala.com/digikala-static/6871d81d333c5c7112911d8eb08129f22ecb089a_1672589874.png"
              alt="کارت هدیه دیجی‌کالا"
              width={1000}
              height={1000}
              className="w-1/2  sm:w-1/3"
            />
            <p className="text-xs font-bold line-clamp-1">
              کارت هدیه دیجی‌کالا
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-3 w-1/2">
            <Image
              src="https://dkstatics-public.digikala.com/digikala-static/9a07834a97617dbd47e3c7943b93245afe0ecd64_1672589887.png"
              alt="کارت هدیه دیجی‌استایل"
              width={1000}
              height={1000}
              className="w-1/2  sm:w-1/3"
            />
            <p className="text-xs font-bold text-center line-clamp-1">
              کارت هدیه دیجی‌استایل
            </p>
          </div>
        </div>
      </div>
      <GiftBanners />
    </div>
  );
};

export default GiftCardPage;
