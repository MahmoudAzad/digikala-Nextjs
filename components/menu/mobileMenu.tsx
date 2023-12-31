"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { menuData } from "./data/data";
import { ICartRootState } from "@/types/cart";

const MobileMenu: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>(1);
  const [cartLength, setCartLength] = useState<number>();

  const getCartLength = useSelector(
    (state: ICartRootState) => Object.values(state.cart.entities).length
  );

  useEffect(() => {
    setCartLength(getCartLength);
  }, [getCartLength]);
  return (
    <div className="fixed bottom-0 w-full z-50 lg:hidden">
      <div className="flex justify-between bg-white py-3 px-2 sm:justify-around">
        {menuData.mobileMenuData.map((menuItem) => (
          <div
            key={menuItem.id}
            onClick={() => setActiveItem(menuItem.id)}
            className={`flex flex-col justify-center items-center gap-y-1 ${
              activeItem === menuItem.id ? "text-gray-900" : "text-gray-500"
            }`}
          >
            <Link href={`/${menuItem.slug}`}>
              <div className="relative">
                <menuItem.icon className="text-3xl" />
                {menuItem.slug === "cart" && (
                  <div className="bg-red-500 text-white px-[6px] py-[1px] rounded-md absolute -bottom-2 right-0 transform translate-x-2 -translate-y-2 text-xs font-bold">
                    {cartLength}
                  </div>
                )}
              </div>
            </Link>
            <p className="text-sm font-bold">{menuItem.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
