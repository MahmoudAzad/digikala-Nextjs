import { NextPage } from "next";
import Image from "next/image";
import { HiOutlinePlusSm } from "react-icons/hi";

const GeneralListPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center gap-y-5 px-5">
      <Image
        src="https://www.digikala.com/statics/img/svg/wish-list.svg"
        width="100"
        height="100"
        className="w-1/2"
        alt="لیست خرید"
      />
      <p className="text-xs lg:text-base">هنوز هیچ لیستی نساخته‌اید!</p>
      <button className="border border-red-600 rounded-lg text-red-600 text-xs flex items-center px-5 py-2">
        <HiOutlinePlusSm />
        <p>ساختن لیست</p>
      </button>
      <p className="text-xs text-center text-gray-500 pt-5 leading-loose lg:text-base">
        میتوانید از لیستهای زیر استفاده کنید یا لیست خلاقانه خود را بسازید.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 my-5">
        <div className="flex flex-col items-center text-center gap-y-1 px-3">
          <Image
            src="https://www.digikala.com/statics/img/svg/wish-list-home.svg"
            width={100}
            height={100}
            className="w-12"
            alt="خرید روزانه"
          />
          <h2 className="text-xs lg:text-sm font-bold">خرید روزانه</h2>
          <p className="text-xs text-gray-600 leading-normal">
            خرید‌های روزانه و مورد‌نیاز خانه را یک‌جا ثبت کنید.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-y-1 px-3">
          <Image
            src="https://www.digikala.com/statics/img/svg/wish-list-home.svg"
            width={100}
            height={100}
            className="w-12"
            alt="پیشنهاد به دوستان"
          />
          <h2 className="text-xs lg:text-sm font-bold">پیشنهاد به دوستان</h2>
          <p className="text-xs text-gray-600 leading-normal">
            کالاهای مورد نظرتان را به دوستانتان پیشنهاد کنید.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-y-1 px-3">
          <Image
            src="https://www.digikala.com/statics/img/svg/wish-list-birthday.svg"
            width={100}
            height={100}
            className="w-12"
            alt="هدیه ها"
          />
          <h2 className="text-xs lg:text-sm font-bold">هدیه‌ها</h2>
          <p className="text-xs text-gray-600">
            برای هدیه خریدن از قبل ایده‌هایتان را جمع کنید.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-y-1 px-3">
          <Image
            src="https://www.digikala.com/statics/img/svg/wish-list-birth.svg"
            width={100}
            height={100}
            className="w-12"
            alt="آرزوها"
          />
          <h2 className="text-xs lg:text-sm font-bold">آرزوها</h2>
          <p className="text-xs text-gray-600">
            کالاهایی که دوست دارید در آینده داشته باشید.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralListPage;
