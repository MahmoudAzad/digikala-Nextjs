import Menu from "@/components/menu/menu";
import Navbar from "@/components/navbar";
import HeaderSwiper from "@/components/swiper/HeaderSwiper";
import getHomePageData from "@/services/services";

const getData = async () => {
  const data = await getHomePageData();
  return data.data;
};

const Home = async () => {
  const homeData = await getData();
  console.log("homeData => ", homeData);
  return (
    <div>
      <Navbar />
      <Menu />
      {homeData.map((arr) => {
        return <HeaderSwiper carousels={arr.carousel} />;
      })}
      <div className="text-center">
        <h1 className="milad">hover me</h1>
        <h2 className="farhad">show me</h2>
      </div>
    </div>
  );
};

export default Home;
