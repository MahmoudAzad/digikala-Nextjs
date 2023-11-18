"use client";
import SingleProductDesctop from "./singleProductDesctop";
import SingleProductMobile from "./singleProductMobile";
import SingleProductMenu from "@/components/menu/singleProductMenu";
import { fetchSingleProduct } from "@/services/services";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SingleProduct = () => {
  const { id } = useParams();
  const [singleProductData, setSingleProductData] = useState();
  useEffect(() => {
    const fetchFunction = async () => {
      const milad = await fetchSingleProduct(id);
      setSingleProductData(milad);
    };
    fetchFunction();
  }, [id]);

  if (!singleProductData) {
    return <h1>wait</h1>;
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
