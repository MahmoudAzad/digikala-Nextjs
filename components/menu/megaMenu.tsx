"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { fetching } from "@/services/services";
import {
  HiOutlineLocationMarker,
  HiMenu,
  HiOutlineDatabase,
  HiOutlineBackspace,
  HiOutlineReceiptTax,
  HiOutlineCreditCard,
} from "react-icons/hi";
import { ICategory, IMainCategory } from "@/types/category";

const Menu = () => {
  const [mainCategory, setMainCategory] = useState<IMainCategory[]>([]);
  const [category, setCategory] = useState<ICategory[]>([]);
  const [show, setShow] = useState(true);
  const [hoverMainCategory, setHoverMainCategory] = useState("");
  const [hoverSubMenu, setHoverSubMenu] = useState(false);
  const [hover, sethover] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const ulRef = useRef<HTMLDivElement>(null);
  const tubeLights = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", controllNavbar);
    return () => {
      window.removeEventListener("scroll", controllNavbar);
    };
  });

  useEffect(() => {
    ulRef.current?.childNodes.forEach((links) => {
      links.addEventListener("mouseenter", (e) => {
        const target = e.target as HTMLElement;
        if (tubeLights.current) {
          tubeLights.current.style.left = target.offsetLeft + "px";
          tubeLights.current.style.width = target.offsetWidth + "px";
          tubeLights.current.style.opacity = "1";
        }
      });
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const fetchMainCategory = await fetching("/mainCategory");
      const fetchCategory = await fetching("/category");

      setMainCategory(fetchMainCategory);
      setCategory(fetchCategory);
    };
    fetchData();
  }, []);

  const mouseEnterMenu = () => {
    sethover(true);
    setHoverSubMenu(true);
  };
  const mouseLeaveMenu = () => {
    setHoverSubMenu(false);
    sethover(false);
  };

  const mouseEnterMainCategory = () => {
    sethover(true);
    setHoverSubMenu(false);
  };
  const mouseLeaveMainCategory = () => {
    sethover(false);
  };

  const controllNavbar = () => {
    if (hover === true) {
      setShow(true);
    } else {
      if (window.scrollY > 100) {
        setScrollPos(document.body.getBoundingClientRect().top);
        setShow(document.body.getBoundingClientRect().top > scrollPos);
      } else {
        setShow(true);
      }
    }
  };

  const hideBottomLine = () => {
    if (tubeLights.current) {
      tubeLights.current.style.opacity = "0";
      tubeLights.current.style.width = "0";
    }
  };

  const showBottomLine = () => {
    if (tubeLights.current) {
      tubeLights.current.style.opacity = "1";
    }
  };

  const hoverHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    const hoverText = target.textContent ?? "";
    setHoverMainCategory(hoverText);
  };

  const firstMainCategoryName = mainCategory.map(
    (mainCategory) => mainCategory.name
  )[0];

  return (
    <div
      className={`hidden  lg:block text-[11px] h-auto bg-white lg:px-0 w-full font-bold fixed z-[5] mt-[59px] transition-all duration-1000 shadow-md pt-3  ${
        show ? "translate-y-0 " : "!-translate-y-  !mt-0 "
      }`}
    >
      <div className="w-full bg-white">
        <div className="flex justify-between items-center">
          <div
            ref={ulRef}
            onMouseLeave={hideBottomLine}
            onMouseEnter={showBottomLine}
            className=" bg-white gap-x-1 w-fit lg:flex h-full items-center relative"
          >
            <div
              onMouseEnter={mouseEnterMenu}
              onMouseLeave={mouseLeaveMenu}
              className="movement relative cursor-pointer pl-4 lg:mr-4 lg:py-2 z-[999] h-full hidden  lg:flex lg:items-center text-[13px] "
            >
              <li className="flex">
                <HiMenu />
                دسته بندی کالا ها
              </li>
              <div className="w-[1px] h-[16px] bg-[#ceced8]   absolute left-0"></div>
            </div>
            <div className="movement  text-[12px] px-2 lg:py-2 text-[#62666D]  py-4 cursor-pointer">
              <Link href={"/main/4"} className="flex items-center">
                <li className="flex">
                  <HiOutlineDatabase className="text-base" />
                  سوپرمارکت
                </li>
              </Link>
            </div>

            <div className="movement  text-[12px] px-2 lg:py-2 text-[#62666D] py-4 cursor-pointer">
              <Link href="/main/gift-card" className="active-a">
                <li className="flex">
                  <HiOutlineCreditCard className="text-base" />
                  کارت هدیه
                </li>
              </Link>
            </div>

            <div className="movement  text-[12px] px-2 lg:py-2 text-[#62666D] py-4 cursor-pointer">
              <Link href="/">
                <li className="flex">
                  <HiOutlineBackspace className="text-base" />
                  تخفیف ها و پیشنهاد ها
                </li>
              </Link>
            </div>

            <div className="movement  text-[12px] px-2 lg:py-2 text-[#62666D] py-4 cursor-pointer flex items-center">
              <Link href="/">
                <li className="flex">
                  <HiOutlineReceiptTax className="text-base" />
                  شگفت انگیزها
                </li>
              </Link>
            </div>

            <div className="movement  text-[12px] px-2 lg:py-2 text-[#62666D] py-4 cursor-pointer">
              <Link href="/faq">
                <p>سوالی دارید؟</p>
              </Link>
            </div>

            <div className="movement  text-[12px] px-2 lg:py-2 text-[#62666D] py-4 cursor-pointer">
              <Link href="/">
                <p>فروشنده شوید!</p>
              </Link>
            </div>
            <div
              ref={tubeLights}
              className="hidden lg:block duration-[0.3s] absolute bottom-0 opacity-0 h-[3px] w-0 bg-[#ef394e] rounded-tl rounded-tr"
            ></div>
          </div>

          <div className="flex items-center gap-1 ml-4">
            <div className="relative">
              <span className="relative group flex items-center gap-1 cursor-pointer">
                <HiOutlineLocationMarker className="text-base" />
                <p className="text-xs text-zinc-600">
                  لطفا شهر خود را انتخاب کنید
                </p>
                <span className="bg-zinc-500 text-xs text-white w-44 py-3 px-2 rounded-md  shadow-lg absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 z-10">
                  لطفا شهر خود را انتخاب کنید
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`bg-white -translate-y-[1px] list-none shadow-sm h-[500px] w-auto mx-4 border ${
          hover ? "flex flex-wrap" : "hidden"
        }`}
        onMouseEnter={mouseEnterMainCategory}
        onMouseLeave={mouseLeaveMainCategory}
      >
        <div className="w-1/6 h-full flex flex-col border border-t-0 ">
          {mainCategory?.map((mainCategory, index) => {
            return (
              <div
                className="h-full flex  items-center py-3 px-2 text-xs font-bold text-[#424750] hover:text-[#ef394e] hover:bg-[#f0f0f180] cursor-pointer"
                onMouseEnter={(e) => hoverHandler(e)}
                key={index}
              >
                <Link href={`/main/${mainCategory.id}`}>
                  {mainCategory.name}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="w-5/6 h-full flex flex-col flex-wrap py-5 px-4 bg-white">
          {hoverSubMenu ? (
            <>
              {category
                .filter(
                  (category) => category.mainCategory == firstMainCategoryName
                )
                ?.map((category, index) => {
                  return (
                    <div key={index}>
                      <li>
                        <div className="text-[rgb(12,12,12)] !leading-[2.15rem] text-sm h-auto w-auto ml-12 hover:text-[#ef394e]">
                          <Link href={`/search/${category.slug}`}>
                            {category.name}
                          </Link>
                        </div>
                      </li>
                      {category.subCategory?.map((subCategory, index) => {
                        return (
                          subCategory.name != "" && (
                            <li key={index}>
                              <div className="text-[#81858b] !leading-[2.17rem] text-xs h-auto w-auto ml-12 hover:text-[#ef394e]">
                                <Link href={`/search/${subCategory.slug}`}>
                                  {subCategory.name}
                                </Link>
                              </div>
                            </li>
                          )
                        );
                      })}
                    </div>
                  );
                })}
            </>
          ) : (
            category
              .filter((category) => category.mainCategory == hoverMainCategory)
              ?.map((category, index) => {
                return (
                  <div key={index}>
                    <li>
                      <div className="text-[#0c0c0c] !leading-[2.15rem] text-sm h-auto w-auto ml-12 hover:text-[#ef394e]">
                        <Link href={`/search/${category.slug}`}>
                          {category.name}
                        </Link>
                      </div>
                    </li>
                    {category.subCategory?.map((subCategory, index) => {
                      return (
                        subCategory.name != "" && (
                          <li key={index}>
                            <div className="text-[#81858b] !leading-[2.17rem] text-xs h-auto w-auto ml-12 hover:text-[#ef394e]">
                              <Link href={`/search/${subCategory.slug}`}>
                                {subCategory.name}
                              </Link>
                            </div>
                          </li>
                        )
                      );
                    })}
                  </div>
                );
              })
          )}
        </div>
      </div>
      <>
        {
          <div
            className={`${
              hover
                ? "absolute bg-black w-full h-[200vh] top-9 -z-10 opacity-30"
                : "hidden"
            }`}
          ></div>
        }
      </>
    </div>
  );
};

export default Menu;
