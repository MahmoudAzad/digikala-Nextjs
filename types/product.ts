import { IGallery } from "./category";

export interface IProductsValues {
  id: number;
  filter: string;
  value: string;
  isSpecifications: boolean;
}

export interface ISellerView {
  property: string;
  rate: string;
}

export interface IProduct {
  id: number;
  name: string;
  latinName: string;
  slug: string;
  mainCategory: string;
  category: string;
  subCategory: string;
  brand: string;
  price: string;
  stock: string;
  sellCount: string;
  description: string;
  thumbnail: string;
  offer: string;
  createdAt: Date;
  updatedAt: Date;
  productsValues: IProductsValues[];
  timeStartOffer: Date;
  timeEndOffer: number;
  productImage: IGallery[];
  productVideo: string[];
  sellerView: ISellerView[];
  isSuggest: boolean;
  mainCategorySlug: string;
  categorySlug: string;
  subCategorySlug: string;
  quantity: number;
}
