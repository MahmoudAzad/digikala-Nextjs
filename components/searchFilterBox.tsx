"use client";

import { fetching } from "@/services/services";
import { IBrand } from "@/types/brand";
import { IFilterItem } from "@/types/filter";
import { IProduct } from "@/types/product";
import { useEffect, useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Pagination from "./pagination";

const SearchFilterBox: React.FC<{ slug: string }> = ({ slug }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [allBrands, setAllBrands] = useState<IBrand[]>([]);
  const [filterItems, setFilterItems] = useState<IFilterItem[] | null>(null);
  const [openBrand, setOpenBrand] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<boolean | number>(false);

  const [searchByDiscount, setSearchByDiscount] = useState(false);
  const [searchByAvailable, setSearchByAvailable] = useState(false);
  const [searchByBrand, setSearchByBrand] = useState<string[]>([]);
  const [searchByProductsValue, setSearchByProductsValue] = useState<string[]>(
    []
  );

  const [currentPage, setCurrentPage] = useState(1);

  // fetch products by slug
  useEffect(() => {
    const getData = async () => {
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
      setProducts(getSearchProducts);
    };
    getData();
  }, [slug]);

  // set initial filteredProducts
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  // fetch brands and filter items
  const brands = allBrands.slice(0, 4);
  useEffect(() => {
    const getData = async () => {
      const getAllBrands = await fetching("/brand");
      const getFilterItems = await fetching("/filterProduct");
      setAllBrands(getAllBrands);
      setFilterItems(getFilterItems);
    };
    getData();
  }, []);

  // set FilteredProducts by user search
  useEffect(() => {
    let filteredArray = products && [...products];

    if (searchByBrand.length != 0) {
      filteredArray = filteredArray
        .filter((data) => searchByBrand.includes(data.brand))
        .map((filteredName) => {
          return filteredName;
        });
      setFilteredProducts(filteredArray);
    }

    if (searchByProductsValue.length != 0) {
      filteredArray = filteredArray
        .filter((data) =>
          data.productsValues.some((elemet) =>
            searchByProductsValue.includes(elemet.value)
          )
        )
        .map((filteredName) => {
          return filteredName;
        });
      setFilteredProducts(filteredArray);
    }
    if (searchByDiscount) {
      filteredArray = filteredArray.filter((data) => Number(data.offer) > 0);
      setFilteredProducts(filteredArray);
    } else {
      filteredArray = filteredArray.filter((data) => Number(data.offer) >= 0);
      setFilteredProducts(filteredArray);
    }
    if (searchByAvailable) {
      filteredArray = filteredArray.filter((data) => Number(data.stock) > 0);
      setFilteredProducts(filteredArray);
    } else {
      filteredArray = filteredArray.filter((data) => Number(data.stock) >= 0);
      setFilteredProducts(filteredArray);
    }
    setCurrentPage(1);
    setFilteredProducts(filteredArray);
  }, [
    searchByDiscount,
    searchByAvailable,
    searchByBrand,
    searchByProductsValue,
    products,
  ]);

  const filtersData =
    filterItems &&
    filterItems
      ?.map((filter) => filter)
      .filter(
        (filters) =>
          filters.subCategorySlug == slug || filters.CategorySlug == slug
      );

  const openBrandHandler = () => {
    setOpenBrand(!openBrand);
  };

  const openAccordionHandler = (itemId: number) => {
    if (openAccordion == itemId) {
      return setOpenAccordion(false);
    }

    setOpenAccordion(itemId);
  };

  const searchByDiscountHandler = () => {
    setSearchByDiscount(!searchByDiscount);
  };
  const searchByAvailableHandler = () => {
    setSearchByAvailable(!searchByAvailable);
  };
  const searchByBrandHandler = (brandName: string) => {
    const currentIndex = searchByBrand.indexOf(brandName);
    const newChecked = [...searchByBrand];

    if (currentIndex === -1) {
      newChecked.push(brandName);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setSearchByBrand(newChecked);
  };
  const searchByPropertyValue = (propertyValue: string) => {
    const currentIndex = searchByProductsValue.indexOf(propertyValue);
    const newChecked = [...searchByProductsValue];

    if (currentIndex === -1) {
      newChecked.push(propertyValue);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setSearchByProductsValue(newChecked);
  };
  return (
    <div className="flex items-start lg:pt-20">
      <div className="mt-24 mr-5 hidden lg:block w-1/3 border p-6 ">
        <h1 className="font-bold mb-5">فیلترها</h1>
        <div
          onClick={() => openBrandHandler()}
          className={`flex justify-between cursor-pointer pb-3 ${
            !openBrand && "border-b"
          }`}
        >
          <p>برند</p>
          {openBrand ? <HiChevronUp /> : <HiChevronDown />}
        </div>
        {openBrand && (
          <>
            {brands.map((brand) => (
              <label htmlFor={brand.name} key={brand.id}>
                <div
                  key={brand.id}
                  className="flex items-center gap-x-4 border-b cursor-pointer py-3 "
                >
                  <input
                    type="checkbox"
                    name={brand.name}
                    id={brand.name}
                    className="w-[15px] h-[15px]"
                    onChange={() => searchByBrandHandler(brand.name)}
                  />
                  {brand.name}
                </div>
              </label>
            ))}
          </>
        )}

        <div className="flex justify-between items-center border-b py-3">
          <label htmlFor="discounted-toggle">فقط کالا های تخفیف دار</label>
          <label htmlFor="discounted-toggle" className="relative inline-flex">
            <input
              className="sr-only peer"
              type="checkbox"
              id="discounted-toggle"
              onChange={() => searchByDiscountHandler()}
            />
            <div
              className="w-11 h-6 bg-slate-300 rounded-full after:absolute after:w-5 after:h-5 after:top-[2px] 
            after:left-[1px] after:bg-white after:rounded-full after:transition-all peer-checked:bg-blue-700 
            peer-checked:after:translate-x-full peer-checked:border-2 cursor-pointer"
            ></div>
          </label>
        </div>

        <div className="flex justify-between items-center border-b py-3">
          <label htmlFor="availableProducts-toggle">فقط کالا های موجود</label>
          <label
            htmlFor="availableProducts-toggle"
            className="relative inline-flex"
          >
            <input
              onChange={() => searchByAvailableHandler()}
              className="sr-only peer"
              type="checkbox"
              id="availableProducts-toggle"
            />
            <div
              className="w-11 h-6 bg-slate-300 rounded-full after:absolute after:w-5 after:h-5 after:top-[2px] 
            after:left-[1px] after:bg-white after:rounded-full after:transition-all peer-checked:bg-blue-700 
            peer-checked:after:translate-x-full peer-checked:border-2 cursor-pointer"
            ></div>
          </label>
        </div>
        {filtersData?.map((item, index) => {
          return (
            <div key={index}>
              <div
                onClick={() => openAccordionHandler(item.id)}
                className={`flex justify-between cursor-pointer py-3 ${
                  openAccordion !== item.id && "border-b"
                }`}
              >
                <p>{item.filterProduct}</p>
                {openAccordion === item.id ? (
                  <HiChevronUp />
                ) : (
                  <HiChevronDown />
                )}
              </div>
              <div
                className={` ${
                  openAccordion == item.id ? "visible" : "invisible h-0"
                } `}
              >
                {item.productValues.map((propertyValue) => (
                  <div
                    key={propertyValue.id}
                    className="flex items-center gap-x-4 border-b cursor-pointer py-3 "
                  >
                    <input
                      type="checkbox"
                      id={propertyValue.id.toString()}
                      className="w-[15px] h-[15px] "
                      onChange={() =>
                        searchByPropertyValue(propertyValue.value)
                      }
                    />
                    <label htmlFor={propertyValue.id.toString()}>
                      {propertyValue.value}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <Pagination
        filteredProducts={filteredProducts}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        contentPerPage={8}
      />
    </div>
  );
};

export default SearchFilterBox;
