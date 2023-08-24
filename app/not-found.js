import Image from "next/image";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";

const getData = async () => {
  const data = await fetch("https://digikala-d567.onrender.com/notFound");
  return data.json();
};

const notFound = async () => {
  const notFoundData = await getData();
  return (
    <div className="flex flex-col items-center gap-y-5 mt-10">
      <h1 className="text-lg font-bold">صفحه‌ای که دنبال آن بودید پیدا نشد!</h1>
      <Link
        href="/"
        className="text-xs font-bold text-blue-500 flex items-center"
      >
        صفحه اصلی
        <HiChevronLeft />
      </Link>
      <Image
        src={notFoundData[0].image}
        width="500"
        height="500"
        alt="not-found"
      />
    </div>
  );
};

export default notFound;
