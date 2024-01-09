import AddToCartBtn from "@/components/buttons/addToCartBtn";
import AddToNotices from "@/components/buttons/addToNotices";
import DigikalaPossibilitiesCards from "@/components/cards/digikalaPossibilitiesCards";
import SingleProHeaderMenu from "@/components/menu/singleProMenu/singleProHeaderMenu";
import SingleProductSwiper from "@/components/swipers/singleProductSwiper";
import { IProduct } from "@/types/product";
import Image from "next/image";
import {
  HiChevronLeft,
  HiClipboardCheck,
  HiInformationCircle,
  HiOutlineClock,
  HiOutlineDatabase,
  HiOutlineInformationCircle,
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineTag,
  HiOutlineTruck,
} from "react-icons/hi";

interface Props {
  singleProData: IProduct;
}

const SingleProductMobile: React.FC<Props> = ({ singleProData }) => {
  return (
    <div className="lg:hidden">
      <SingleProHeaderMenu singleProData={singleProData} />
      <div className="bg-gray-100 mb-10 pt-9">
        <div>
          <SingleProductSwiper
            singleProData={singleProData}
            images={singleProData.productImage}
          />
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
                <p className="text-xs text-gray-600">{attributes.filter} : </p>
                <p className="text-sm font-bold text-gray-700">
                  {attributes.value}
                </p>
              </li>
            </ul>
          ))}
          <div className="flex items-start gap-x-2  pt-2 mt-3 text-gray-600  bg-white border-t">
            <HiInformationCircle className="text-2xl " />
            <p className="text-xs  leading-loose ">
              امکان برگشت کالا در گروه موبایل با دلیل انصراف از خرید تنها در
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
        <DigikalaPossibilitiesCards />
      </div>
      {parseInt(singleProData?.stock) === 0 ? (
        <div className="bottom-0 z-20 fixed w-full p-3 bg-white border-t-2 shadow-2xl">
          <AddToNotices singleProData={singleProData} />
        </div>
      ) : (
        <div className="bottom-0 z-20 fixed w-full p-3 bg-white border-t-2 shadow-2xl">
          {parseInt(singleProData?.stock) < 5 && (
            <p className="text-red-500 text-xs font-bold pb-2">
              تنها {singleProData.stock} عدد در انبار دیجی‌کالا باقی مانده
            </p>
          )}
          <div className="flex justify-between items-end">
            <AddToCartBtn product={singleProData} />
            <p className="w-full text-left">{singleProData.price} تومان</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductMobile;
