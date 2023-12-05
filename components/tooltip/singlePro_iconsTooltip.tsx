"use client";
import { IconType } from "react-icons";
import { singleProTooltips } from "./data";
import { useDispatch } from "react-redux";
import { addToWishList } from "@/redux/features/wishListSlice";
import { IProduct } from "@/types/product";

interface Props {
  product: IProduct;
}
interface ITooltip {
  id: number;
  icon: IconType;
  name: string;
  slug: string;
}
const SinglePro_iconsTooltip: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  const clickHandler = (tooltip: ITooltip) => {
    if (tooltip.slug === "addToFavorites") {
      dispatch(addToWishList(product));
    }
  };

  return (
    <>
      {singleProTooltips.map((tooltip) => (
        <div
          className="group relative w-max flex items-center gap-x-2"
          onClick={() => clickHandler(tooltip)}
          key={tooltip.id}
        >
          <tooltip.icon className="cursor-pointer" />
          <span className="pointer-events-none text-white text-xs font-bold p-3 rounded-md absolute w-max right-0 top-0 mr-7 opacity-0 group-hover:opacity-100 bg-slate-700">
            {tooltip.name}
          </span>
        </div>
      ))}
    </>
  );
};

export default SinglePro_iconsTooltip;
