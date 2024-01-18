import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { TbCopy, TbShare, TbX } from "react-icons/tb";

const ShareLinkLgModal: React.FC = () => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [pathCopied, setPathCopied] = useState(false);
  const [pagePath, setPagePath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setPagePath(pathname);
  }, [pathname]);

  const handleCopy = () => {
    navigator.clipboard.writeText(pagePath);
    setPathCopied(true);

    setTimeout(() => {
      setPathCopied(false);
    }, 5000);
  };

  const closeModal = () => {
    setShowShareModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div>
        <div onClick={() => setShowShareModal(true)}>
          <TbShare />
          <span className="pointer-events-none text-white text-xs font-bold p-3 rounded-md absolute w-max right-0 top-0 mr-7 opacity-0 group-hover:opacity-100 bg-slate-700">
            به اشتراک‌گذاری کالا
          </span>
        </div>
        {showShareModal && (
          <div className="hidden justify-center items-center fixed inset-0 z-50 lg:flex w-1/3 mx-auto ">
            <div
              className="fixed inset-0 bg-gray-900 opacity-50"
              onClick={closeModal}
            ></div>
            <div className="bg-white p-4 rounded-lg shadow-sm bottom-0 transform transition-all duration-500 ease-in-out  w-full">
              <div className="flex justify-between items-center border-b pb-3">
                <p className="text-base font-bold">اشتراک‌گذاری</p>
                <TbX onClick={closeModal} />
              </div>
              <p className="py-3 text-base">
                این کالا را با دوستان خود به اشتراک بگذارید!
              </p>
              <div
                onClick={handleCopy}
                className="border-2  flex justify-center items-center rounded-lg py-2 cursor-pointer"
              >
                <TbCopy />
                {pathCopied ? (
                  <p className="text-base">کپی شد</p>
                ) : (
                  <p className="text-base">کپی کردن لینک</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShareLinkLgModal;
