import { IProduct } from "@/types/product";
import AddToCartBtn from "../buttons/addToCartBtn";
import AddToNoticesBtn from "../buttons/addToNoticesBtn";
interface Props {
  singleProData: IProduct;
}
const AddToCartFixBox: React.FC<Props> = ({ singleProData }) => {
  return (
    <>
      {parseInt(singleProData?.stock) === 0 ? (
        <div className="bottom-0 z-20 fixed w-full p-3 bg-white border-t-2 shadow-2xl">
          <AddToNoticesBtn singleProData={singleProData} />
        </div>
      ) : (
        <div className="bottom-0 z-20 fixed w-full p-3 bg-white border-t-2 shadow-2xl">
          {parseInt(singleProData?.stock) < 5 && (
            <p className="text-red-500 text-xs font-bold pb-2">
              تنها {singleProData.stock} عدد در انبار دیجی‌کالا باقی مانده
            </p>
          )}
          <div className="flex justify-between items-end">
            <AddToCartBtn product={singleProData} />
            <p className="w-full text-left">{singleProData.price} تومان</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AddToCartFixBox;
