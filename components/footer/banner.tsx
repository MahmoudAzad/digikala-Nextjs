import { IGallery } from "@/types/category";
import Image from "next/image";

interface Props {
  footerBanner: IGallery[];
}
const Banner: React.FC<Props> = ({ footerBanner }) => {
  return (
    <div className="bg-cyan-900 rounded-xl p-5 lg:flex lg:justify-between lg:items-center mt-10">
      <div className="flex justify-center gap-x-4 ">
        <Image
          src={footerBanner[0].image}
          alt="دیجی کالا"
          width="30"
          height="50"
        />
        <p className="text-white text-lg font-bold">
          دانلود اپلیکیشن دیجی‌کالا
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-3 pt-5 cursor-pointer lg:pt-0">
        {footerBanner?.slice(1, 4).map((item, index) => (
          <Image
            key={index}
            src={item.image}
            alt="دیجی کالا"
            width={130}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
