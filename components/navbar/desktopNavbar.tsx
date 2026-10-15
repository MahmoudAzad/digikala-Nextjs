"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

import CartMenuDropdown from "../dropdowns/cartMenuDropdown";
import UserDashboardDropdown from "../dropdowns/userDashboardDropdown";
import ProductSearch from "./productSearch";

const DesctopNavbar = () => {
  const [search, setSearch] = useState("");

  return (
    <nav className="fixed top-0 z-20 hidden w-full items-center justify-between bg-white px-5 py-3 lg:flex">
      {/* Left */}
      <div className="flex">
        <Link href="/">
          <Image
            src="https://www.digikala.com/statics/img/svg/logo.svg"
            alt="دیجی کالا"
            className="mr-4 ml-4"
            width={120}
            height={120}
          />
        </Link>

        {/* Search */}
        <div className="relative">
          <form
            className="relative flex items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجو در محصولات..."
              className="
                h-11
                w-[600px]
                rounded-lg
                bg-slate-100
                py-2
                pr-12
                pl-4
                text-sm
                text-slate-800
                outline-none
                transition-all
                duration-200
                placeholder:text-slate-400
                focus:bg-white
                focus:ring-2
                focus:ring-slate-200
              "
            />

            <HiOutlineSearch
              className="
                pointer-events-none
                absolute
                right-4
                h-5
                w-5
                text-slate-500
              "
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="
                  absolute
                  left-3
                  text-lg
                  text-slate-400
                  transition
                  hover:text-slate-700
                "
              >
                ×
              </button>
            )}
          </form>
          {/* Product Search */}
          <ProductSearch searchParams={search} className="w-[600px]" />{" "}
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center">
        <UserDashboardDropdown />

        <div className="border-r-2" />

        <div className="relative ml-5 pr-10">
          <CartMenuDropdown />
        </div>
      </div>
    </nav>
  );
};

export default DesctopNavbar;
