import {
  FaRegUser,
  FaAngleLeft,
  FaCaretDown,
  FaShoppingBag,
  FaHeart,
} from "react-icons/fa";
const UserDashbordBox = () => {
  return (
    <div className="flex flex-col">
      <div className="relative group">
        <div className="text-center flex p-5">
          <FaRegUser className="text-xl" />
          <FaCaretDown />
        </div>

        <div className="absolute z-10 hidden bg-grey-200 group-hover:block w-56 left-0">
          <div className="px-2 pt-2 pb-4 bg-white border border-gray-300 rounded-lg shadow-2xl ">
            <div className="dropdown-menu">
              <ul>
                <li className="flex justify-between items-center border-b border-gray-300 py-2">
                  <p>کاربر دیجیکالا</p>
                  <FaAngleLeft />
                </li>
                <li className="flex items-center gap-x-2 border-b border-gray-300 py-2">
                  <FaShoppingBag />
                  <p>سفارش ها</p>
                </li>
                <li className="flex items-center gap-x-2  py-2">
                  <FaHeart />
                  <p>لیست ها</p>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashbordBox;
