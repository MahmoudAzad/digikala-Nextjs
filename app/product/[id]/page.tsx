import { NextPage } from "next";
import SingleProductDesctop from "./singleProductDesctop";
import SingleProductMobile from "./singleProductMobile";
import SingleProductMenu from "@/components/menu/singleProductMenu";
import { fetchSingleProduct } from "@/services/services";

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

      <SingleProductMenu singleProData={singleProductData} />
    </>
  );
};

export default SingleProduct;
