"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { menuData } from "./data/data";
import { ICartRootState } from "@/types/cart";
import { usePathname } from "next/navigation";

const MobileMenu: React.FC = () => {
  const params = usePathname();
  console.log("params ===>", params);
  const [activeItem, setActiveItem] = useState<number>(1);
  const [cartLength, setCartLength] = useState<number>(0);

  const getCartLength = useSelector(
    (state: ICartRootState) => Object.values(state.cart.entities).length
  );

  useEffect(() => {
    setCartLength(getCartLength);
  }, [getCartLength]);

  if (params.includes("/product")) {
    return null;
  }
  return (
    <div className="fixed bottom-0 w-full z-50 lg:hidden">
      <div className="flex justify-between bg-white py-2 px-4 sm:justify-around border-t-2 shadow-lg">
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
                <menuItem.icon className="text-2xl sm:text-3xl" />
                {menuItem.slug === "cart" && cartLength > 0 ? (
                  <div className="bg-red-500 text-white px-[6px] py-[1px] rounded-md absolute -bottom-2 right-0 transform translate-x-2 -translate-y-2 text-xs font-bold">
                    {cartLength}
                  </div>
                ) : null}
              </div>
            </Link>
            <p className="text-xs sm:text-sm font-bold">{menuItem.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
