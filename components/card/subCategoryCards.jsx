import Image from "next/image";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const SubCategoryCards = ({ categories }) => {
  return (
    <div className="mx-32 my-8 text-center grid grid-cols-8 ">
      {categories.map((category) => (
        <div className="flex flex-col items-center cursor-pointer">
          <Image src={category.image} width={50} height={50} />
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
