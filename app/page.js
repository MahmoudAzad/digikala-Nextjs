import SubCategoryCards from "@/components/card/subCategoryCards";
import Menu from "@/components/menu/menu";
import Navbar from "@/components/navbar";
import AmazingSwiper from "@/components/swiper/amazingSwiper";
import HeaderSwiper from "@/components/swiper/HeaderSwiper";

import {
  getBlogData,
  getBrand,
  getCategory,
  getDigikalaSubCategories,
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
  const brands = (await getBrand()).data;
  const blogData = (await getBlogData()).data;

  return {
    product,
    mainCategory,
    category,
    homePageDetail,
    digikalaSubCategories,
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
    brands,
    blogData,
  } = await getData();

  console.log("home => ", homePageDetail);

  const amazingProducts = product
    ?.filter((product) => product.offer > 0)
    ?.map((product) => product)
    .sort((a, b) => b.sellCount - a.sellCount);

  const amazingSwiperColor = homePageDetail?.map(
    (item) => item.AmazingOfferSliderColor
  );

  const headerCarousels = homePageDetail?.map((item) => item.carousel);

  console.log("headerCarousels => ", headerCarousels);
  return (
    <>
      <Navbar />
      <Menu />
      <HeaderSwiper carousels={headerCarousels} />
      <SubCategoryCards categories={digikalaSubCategories?.slice(0, 7)} />
      <div className="mx-28">
        <AmazingSwiper products={amazingProducts} color={amazingSwiperColor} />
      </div>
    </>
  );
};

export default Home;
