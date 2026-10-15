import { IProduct } from "@/types/product";
import { TbBuildingStore, TbClockHour4, TbTruck } from "react-icons/tb";
interface Props {
  product: IProduct;
}
const CartDescription: React.FC<Props> = ({ product }) => {
  return (
    <div className="w-2/4 sm:w-full">
      <p className="text-xs font-bold line-clamp-3 lg:text-sm">
        {product.name}
      </p>
      <div className="flex items-center gap-x-1 py-1 pt-3">
        <TbBuildingStore className="text-sky-400 text-lg" />
        <p className="text-xs font-bold text-gray-600">
          موجود در انبار دیجی‌کالا
        </p>
      </div>
      <div className="flex items-center gap-x-1 py-1">
        <TbTruck className="text-red-600 text-lg scale-x-[-1]" />
        <p className="text-xs font-bold text-gray-600">ارسال دیجی‌کالا</p>
      </div>
      <div className="flex items-center gap-x-1 py-1">
        <TbClockHour4 className="text-blue-700 text-lg" />
        <p className="text-xs font-bold text-gray-600">ارسال امروز</p>
      </div>
      {/* <div className="text-left">
        <div className="font-bold pt-3">
          {(Number(product.price) * product.quantity).toLocaleString()} تومان
        </div>
      </div> */}

      <div className="text-left">
        <span className="bg-[#ef394e]  text-xs text-white rounded-xl  py-0 px-1">
          {product.offer}%
        </span>

        <del className="text-xs lg:text-sm text-gray-400 ml-2 mt-1">
          {Math.round(
            Number(product.price) / (1 - Number(product.offer) / 100),
          ).toLocaleString()}
        </del>

        <p className="font-bold pt-3 px-2">
          {Number(product.price).toLocaleString()} تومان
        </p>
      </div>
    </div>
  );
};

export default CartDescription;
