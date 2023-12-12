import Image from "next/image";
import DigikalaPossibilitiesCards from "@/components/cards/digikalaPossibilitiesCards";
import SimilarProductsSwiper from "@/components/swipers/similarProductsSwiper";
import SinglePro_iconsTooltip from "@/components/tooltip/singlePro_iconsTooltip";
import { IProduct } from "@/types/product";
import {
  HiChevronLeft,
  HiClipboardCheck,
  HiOutlineClock,
  HiOutlineDatabase,
  HiOutlineInformationCircle,
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineTruck,
} from "react-icons/hi";
import AddToCartBtn from "@/components/buttons/addToCartBtn";

interface Props {
  singleProData: IProduct;
}

const SingleProductDesctop: React.FC<Props> = ({ singleProData }) => {
  return (
    <div className="hidden lg:block pt-24">
      <div className="mt-6 mx-5">
        <p className="text-sm text-gray-500 ">
          دیجی کالا / {singleProData.mainCategory} / {singleProData.category}/{" "}
          {singleProData.subCategory}
        </p>
        <div className="flex gap-x-6 items-start">
          <div className="flex flex-col basis-1/3">
            <div className="flex items-start">
              <div className="flex-col space-y-5 mt-20 gap-y-4 text-2xl text-gray-600">
                <SinglePro_iconsTooltip product={singleProData} />
              </div>
              {singleProData.productImage &&
                singleProData.productImage.length > 0 && (
                  <Image
                    src={singleProData.productImage[0].image}
                    width={500}
                    height={500}
                    alt="دیجیکالا"
                  />
                )}
            </div>
            <div className="flex justify-center">
              {singleProData.productImage?.map((image, index) => (
                <Image
                  key={index}
                  alt="دیجیکالا"
                  src={image.image}
                  width={100}
                  height={100}
                />
              ))}
            </div>
          </div>
          <div className="basis-2/3 mt-14">
            <p className="text-sm font-bold text-blue-500 ">
              {singleProData.category}/ {singleProData.subCategory}
            </p>
            <p className="text-xl font-bold mt-2">{singleProData.name}</p>
            <div className="flex mt-4">
              <div className="basis-7/12">
                <p className="text-sm text-gray-500">
                  {singleProData.latinName}
                </p>
                <h3 className=" font-bold mt-3">ویژگی‌ها</h3>
                {singleProData.productsValues?.map((attributes, index) => (
                  <ul key={index}>
                    <li className="flex items-center gap-x-3 mt-2">
                      <p className="text-sm text-gray-600">
                        {attributes.filter} :{" "}
                      </p>
                      <p className="font-bold text-gray-700">
                        {attributes.value}
                      </p>
                    </li>
                  </ul>
                ))}
                <p className="border-t mt-5 pt-3 text-sm text-gray-500 leading-loose">
                  امکان برگشت کالا در گروه موبایل با دلیل انصراف از خرید تنها در
                  صورتی مورد قبول است که پلمب کالا باز نشده باشد. تمام گوشی‌های
                  دیجی‌کالا ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری،
                  می‌توانید بعد از مهلت قانونی ۳۰ روزه، گوشی خریداری‌شده را
                  مرجوع کنید.
                </p>

                <div className="flex items-center justify-between my-5 py-1 px-5 bg-white rounded-lg border">
                  <p className="text-sm font-bold">
                    ارسال رایگان برای این کالا
                  </p>
                  <Image
                    src="https://www.digikala.com/_next/static/media/normalFreeShippingTouchPointImage.d4416515.svg"
                    alt={singleProData.name}
                    width={100}
                    height={100}
                  />
                </div>

                <div className="bg-white my-5 px-5 py-5 border rounded-lg">
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
              </div>
              <div className="basis-5/12 border-2 bg-slate-100 rounded-xl mr-3 p-5 ">
                <ul className="flex justify-between">
                  <p className=" font-bold">فروشنده</p>
                  <p className="text-xs text-sky-500">۴ فروشنده دیگر</p>
                </ul>
                <ul className="flex items-end gap-x-3 pt-6">
                  <Image
                    src="https://iili.io/hufgQj.th.png"
                    alt={singleProData.name}
                    width={30}
                    height={30}
                  />
                  <p className=" font-bold">دیجی‌کالا</p>
                </ul>
                <ul className="flex flex-col gap-y-2 pt-3 pr-8 text-sm border-b-2 pb-4">
                  <p className="border-l pl-3">
                    <span className="text-green-600 font-bold">۸۰٪</span> رضایت
                    از کالا
                  </p>
                  <p>
                    عملکرد{" "}
                    <span className="text-green-600 font-bold">عالی</span>
                  </p>
                </ul>

                <div className="flex items-center gap-x-3 pb-4 mt-5 border-b-2">
                  <HiOutlineShieldCheck className="text-xl" />
                  <p className="text-sm font-bold">گارانتی ۲۴ ماهه مادیران</p>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <HiClipboardCheck className="text-blue-400 text-2xl" />
                  <p className=" font-bold">موجود در انبار دیجی کالا</p>
                  <HiChevronLeft className="text-2xl" />
                </div>
                <ul>
                  <li className="flex items-center gap-x-3 mr-14 mt-3">
                    <HiOutlineTruck className="text-red-600" />
                    <p className="text-xs text-gray-600">ارسال دیجی کالا</p>
                  </li>
                  <li className="flex items-center gap-x-3 mt-2 mr-14  pb-4">
                    <HiOutlineClock className="text-blue-800" />
                    <p className="text-xs text-gray-600">
                      ارسال فوری شهر تهران
                    </p>
                  </li>
                </ul>

                <div className="flex items-center gap-x-3 py-5 pr-5 border-b-2 border-t-2">
                  <HiOutlineDatabase className="text-yellow-500 text-xl" />
                  <p className="text-xs font-bold">۱۵۰ امتیاز دیجی‌کلاب</p>
                  <HiOutlineInformationCircle className="text-lg text-gray-500" />
                </div>

                <div className="flex flex-col justify-start items-end space-y-2 mt-4">
                  <p className="bg-rose-500 text-white w-10 text-center text-sm rounded-xl">
                    ٪ {singleProData.offer}
                  </p>
                  <p className="text-lg font-bold">
                    {singleProData.price} تومان
                  </p>
                </div>
                <AddToCartBtn product={singleProData} classes={"w-full my-5"} />
              </div>
            </div>
          </div>
        </div>
        <DigikalaPossibilitiesCards />
        <SimilarProductsSwiper />
        <div className="w-full h-48 relative">
          <Image
            src="https://dkstatics-public.digikala.com/digikala-admin-landing/a8ec1bb32317f8f3d393ea6a0cee382772f9102a_1688480325.jpg"
            fill
            className="rounded-lg"
            alt="دیجی‌کالا"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProductDesctop;
