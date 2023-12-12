import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const cartAdapter = createEntityAdapter();
const initialState = cartAdapter.getInitialState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      cartAdapter.addOne(state, action.payload);
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      cartAdapter.removeOne(state, id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
