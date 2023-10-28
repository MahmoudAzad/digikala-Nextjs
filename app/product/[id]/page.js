"use client";
import SingleProductDesctop from "./singleProductDesctop";
import SingleProductMobile from "./singleProductMobile";
import SingleProductMenu from "@/components/menu/singleProductMenu";
import { fetchSingleProduct } from "@/services/services";

const SingleProduct = async ({ params = {} }) => {
  const singleProductData = await fetchSingleProduct(params.id);
  return (
    <>
      <SingleProductDesctop
        singleProData={singleProductData}
        images={singleProductData.productImage}
      />

      <SingleProductMobile
        singleProData={singleProductData}
        images={singleProductData.productImage}
      />

      <SingleProductMenu
        singleProData={singleProductData}
        images={singleProductData.productImage}
      />
    </>
  );
};

export default SingleProduct;
