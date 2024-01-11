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
      <div className="font-bold pt-3">
        {(Number(product.price) * product.quantity).toLocaleString()}
        تومان
      </div>
    </div>
  );
};

export default CartDescription;
