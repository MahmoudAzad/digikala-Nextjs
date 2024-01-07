import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const cartAdapter = createEntityAdapter<{ quantity?: number }>();
const initialState = cartAdapter.getInitialState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const repeatedItem = state.entities[id];

      if (typeof repeatedItem?.quantity !== "undefined") {
        state.entities[id] = {
          ...repeatedItem,
          quantity: repeatedItem.quantity + 1,
        };
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        cartAdapter.addOne(state, newItem);
      }
    },
    addMultipleToCart: (state, action) => {
      cartAdapter.addMany(state, action.payload);
    },
    removeOneQtyFromCart: (state, action) => {
      const { id } = action.payload;
      const product = state.entities[id];

      if (product?.quantity === 1) {
        cartAdapter.removeOne(state, id);
      } else if (product?.quantity) {
        state.entities[id] = {
          ...product,
          quantity: product.quantity - 1,
        };
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      cartAdapter.removeOne(state, id);
    },
  },
});

export const {
  addToCart,
  removeOneQtyFromCart,
  addMultipleToCart,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
