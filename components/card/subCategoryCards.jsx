import Image from "next/image";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const SubCategoryCards = ({ categories }) => {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-8 lg:mx-28 my-8 gap-y-4 text-center">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center cursor-pointer">
          <Image
            alt={category.name}
            src={category.image}
            width={50}
            height={50}
          />
          <p className="text-xs pt-2">{category.name}</p>
        </div>
      ))}
      <div className="flex flex-col items-center">
        <div className="bg-zinc-300 w-12 h-12 rounded-full relative ">
          <HiOutlineDotsHorizontal className="absolute text-center text-2xl mr-3 mt-3 text-zinc-600" />
        </div>
        <p className="text-xs pt-2">بیشتر</p>
      </div>
    </div>
  );
};

export default SubCategoryCards;
