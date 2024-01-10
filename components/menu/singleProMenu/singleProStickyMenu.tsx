"use client";

import { useEffect, useState } from "react";
import { IComment, IQuestion } from "@/types/comment";
import { IProduct } from "@/types/product";
import EndStockBox from "../../box/endStockBox";
import { menuData } from "../data/data";
import { fetching } from "@/services/services";
import Comments from "./sections/comments";
import SingleProMenuAccordion from "@/components/accordion/singleProMenuAccordion";
import Attributes from "./sections/attributes";
import Questions from "./sections/questions";
import AddToCartStickyBox from "@/components/box/addToCartStickyBox";

interface Props {
  singleProData: IProduct;
}

const SingleProStickyMenu: React.FC<Props> = ({ singleProData }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [comments, setComments] = useState<IComment[]>();
  const [questions, setQuestions] = useState<IQuestion[]>();

  const handleMenuItemClick = (itemId: number) => {
    setActiveItem(itemId);

    const element = document.getElementById(`item-${itemId}`);
    if (element) {
      const topOffset = 5;
      const clientHeightOffset = element.clientHeight + topOffset;
      const scrollTo = element.offsetTop - clientHeightOffset;
      window.scrollTo({ top: scrollTo, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const getCommentsData = async () => {
      const data = await fetching("/customersComment");
      setComments(data);
    };
    getCommentsData();
  }, []);

  useEffect(() => {
    const getQuestionsData = async () => {
      const data = await fetching("/customersQuestion");
      setQuestions(data);
    };
    getQuestionsData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (const item of menuData.singleProMenuCategory) {
        const element = document.getElementById(`item-${item.id}`);
        if (!element) continue;

        const elementTop =
          element.getBoundingClientRect().top + scrollPosition - 100;
        const elementBottom = elementTop + element.clientHeight;

        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          setActiveItem(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuData.singleProMenuCategory]);

  return (
    <div className="mt-10 ">
      <ul className="flex justify-between md:justify-start sm:px-10 px-2 border-b sticky top-12 z-10 overflow-x-hidden bg-white lg:top-14">
        {menuData.singleProMenuCategory?.map((item) => (
          <li
            key={item.id}
            className={`py-2 md:px-5 cursor-pointer text-[10px] md:text-xs font-bold text-gray-700${
              item.id === activeItem &&
              "border-b-4 border-b-red-600 text-red-600"
            }`}
            onClick={() => handleMenuItemClick(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <div className="flex px-8">
        <div className="xl:basis-9/12">
          <div id="item-1" className="pt-8 mb-4 flex  border-b-4 pb-10">
            <Comments comments={comments} />
          </div>
          <div id="item-2" className="pt-5 mb-4 border-b-4 pb-10">
            <SingleProMenuAccordion
              title="معرفی"
              description={singleProData.description}
            />
          </div>
          <div id="item-3" className="pt-5 mb-4 border-b-4 pb-10">
            <SingleProMenuAccordion
              title="بررسی تخصصی"
              description={singleProData.description}
            />
          </div>
          <div id="item-4" className="pt-5 mb-4 border-b-4 pb-10">
            <Attributes attributes={singleProData.productsValues} />
          </div>
          <div id="item-5" className="pt-5 mb-4 pb-10">
            <Questions questions={questions} />
          </div>
        </div>
        {parseInt(singleProData?.stock) === 0 ? (
          <div className="basis-3/12 mt-6 hidden xl:block ">
            <EndStockBox singleProData={singleProData} />
          </div>
        ) : (
          <AddToCartStickyBox singleProData={singleProData} />
        )}
      </div>
    </div>
  );
};

export default SingleProStickyMenu;
