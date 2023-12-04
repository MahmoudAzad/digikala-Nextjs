"use client";
import { useEffect, useRef, useState } from "react";
import {
  FaRegUser,
  FaAngleLeft,
  FaCaretDown,
  FaShoppingBag,
  FaHeart,
} from "react-icons/fa";
const UserDashboardBox = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      if (showDropdown) {
        setShowDropdown(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="relative group">
        <div
          className={`text-center flex p-2 rounded-md cursor-pointer ${
            showDropdown ? "bg-rose-100" : ""
          }`}
          onClick={toggleDropdown}
        >
          <FaRegUser className="text-xl" />
          <FaCaretDown />
        </div>
        {showDropdown && (
          <div className="absolute z-10 bg-gray-200 w-56 left-0" ref={menuRef}>
            <div className="bg-white border border-gray-300 rounded-lg shadow-2xl">
              <div className="dropdown-menu">
                <ul>
                  <li className="flex justify-between items-center border-b border-gray-300 p-4 cursor-pointer w-full hover:bg-gray-200">
                    <p>کاربر دیجیکالا</p>
                    <FaAngleLeft />
                  </li>
                  <li className="flex gap-x-2 items-center border-b border-gray-300 p-4 cursor-pointer w-full hover:bg-gray-200">
                    <FaShoppingBag />
                    <p>سفارش ها</p>
                  </li>
                  <li className="flex gap-x-2 items-center border-b border-gray-300 p-4 cursor-pointer w-full hover:bg-gray-200">
                    <FaHeart />
                    <p>لیست ها</p>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      {showDropdown && (
        <div
          className="fixed top-0 left-0 h-full w-full"
          onClick={closeDropdown}
        ></div>
      )}
    </div>
  );
};

export default UserDashboardBox;
