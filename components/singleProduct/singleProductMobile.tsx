import Image from "next/image";
import DigikalaPossibilitiesCards from "@/components/cards/digikalaPossibilitiesCards";
import SingleProHeaderMenu from "@/components/menu/singleProMenu/singleProHeaderMenu";
import SingleProductSwiper from "@/components/swipers/singleProductSwiper";
import AddToCartFixBox from "../box/addToCartFixBox";
import AddToCartBox from "../box/addToCartBox";
import { IProduct } from "@/types/product";
import {
  HiChevronLeft,
  HiInformationCircle,
  HiOutlineInformationCircle,
  HiOutlineStar,
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
        <AddToCartBox singleProData={singleProData} />
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
      <AddToCartFixBox singleProData={singleProData} />
    </div>
  );
};

export default SingleProductMobile;
