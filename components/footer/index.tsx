import Image from "next/image";
import digikalaFooterLogo from "../../public/assets/svg/digikalaFooterLogo.svg";
import { IFooter } from "@/types/footer";
import BackToTop from "./footerSections/backToTop";
import IconCards from "./footerSections/iconCards";
import CategoriesList from "./footerSections/categoriesList";
import SocialNetworks from "./footerSections/socialNetworks";
import Banner from "./footerSections/banner";
import E_NamadContent from "./footerSections/e_namadContent";
import Brands from "./footerSections/brands";

interface Props {
  footerData: IFooter[];
}

const Footer: React.FC<Props> = ({ footerData }) => {
  const categories = footerData[0].categories;
  const footerIcons = footerData[1].icons;
  const footerBrands = footerData[2].brands;
  const footerBanner = footerData[3].banner;
  const footerSymbols = footerData[4].symbols;

  return (
    <div className="hidden lg:block">
      <div className="border-t px-5 py-10">
        <Image
          src={digikalaFooterLogo}
          alt="دیجی کالا"
          width={100}
          height={100}
        />
        <div className="flex justify-between items-center mt-5">
          <div className="lg:flex gap-x-10 text-xs text-gray-800">
            <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
            <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
          </div>
          <BackToTop />
        </div>
        <IconCards footerIcons={footerIcons} />
        <div className="grid grid-cols-2 mt-5 gap-y-4 lg:grid-cols-4 lg:mt-10">
          <CategoriesList categories={categories} />
          <SocialNetworks />
        </div>
        <Banner footerBanner={footerBanner} />
        <E_NamadContent footerSymbols={footerSymbols} />
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-9 bg-zinc-200">
        <Brands footerBrands={footerBrands} />
      </div>
    </div>
  );
};
export default Footer;
