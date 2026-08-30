"use client";

import SearchInput from "../inputs/searchInput";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const params = usePathname();

  if (params.includes("/product")) {
    return null;
  }

  return (
    <div className="relative z-[100] lg:hidden">
      <div className="sticky top-0 border-b-2 bg-white px-4 py-3">
        <SearchInput />
      </div>
    </div>
  );
};

export default MobileNavbar;
