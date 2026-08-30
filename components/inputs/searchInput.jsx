"use client";

import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import ProductSearch from "../navbar/productSearch";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="relative">
      <div className="relative w-full">
        <HiOutlineSearch className="absolute right-2 mt-3 h-6 w-6 cursor-pointer text-slate-500" />

        <input
          type="text"
          placeholder="جستجو در"
          value={inputValue}
          className="input-with-icon w-full rounded-md bg-slate-100 py-4 pr-10 text-sm"
          onChange={handleChange}
        />

        {inputValue.length === 0 && <span className="search-icon" />}
      </div>
      <ProductSearch searchParams={inputValue} className="w-full" />{" "}
    </div>
  );
};

export default SearchInput;
