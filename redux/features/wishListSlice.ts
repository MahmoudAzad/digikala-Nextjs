import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

const wishListAdapter = createEntityAdapter();
const initialState = wishListAdapter.getInitialState();

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<string>) => {
      wishListAdapter.addOne(state, action.payload);
    },
  },
});

export const { addToWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
