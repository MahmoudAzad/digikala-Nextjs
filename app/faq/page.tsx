import { NextPage } from "next";
import FaqCards from "@/components/cards/faqCards";
import { SlGrid, SlQuestion } from "react-icons/sl";
import FaqQuestionsAccordion from "@/components/accordion/faqQuestionsAccordion";

const FaqPage: NextPage = () => {
  return (
    <div className="lg:pt-28">
      <div className="bg-gray-100">
        <div className="flex items-center justify-center py-5">
          <div className="rounded-full p-4 border  bg-white">
            <SlQuestion className="text-sky-400 text-2xl bg-white" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5">
          <p className="font-bold ">موضوع پرسش شما چیست؟</p>
          <p className="text-xs text-gray-600">
            موضوع موردنظرتان را جستجو کرده یا از دسته‌بندی زیر انتخاب کنید
          </p>
          <input
            placeholder="جستجوی موضوع"
            className="bg-gray-200 w-4/5 p-2 rounded-lg text-sm"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center py-5 mt-10 ">
          <div className="rounded-full p-4 border  bg-gray-100">
            <SlGrid className="text-sky-400 text-2xl " />
          </div>
        </div>
        <p className="font-bold text-center">دسته‌بندی پرسش‌ها</p>
        <FaqCards />
      </div>
      <div>
        <div className="flex items-center justify-center py-5 mt-10">
          <div className="rounded-full p-4 border  bg-gray-100">
            <SlQuestion className="text-sky-400 text-2xl " />
          </div>
        </div>
        <p className="font-bold text-center">پرسش‌های متداول</p>
        <FaqQuestionsAccordion />
      </div>
    </div>
  );
};

export default FaqPage;
