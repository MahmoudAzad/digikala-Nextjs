import { IProduct } from "@/types/product";
import Image from "next/image";
import {
  HiChevronLeft,
  HiClipboardCheck,
  HiOutlineClock,
  HiOutlineDatabase,
  HiOutlineInformationCircle,
  HiOutlineShieldCheck,
  HiOutlineTruck,
} from "react-icons/hi";
import AddToCartBtn from "../buttons/addToCartBtn";

interface Props {
  singleProData: IProduct;
}

const AddToCartBox: React.FC<Props> = ({ singleProData }) => {
  return (
    <div className="p-5 lg:p-0 bg-white lg:bg-slate-100  ">
      <ul className="flex justify-between">
        <p className="font-bold">فروشنده</p>
        <p className="text-xs text-sky-500">۴ فروشنده دیگر</p>
      </ul>
      <ul className="flex items-end gap-x-3 pt-6">
        <Image
          src="https://iili.io/hufgQj.th.png"
          alt={singleProData.name}
          width={30}
          height={30}
        />
        <p className="font-bold">دیجی‌کالا</p>
      </ul>
      <ul className="flex gap-y-2 pt-3 pr-8 text-sm border-b-2 pb-4 lg:flex-col">
        <p className="border-l pl-3">
          <span className="text-green-600 font-bold">۸۰٪</span> رضایت از کالا
        </p>
        <p>
          عملکرد <span className="text-green-600 font-bold">عالی</span>
        </p>
      </ul>

      <div className="flex items-center gap-x-3 pb-4 mt-5 border-b-2">
        <HiOutlineShieldCheck className="text-xl" />
        <p className="text-sm font-bold">گارانتی ۲۴ ماهه مادیران</p>
      </div>

      <div className="flex gap-x-3 items-center pt-4 lg:justify-between lg:gap-x-0">
        <HiClipboardCheck className="text-blue-400 text-lg lg:text-2xl" />
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
          <p className="text-xs text-gray-600">ارسال فوری شهر تهران</p>
        </li>
      </ul>

      <div className="flex items-center gap-x-3 py-5 border-b-2 border-t-2 lg:pr-5 ">
        <HiOutlineDatabase className="text-yellow-500 text-xl" />
        <p className="text-xs font-bold">۱۵۰ امتیاز دیجی‌کلاب</p>
        <HiOutlineInformationCircle className="text-lg text-gray-500" />
      </div>

      <div className="lg:block hidden">
        <div className=" lg:flex flex-col justify-start items-end space-y-2 mt-4">
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
  );
};

export default AddToCartBox;
