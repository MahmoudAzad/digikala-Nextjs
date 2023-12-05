import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
export default async function ListsLayout({ children }) {
  return (
    <div>
      <div className="flex items-center gap-x-2 text-lg p-5">
        <HiArrowRight />
        <h1>لیست ها</h1>
      </div>
      <div className="bg-gray-200 w-full h-3"></div>
      <ul className="py-5 border-b flex ">
        <Link href={"/profile/lists/milad"}>
          <li className="w-full flex-1 text-center text-sm">لیست علاقه مندی</li>
        </Link>
        <li className="flex-1 text-center text-sm">لیست عمومی</li>
        <li className="flex-1 text-center text-sm">اطلاع رسانی ها</li>
      </ul>
      {children}
    </div>
  );
}
