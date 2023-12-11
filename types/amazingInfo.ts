import { IProduct } from "./product";

interface IAmazingInfo {
  entities: IProduct;
  ids: number[];
}

export interface IAmazingInfoRootState {
  amazingInfo: IAmazingInfo;
}
