import { combineReducers } from "@reduxjs/toolkit";
import wishListSlice from "./features/wishListSlice";
import amazingInfoSlice from "./features/amazingInfoSlice";
import cartSlice from "./features/cartSlice";

const reducers = combineReducers({
  wishList: wishListSlice,
  amazingInfo: amazingInfoSlice,
  cart: cartSlice,
});

export default reducers;
