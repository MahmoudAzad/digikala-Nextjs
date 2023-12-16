import { IProduct } from "./product";

interface INextBuy {
  entities: IProduct;
  ids: number[];
}

export interface INextBuyState {
  nextBuy: INextBuy;
}
