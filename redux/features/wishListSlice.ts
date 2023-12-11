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
      console.log("Action.payload is => ", action.payload);
      const { id } = action.payload;
      wishListAdapter.removeOne(state, id);
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
