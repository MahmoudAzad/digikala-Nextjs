import {
  HiHome,
  HiOutlineBackspace,
  HiOutlineCreditCard,
  HiOutlineDatabase,
  HiOutlineReceiptTax,
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
  megaMenuCategory: [
    {
      id: 1,
      name: "سوپرمارکت",
      icon: HiOutlineDatabase,
      slug: "/main/4",
    },
    {
      id: 2,
      name: "کارت هدیه",
      icon: HiOutlineCreditCard,
      slug: "/main/gift-card",
    },
    {
      id: 3,
      name: "تخفیف ها و پیشنهاد ها",
      icon: HiOutlineBackspace,
      slug: "",
    },
    {
      id: 4,
      name: "شگفت انگیزها",
      icon: HiOutlineReceiptTax,
      slug: "",
    },
    {
      id: 5,
      name: "سوالی دارید؟",
      slug: "/faq",
    },
    {
      id: 6,
      name: "فروشنده شوید!",
      slug: "",
    },
  ],
  singleProMenuCategory: [
    {
      id: 1,
      label: "دیدگاه‌ها",
    },
    {
      id: 2,
      label: "معرفی",
    },
    {
      id: 3,
      label: "بررسی تخصصی",
    },
    {
      id: 4,
      label: "مشخصات",
    },
    {
      id: 5,
      label: "پرسش‌ها",
    },
  ],
};
