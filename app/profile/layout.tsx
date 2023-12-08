import Link from "next/link";
import { HiArrowRight, HiOutlineShoppingBag } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
export default async function ListsLayout({ children }) {
  return (
    <div className="flex gap-x-5 lg:px-5 lg:pt-32">
      <ul className="w-2/6 hidden lg:block border rounded-lg">
        <li className="border-b py-4 px-2 font-bold">کاربر دیجیکالا</li>
        <li className="flex items-center gap-x-3 border-b py-4 px-2 font-bold">
          <HiOutlineShoppingBag className="text-xl" />
          سفارشات
        </li>
        <li className="flex items-center gap-x-3 border-b py-4 px-2 font-bold">
          <HiOutlineHeart className="text-xl" />
          <p> لیستهای من</p>
        </li>
      </ul>
      <div className="w-full lg:border rounded-lg">
        <div className="flex items-center gap-x-2 text-lg p-5">
          <HiArrowRight className="lg:hidden" />
          <h1>لیست ها</h1>
        </div>
        <div className="bg-gray-200 w-full h-3 lg:hidden"></div>
        <ul className="py-5 border-b flex justify-around lg:justify-start lg:gap-x-5 lg:px-5 ">
          <Link className="text-sm  text" href={"/profile/lists/vishList"}>
            <li>لیست علاقه مندی</li>
          </Link>
          <Link className="text-sm " href={"/profile/lists/generalList"}>
            <li>لیست عمومی</li>
          </Link>
          <li className="text-sm">اطلاع رسانی ها</li>
        </ul>
        {children}
      </div>
    </div>
  );
}