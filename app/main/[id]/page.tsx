import { NextPage } from "next";
import QuadrupleCards from "@/components/cards/quadrupleCards";
import MainPageSwiper from "@/components/swipers/mainPageSwiper";
import { fetchMainPage } from "@/services/services";

interface IParams {
  id: string;
}

const getData = async (id: string) => {
  const data = await fetchMainPage(id);
  return data;
};

const MainPage: NextPage<{ params: IParams }> = async ({ params }) => {
  const mainPageData = await getData(params.id);
  return (
    <div className="pt-32 mx-32 space-y-5">
      <MainPageSwiper carousels={mainPageData.slider} />
      <QuadrupleCards cards={mainPageData.banner} />
    </div>
  );
};

export default MainPage;
