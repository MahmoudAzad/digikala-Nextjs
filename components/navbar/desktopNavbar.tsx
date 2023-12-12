"use client";
import Image from "next/image";
import { HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi";
import UserDashboardBox from "./userDashbordBox";
import { useSelector } from "react-redux";
import { ICartRootState } from "@/types/cart";

const DesctopNavbar = () => {
  const cartLength = useSelector(
    (state: ICartRootState) => Object.values(state.cart.entities).length
  );
  return (
    <nav className="hidden bg-white top-0  items-center justify-between w-full px-5 py-3 z-20 lg:flex lg:fixed">
      <div className="flex">
        <Image
          src="https://www.digikala.com/statics/img/svg/logo.svg"
          alt="دیجی کالا"
          className="mr-4 ml-4"
          width={120}
          height={120}
        />

        <form className="flex relative items-center">
          <input
            type="text"
            placeholder="جستجو"
            className="bg-slate-100 p-2  rounded-md w-[600px] placeholder:pr-10 placeholder:text-sm placeholder:text-slate-500"
          />
          <HiOutlineSearch className="absolute right-4 w-6 h-6 text-slate-500 cursor-pointer" />
        </form>
      </div>
      <div className="flex items-center">
        <UserDashboardBox />
        <div className="border-r-2"></div>
        <div className="relative pr-2   cursor-pointer">
          <HiOutlineShoppingBag className="text-2xl" />
          {cartLength ? (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full absolute -bottom-3 right-0 transform translate-x-0 translate-y-0 text-xs font-bold">
              {cartLength}
            </span>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default DesctopNavbar;
