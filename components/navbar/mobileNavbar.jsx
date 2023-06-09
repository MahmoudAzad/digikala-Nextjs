import Image from "next/image";
import {
  HiMenu,
  HiOutlineSearch,
  HiOutlineLogin,
  HiOutlineQuestionMarkCircle,
  HiOutlineShoppingBag,
} from "react-icons/hi";

const MobileNavbar = () => {
  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between border-b-2 mx-5 py-3">
        <HiMenu className="text-xl cursor-pointer" />
        <Image
          src="https://www.digikala.com/statics/img/svg/logo.svg"
          alt="digikala"
          width={90}
          height={90}
        />
        <HiOutlineQuestionMarkCircle className="text-xl cursor-pointer rounded-md" />
      </div>
      <div className="flex items-center justify-around py-3 mx-4 border-b-2">
        <form className="flex relative items-center basis-4/5">
          <input
            type="text"
            placeholder="جستجو"
            className="bg-slate-100 p-2 w-full  rounded-md placeholder:pr-10 placeholder:text-sm placeholder:text-slate-500"
          />
          <HiOutlineSearch className="absolute right-4 w-6 h-6 text-slate-500 cursor-pointer" />
        </form>
        <div className="flex items-center">
          <HiOutlineLogin className="w-6 h-6" />
          <p className="text-xs font-bold px-1">ورود</p>
        </div>
        <div className="">
          <HiOutlineShoppingBag className="w-6 h-6 " />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
