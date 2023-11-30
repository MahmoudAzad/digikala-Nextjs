"use client";

import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./features/wishListSlice";
import wishListSlice from "./features/wishListSlice";
export const store = configureStore({
  reducer: {
    wishList: wishListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
