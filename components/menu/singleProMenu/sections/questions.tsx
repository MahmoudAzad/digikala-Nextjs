import { IQuestion } from "@/types/comment";
import {
  HiChevronLeft,
  HiOutlineQuestionMarkCircle,
  HiOutlineSortDescending,
} from "react-icons/hi";

interface Props {
  questions: IQuestion[] | undefined;
}
const Questions: React.FC<Props> = ({ questions }) => {
  return (
    <>
      <h2 className="pb-2 w-20 md:border-b-4 border-red-600 ">پرسش‌ها</h2>
      <div className="flex gap-x-10 ">
        <div className="hidden lg:block mt-5 md:basis-3/12">
          <div className="sticky top-0">
            <p className="text-xs text-gray-600">
              شما هم درباره این کالا پرسش ثبت کنید
            </p>
            <button className="border border-red-600 text-red-600 py-2 text-sm font-bold rounded-lg w-full mt-5">
              ثبت پرسش
            </button>
          </div>
        </div>
        <div className="md:basis-9/12">
          <div className="hidden md:flex items-center gap-x-4 text-xs">
            <HiOutlineSortDescending className="text-2xl" />
            <p className="font-bold">مرتب سازی بر اساس:</p>
            <p>جدیدترین</p>
            <p>مفیدترین</p>
          </div>
          <div className="">
            {questions?.map((question) => (
              <div key={question.id} className="border-b pb-5">
                <div className="flex gap-x-3 mt-10">
                  <HiOutlineQuestionMarkCircle className="text-cyan-400 text-2xl " />
                  <p className="text-xs md:text-sm border-b pb-4 w-full">
                    {question.questionsBox}
                  </p>
                </div>
                <div className="flex cursor-pointer text-cyan-600 text-sm items-center mr-10 mt-3">
                  <p className="text-xs font-bold">ثبت پاسخ</p>
                  <HiChevronLeft />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
