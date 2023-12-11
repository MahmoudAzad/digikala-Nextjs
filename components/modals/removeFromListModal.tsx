import { useState } from "react";
import { useDispatch } from "react-redux";
import { IProduct } from "@/types/product";
import { HiOutlineTrash, HiOutlineX } from "react-icons/hi";
import { removeFromWishList } from "@/redux/features/wishListSlice";
import { removeFromAmazingInfo } from "@/redux/features/amazingInfoSlice";

interface Props {
  product: IProduct;
  title: string;
}

const RemoveFromListModal: React.FC<Props> = ({ product, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const removeWishListHandler = () => {
    if (title === "علاقه‌مندی‌ها") {
      dispatch(removeFromWishList(product));
    }
    if (title === "اطلاع‌رسانی‌ها") {
      dispatch(removeFromAmazingInfo(product));
    }
    closeModal();
  };

  return (
    <div>
      <div
        onClick={openModal}
        className="flex items-center px-4 py-1 text-gray-500 gap-x-2 cursor-pointer  border-2 rounded-lg "
      >
        <HiOutlineTrash className="text-2xl" />
        حذف
      </div>

      {isOpen && (
        <>
          <div className="fixed left-0 bottom-0 w-full z-50 lg:hidden">
            <div
              className="fixed inset-0 bg-gray-900 opacity-50"
              onClick={closeModal}
            ></div>
            <div className="bg-white p-4 rounded shadow-sm bottom-0 transform transition-all duration-500 ease-in-out">
              <div className="flex items-center justify-between border-b py-2">
                <h2 className=" font-bold mb-4">حذف از لیست</h2>
                <HiOutlineX onClick={closeModal} />
              </div>
              <p className="py-4 border-b text-sm">
                آیا از حذف این کالا از لیست {title} اطمینان دارید؟
              </p>
              <div className="flex gap-x-2">
                <button
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded w-1/2"
                  onClick={removeWishListHandler}
                >
                  حذف کالا
                </button>
                <button
                  className="mt-4 border border-red-500 text-red-500 py-2 px-4 rounded w-1/2"
                  onClick={closeModal}
                >
                  انصراف
                </button>
              </div>
            </div>
          </div>

          <div className="hidden justify-center items-center  fixed inset-0 z-50 lg:flex max-w-96 ">
            <div
              className="fixed inset-0 bg-gray-900 opacity-50"
              onClick={closeModal}
            ></div>
            <div className="bg-white p-4 rounded shadow-sm bottom-0 transform transition-all duration-500 ease-in-out">
              <div className="flex items-center justify-between border-b py-2">
                <h2 className=" font-bold mb-4">حذف از لیست</h2>
                <HiOutlineX onClick={closeModal} />
              </div>
              <p className="py-4 border-b text-sm">
                آیا از حذف این کالا از لیست {title} اطمینان دارید؟
              </p>
              <div className="flex gap-x-2">
                <button
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded w-1/2"
                  onClick={removeWishListHandler}
                >
                  حذف کالا
                </button>
                <button
                  className="mt-4 border border-red-500 text-red-500 py-2 px-4 rounded w-1/2"
                  onClick={closeModal}
                >
                  انصراف
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RemoveFromListModal;
