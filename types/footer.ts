import { IGallery } from "./category";

export interface IFooterCategories {
  id: string;
  name: string;
  subCategory: {
    id: string;
    name: string;
  }[];
}

export interface IFooter {
  categories: IFooterCategories[];
  icons: IGallery[];
  brands: IGallery[];
  banner: IGallery[];
  symbols: IGallery[];
}
