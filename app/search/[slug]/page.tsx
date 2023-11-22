import { NextPage } from "next";
import SearchProductsCards from "@/components/cards/searchProductsCards";
import SearchFilterBox from "@/components/searchFilterBox";
import { fetching } from "@/services/services";
import { IProduct } from "@/types/product";

interface IParams {
  slug: string;
}

const getData = async (slug: string) => {
  const getAllProducts = await fetching("/product");
  const getSearchProducts = getAllProducts
    .map((a: IProduct) => a)
    .filter((product: IProduct) =>
      product.subCategorySlug == slug
        ? product.subCategorySlug == slug
        : product.categorySlug == slug
        ? product.categorySlug == slug
        : null
    );
  return getSearchProducts;
};

const SearchPage: NextPage<{ params: IParams }> = async ({ params }) => {
  const searchProducts = await getData(params.slug);
  return (
    <>
      <div className="flex">
        <SearchFilterBox />
        <SearchProductsCards searchProducts={searchProducts} />
      </div>
    </>
  );
};

export default SearchPage;
