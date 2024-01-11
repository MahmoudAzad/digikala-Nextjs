import { removeFromCart } from "@/redux/features/cartSlice";
import { addToNextBuy } from "@/redux/features/nextBuySlice";
import { IProduct } from "@/types/product";
import { useDispatch } from "react-redux";
interface Props {
  product: IProduct;
}
const AddToNextCartBtn: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const addToNextBuyHandler = (product: IProduct) => {
    dispatch(removeFromCart(product));
    dispatch(addToNextBuy(product));
  };
  return (
    <button
      onClick={() => addToNextBuyHandler(product)}
      className="text-xs font-bold"
    >
      انتقال به خرید بعدی
    </button>
  );
};

export default AddToNextCartBtn;
