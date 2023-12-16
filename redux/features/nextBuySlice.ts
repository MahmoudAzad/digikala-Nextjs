import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const nextBuyAdapter = createEntityAdapter();
const initialState = nextBuyAdapter.getInitialState();

const nextBuySlice = createSlice({
  name: "nextBuy",
  initialState,
  reducers: {
    addToNextBuy: (state, action) => {
      nextBuyAdapter.addOne(state, action.payload);
    },
    removeFromNextBuy: (state, action) => {
      const { id } = action.payload;
      nextBuyAdapter.removeOne(state, id);
    },
    removeAllFromNextBuy: (state, action) => {
      nextBuyAdapter.removeAll(state);
    },
  },
});

export const { addToNextBuy, removeFromNextBuy, removeAllFromNextBuy } =
  nextBuySlice.actions;
export default nextBuySlice.reducer;
