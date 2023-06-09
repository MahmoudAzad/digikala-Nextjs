"use client";

import Image from "next/image";
import digikalaFooterLogo from "../../public/assets/svg/digikalaFooterLogo.svg";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiOutlineUp,
} from "react-icons/ai";

const Footer = ({ footerData }) => {
  const categories = footerData[0].categories;
  const footerIcons = footerData[1].icons;
  const footerBrands = footerData[2].brands;
  const footerBanner = footerData[3].banner;
  const footerSymbols = footerData[4].symbols;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className=" border-t mt-12 px-5 py-10">
        <Image src={digikalaFooterLogo} width={100} height={100} />
        <div className="flex justify-between items-center mt-5">
          <div className="lg:flex gap-x-10 text-xs text-gray-800">
            <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
            <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
          </div>
          <div
            onClick={scrollToTop}
            className="border rounded-xl p-3 cursor-pointer flex gap-x-3 text-xs text-gray-800"
          >
            <p>بازگشت به بالا</p>
            <AiOutlineUp />
          </div>
        </div>
        <div className="hidden lg:flex justify-around items-center mt-10 flex-wrap">
          {footerIcons.map((icon) => (
            <div className="flex flex-col justify-center items-center  gap-y-1">
              <Image src={icon.image} width={50} height={50} />
              <p className="text-xs">{icon.name}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 mt-5 gap-y-4 lg:grid-cols-4 lg:mt-10">
          {categories.map((category) => (
            <div key={category.id}>
              <h2 className="font-bold mb-2 text-sm lg:text-lg">
                {category.name}
              </h2>
              {category.subCategory.map((sub) => (
                <p className="text-gray-600 text-xs lg:text-sm py-2 cursor-pointer">
                  {sub.name}
                </p>
              ))}
            </div>
          ))}
          <div className="flex justify-between items-center col-span-2 lg:block lg:col-span-1">
            <h2 className="mb-2 font-bold">همراه ما باشید!</h2>
            <div className="grid grid-cols-4 gap-x-4 text-4xl text-gray-600 py-2">
              <AiOutlineInstagram />
              <AiOutlineTwitter />
              <AiFillLinkedin />
              <AiOutlineWhatsApp />
            </div>
          </div>
        </div>
        <div className="bg-cyan-900 rounded-xl p-5 lg:flex lg:justify-between lg:items-center mt-10">
          <div className="flex justify-center gap-x-4 ">
            <Image src={footerBanner[0].image} width="30" height="50" />
            <p className="text-white text-lg font-bold">
              دانلود اپلیکیشن دیجی‌کالا
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-3 pt-5 cursor-pointer lg:pt-0">
            {footerBanner.slice(1, 4).map((item) => (
              <Image src={item.image} width={130} height={100} />
            ))}
          </div>
        </div>
        <div className="lg:grid-cols-3 grid gap-x-16 mt-10 py-10 border-t ">
          <div className="text-slate-700 pb-10 lg:col-span-2">
            <h4 className="text-xl font-bold ">
              فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین.
            </h4>
            <p className="mt-3 text-xs leading-6">
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
              متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست
              مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی
              که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و
              توانسته از این طریق مشتریان ثابت خود را داشته باشد. تقریبا می‌توان
              گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان خود در سراسر کشور
              فراهم نکرده باشد. شما می‌توانید در تمامی روزهای هفته و تمامی شبانه
              روز یا در روزهای خاصی مثل حراج شگفت انگیز دیجی‌کالا که محصولات
              دارای تخفیف عالی می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز
              و محدوده زمانی مناسب خود، درب منزل تحویل بگیرید.
            </p>
          </div>
          <div className="flex justify-center items-center lg:justify-end">
            {footerSymbols.map((symbol) => (
              <div key={symbol.id} className="border-2 rounded-xl mx-2">
                <Image
                  src={symbol.image}
                  width={70}
                  height={70}
                  className="w-24 h-24 p-3"
                />
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-xs pt-10 text-slate-700 border-t ">
          برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
          کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
          آنلاین دیجی‌کالا) است.
        </p>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-9 bg-zinc-200">
        {footerBrands.map((brand) => (
          <div key={brand.id} className="py-5 place-self-center">
            <Image
              src={brand.image}
              width={100}
              height={100}
              className="place-self-center"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Footer;
