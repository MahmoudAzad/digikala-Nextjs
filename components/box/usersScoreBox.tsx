import { HiOutlineInformationCircle, HiStar } from "react-icons/hi";

const UsersScoreBox: React.FC = () => {
  return (
    <div className="hidden lg:block basis-2/6">
      <div className="sticky top-32">
        <p className="font-bold pb-2 ">
          <span className="border-b-2 border-red-600  pb-3">امتیاز و </span>
          دیدگاه کاربران
        </p>
        <div className="mt-8">
          <span className="text-2xl font-bold ml-1">۴.۳</span>
          <span className="text-xs">از ۵</span>
        </div>
        <div className="flex items-center mt-2">
          <HiStar className="text-yellow-400 text-2xl" />
          <HiStar className="text-yellow-400 text-2xl" />
          <HiStar className="text-yellow-400 text-2xl" />
          <HiStar className="text-yellow-400 text-2xl" />
          <HiStar className="text-gray-300 text-2xl" />
          <p className="text-xs text-gray-400 pr-2">از مجموع ۴۷ امتیاز</p>
        </div>
        <p className="text-xs text-gray-600 pt-4">
          شما هم درباره این کالا دیدگاه ثبت کنید
        </p>
        <button className="border-red-500 border rounded-lg text-red-500 text-center text-xs font-bold py-3 w-4/5 mt-3">
          ثبت دیدگاه
        </button>
        <div className="flex items-center text-gray-600 text-xs gap-2 mt-3">
          <HiOutlineInformationCircle className="text-lg" />
          <p>۵ امتیاز دیجی‌کلاب</p>
        </div>
        <p className="text-gray-600 text-xs mr-6 leading-5 mt-1 w-4/6 ">
          پس از تایید شدن دیدگاه، با رفتن به صفحه ماموریت‌های دیجی‌کلاب
          امتیازتان را دریافت کنید.
        </p>
      </div>
    </div>
  );
};

export default UsersScoreBox;
