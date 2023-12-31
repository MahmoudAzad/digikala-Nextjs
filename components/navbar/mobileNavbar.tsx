import Image from "next/image";
import {
  HiMenu,
  HiOutlineSearch,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";
import SearchInput from "../inputs/searchInput";

const MobileNavbar = () => {
  return (
    <div className="lg:hidden  ">
      <div className="flex  items-center justify-between border-b-2 py-3 px-8 bg-white h-16 fixed w-full top-0 z-20">
        <HiMenu className="text-xl cursor-pointer" />
        <Image
          src="https://www.digikala.com/statics/img/svg/logo.svg"
          alt="دیجی کالا"
          width={90}
          height={90}
        />
        <HiOutlineQuestionMarkCircle className="text-xl cursor-pointer rounded-md" />
      </div>

      <div className="flex items-center py-3 px-4 mt-16 border-b-2">
        <form className="flex relative items-center w-full">
          <div className="relative w-full">
            <HiOutlineSearch className="absolute right-2 mt-2 w-6 h-6 text-slate-500 cursor-pointer" />
            <SearchInput />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MobileNavbar;
