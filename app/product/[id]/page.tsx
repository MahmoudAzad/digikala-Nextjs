import { NextPage } from "next";
import SingleProductDesctop from "./singleProductDesctop";
import SingleProductMobile from "./singleProductMobile";
import { fetchSingleProduct } from "@/services/services";
import SingleProStickyMenu from "@/components/menu/singleProMenu/singleProStickyMenu";

interface ParamsId {
  id: string;
}

const getData = async (id: string) => {
  const singleProductData = await fetchSingleProduct(id);
  return singleProductData;
};

const SingleProduct: NextPage<{ params: ParamsId }> = async ({ params }) => {
  const singleProductData = await getData(params.id);

  if (!singleProductData) {
    return <h1>loading ...</h1>;
  }
  return (
    <>
      <SingleProductDesctop singleProData={singleProductData} />

      <SingleProductMobile singleProData={singleProductData} />

      <SingleProStickyMenu singleProData={singleProductData} />
    </>
  );
};

export default SingleProduct;
