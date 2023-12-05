import { combineReducers } from "@reduxjs/toolkit";
import wishListSlice from "./features/wishListSlice";

const reducers = combineReducers({
  wishList: wishListSlice,
});

export default reducers;
