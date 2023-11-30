import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const wishListAdapter = createEntityAdapter();
const initialState = wishListAdapter.getInitialState();

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      wishListAdapter.addOne(state, action.payload);
    },
    removeFromWishList: (state, action) => {
      wishListAdapter.removeOne(state, action.payload);
    },
  },
});

export const { addToWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
