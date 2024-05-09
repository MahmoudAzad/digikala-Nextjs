import { useState } from "react";
import {
  TbBellRinging,
  TbChartDots2,
  TbDotsVertical,
  TbGitCompare,
  TbPlaylistAdd,
} from "react-icons/tb";

const MoreOptionsProModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      <div
        onClick={openModal}
        className="flex items-center px-4 py-1 text-gray-500 gap-x-2 cursor-pointer  border-2 rounded-lg "
      >
        <TbDotsVertical />
      </div>

      {isOpen && (
        <div className="fixed left-0 bottom-0 w-full z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-gray-900 opacity-50"
            onClick={closeModal}
          ></div>
          <div className="bg-white p-4 rounded shadow-sm bottom-0 transform transition-all duration-500 ease-in-out">
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center gap-x-2 border-b">
                <TbChartDots2 />
                <p>نمودار قیمت</p>
              </div>
              <div className="flex items-center gap-x-2">
                <TbGitCompare />
                <p>مقایسه کالا</p>
              </div>
              <div className="flex items-center gap-x-2">
                <TbGitCompare />
                <p>به اشتراک‌گذاری کالا</p>
              </div>
              <div className="flex items-center gap-x-2">
                <TbPlaylistAdd />
                <p>افزودن به لیست</p>
              </div>
              <div className="flex items-center gap-x-2">
                <TbBellRinging />
                <p>اطلاع‌رسانی شگفت‌انگیز</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreOptionsProModal;
