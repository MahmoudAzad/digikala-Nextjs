import { HiOutlineSearch } from "react-icons/hi";
import SearchInput from "../inputs/searchInput";

const MobileNavbar = () => {
  return (
    <div className="lg:hidden  ">
      <div className="flex items-center py-3 px-4 border-b-2 sticky top-0">
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
