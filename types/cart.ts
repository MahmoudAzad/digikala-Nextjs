import { IProduct } from "./product";

interface ICart {
  entities: IProduct;
  ids: number[];
  totalPrice: number;
  totalQuantity: number;
}

export interface ICartRootState {
  cart: ICart;
}
