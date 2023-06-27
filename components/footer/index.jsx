import Image from "next/image";
import digikalaFooterLogo from "../../public/assets/svg/digikalaFooterLogo.svg";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = ({ footerData }) => {
  const categories = footerData[0].categories;
  const footerIcons = footerData[1].icons;
  return (
    <div className=" border-t mt-16 px-5 py-10">
      <Image src={digikalaFooterLogo} width={100} height={100} />
      <div className="flex justify-between mt-5">
        <div className="flex gap-x-10 text-xs text-gray-800">
          <p className="">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
          <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
        </div>
        <button>up</button>
      </div>
      <div className="flex justify-around items-center mt-10">
        {footerIcons.map((icon) => (
          <div className="flex flex-col justify-center items-center  gap-y-1">
            <Image src={icon.image} width={50} height={50} />
            <p className="text-xs">{icon.name}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 mt-10">
        {categories.map((category) => (
          <div key={category.id}>
            <h2 className="font-bold mb-2">{category.name}</h2>
            {category.subCategory.map((sub) => (
              <p className="text-gray-600 text-sm py-2 cursor-pointer">
                {sub.name}
              </p>
            ))}
          </div>
        ))}
        <div className="text-right">
          <h2 className="mb-2">همراه ما باشید!</h2>
          <div className="grid grid-cols-4 text-4xl text-gray-600 py-2">
            <AiOutlineInstagram />
            <AiOutlineTwitter />
            <AiFillLinkedin />
            <AiOutlineWhatsApp />
          </div>
          <p className="pt-6">
            با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
