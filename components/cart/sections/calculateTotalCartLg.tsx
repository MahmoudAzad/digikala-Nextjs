import useRealPrice from "@/hooks/useCalculationRealPrice";
import { IProduct } from "@/types/product";
import { useEffect, useState } from "react";
import { TbPercentage } from "react-icons/tb";

interface Props {
  totalQuantity: number;
  cartTotal: number;
  cart: IProduct[];
}

const CalculateTotalCartLg: React.FC<Props> = ({
  totalQuantity,
  cartTotal,
  cart,
}) => {
  const [totalRealPrice, setTotalRealPrice] = useState(0);
  const getTotalRealPrice = useRealPrice({ cart });
  const discountPercent = Math.floor(
    ((totalRealPrice - cartTotal) / totalRealPrice) * 100
  );

  useEffect(() => {
    setTotalRealPrice(Number(getTotalRealPrice));
  }, [getTotalRealPrice]);

  return (
    <div className="hidden lg:block w-1/3 border rounded-lg p-5">
      <div className="flex justify-between px-2 font-bold text-gray-500">
        <p className="text-sm">قیمت کالاها ({totalQuantity})</p>
        <p>{totalRealPrice.toLocaleString()} تومان</p>
      </div>
      <div className="flex justify-between px-2 pt-4 font-bold">
        <p className="text-sm">جمع سبد خرید</p>
        <p>{cartTotal.toLocaleString()} تومان</p>
      </div>
      {totalRealPrice - cartTotal > 0 && (
        <div className="flex justify-between px-2 py-4 font-bold text-red-600">
          <p className="text-sm">سود شما از خرید</p>
          <div className="flex gap-x-1">
            <div className="flex items-center">
              {discountPercent > 0 && (
                <>
                  (<TbPercentage />
                  <p>{discountPercent}</p>)
                </>
              )}
            </div>
            <p>{(totalRealPrice - cartTotal).toLocaleString()} تومان</p>
          </div>
        </div>
      )}

      <p className="bg-red-500 text-white p-3 rounded-lg text-center">
        تایید و تکمیل سفارش
      </p>
    </div>
  );
};

export default CalculateTotalCartLg;
