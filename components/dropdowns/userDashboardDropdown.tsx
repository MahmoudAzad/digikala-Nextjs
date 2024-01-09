"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaRegUser,
  FaAngleLeft,
  FaCaretDown,
  FaShoppingBag,
  FaHeart,
} from "react-icons/fa";

const UserDashboardDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownIcon, setShowDropdownIcon] = useState(showDropdown);

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setShowDropdown(false);
  };

  const toggleDropdownIcon = () => {
    setShowDropdownIcon(!showDropdownIcon);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      if (showDropdown) {
        setShowDropdown(false);
        setShowDropdownIcon(false);
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
            showDropdownIcon ? "bg-rose-100" : ""
          }`}
          onClick={() => {
            toggleDropdownIcon();
            setShowDropdown(!showDropdown);
          }}
        >
          <FaRegUser className="text-xl" />
          <FaCaretDown />
        </div>
        {showDropdown && (
          <div className="absolute z-10 bg-gray-200 w-56 left-0" ref={menuRef}>
            <div className="bg-white border border-gray-300 rounded-lg shadow-2xl">
              <div className="dropdown-menu">
                <ul>
                  <li
                    className="flex justify-between items-center border-b border-gray-300 p-4 cursor-pointer w-full hover:bg-gray-200"
                    onClick={() => toggleDropdown()}
                  >
                    <p>کاربر دیجیکالا</p>
                    <FaAngleLeft />
                  </li>
                  <li
                    className="flex gap-x-2 items-center border-b border-gray-300 p-4 cursor-pointer w-full hover:bg-gray-200"
                    onClick={() => toggleDropdown()}
                  >
                    <FaShoppingBag />
                    <p>سفارش‌ها</p>
                  </li>
                  <Link
                    href={"profile/lists/wishList"}
                    onClick={() => toggleDropdown()}
                    className="flex gap-x-2 items-center border-b border-gray-300 p-4 cursor-pointer w-full hover:bg-gray-200"
                  >
                    <FaHeart />
                    <p>لیست‌ها</p>
                  </Link>
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

export default UserDashboardDropdown;
