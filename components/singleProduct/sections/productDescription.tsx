import Image from "next/image";
import AddToCartBox from "@/components/box/addToCartBox";
import EndStockBox from "@/components/box/endStockBox";
import { IProduct } from "@/types/product";
import { HiChevronLeft, HiOutlineStar } from "react-icons/hi";

interface Props {
  singleProData: IProduct;
}

const ProductDescription: React.FC<Props> = ({ singleProData }) => {
  return (
    <div className="basis-2/3 mt-14">
      <p className="text-sm font-bold text-blue-500 ">
        {singleProData.category}/ {singleProData.subCategory}
      </p>
      <p className="text-xl font-bold mt-2">{singleProData.name}</p>
      <div className="flex mt-4">
        <div className="basis-7/12">
          <p className="text-sm text-gray-500">{singleProData.latinName}</p>
          <h3 className=" font-bold mt-3">ویژگی‌ها</h3>
          {singleProData.productsValues?.map((attributes, index) => (
            <ul key={index}>
              <li className="flex items-center gap-x-3 mt-2">
                <p className="text-sm text-gray-600">{attributes.filter} : </p>
                <p className="font-bold text-gray-700">{attributes.value}</p>
              </li>
            </ul>
          ))}
          <p className="border-t mt-5 pt-3 text-sm text-gray-500 leading-loose">
            امکان برگشت کالا در گروه موبایل با دلیل انصراف از خرید تنها در صورتی
            مورد قبول است که پلمب کالا باز نشده باشد. تمام گوشی‌های دیجی‌کالا
            ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری، می‌توانید بعد از
            مهلت قانونی ۳۰ روزه، گوشی خریداری‌شده را مرجوع کنید.
          </p>

          <div className="flex items-center justify-between my-5 py-1 px-5 bg-white rounded-lg border">
            <p className="text-sm font-bold">ارسال رایگان برای این کالا</p>
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
        {parseInt(singleProData?.stock) === 0 ? (
          <div className="basis-5/12 mr-3 p-5 ">
            <EndStockBox singleProData={singleProData} />
          </div>
        ) : (
          <div className="basis-5/12 border-2 bg-slate-100 rounded-xl mr-3 p-5 ">
            <AddToCartBox singleProData={singleProData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
