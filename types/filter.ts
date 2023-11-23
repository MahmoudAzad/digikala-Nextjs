export interface IFilterValue {
  id: number;
  value: string;
  specifications: string;
  subCategory: string;
  isChecked: boolean;
}

export interface IFilterItem {
  id: number;
  mainCategory: string;
  CategorySlug: string;
  subCategorySlug: string;
  category: string;
  subCategory: string;
  filterProduct: string;
  createdAt: Date;
  updatedAt: Date;
  productValues: IFilterValue[];
  showFilter: boolean;
}
