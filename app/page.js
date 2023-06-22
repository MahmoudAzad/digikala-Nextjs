import CategoriesCards from "@/components/card/categoriesCards";
import DoubleCards from "@/components/card/doubleCards";
import QuadrupleCards from "@/components/card/quadrupleCards";
import SubCategoryCards from "@/components/card/subCategoryCards";
import Menu from "@/components/menu/menu";
import Navbar from "@/components/navbar";
import AmazingSwiper from "@/components/swiper/amazingSwiper";
import HeadSwiper from "@/components/swiper/headSwiper";
import PopularBrandsSwiper from "@/components/swiper/popularBrandsSwiper";
import SuggestionSwiper from "@/components/swiper/suggestionSwiper";

import {
  getBlogData,
  getBrand,
  getCategory,
  getDigikalaSubCategories,
  getDoubleCards,
  getHomePageDetail,
  getMainCategory,
  getProduct,
} from "@/services/services";

const getData = async () => {
  const product = (await getProduct()).data;
  const mainCategory = (await getMainCategory()).data;
  const category = (await getCategory()).data;
  const homePageDetail = (await getHomePageDetail()).data;
  const digikalaSubCategories = (await getDigikalaSubCategories()).data;
  const doubleCards = (await getDoubleCards()).data;
  const brands = (await getBrand()).data;
  const blogData = (await getBlogData()).data;

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
      <Navbar />
      <Menu />
      <HeadSwiper carousels={headerCarousels} />
      <SubCategoryCards categories={digikalaSubCategories?.slice(0, 7)} />

      <div className="xl:mx-28">
        <AmazingSwiper products={amazingProducts} color={amazingSwiperColor} />
        <QuadrupleCards cards={quadrupleCards} />
        <CategoriesCards cards={mainCategory} />
        <DoubleCards cards={firstDoubleCards} />
        <SuggestionSwiper allProducts={product} />
        <PopularBrandsSwiper brands={brands} />
      </div>
    </>
  );
};

export default Home;
