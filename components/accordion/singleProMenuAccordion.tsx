import { useState } from "react";
import { HiChevronLeft } from "react-icons/hi";

interface Props {
  title: string;
  description: string;
}

const SingleProMenuAccordion: React.FC<Props> = ({ title, description }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <span className="pb-2 mb-5 md:border-b-4 border-red-600 ">{title}</span>
      <p
        className={`mt-5 text-gray-700  text-xs leading-8 md:text-sm md:leading-8 ${
          showMore ? "" : "line-clamp-3"
        }`}
      >
        {description}
      </p>
      <div className="flex cursor-pointer text-cyan-600 text-sm items-center mt-3">
        <p onClick={() => setShowMore(!showMore)}>بیشتر</p>
        <HiChevronLeft />
      </div>
    </>
  );
};

export default SingleProMenuAccordion;
