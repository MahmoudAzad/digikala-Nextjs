import { combineReducers } from "@reduxjs/toolkit";
import wishListSlice from "./features/wishListSlice";
import amazingInfoSlice from "./features/amazingInfoSlice";
import cartSlice from "./features/cartSlice";
import nextBuySlice from "./features/nextBuySlice";

const reducers = combineReducers({
  wishList: wishListSlice,
  amazingInfo: amazingInfoSlice,
  cart: cartSlice,
  nextBuy: nextBuySlice,
});

export default reducers;
