import { IProduct } from "@/types/product";
import { useEffect, useState } from "react";

interface Props {
  cart: IProduct[] | undefined;
}

export const useRealPrice: React.FC<Props> = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let sum = 0;
    cart?.forEach((product) => {
      const price = parseInt(product.price);
      const qty = product.quantity;
      const offer = parseInt(product.offer);
      const originalPrice = (price / (1 - offer / 100)) * qty;
      sum += originalPrice;
    });
    setTotalPrice(Math.floor(sum));
  }, [cart]);

  return totalPrice;
};

export default useRealPrice;
