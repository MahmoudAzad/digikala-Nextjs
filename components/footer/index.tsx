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
import { fetchingdb } from "@/services/services";

interface Props {
  footerData: IFooter[];
}

const getData = async () => {
  const data = await fetchingdb();

  return {
    footer: data.footer,
  };
};

const Footer = async () => {
  const { footer } = await getData();
  const categories = footer[0].categories;
  const footerIcons = footer[1].icons;
  const footerBrands = footer[2].brands;
  const footerBanner = footer[3].banner;
  const footerSymbols = footer[4].symbols;

  return (
    <div className="lg:block">
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
