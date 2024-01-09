import Image from "next/image";

interface Props {
  imgSrc: string;
  title: string;
}

const EmptyPage: React.FC<Props> = ({ imgSrc, title }) => {
  return (
    <div className="border flex flex-col justify-center items-center gap-y-5 m-5 rounded-lg py-5">
      <Image
        src={imgSrc}
        alt="سبد خرید خالی"
        width="300"
        height="300"
        className="w-1/5"
      />
      <p className="text-lg font-bold">{title} شما خالی است!</p>
      <p className="text-xs ">
        می‌توانید برای مشاهده محصولات بیشتر به صفحه اصلی بروید:
      </p>
    </div>
  );
};

export default EmptyPage;
