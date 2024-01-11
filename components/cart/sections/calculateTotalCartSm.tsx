interface Props {
  cartTotal: number;
}
const CalculateTotalCartSm: React.FC<Props> = ({ cartTotal }) => {
  return (
    <div className="flex justify-between items-center px-5 py-4 fixed z-49 bottom-14 bg-white w-full border-t border-2 shadow-2xl lg:hidden mt-10">
      <p className="bg-red-500 text-white w-1/2 p-3 rounded-lg text-center">
        ثبت سفارش
      </p>
      <div className="pe-5">
        <p className="text-xs">جمع سبد خرید</p>
        <p>{cartTotal.toLocaleString()} تومان</p>
      </div>
    </div>
  );
};

export default CalculateTotalCartSm;
