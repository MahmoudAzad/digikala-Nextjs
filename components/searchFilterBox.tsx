"use client";

import { fetching } from "@/services/services";
import { IBrand } from "@/types/brand";
import { IFilterItem } from "@/types/filter";
import { useEffect, useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const SearchFilterBox: React.FC<{ slug: string }> = ({ slug }) => {
  const [allBrands, setAllBrands] = useState<IBrand[]>([]);
  const [filterItems, setFilterItems] = useState<IFilterItem[] | null>(null);
  const [openBrand, setOpenBrand] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<boolean | number>(false);

  const brands = allBrands.slice(0, 4);
  useEffect(() => {
    const getData = async () => {
      const getAllBrands = await fetching("/brand");
      const getFilterItems = await fetching("/filterProduct");
      console.log("filterItems => ", getFilterItems);
      setAllBrands(getAllBrands);
      setFilterItems(getFilterItems);
    };
    getData();
  }, []);

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

  return (
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
            <div
              key={brand.id}
              className="flex items-center gap-x-4 border-b cursor-pointer py-3 "
            >
              <input
                type="checkbox"
                name={brand.name}
                id={brand.name}
                className="w-[15px] h-[15px] "
              />
              <label htmlFor={brand.name}>{brand.name}</label>
            </div>
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
      {filtersData?.map((item) => {
        return (
          <>
            <div
              onClick={() => openAccordionHandler(item.id)}
              className={`flex justify-between cursor-pointer py-3 ${
                openAccordion !== item.id && "border-b"
              }`}
            >
              <p>{item.filterProduct}</p>
              {openAccordion === item.id ? <HiChevronUp /> : <HiChevronDown />}
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
                    name={propertyValue.specifications}
                    id={propertyValue.specifications}
                    className="w-[15px] h-[15px] "
                  />
                  <label htmlFor={propertyValue.specifications}>
                    {propertyValue.value}
                  </label>
                </div>
              ))}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default SearchFilterBox;
