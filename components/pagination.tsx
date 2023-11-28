import { IProduct } from "@/types/product";
import SearchProductsCards from "./cards/searchProductsCards";

interface Props {
  filteredProducts: IProduct[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  contentPerPage: number;
}

const Pagination: React.FC<Props> = ({
  filteredProducts,
  currentPage,
  setCurrentPage,
  contentPerPage,
}) => {
  const indexOfLastProducts = currentPage * contentPerPage;
  const indexOfFirstProducts = indexOfLastProducts - contentPerPage;
  const slicedProducts = filteredProducts.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );

  const paginationNumber = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredProducts.length / contentPerPage);
    i++
  ) {
    paginationNumber.push(i);
  }
  const paginationClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    setCurrentPage(Number(event.currentTarget.id));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const renderPaginationNumber = paginationNumber.map((number) => {
    const idString = number.toString();
    return (
      <li
        key={idString}
        id={idString}
        onClick={paginationClickHandler}
        className="border rounded-full bg-red-600 text-white w-8 h-8 cursor-pointer flex justify-center items-center"
      >
        {number}
      </li>
    );
  });
  return (
    <div className="flex flex-col">
      <SearchProductsCards products={slicedProducts} />
      {paginationNumber.length > 1 && (
        <ul className="flex justify-center gap-x-3 my-12">
          {renderPaginationNumber}
        </ul>
      )}
    </div>
  );
};

export default Pagination;
