import { IProduct } from "@/types/product";
import AddToNoticesBtn from "../buttons/addToNoticesBtn";
interface Props {
  singleProData: IProduct;
}

const EndStockBox: React.FC<Props> = ({ singleProData }) => {
  return (
    <div className="sticky top-32">
      <div className="basis-1/3 border-2 bg-slate-100 rounded-xl mr-3 p-5">
        <div className="flex items-center mb-5">
          <div className="border-t-2 flex-grow"></div>
          <span className="px-2 text-gray-500 font-bold">ناموجود</span>
          <div className="border-t-2 flex-grow"></div>
        </div>
        <AddToNoticesBtn singleProData={singleProData} />
      </div>
    </div>
  );
};

export default EndStockBox;
