import UsersScoreBox from "@/components/box/usersScoreBox";
import { convertMiladiToShamsi } from "@/hooks/useConvertMiladiToShamsi";
import { IComment } from "@/types/comment";
import { HiDotsVertical, HiOutlineSortDescending } from "react-icons/hi";

interface Props {
  comments: IComment[] | undefined;
}
const Comments: React.FC<Props> = ({ comments }) => {
  return (
    <>
      <UsersScoreBox />
      <div className="w-full">
        <div className="hidden lg:flex justify-between mt-16 border-b-2 pb-4">
          <div className="flex items-center gap-x-4 text-xs">
            <HiOutlineSortDescending className="text-2xl" />
            <p className="font-bold">مرتب سازی:</p>
            <p>جدیدترین</p>
            <p>دیدگاه خریداران</p>
            <p>مفیدترین</p>
          </div>

          <p className="text-xs text-gray-600">۵۷ دیدگاه</p>
        </div>
        <p className="lg:hidden font-bold pb-5">دیدگاه‌ها</p>
        <div className=" sm:grid grid-cols-2 md:grid-cols-3 lg:hidden">
          {comments?.map((comment) => (
            <div
              key={comment.id}
              className="border rounded-lg px-5 py-5 gap-y-5 flex flex-col justify-between grid-row-3"
            >
              <p className="line-clamp-1  font-bold">{comment.title}</p>
              <p className="text-xs font-bold  line-clamp-3 mt-3">
                {comment.description}
              </p>
              <div className="flex gap-x-4 text-xs text-gray-600 font-bold">
                <p>{convertMiladiToShamsi(comment.createdAt)}</p>
                <p>کاربر دیجیکالا</p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          {comments?.map((comment) => (
            <div className="hidden lg:block border-b py-7" key={comment.id}>
              <div className="flex justify-between items-center py-2 ">
                <div className="flex items-center gap-x-2">
                  <p className="bg-green-600 text-white px-2 text-sm rounded-md">
                    {comment.rate}
                  </p>
                  <p className="font-bold">{comment.title}</p>
                </div>
                <HiDotsVertical className="text-gray-500 text-lg cursor-pointer" />
              </div>
              <div className="flex text-gray-500 gap-x-2 text-xs mr-8 border-b pb-3">
                <p className="text-gray-600 text-xs"></p>
                <p>{comment.name}</p>
              </div>
              <p className="mr-8 pt-4 text-sm">{comment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Comments;
