import CategoriesCards from "@/components/card/categoriesCards";
import DoubleCards from "@/components/card/doubleCards";
import QuadrupleCards from "@/components/card/quadrupleCards";
import SubCategoryCards from "@/components/card/subCategoryCards";
import AmazingSwiper from "@/components/swiper/amazingSwiper";
import HeadSwiper from "@/components/swiper/headSwiper";
import PopularBrandsSwiper from "@/components/swiper/popularBrandsSwiper";
import SuggestionSwiper from "@/components/swiper/suggestionSwiper";
import BasedOnUserViewsCards from "@/components/card/basedOnUserViewsCards";

import { fetching } from "@/services/services";
import Image from "next/image";

const getData = async () => {
  const product = await fetching("/product");
  const mainCategory = await fetching("/mainCategory");
  const category = await fetching("/category");
  const homePageDetail = await fetching("/homePageDetail");
  const digikalaSubCategories = await fetching("/DigikalaSubCategories");
  const doubleCards = await fetching("/dobleCards");
  const brands = await fetching("/brand");
  const blogData = await fetching("/blog");

  return {
    product,
    mainCategory,
    category,
    homePageDetail,
    digikalaSubCategories,
    doubleCards,
    brands,
    blogData,
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
    blogData,
  } = await getData();

  const amazingProducts = product
    ?.filter((product) => product.offer > 0)
    ?.map((product) => product)
    .sort((a, b) => b.sellCount - a.sellCount);

  const amazingSwiperColor = homePageDetail?.map(
    (item) => item.AmazingOfferSliderColor
  );

  const headerCarousels = homePageDetail?.map((item) => item.carousel);
  const quadrupleCards = homePageDetail?.map((item) => item.banner);
  const firstDoubleCards = doubleCards?.slice(0, 2);
  const secoundDoubleCards = doubleCards?.slice(2, 4);
  return (
    <>
      <HeadSwiper carousels={headerCarousels} />
      <SubCategoryCards categories={digikalaSubCategories?.slice(0, 7)} />

      <div className="xl:mx-28">
        <AmazingSwiper products={amazingProducts} color={amazingSwiperColor} />
        <QuadrupleCards cards={quadrupleCards} />
        <CategoriesCards cards={mainCategory} />
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
      </div>
    </>
  );
};

export default Home;
