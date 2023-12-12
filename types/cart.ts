import { IProduct } from "./product";

interface ICart {
  entities: IProduct;
  ids: number[];
}

export interface ICartRootState {
  cart: ICart;
}
