import { IProduct } from "./product";

interface IWishList {
  entities: IProduct;
  ids: number[];
}

export interface IWishListRootState {
  wishList: IWishList;
}
