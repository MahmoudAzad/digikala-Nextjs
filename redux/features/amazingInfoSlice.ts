import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const amazingInfoAdapter = createEntityAdapter();
const initialState = amazingInfoAdapter.getInitialState();

const amazingInfoSlice = createSlice({
  name: "amazingInfo",
  initialState,
  reducers: {
    addToAmazingInfo: (state, action) => {
      amazingInfoAdapter.addOne(state, action.payload);
    },
    removeFromAmazingInfo: (state, action) => {
      const { id } = action.payload;
      amazingInfoAdapter.removeOne(state, id);
    },
  },
});

export const { addToAmazingInfo, removeFromAmazingInfo } =
  amazingInfoSlice.actions;
export default amazingInfoSlice.reducer;
