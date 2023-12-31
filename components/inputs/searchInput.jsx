"use client";

import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    console.log(event);
    setInputValue(event.target.value);
  };
  return (
    <div className="">
      <div className="relative w-full">
        <HiOutlineSearch className="absolute right-2 mt-3 w-6 h-6 text-slate-500 cursor-pointer" />
        <input
          type="text"
          placeholder="جستجو در"
          value={inputValue}
          className="bg-slate-100 py-4 w-full rounded-md input-with-icon pr-10 text-sm"
          onChange={handleChange}
        />
        {inputValue.length === 0 && <span className="search-icon" />}
      </div>
    </div>
  );
};

export default SearchInput;
