import Image from "next/image";
import CategoriesCards from "@/components/cards/categoriesCards";
import DoubleCards from "@/components/cards/doubleCards";
import QuadrupleCards from "@/components/cards/quadrupleCards";
import SubCategoryCards from "@/components/cards/subCategoryCards";
import AmazingSwiper from "@/components/swipers/amazingSwiper";
import HeadSwiper from "@/components/swipers/headSwiper";
import PopularBrandsSwiper from "@/components/swipers/popularBrandsSwiper";
import SuggestionSwiper from "@/components/swipers/suggestionSwiper";
import BasedOnUserViewsCards from "@/components/cards/basedOnUserViewsCards";
import { fetchingdb } from "@/services/services";
import { IProduct } from "@/types/product";
import { IHomePageDetail } from "@/types/homePageDetail";
import MobileMenu from "@/components/menu/mobileMenu";

const getData = async () => {
  const data = await fetchingdb();

  return {
    product: data.product,
    mainCategory: data.mainCategory,
    category: data.category,
    homePageDetail: data.homePageDetail,
    digikalaSubCategories: data.DigikalaSubCategories,
    doubleCards: data.dobleCards,
    brands: data.brand,
  };
};

const Home = async () => {
  const {
    product,
    mainCategory,
    category,
    homePageDetail,
    digikalaSubCategories,
    doubleCards,
    brands,
  } = await getData();

  const amazingProducts = product
    ?.filter((product: IProduct) => product.offer)
    ?.map((product: IProduct) => product);

  const amazingSwiperColor = homePageDetail?.map(
    (item: any) => item.AmazingOfferSliderColor,
  );

  const headerCarousels = homePageDetail?.map(
    (item: IHomePageDetail) => item.carousel,
  );

  const quadrupleCards = homePageDetail?.map(
    (item: IHomePageDetail) => item.banner,
  );
  const firstDoubleCards = doubleCards?.slice(0, 2);
  const secoundDoubleCards = doubleCards?.slice(2, 4);
  return (
    <>
      <HeadSwiper carousels={headerCarousels} />
      <SubCategoryCards categories={digikalaSubCategories?.slice(0, 7)} />

      <div className="xl:mx-28">
        <AmazingSwiper products={amazingProducts} color={amazingSwiperColor} />
        <QuadrupleCards cards={quadrupleCards[0]} />
        <CategoriesCards mainCategory={mainCategory} />
        <DoubleCards cards={firstDoubleCards} />
        <SuggestionSwiper allProducts={product} />
        <PopularBrandsSwiper brands={brands} />
        <DoubleCards cards={secoundDoubleCards} />
        <BasedOnUserViewsCards categories={category} products={product} />
        <Image
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/747327100245e765435fa0ca25adcfab080cb12a_1687550226.jpg?x-oss-process=image/quality,q_95/format,webp"
          width="2000"
          height="1000"
          className="rounded-2xl mt-10"
          alt="دیجی‌کالا"
        />
        <MobileMenu />
      </div>
    </>
  );
};

export default Home;
