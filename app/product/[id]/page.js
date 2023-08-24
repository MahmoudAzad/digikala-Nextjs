"use client";
// Import Swiper React components
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  HiClipboardCheck,
  HiChevronLeft,
  HiOutlineShieldCheck,
  HiOutlineTruck,
  HiOutlineClock,
  HiOutlineDatabase,
  HiOutlineInformationCircle,
  HiOutlineTag,
  HiInformationCircle,
  HiOutlineStar,
  HiOutlineMenu,
  HiRefresh,
  HiOutlineHeart,
  HiShare,
  HiOutlineBell,
  HiOutlineChartSquareBar,
} from "react-icons/hi";

const fetchData = async (id) => {
  const response = await fetch(
    `https://digikala-d567.onrender.com/product/${id}`
  );
  const data = await response.json();
  return data;
};

const SingleProduct = ({ params }) => {
  const [singleProData, setSingleProData] = useState([]);
  const images = singleProData.productImage;

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(params.id);
      setSingleProData(data);
    };
    getData();
  }, [params.id]);

  return (
    <>
      {/* product in desctop */}
      <div className="hidden lg:flex"></div>

      {/* product in mobile */}
      <div className="lg:hidden">
        <div className="bg-gray-100 mb-10 ">
          <div>
            <Swiper
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {images?.map((slide) => (
                <SwiperSlide className="relative" key={slide.id}>
                  <div className="absolute p-5 w-full">
                    <p className="text-xs text-gray-500">
                      دیجی کالا / {singleProData.category} /{" "}
                      {singleProData.subCategory}
                    </p>
                    <div className="flex justify-end mt-5 gap-x-4 text-2xl text-gray-600">
                      <HiOutlineHeart />
                      <HiShare />
                      <HiOutlineBell />
                      <HiOutlineChartSquareBar />
                      <HiRefresh />
                      <HiOutlineMenu />
                    </div>
                  </div>

                  <Image
                    alt={singleProData.name}
                    src={slide.image}
                    width={5000}
                    height={300}
                    className=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="bg-white pb-5 font-bold px-5 ">
              <p className="text-xs text-sky-500 pb-3">
                {singleProData.category} / {singleProData.subCategory}
              </p>
              <p>{singleProData.name}</p>
            </div>
          </div>

          <div className=" py-5 px-5 mt-3 bg-white">
            <ul className="flex justify-between">
              <p className="text-sm font-bold">فروشنده</p>
              <p className="text-xs text-sky-500">۴ فروشنده دیگر</p>
            </ul>
            <ul className="flex items-end gap-x-3 pt-6">
              <Image
                src="https://iili.io/hufgQj.th.png"
                alt={singleProData.name}
                width={20}
                height={20}
              />
              <p className="text-xs font-bold">دیجی‌کالا</p>
            </ul>
            <ul className="flex gap-x-3 pt-3 pr-8 text-xs">
              <p className="border-l pl-3">
                <span className="text-green-600 font-bold">۸۰٪</span> رضایت از
                کالا
              </p>
              <p>
                عملکرد <span className="text-green-600 font-bold">عالی</span>
              </p>
            </ul>

            <div className="flex items-center gap-x-3 pr-5 py-4 mt-5 border-b border-t bg-white">
              <HiOutlineShieldCheck className="text-xl" />
              <p className="text-xs font-bold">گارانتی ۲۴ ماهه مادیران</p>
            </div>

            <div className="py-5 border-b pr-5 bg-white">
              <div className="flex items-center gap-x-3">
                <HiClipboardCheck className="text-blue-400 text-xl" />
                <p className="text-xs font-bold">موجود در انبار دیجی کالا</p>
                <HiChevronLeft />
              </div>
              <ul>
                <li className="flex items-center gap-x-3 mt-3 mr-8">
                  <HiOutlineTruck className="text-red-600" />
                  <p className="text-xs text-gray-600">ارسال دیجی کالا</p>
                </li>
                <li className="flex items-center gap-x-3 mt-2 mr-8">
                  <HiOutlineClock className="text-blue-800" />
                  <p className="text-xs text-gray-600">ارسال فوری شهر تهران</p>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-x-3 py-5 pr-5 border-b bg-white">
              <HiOutlineDatabase className="text-yellow-500 text-xl" />
              <p className="text-xs font-bold">۱۵۰ امتیاز دیجی‌کلاب</p>
              <HiOutlineInformationCircle className="text-lg text-gray-500" />
            </div>

            <div className="flex justify-end items-center bg-white text-xs text-gray-500 gap-x-3 px-5 pt-5  ">
              <p>قیمت بهتری سراغ دارید؟</p>
              <HiOutlineTag />
            </div>
          </div>

          <div className="flex justify-between bg-white px-5 py-3 my-3 ">
            <ul className="flex items-center text-xs text-gray-500 gap-x-2">
              <HiOutlineInformationCircle className="text-lg" />
              <p>فرآیند قیمت‌گذاری و نظارت بر قیمت</p>
            </ul>
            <ul className="text-gray-500 text-xl">
              <HiChevronLeft />
            </ul>
          </div>
          <div className="px-5 py-8  bg-white">
            <p className="text-sm font-bold">ویژگی‌ها</p>
            {singleProData.productsValues?.map((attributes, index) => (
              <ul key={index}>
                <li className="flex items-center gap-x-3 mt-2">
                  <p className="text-gray-500">&#x2022;</p>
                  <p className="text-xs text-gray-600">
                    {attributes.filter} :{" "}
                  </p>
                  <p className="text-sm font-bold text-gray-700">
                    {attributes.value}
                  </p>
                </li>
              </ul>
            ))}
            <div className="flex items-start gap-x-2  pt-2 mt-3 text-gray-600  bg-white border-t">
              <HiInformationCircle className="text-2xl " />
              <p className="text-xs  leading-loose ">
                امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در
                صورتی مورد قبول است که پلمب کالا باز نشده باشد. تمام گوشی‌های
                دیجی‌کالا ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری،
                می‌توانید بعد از مهلت قانونی ۳۰ روزه، گوشی خریداری‌شده را مرجوع
                کنید.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between my-5 mx-5 px-5 bg-white rounded-lg">
            <p className="text-sm font-bold">ارسال رایگان برای این کالا</p>
            <Image
              src="https://www.digikala.com/_next/static/media/normalFreeShippingTouchPointImage.d4416515.svg"
              alt={singleProData.name}
              width={100}
              height={100}
            />
          </div>

          <div className="bg-white my-5 mx-5 px-5 py-5">
            <div className="flex justify-between">
              <div className="flex items-center gap-x-1">
                <HiOutlineStar className="text-fuchsia-800" />
                <p className="text-sm font-bold"> ویژه اعضای دیجی‌پلاس</p>
              </div>
              <div className="flex items-center gap-x-1 text-sky-500 font-bold">
                <p className="text-xs">خرید اشتراک </p>
                <HiChevronLeft />
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-5 space-y-2 mr-5">
              <p>ارسال رایگان</p>
              <p>ارسال فوری برای شهر تهران (رایگان)</p>
            </div>
          </div>
          <div className="flex justify-between bg-white my-5 py-3 px-3">
            <div className="flex flex-col items-center">
              <Image
                src="https://www.digikala.com/statics/img/svg/infosection/express-delivery.svg"
                alt={singleProData.name}
                width={50}
                height={50}
              />
              <p className="text-xs text-gray-500">امکان تحویل اکسپرس</p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="https://www.digikala.com/statics/img/svg/infosection/support.svg"
                alt={singleProData.name}
                width={50}
                height={50}
              />
              <p className="text-xs text-gray-500">۲۴ ساعته، ۷ روز هفته</p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="https://www.digikala.com/statics/img/svg/infosection/cash-on-delivery.svg"
                alt={singleProData.name}
                width={50}
                height={50}
              />
              <p className="text-xs text-gray-500">امکان پرداخت در محل</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://www.digikala.com/statics/img/svg/infosection/days-return.svg"
                alt={singleProData.name}
                width={50}
                height={50}
              />
              <p className="text-xs text-gray-500">هفت روز ضمانت بازگشت کالا</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://www.digikala.com/statics/img/svg/infosection/original-products.svg"
                alt={singleProData.name}
                width={50}
                height={50}
              />
              <p className="text-xs text-gray-500">ضمانت اصل بودن کالا</p>
            </div>
          </div>
        </div>

        <div className="bottom-0 z-20 fixed w-full p-3 bg-white border-t-2 shadow-2xl">
          <div className="flex justify-between items-center">
            <button className="bg-rose-500 text-white text-xs font-bold w-1/2 rounded-lg py-3">
              افزودن به سبد خرید
            </button>
            <p>۵۳۴۰۰۰۰ تومان</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
