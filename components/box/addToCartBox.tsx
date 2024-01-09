import Image from "next/image";
import AddToCartBtn from "../buttons/addToCartBtn";
import {
  HiClipboardCheck,
  HiOutlineShieldCheck,
  HiOutlineTruck,
} from "react-icons/hi";
import { IProduct } from "@/types/product";

interface Props {
  singleProData: IProduct;
}

const AddToCartBox: React.FC<Props> = ({ singleProData }) => {
  return (
    <div className="basis-3/12 mt-6 hidden xl:block ">
      <div className="sticky top-32">
        <div className="basis-1/3 border-2 bg-slate-100 rounded-xl mr-3 p-5">
          <div className="flex items-start gap-x-5 border-b pb-3">
            {singleProData.productImage &&
              singleProData.productImage.length > 0 && (
                <Image
                  src={singleProData.productImage[0].image}
                  alt="دیجیکالا"
                  width={100}
                  height={100}
                  className="bg-red-500"
                />
              )}
            <p className="text-xs leading-7 line-clamp-2 font-bold text-gray-600">
              {singleProData.name}
            </p>
          </div>

          <div className="flex items-center gap-x-1 mt-5 text-gray-600">
            <HiOutlineShieldCheck className="text-xl" />
            <p className="text-xs font-bold">گارانتی ۲۴ ماهه مادیران</p>
          </div>

          <div className="flex gap-x-1 items-center pt-3 text-gray-600">
            <HiClipboardCheck className=" text-xl" />
            <p className="text-xs font-bold">موجود در انبار دیجی کالا</p>
          </div>

          <div className="flex items-center gap-x-1 pt-3 text-gray-600">
            <HiOutlineTruck className="text-xl" />
            <p className="text-xs font-bold">ارسال دیجی کالا</p>
          </div>

          <div className="flex flex-col justify-start items-end space-y-2 mt-4">
            <p className="bg-rose-500 text-white w-10 text-center text-sm rounded-xl">
              ٪ {singleProData.offer}
            </p>
            <p className="text-lg font-bold">{singleProData.price} تومان</p>
          </div>
          {parseInt(singleProData?.stock) < 5 && (
            <p className="text-red-500 text-xs font-bold mt-4">
              تنها {singleProData.stock} عدد در انبار دیجی‌کالا باقی مانده
            </p>
          )}
          <AddToCartBtn product={singleProData} />
        </div>
      </div>
    </div>
  );
};

export default AddToCartBox;
