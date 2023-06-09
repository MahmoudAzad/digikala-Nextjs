import Image from "next/image";
import {
  HiOutlineSearch,
  HiOutlineShoppingBag,
  HiOutlineLogin,
} from "react-icons/hi";

const DesctopNavbar = () => {
  return (
    <nav className="hidden bg-white top-0  items-center justify-between w-full px-5 py-3 z-10 lg:flex lg:fixed">
      <div className="flex">
        <Image
          src="https://www.digikala.com/statics/img/svg/logo.svg"
          alt="digikala"
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
        <div className=" rounded-lg flex items-center p-2 cursor-pointer border">
          <HiOutlineLogin className="w-6 h-6" />
          <p className="text-xs font-bold border-l-2 border-black px-2">ورود</p>
          <p className="text-xs font-bold pr-2">ثبت نام</p>
        </div>
        <HiOutlineShoppingBag className="w-16 h-6 border-r-2 mr-3 cursor-pointer" />
      </div>
    </nav>
  );
};

export default DesctopNavbar;
