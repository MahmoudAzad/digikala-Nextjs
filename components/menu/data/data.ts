import {
  HiHome,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiOutlineViewGrid,
} from "react-icons/hi";

export const menuData = {
  mobileMenuData: [
    {
      id: 1,
      icon: HiHome,
      title: "خانه",
      slug: "",
    },
    {
      id: 2,
      icon: HiOutlineViewGrid,
      title: "دسته‌بندی",
      slug: "categories",
    },
    {
      id: 3,
      icon: HiOutlineShoppingCart,
      title: "سبد خرید",
      slug: "cart",
    },
    {
      id: 4,
      icon: HiOutlineUser,
      title: "لیست‌های من",
      slug: "profile/lists/wishList",
    },
  ],
};
