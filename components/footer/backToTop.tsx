"use client";

import { AiOutlineUp } from "react-icons/ai";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const BackToTop = () => {
  return (
    <div
      onClick={scrollToTop}
      className="border rounded-xl p-3 cursor-pointer flex gap-x-3 text-xs text-gray-800"
    >
      <p>بازگشت به بالا</p>
      <AiOutlineUp />
    </div>
  );
};

export default BackToTop;
