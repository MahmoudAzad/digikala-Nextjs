"use client";

import { convertMiladiToShamsi } from "@/hooks/useConvertMiladiToShamsi";
import { IComment, IQuestion } from "@/types/comment";
import { IProduct } from "@/types/product";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  HiChevronLeft,
  HiClipboardCheck,
  HiDotsVertical,
  HiOutlineInformationCircle,
  HiOutlineQuestionMarkCircle,
  HiOutlineShieldCheck,
  HiOutlineSortDescending,
  HiOutlineTruck,
  HiStar,
} from "react-icons/hi";
import AddToCartBtn from "../buttons/addToCartBtn";

const fetchCommentsData = async () => {
  const response = await fetch(
    `https://digikala-d567.onrender.com/customersComment`
  );
  const data = await response.json();
  return data;
};

const fetchQuestionsData = async () => {
  const response = await fetch(
    `https://digikala-d567.onrender.com/customersQuestion`
  );
  const data = await response.json();
  return data;
};

interface Props {
  singleProData: IProduct;
}

const SingleProductMenu: React.FC<Props> = ({ singleProData }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [comments, setComments] = useState<IComment[]>();
  const [showMore, setShowMore] = useState(false);
  const [questions, setQuestions] = useState<IQuestion[]>();
  const menuItems = [
    { id: 1, label: "دیدگاه‌ها" },
    { id: 2, label: "معرفی" },
    { id: 3, label: "بررسی تخصصی" },
    { id: 4, label: "مشخصات" },
    { id: 5, label: "پرسش‌ها" },
  ];

  const handleMenuItemClick = (itemId: number) => {
    setActiveItem(itemId);

    const element = document.getElementById(`item-${itemId}`);
    if (element) {
      const topOffset = 5;
      const clientHeightOffset = element.clientHeight + topOffset;
      const scrollTo = element.offsetTop - clientHeightOffset;
      window.scrollTo({ top: scrollTo, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const getCommentsData = async () => {
      const data = await fetchCommentsData();
      setComments(data);
    };
    getCommentsData();
  }, []);

  useEffect(() => {
    const getQuestionsData = async () => {
      const data = await fetchQuestionsData();
      setQuestions(data);
    };
    getQuestionsData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // بررسی محتوای هر آیتم و مشخص کردن آیتمی که در حال حاضر در بالای صفحه قرار دارد
      const scrollPosition = window.scrollY;

      for (const item of menuItems) {
        const element = document.getElementById(`item-${item.id}`);
        if (!element) continue;

        const elementTop =
          element.getBoundingClientRect().top + scrollPosition - 100;
        const elementBottom = elementTop + element.clientHeight;

        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          setActiveItem(item.id);
          break; // تا اولین آیتمی که در بالای صفحه قرار دارد
        }
      }
    };

    // اضافه کردن رویداد اسکرول به ویژگیها
    window.addEventListener("scroll", handleScroll);

    // پاک کردن وقتی کامپوننت unmount می‌شود
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems]);

  return (
    <div className="mt-10 ">
      <ul className="flex justify-between md:justify-start sm:px-10 px-2 border-b sticky top-12 z-40 overflow-x-hidden  bg-white ">
        {menuItems?.map((item) => (
          <li
            key={item.id}
            className={`py-2 md:px-5 cursor-pointer text-[10px] md:text-xs font-bold text-gray-700${
              item.id === activeItem
                ? "border-b-4 border-b-red-600 text-red-600"
                : ""
            }`}
            onClick={() => handleMenuItemClick(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <div className="flex px-8">
        <div className="xl:basis-9/12">
          <div id="item-1" className="pt-8 mb-4 flex  border-b-4 pb-10">
            <div className="hidden lg:block basis-2/6">
              <div className="sticky top-32">
                <p className="font-bold pb-2 ">
                  <span className="border-b-2 border-red-600  pb-3">
                    امتیاز و{" "}
                  </span>
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
                  <p className="text-xs text-gray-400 pr-2">
                    از مجموع ۴۷ امتیاز
                  </p>
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

            <div className="w-full">
              <div className="hidden lg:flex justify-between mt-16 border-b-2 pb-4">
                <div className="flex items-center gap-x-4 text-xs">
                  <HiOutlineSortDescending className="text-2xl" />
                  <p className="font-bold">مرتب سازی:</p>
                  <p>جدیدترین</p>
                  <p>دیدگاه خریداران</p>
                  <p>مفیدترین</p>
                </div>

                <p className="text-xs text-gray-600">۵۷ دیدگاه</p>
              </div>
              <p className="lg:hidden font-bold pb-5">دیدگاه‌ها</p>
              <div className=" sm:grid grid-cols-2 md:grid-cols-3 lg:hidden">
                {comments?.map((comment) => (
                  <div
                    key={comment.id}
                    className="border rounded-lg px-5 py-5 gap-y-5 flex flex-col justify-between grid-row-3"
                  >
                    <p className="line-clamp-1  font-bold">{comment.title}</p>
                    <p className="text-xs font-bold  line-clamp-3 mt-3">
                      {comment.description}
                    </p>
                    <div className="flex gap-x-4 text-xs text-gray-600 font-bold">
                      <p>{convertMiladiToShamsi(comment.createdAt)}</p>
                      <p>کاربرررر دیجیکالا</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden lg:block">
                {comments?.map((comment) => (
                  <div
                    className="hidden lg:block border-b py-7"
                    key={comment.id}
                  >
                    <div className="flex justify-between items-center py-2 ">
                      <div className="flex items-center gap-x-2">
                        <p className="bg-green-600 text-white px-2 text-sm rounded-md">
                          {comment.rate}
                        </p>
                        <p className="font-bold">{comment.title}</p>
                      </div>
                      <HiDotsVertical className="text-gray-500 text-lg cursor-pointer" />
                    </div>
                    <div className="flex text-gray-500 gap-x-2 text-xs mr-8 border-b pb-3">
                      <p className="text-gray-600 text-xs"></p>
                      <p>{comment.name}</p>
                    </div>
                    <p className="mr-8 pt-4 text-sm">{comment.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id="item-2" className="pt-5 mb-4 border-b-4 pb-10">
            <h2 className="pb-2 mb-5 w-16 md:border-b-4 border-red-600 ">
              معرفی
            </h2>
            <p
              className={`md:text-sm md:leading-8 text-gray-700  text-xs  leading-8  ${
                showMore ? "" : "line-clamp-3"
              }`}
            >
              {singleProData.description}
            </p>
            <div className="flex cursor-pointer text-cyan-600 text-sm items-center mt-3">
              <p onClick={() => setShowMore(!showMore)}>بیشتر</p>
              <HiChevronLeft />
            </div>
          </div>
          <div id="item-3" className="pt-5 mb-4 border-b-4 pb-10">
            <h2 className="pb-2 mb-5 w-28 md:border-b-4 border-red-600 ">
              بررسی تخصصی
            </h2>
            <p
              className={`md:text-sm md:leading-8 text-gray-700 text-xs leading-8 ${
                showMore ? "" : "line-clamp-3"
              }`}
            >
              {singleProData.description}
            </p>
            <div className="flex cursor-pointer text-cyan-600 text-sm items-center mt-3">
              <p onClick={() => setShowMore(!showMore)}>مشاهده بیشتر</p>
              <HiChevronLeft />
            </div>
          </div>
          <div id="item-4" className="pt-5 mb-4 border-b-4 pb-10">
            <h2 className="pb-2 mb-5 w-20 md:border-b-4 border-red-600 ">
              مشخصات{" "}
            </h2>
            <div className="space-y-5 md:pr-56">
              {singleProData.productsValues?.map((property) => (
                <div key={property.id} className="flex items-center">
                  <p className="text-xs md:text-sm text-gray-600 whitespace-nowrap basis-2/6 pb-5">
                    {property.filter}
                  </p>
                  <p className="text-xs md:text-sm border-b pb-5 w-full basis-4/6">
                    {property.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div id="item-5" className="pt-5 mb-4 pb-10">
            <h2 className="pb-2  w-20 md:border-b-4 border-red-600 ">
              پرسش‌ها
            </h2>
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
          </div>
        </div>

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
              <AddToCartBtn classes={"w-full mt-4"} product={singleProData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductMenu;
