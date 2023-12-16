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
    addMultipleToCart: (state, action) => {
      cartAdapter.addMany(state, action.payload);
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      cartAdapter.removeOne(state, id);
    },
  },
});

export const { addToCart, removeFromCart, addMultipleToCart } =
  cartSlice.actions;
export default cartSlice.reducer;
