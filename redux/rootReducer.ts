import { combineReducers } from "@reduxjs/toolkit";
import wishListSlice from "./features/wishListSlice";
import amazingInfoSlice from "./features/amazingInfoSlice";

const reducers = combineReducers({
  wishList: wishListSlice,
  amazingInfo: amazingInfoSlice,
});

export default reducers;
