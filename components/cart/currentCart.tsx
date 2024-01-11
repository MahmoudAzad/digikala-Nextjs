import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddToCartBtn from "@/components/buttons/addToCartBtn";
import EmptyPage from "@/components/emptyPage";
import MobileMenu from "@/components/menu/mobileMenu";
import SimilarProductsSwiper from "@/components/swipers/similarProductsSwiper";
import { ICartRootState } from "@/types/cart";
import { IProduct } from "@/types/product";
import { TbChevronLeft } from "react-icons/tb";
import AddToNextCartBtn from "../buttons/addToNextCartBtn";
import CartDescription from "./sections/cartDescription";
import CalculateTotalCartLg from "./sections/calculateTotalCartLg";
import CalculateTotalCartSm from "./sections/calculateTotalCartSm";

interface Props {
  cart: IProduct[];
}

const CurrentCart: React.FC<Props> = ({ cart }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const getTotalQty = useSelector(
    (state: ICartRootState) => state.cart.totalQuantity
  );
  const getCartTotal = useSelector(
    (state: ICartRootState) => state.cart.totalPrice
  );

  useEffect(() => {
    setTotalQuantity(getTotalQty);
    setCartTotal(getCartTotal);
  }, [getTotalQty, getCartTotal]);

  return (
    <>
      {totalQuantity ? (
        <>
          <div className=" lg:flex lg:gap-x-2 lg:items-start ">
            <div className="p-4 lg:border lg:p-4 lg:rounded-lg lg:w-2/3 ">
              <p className="text-sm font-bold">سبد خرید شما</p>
              <p className="text-xs text-gray-700 pt-2">{totalQuantity} کالا</p>
              {cart?.map((item) => (
                <div key={item.id} className="border-b">
                  <div className="flex gap-x-2 pt-10">
                    <div className="w-2/4  flex flex-col justify-center items-center sm:w-1/4">
                      <Image
                        src={item.thumbnail}
                        alt={item.name}
                        width="100"
                        height="100"
                        className=""
                      />
                      <AddToCartBtn product={item} />
                    </div>
                    <CartDescription product={item} />
                  </div>
                  <div className="flex items-center justify-end text-sky-500 gap-x-2 py-5 ">
                    <AddToNextCartBtn product={item} />
                    <TbChevronLeft className="text-lg" />
                  </div>
                </div>
              ))}
            </div>

            <CalculateTotalCartLg
              totalQuantity={totalQuantity}
              cartTotal={cartTotal}
              cart={cart}
            />
          </div>
          <SimilarProductsSwiper />
          <CalculateTotalCartSm cartTotal={cartTotal} />
          <MobileMenu />
        </>
      ) : (
        <EmptyPage
          imgSrc="https://www.digikala.com/statics/img/svg/empty-cart.svg"
          title="سبد خرید"
        />
      )}
    </>
  );
};

export default CurrentCart;
