import SubCategoryCards from "@/components/card/subCategoryCards";
import Menu from "@/components/menu/menu";
import Navbar from "@/components/navbar";
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
  const product = await getProduct().data;
  const mainCategory = (await getMainCategory()).data;
  const category = await getCategory().data;
  const homePageDetail = (await getHomePageDetail()).data;
  const digikalaSubCategories = (await getDigikalaSubCategories()).data;
  const brands = await getBrand().data;
  const blogData = await getBlogData().data;

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
  return (
    <>
      <Navbar />
      <Menu />
      {homePageDetail.map((arr) => {
        return <HeaderSwiper carousels={arr.carousel} />;
      })}
      <SubCategoryCards categories={digikalaSubCategories?.slice(0, 7)} />
    </>
  );
};

export default Home;
