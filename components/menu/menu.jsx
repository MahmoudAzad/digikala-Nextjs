"use client";
import { useEffect, useRef } from "react";
import {
  HiOutlineLocationMarker,
  HiMenu,
  HiOutlineDatabase,
  HiOutlineFire,
  HiOutlineBackspace,
  HiOutlineReceiptTax,
} from "react-icons/hi";

const Menu = () => {
  const bottomLine = useRef();
  const ulRef = useRef();

  const bottomLineHidden = () => {
    bottomLine.current.style.opacity = "0";
    bottomLine.current.style.width = "0";
  };
  const bottomLineShow = () => {
    bottomLine.current.style.opacity = "1";
  };
  useEffect(() => {
    ulRef.current.childNodes.forEach((li, index) => {
      li.addEventListener("mouseenter", (e) => {
        bottomLine.current.style.left = e.target.offsetLeft + "px";
        bottomLine.current.style.width = e.target.offsetWidth + "px";
        bottomLine.current.style.opacity = "1";
      });
    });
  }, []);

  return (
    <div className="hidden lg:pt-16 px-10 mt-2 lg:flex items-center justify-between border-b-2">
      <ul
        onMouseLeave={bottomLineHidden}
        onMouseEnter={bottomLineShow}
        ref={ulRef}
        className="flex xl:gap-8 lg:gap-2 relative"
      >
        <li className="flex items-center gap-1 text-sm font-bold cursor-pointer lg:py-2 ">
          <HiMenu />
          دسته‌بندی کالاها
        </li>
        <li className="flex items-center gap-1  text-sm text-zinc-600 cursor-pointer">
          <HiOutlineDatabase className="text-base" />
          سوپرمارکت
        </li>

        <li className="flex items-center gap-1  text-sm text-zinc-600 cursor-pointer">
          <HiOutlineFire className="text-base" />
          پرفروش‌ترین‌ها
        </li>

        <li className="flex items-center  gap-1  text-sm text-zinc-600 cursor-pointer">
          <HiOutlineBackspace className="text-base" />
          تخفیف‌ها و پیشنهاد‌ها
        </li>
        <li className="flex items-center gap-1  text-sm text-zinc-600 cursor-pointer">
          <HiOutlineReceiptTax className="text-base" />
          شگفت‌انگیزها
        </li>
        <li className="flex items-center gap-1  text-sm text-zinc-600 cursor-pointer">
          سوالی دارید؟
        </li>
        <li className="flex items-center gap-1  text-sm text-zinc-600 cursor-pointer">
          در دیجی‌کالا بفروشید!
        </li>
        <div
          ref={bottomLine}
          className="hidden lg:block duration-300 absolute bottom-0 opacity-0 h-[2px] w-0 bg-rose-500"
        />
      </ul>
      <div className="flex items-center gap-1">
        <div className="relative">
          <span className="relative group flex items-center gap-1 cursor-pointer">
            <HiOutlineLocationMarker className="text-base" />
            <p className="text-xs text-zinc-600">لطفا شهر خود را انتخاب کنید</p>
            <span className="bg-zinc-500 text-xs text-white w-44 py-3 px-2 rounded-md  shadow-lg absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 z-10">
              لطفا شهر خود را انتخاب کنید
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
